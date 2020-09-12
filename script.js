
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

console.log(who[1] + " " + action[2]  + " " + what [1]  + " " + when[1]);

const quien = who[Math.floor(Math.random() * who.length)];
const accion = action[Math.floor(Math.random() * action.length)];
const que = what[Math.floor(Math.random() * what.length)];
const cuando = when[Math.floor(Math.random() * when.length)];

console.log(quien + " " + accion + " " + que + " " + cuando);

let element = document.getElementById("excuse");
element.innerHTML = (quien + " " + accion + " " + que + " " + cuando);