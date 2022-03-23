const inventors = [
    {first: 'Albert', last: 'Einsten', year: 1879},
    {first: 'Isaac', last: 'Newton', year: 1643},
    {first: 'Galileo', last: 'Galilei', year: 1564},
];

for (let i = 0; i < inventors.length; i++) {
    console.log(inventors[i]);
    console.log("----------");
}

for (const inventor of inventors) {
    if(inventor.year < 1650){
        console.log(inventor.first);
    }
}

inventors.forEach(inventor => console.log(inventor.last));