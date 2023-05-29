// //array
// let arr = [0,1,2];
// console.log(typeof arr);

let dog = {
    dogName: "Javascript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age:3,
    burglarBiter:true
};

let dogColor1 = dog["color"];

let dogColor2 = dog.color;

console.log(dogColor1);
console.log(dogColor2);
dog ["color"] = "blue";
dog.weight =2.3;
console.log(dog);





