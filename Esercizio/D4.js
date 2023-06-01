/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  let rettangolo = l1 * l2;
  return rettangolo;
  }
  let lunghezza1 = 5;
  let lunghezza2 = 3;
  let risultato = area(lunghezza1, lunghezza2);
  console.log("L'area del rettangolo è: " + risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }
  let numero1 = 5;       /*Testato e funzionante anche se i due numeri non sono uguali*/
  let numero2 = 5;
  let risultato1 = crazySum(numero1, numero2);  
  console.log("Il risultato è: " + risultato1);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    let differenza = Math.abs(numero - 19);
    if (numero > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
  }
  let numeroFornito = 25;         /*Testato e funzionante anche cambiando il numeroFornito con un valore < 19*/
  let risultato2 = crazyDiff(numeroFornito);
  console.log("Il risultato è: " + risultato2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
  let numero = 50;                /*Testato e funzionante anche se il valore non è compreso tra 20,100 o uguale a 400*/
  let risultato3 = boundary(numero);
  console.log("Il risultato è: " + risultato3);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa;
    } else {
      return "EPICODE" + stringa; 
    }
  }
  let testo = "Ciao";        /*Testato e funzionante anche cambiando il testo con Epicode*/
  let risultato4 = epify(testo);
  console.log("Il risultato è: " + risultato4);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
    if (numero % 3 === 0 || numero % 7 === 0) {
      return true; 
    } else {
      return false; 
    }
  }
  let numeroDaControllare = 21;             /*Testato e funzionante anche se il valore non è un multiplo di 3 e 7*/
  let risultato5 = check3and7(numeroDaControllare);
  console.log("Il risultato è: " + risultato5);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    let stringaInvertita = "";
    for (let i = stringa.length - 1; i >= 0; i--) {
      stringaInvertita += stringa[i];
    }
    return stringaInvertita;
  }
  let testo1 = "EPICODE";
  let risultato6 = reverseString(testo1);
  console.log("Il risultato è: " + risultato6);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
    let parole = stringa.split(" ");
    let risultato = "";
    
    for (let i = 0; i < parole.length; i++) {
      let parola = parole[i];
      let primaLettera = parola.charAt(0).toUpperCase(); 
      let restoParola = parola.slice(1); 
      let parolaMaiuscola = primaLettera + restoParola;
      risultato += parolaMaiuscola + " ";
    }
    return risultato.trim(); 
  }
  let testo2 = "ciao a tutti sono gabriele francesco colombo";
  let risultato7 = upperFirst(testo2);
  console.log("Il risultato è: " + risultato7);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
    let nuovaStringa = stringa.slice(1, -1); 
    return nuovaStringa;
  }
  let testo3 = "Gabriele";
  let risultato8 = cutString(testo3);
  console.log("Il risultato è: " + risultato8);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let numeriCasuali = [];
    for (let i = 0; i < n; i++) {
      let numeroCasuale = Math.floor(Math.random() * 11); 
      numeriCasuali.push(numeroCasuale);
    }
    return numeriCasuali;
  }
  let quantitaNumeri = 5;           /*Testato e funzionante sul generare numeri casuali*/
  let risultato9 = giveMeRandom(quantitaNumeri);
  console.log("Il risultato è: " + risultato9);
