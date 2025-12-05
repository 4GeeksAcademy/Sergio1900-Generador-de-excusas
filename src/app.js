import "bootstrap";
import "./style.css";

//write your code here
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when =  ['before the class','when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateExcuse() {
  let w = who[Math.floor(Math.random() * who.length)];
  let a = action[Math.floor(Math.random() * action.length)];
  let wh = what[Math.floor(Math.random() * what.length)];
  let wn = when[Math.floor(Math.random() * when.length)];

  return `${w} ${a} ${wh} ${wn}.`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};

