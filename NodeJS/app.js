let a = 1;
let b = 2;
let c = a+b;
console.log(c);

//function statement
function greet(){
    console.log("Hello World");
}
greet();

//function under function
function greetUser(name){
    name();
}
greetUser(greet);