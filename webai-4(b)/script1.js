function calculateBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if (weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid weight and height";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";

    if (bmi <= 18) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi <= 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
        "BMI: " + bmi + "<br>Status: " + category;
}