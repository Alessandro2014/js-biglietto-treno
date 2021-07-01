/*
1 km da percorrere
2 età della persona
3 var per minorenni per maggiorenni e per over 65
4 moltiplicazione dei km per 0.21€
5 creazione delle if in base alla risposta per applicare lo sconto
*/

var message = ("Il costo del tuo Biglietto è: ");
var age = parseInt(prompt("Qual è la tua età?"));
var kilometres = parseInt(prompt("Quanti km vuoi percorrere?"));
var tariffs = 0.21
var young18 = "17"
var adult = "18"
var over65 = "65"
var discountYoung18 = 
var discountOver65 = 

if (isNaN(kilometres) && isNaN(age)) {
    if (age <= young18) { 
        console.log (message + kilometres * tariffs);
    }   
    else if (age >= adult) {
     console.log (message + kilometres * tariffs);
    }
    else (age >= over65)
}

var calculatePrice = parseInt(kilometres * tariffs);
console.log(calculatePrice);



// var totalPrice = document.getElementById("ticket");
// totalPrice.innerHTML = message + calculatePrice + "€"