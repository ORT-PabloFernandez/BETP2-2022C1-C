

const BETP2A = ["Anna", "Juan", "Pedro"];
const YATP2B = ["Pablo", "Jose", "Laura"];

const TP2 = [...BETP2A, ...YATP2B ];

console.log(TP2);

const runner = ["Pablo", 345345, 5.6, 7.8, 9.8, 7.5];
const [name, id, ... runs] = runner;

console.log(name);
console.log(id);
console.log(runs);
