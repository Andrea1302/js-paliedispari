/* Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */ 
// 1.Chiedere all utente di inserire una parola
// 2.capire se la parola è palindroma oppure no 
// 3. Dare l output relativo

// 1.Chiedere all utente di inserire una parola
let parola = prompt("Inserisci una parola");

function palindroma(parolaInserita){
    // 2.capire se la parola è palindroma oppure no 
    // 2.1 scompongo la parola 
    let parolaScomposta = parolaInserita.split("");

    // 2.2 Inverto l ordine della parola scomposta
    let inversoScomposto =  parolaScomposta.reverse()

    // 2.3 Ricompongo la parola 
    let parolaRicomposta = inversoScomposto.join("");


    
    // 2.4 se la parola  inversa è uguale alla parola  iniziale, allora la parola inserita è palinroma

    let parolaPalindroma;
    if ( parolaInserita === parolaRicomposta ) {
        parolaPalindroma = "la parola inserita è palindroma";
    } else{
        parolaPalindroma = "la parola inserita non è palindroma"
    }
        return parolaPalindroma;
}

// 3. Dare l output relativo
// Richiamo la funzione
let veroFalso = palindroma(parola);
console.log(veroFalso);
