// let vs var

var myVariable = 9;

// let es la forma de declarar variables desde el ES6+ y es la mas recomendada.

let x = 1;

if( x == 1){
    let x = 10;
    console.log(x);    
}
console.log(x);

// const para declarar constantes
const key = "abc123";
//key = "asdfasdf";

const person = {
    name: "Pablo",
    age: "45"
}

person.name = "Juan";

const person1 = Object.freeze(person);
person1.name = "Pedro";
console.log(person1.name);

