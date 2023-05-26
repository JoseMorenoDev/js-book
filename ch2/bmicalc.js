/* 
Pseudocode

Input values should be inches and pounds.
convert inches to cm and outpunt in console
convert pounds to kilos and output in console
calculate bmi
*/ 

let height, weight;
let height_cm, weight_kilos;
let bmi;
const inch_cm= 2.54;
const kilos_pounds = 2.2046;

height = prompt("Enter your height in inches");

height = Number(height);

weight = prompt("Enter you weight in pounds");

weight = Number(weight);

height_cm = height*inch_cm;
72
weight_kilos = weight / kilos_pounds;

console.log(`Your height in cm is ${height_cm}`);
console.log(`Your weight in kilos is ${weight_kilos}`);


bmi = weight_kilos / ((height_cm/100) ** 2);

console.log(`Your BMI is ${bmi.toFixed(2)}`);

