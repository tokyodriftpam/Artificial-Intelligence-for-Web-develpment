const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

// Connect MongoDB
client.connect().then(() => {
    db = client.db("eventdb");
    console.log("MongoDB Connected...");
});

// Serve Pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

// Register
app.post("/register", async (req, res) => {
    const { regno, name } = req.body;
    let events = req.body.events;

    if (!events) {
        return res.send("Select at least one event!");
    }

    if (!Array.isArray(events)) {
        events = [events];
    }

    if (events.length > 3) {
        return res.send("Max 3 events allowed!");
    }

    const collection = db.collection("registrations");

    // Check duplicate
    const existing = await collection.findOne({ regno: regno });
    if (existing) {
        return res.send("Register number already exists!");
    }

    // Insert
    await collection.insertOne({
        regno: regno,
        name: name,
        events: events
    });

    res.send("<h2>Registration Successful!</h2><a href='/'>Go Back</a>");
});

// Search
app.post("/search", async (req, res) => {
    const { regno } = req.body;

    const collection = db.collection("registrations");

    const user = await collection.findOne({ regno: regno });

    if (!user) {
        return res.send("<h2>No record found!</h2><a href='/admin'>Go Back</a>");
    }

    res.send(`
        <h2>Registration Details</h2>
        <p><b>Register Number:</b> ${user.regno}</p>
        <p><b>Name:</b> ${user.name}</p>
        <p><b>Events:</b> ${user.events.join(", ")}</p>
        <a href="/admin">Search Again</a>
    `);
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});