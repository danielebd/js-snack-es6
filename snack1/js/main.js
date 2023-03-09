'use strict';

const invited = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const detailsIvited = invited.map((element, index) => {
    return {tavolo: 'Tavolo Vip', nome: element, posto: index + 1} ;
})

console.log(detailsIvited)

detailsIvited.forEach((element) => {
    console.log('Nome: ' + element.nome, '- ' + element.tavolo, '- posto: ' + element.posto)
});