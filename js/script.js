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
var tariffsForKm = 0.21
var young18 = "17"
var over65 = "65"

var price = parseInt(kilometres * tariffsForKm);

var discountYoung18 = parseInt(kilometres * 0.20);
var discountOver65 = parseInt(kilometres * 0.40);


if (age <= young18) { 
        console.log (price - discountYoung18);
    }  else if  (age >= over65) { 
        console.log (price * discountOver65);
    } else { 
        console.log (price + message);
    }





price = document.getElementById("ticket");
price.innerHTML = message + discountYoung18 + "€"