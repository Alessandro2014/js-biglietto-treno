/*
1 km da percorrere
2 età della persona
3 var per minorenni per maggiorenni e per over 65
4 moltiplicazione dei km per 0.21€
5 creazione delle if in base alla risposta per applicare lo sconto
*/

var message = ("Il costo del tuo Biglietto è: ");
var age = (prompt("Qual è la tua età?"));
var kilometres = (prompt("Quanti km vuoi percorrere?"));
var tariffsForKm = 0.21;
var young18 = 17;
var over64 = 65;

var price = (kilometres * tariffsForKm);

var discountYoung18 = (price * 0.20);
var discountOver65 = (price * 0.40);


if (age <= young18) { 
    console.log (price - discountYoung18);
    price = price - discountYoung18;
}  else if  (age >= over64) { 
    console.log (price - discountOver65);
    price = price - discountOver65;
}

placeholder = document.getElementById("ticket");
placeholder.innerHTML = message + price.toFixed(2) + "€"