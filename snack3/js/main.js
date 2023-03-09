'use strict'

const bikes = [
    {
        name: 'nome1',
        weightkg: 4
    },
    {
        name: 'nome2',
        weightkg: 3
    },
    {
        name: 'nome3',
        weightkg: 4.5
    },
    {
        name: 'nome4',
        weightkg: 2
    },
    {
        name: 'nome5',
        weightkg: 7
    },
]

const bike = bikes[3];
console.log(bike);
console.log(`${JSON.stringify(bike)}`);


/* bikes.forEach(function() {
    const {name} = bikes
    return {name}
})
console.log() */