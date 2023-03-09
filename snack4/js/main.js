'use strict'

const teams = [
    {
        name: 'inter',
        score: 0,
        foulPlay: 0
    },
    {
        name: 'milan',
        score: 0,
        foulPlay: 0
    },
    {
        name: 'juve',
        score: 0,
        foulPlay: 0
    },
    {
        name: 'napoli',
        score: 0,
        foulPlay: 0
    },
]


//for(let i = 0; i < teams.length; i++){
//    teams[i].score = Math.floor(Math.random() * 50) + 1;
//    teams[i].foulPlay = Math.floor(Math.random() * 50) + 1;
//}

teams.forEach(element => {
    element.score = Math.floor(Math.random() * 50) + 1;
    element.foulPlay = Math.floor(Math.random() * 50) + 1;
});
console.log(teams);

const teams2 = teams.map((x) => {
    return {nome: x.name, foulPlay: x.foulPlay }
})
console.log(teams2)

