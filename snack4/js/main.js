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

const teams2 = teams.map(({name, foulPlay}) => {
    return {name, foulPlay}
})
console.log(teams2)

const main = document.querySelector('main')
teams.forEach((x) => {
    const ul = document.createElement('ul');
    main.append(ul);
    const liName = document.createElement('div');
    liName.innerHTML = x.name;
    const liScore = document.createElement('li');
    liScore.innerHTML = x.score;
    const lifoulPlay = document.createElement('li');
    lifoulPlay.innerHTML = x.foulPlay
    main.append(liName)
    liName.append(ul);
    ul.append('score: ' + liScore);
    ul.append('foul play: ' + lifoulPlay);
})

