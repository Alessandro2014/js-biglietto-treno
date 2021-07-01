/*
1 km da percorrere
2 età della persona
3 moltiplicazione dei km per 0.21€
4 creazione delle if in base alla risposta per applicare lo sconto
*/

var message = ("Il costo del tuo Biglietto è: ");
var age = parseInt(prompt("Qual è la tua età?"));
var kilometres = parseInt(prompt("Quanti km vuoi percorrere?"));
var tariffs = "0.21"


var calculatePrice = parseInt(kilometres * tariffs);
console.log(calculatePrice);

var totalPrice = document.getElementById("ticket");
totalPrice.innerHTML = message + calculatePrice + "€"

