// Operadores de igualdad
// (==) y (===)

console.log(0 == false);
console.log(0 == null);
console.log(0 == undefined);
console.log(1 == "1");

console.log(0 === false);
console.log(0 === null);
console.log(0 === undefined);
console.log(1 === "1");

let age = 18;

if(age < 13){
    console.log("Es un niño");
} else if(age < 20){
    console.log("Es un adolecente");
} else if(age >= 20){
    console.log("Es un adulto");
} else {
    console.log("parametro incorrecto")
}

if(0){
    console.log("0 Es verdadero");
}else {
    console.log("0 Es falso");
}

// que considera como falto Javascript
// false, undefined, null, 0, NaN, '' (cadena vacia)

//switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let d = 2;

d % 2 === 0 ? console.log("Es par") : console.log("Es impar");