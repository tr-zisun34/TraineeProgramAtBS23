const cars = [
    "BMW", "Range Rover", "Audi", "Mercedes"
];
document.getElementById("arr").innerHTML = cars.sort().join("<br>");

last_element = cars[cars.length - 1];
document.getElementById("l_arr").innerHTML += "<br>Last Element of cars array: " + last_element;


const flowers = ["Rose", "Lily", "Jasmine", "Tulip"];

let flen = flowers.length;
 let ftext = "<ul>";
 for(let i=0; i<flen; i++){
    ftext += "<li>" + flowers[i] + "</li>";
}
ftext += "</ul>";
document.getElementById("f_arr").innerHTML = ftext;

// flowers.forEach(element => {
//     console.log(element);
// });

let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("nested_arr").innerHTML = x;

let p=flowers.pop(); //remove last element
console.log(p);
let q=flowers.pop(); //remove last element
console.log(q);
console.log(flowers);