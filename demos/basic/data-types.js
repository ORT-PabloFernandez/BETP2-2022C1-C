// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object

// NUMBER
let var1 = 1;
let var2 = 0;
let var3 = -0;

//console.log(var3);
console.log("1/0", var1 / var3);
console.log("Raiz cuadrada (-1): ", Math.sqrt(-1));

// STRING
let saludo1 = "Hola 'mundo'";
let caracter = "c";
let pizza = "🍕";

// concatenación
console.log(saludo1 + " quiero una " + pizza);
// con backtick
console.log(`${saludo1} quiero una ${pizza}`);

// undefined: representa la ausencia de inicialización o asignación
let nodefinido;
console.log(nodefinido);
nodefinido = 34;
console.log(nodefinido);

// null 
let nulo = 9;
nulo = null;
console.log(nulo);

console.log(typeof nodefinido);

// Ejercicio 1
// que pasa si a un número le añado/sumo (+) una cadena
// 2 + "2"
// a un booleano le añado un número
// 2 + true

let result = 2 + parseInt("2");
console.log(typeof result);

console.log(2 + false);

let decimal = 4.5;
let cadenaDecimal = "4.6";
let decimalVerdadero = parseFloat(cadenaDecimal);
console.log(decimalVerdadero);

// declaración de objetos en JS

let actor = {
    name : "Jose",
    age : 45
};

console.log(actor);
console.log(actor.name);

// acceso a las propiedades usando la notacion de corchetes []
console.log(actor["name"]);
