// Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers.

let myCar = {
    color : "red",
    fuel: "gasoline",
    weight: 23,
    work: true

};

console.log(myCar.fuel);

// 2. Create a variable that can hold the string value color. This variable 
// containing a string value color can now be used to reference the property 
// name within myCar. Then, use the variable within the square bracket notation 
// to assign a new value to the color property in myCar.
let color = "color";

myCar[color]="blue";

console.log(myCar.color);

// 3. Use that same variable and assign a new property string value to it, such
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.

