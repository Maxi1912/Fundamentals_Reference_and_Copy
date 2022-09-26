// let age1 = 100;
// let age2 = age1;
// age1 = 200;
// age2 = 150;
// console.log(age1, age2);

// let name1 = 'Max';
// let name2 = name1;
// console.log(name1, name2);
// name1 = 'Maxim';
// console.log(name1, name2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

// console.log(players);

team[3] = 'Lux';

const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

const person = {
  name: 'Wes Bos',
  age: 80,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};
// const captain = person;
// captain.number = 99;
const cap2 = Object.assign({}, person);
const dev3 = JSON.parse(JSON.stringify(person));
