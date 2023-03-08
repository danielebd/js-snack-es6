'use strict';

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellesa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
];


//LISTA NOMI MAIUSCOLO
const tags = students.map((element) => {
    const upperName = element.name.toUpperCase();
    return upperName;
})
console.log(tags);
tags.forEach((element) => {
    console.log(element)
})

//LISTA VOTO > 70
const superiorGrades = students.filter((element) => {
    if(element.grades > 70){
        return true
    }
})
console.log(superiorGrades);
superiorGrades.forEach((element) => {
    console.log('id: ' + element.id, element.name,'voto: ' +  element.grades)
})

//LISTA VOTO > 70 & ID > 120
const major = students.filter((element) => {
    if(element.grades > 70 && element.id > 120){
        return true
    }
})
console.log(major);
major.forEach((element) => {
    console.log('id: ' + element.id, element.name,'voto: ' +  element.grades)
})