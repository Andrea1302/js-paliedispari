/* Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */ 



// 1.Chiedere all utente di inserire una parola
let parola = prompt("Inserisci una parola");
// console.log(parola);
let veroFalso;

    function palindroma(parolaInserita){
        // 2.capire se la parola è palindroma oppure no 
        // 2.1 scompongo la parola 
        let parolaScomposta = parolaInserita.split("");
        // console.log(parolaScomposta);
        // 2.2 Inverto l ordine della parola scomposta
        let inversoScomposto =  parolaScomposta.reverse()
        // console.log(inversoScomposto);
        // 2.3 Ricompongo la parola 
        let parolaRicomposta = inversoScomposto.join("");
        // console.log(parolaRicomposta);


    

    // 3. Dare l output relativo 
        // 3.1 se la parola scomposta inversa è uguale alla parola scomposta iniziale, allora la parola inserita è palinroma
    

    if ( parolaInserita === parolaRicomposta ) {
        // parolaPalindroma = true;
        parolaPalindroma = "la parola inserita è palindroma";
    } else{
        parolaPalindroma = "la parola inserita non è palindroma"
    }
        return parolaPalindroma;
    }

    // Richiamo la funzione
    veroFalso = palindroma(parola);
    console.log(veroFalso);
    // function palindroma(parola);
    // console.log(parolaPalindroma);