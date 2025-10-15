const car = {
    name: "Fiat",
    model: "500",
    weight: "850kg",
    color: "White",

    start: function() {
        console.log("Car Started");
    },

    drive: function() {
        console.log("Car is Driving");
    }
};

car.start();
car.drive();
console.log(car.color);

const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        eyeColor: "blue",

        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };

console.log(person.fullName());
document.getElementById("demo").innerHTML = person.fullName();

let text = "hsdkxa,mcbsuds,buasx,aldwehdasnwiamdkjai";

document.getElementById("string").innerHTML = text.length;

let s= "abSADASLDKADbrainStaion23adewdaa;laskdak";
let company=s.slice(12,25);
document.getElementById("slice").innerHTML = company;
document.getElementById("demo").innerHTML = s.substr(12,13);

let str1= "i Love ";
let str2= "JavaScript";
let str3= str1.concat(" "+str2);
document.getElementById("a").innerHTML = "<h1>"+str3+"</h1>";