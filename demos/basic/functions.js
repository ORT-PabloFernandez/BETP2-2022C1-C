// Tipos de declaración de funciones

// la forma mas simple
function add(a,b){
    return a + b;
}

console.log(add(5,3));

// asignando a una variable
const square = function(x){
    return x*x;
}

console.log(square(4));

// Arrow function
const getSum = (a,b) => {
    return a + b;
}

console.log(getSum(5,8));

const getSquare = x => x * x;

console.log(getSquare(3));

// Las arrow functions se utiliza con callbacks, cuando se pasa una funcion como parametro.