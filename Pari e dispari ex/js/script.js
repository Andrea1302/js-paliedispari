/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


// 1.Chiedi all utente di scegliere tra pari o dispari 

// 2. Chiedi all utente di inserire un numero da 1 a 5 

// 3. Generiamo un numer random da 1 a 5  per il pc 

// 4. Eseguiamo la somma dei numeri 

// 5.Stabiliamo se la somma dei numeri è pari o dispari 

// 6. dichiariamo chi ha vinto 

// 1.
const scelta = prompt("Inserisci la tua scelta scrivendo 'pari' o 'dispari' ");
console.log("la tua scelta è :", scelta);

// 2.
let numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Condizione per far inserire all utente un numero da 1 a 5 
while ( numUtente < 1 || numUtente > 5 ){  
       numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
       console.log(numUtente);
}
console.log("Il numero da te scelto è :", numUtente);






// La funzione pari o dispari sarà 
function GiocoPariDispari (sceltaPariODispari, SceltaNumero){


    // 3.
    const numPc = Math.floor(Math.random()*5) +1;
    console.log("il numero generato dal pc è :",numPc);

    // 4.
    const sommaNumeri = SceltaNumero + numPc;
    console.log("la somma dei due numeri è :",sommaNumeri);

    let ilRisultato =0;
    
    // 5.
    if ( sommaNumeri % 2 === 0 ) {
        // sommaPariDispari ="La somma dei due numeri è pari";
        ilRisultato = "pari"
    } else {
        // sommaPariDispari ="La somma dei due numeri è dispari";
        ilRisultato = "dispari"
    }
    
    // 6.
    let risultato = "";
    if ( sceltaPariODispari === ilRisultato ) {
        risultato = "Hai vinto";
    } else {
        risultato="Hai perso";
    }
    console.log(risultato);
    return risultato;
}
// 6.1 se vogliamo salvare il risultato
let risultatoFinale = GiocoPariDispari(scelta, numUtente);
console.log(risultatoFinale);
