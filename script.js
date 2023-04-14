window.onload = () => {
    let button = document.querySelector("#button");
    button.addEventListener("click", calculateBMI);
};
    
function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value); 
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    if (height === "" || isNaN(height)){
        result.innerHTML = "Provide a valid Height!";
    } else if (weight === "" || isNaN(weight)) {
        result.innerHTML = "Provide a valid Weight!";
    }else {
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
            // Dividing as per the bmi conditions
            if (bmi < 18.5) {
                result.innerHTML =`Your BMI is : <b><span>${bmi}</span></b> Which means you are <b>Underweight<b>`;
            }else if (bmi >= 18.5 && bmi < 24.9){
                result.innerHTML = `Your BMI is : <b><span>${bmi}</span></b> Which means you are <b>Normal</>`;
            }else if (bmi >= 25 && bmi < 29.9){
                result.innerHTML = `Your BMI is : <b><span>${bmi}</span></b> Which means you are <b>Overweight</b>`;
            }else{result.innerHTML = `Your BMI is : <b><span>${bmi}</span></b> Which means you are <b>Obesity</b>`;}
        }
    // If both input is valid, calculate the bmi

}