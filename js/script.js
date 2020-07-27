// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert,
// parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i
// numeri che ha visto precedentemente. Dopo che sono stati inseriti
// i 5 numeri, il software dice quanti e quali dei numeri da
// indovinare sono stati individuati.


// Inserisco in un Array 5 numeri Random e lo mostro in un alert.
var nArray = [];
var nUtente = [];

while (nArray.length < 5) {
    var numeriRandom = nRandom(1, 100);
    if (!nArray.includes(numeriRandom)) {
    nArray.push(numeriRandom);
    }
}

alert(nArray);
// console.log(nArray);

setTimeout(numeriPrompt, 30000);

// **FUNZIONI**

// Funzione per i numeri Random.
function nRandom(min, max) {
    return Math.floor(Math.random()* (max + min + 1) + min);
}

// Funzione prompt per far inserire 5 numeri all'utente.
function numeriPrompt() {
    while (nUtente.length < 5) {
        var numeroPrompt = parseInt(prompt("Inserisci i numeri che hai visto precedentemente"));
        if (!nUtente.includes(numeroPrompt)) {
            nUtente.push(numeroPrompt);
        }
    }
    // console.log(nUtente);
    var nTrovato = [];

    for (var i = 0; i < nUtente.length; i++ ) {
        if (nArray.includes(nUtente[i])) {
            nTrovato.push(nUtente[i]);
        }
    }
    // console.log(nTrovato);
    alert("Hai indovinato " + nTrovato.length + " numeri" + " (" + nTrovato + ")");
}
