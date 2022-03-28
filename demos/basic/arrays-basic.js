let nombres = ["Juan","Pedro","Maria","Eduardo"];

nombres[nombres.length - 1]; // Ultimo elemento

nombres.push('Elena'); // agrega elemento al final
let ultimoNombre = nombres.pop(); // extraer del final
let primerNombre = nombres.shift(); // extraer del principio 
nombres.unshift('Anna'); // agrega al principio

console.log(nombres);

// Buscar un elemento en una posicion
// Buscar la posición de un elemento  => array.indexOf('Elena')

// Como borro elementos de una posición determina => splice

// Sacar copias del array => slice