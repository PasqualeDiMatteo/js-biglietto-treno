console.log("JSOK");

/*
1. Costanti :
- €/km
- Age Senior
- Age Minors
- Discount for Senior
- Discount for Minors
2. Chiedere all'utente i km che vuole percorrere
3. Chiedere all'utente l'età
4. Validazione
5. Calcolare il prezzo del bigietto
6. Applicare lo sconto
7. Calcolare il prezzo con lo sconto
8. Stampare il prezzo con lo sconto 
*/

// 1. Costants

const priceKm = 0.21;
const ageSenior = 65;
const ageMinors = 18;
const discountSenior = 40;
const discountMinors = 20;

// Ask Km and Age

const userAge = parseInt(prompt("How old is the passenger?", "35"));
const kilometers = parseInt(
  prompt("How many kilometers do you have to travel?", "600")
);

console.log(userAge + " Age");
console.log(kilometers + " Km");
