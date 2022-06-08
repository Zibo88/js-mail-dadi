// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creata lista di email approvate per l'accesso
const emailApproved = ['mario@gmail.com', 'giulia@gmail.com', 'carlo@gmail.com']

// chiedo all'utente la mail
let userMail = prompt ("Inserisci la tua mail per eseguire l'accesso");

// creo una variabile booleana per riconoscere se la mail è approvata o meno
let searchMail = false;

// analizzo gli elementi dentro l'array
for (let i = 0; i < emailApproved.length; i++){
    // creo una variabile relativa agli elementi dell'array
    let emailEntered = emailApproved[i];
    
    if(emailEntered === userMail){
        searchMail = true;
    }

}

// condizioni di accesso o meno in base alla mail inserita
if(searchMail){
    alert('benvenuto')
}else{
    alert ('non puoi accedere')
}



