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

if (bikes.length === 0) {
    console.log(`Non ho bici`);
} else {

    let theBike = bikes[0];
    //confronto anche la prima bici con se stess
    bikes.forEach(currentBike => {
        if (currentBike.weightkg <= theBike.weightkg) {
            theBike = currentBike;
        }
    })

    //filtro tutte le bici più leggere partendo come riferimento dalla bici più leggera trovata
    const resultBikes = bikes.filter(({ weightkg }) => {
        if (weightkg === theBike.weightkg) {
            return true;
        }
    });


//stampo il risultato della mia ricerca
resultBikes.forEach(({ name, weightkg }) => {
    console.log(`La bici più leggera è la bici ${name} che pesa ${weightkg} kg`);
})
}

/* bikes.forEach(function() {
    const {name} = bikes
    return {name}
})
console.log() */