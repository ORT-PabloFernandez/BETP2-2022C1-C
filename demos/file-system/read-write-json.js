const fs = require('fs');
const uriIventors = './inventors.json';

let inventors = JSON.parse(fs.readFileSync(uriIventors, 'utf-8'));

const newInventor = {
    first: "Jose",
    last: "Perez",
    year: 1993
}

inventors.push(newInventor);

fs.writeFileSync(uriIventors, JSON.stringify(inventors, null, " "));

console.log(inventors);