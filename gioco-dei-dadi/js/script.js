// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// numeri che possono essere usati
let numberToUse = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < numberToUse.length; i++){
    let randomNumberUser = Math.floor(Math.random(1) * 7);
    console.log(randomNumberUser)

    let randomNumberPc = Math.floor(Math.random(1) * 7)
    console.log(randomNumberPc)

    if(randomNumberUser > randomNumberPc){
        alert('Hai vinto')
    } else if(randomNumberPc > randomNumberUser){
        alert('hai perso')
    } else {
        alert ('hai pareggiato')
    }
}




