function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

let man = new person("John", "Doe");
console.log(man.firstname + ' ' + man.lastname );

person.prototype.greet = function(){
    console.log("Hello this is " + this.firstname + " " + this.lastname + '.');
}

man.greet();

console.log(man.__proto__);

let woman = new person("Jane", "Carter");
woman.greet();

console.log(woman.__proto__);

console.log(man.__proto__ === woman.__proto__);