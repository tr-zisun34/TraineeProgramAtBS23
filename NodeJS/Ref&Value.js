//pass by value
function change(b){
    b=10;
}

let a =5;
change(a);
console.log(a);

//pass by reference
function changeObj(obj){
    obj.prop1 = function(){};
    obj.prop2 = {};
}

let c = {};
c.prop1 = function(){};
changeObj(c);
console.log(c);