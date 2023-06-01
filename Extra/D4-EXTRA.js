// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function giveMeRandom() {
    return Math.floor(Math.random() * 10) + 1;
  }
  function checkArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      console.log("Elemento", i + 1, ":", arr[i]);
      if (arr[i] > 5) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const randomArray = [giveMeRandom(), giveMeRandom(), giveMeRandom(), giveMeRandom(), giveMeRandom()];
  const sumGreaterThan5 = checkArray(randomArray);
  console.log("Somma dei valori maggiori di 5:", sumGreaterThan5);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

function shoppingCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      total += item.price * item.quantity;
    }
    return total;
  }
  const shoppingCart = [
    { id: 1, name: "Prodotto 1", price: 10, quantity: 2 },
    { id: 2, name: "Prodotto 2", price: 5, quantity: 3 },
    { id: 3, name: "Prodotto 3", price: 8, quantity: 1 }
  ];
  const totalDue = shoppingCartTotal(shoppingCart);
  console.log("Totale dovuto al negozio:", totalDue);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(cart, newItem) {
    cart.push(newItem);
    return cart.length;
  }
  const shoppingCart1 = [
    { id: 1, name: "Prodotto 1", price: 10, quantity: 2 },
    { id: 2, name: "Prodotto 2", price: 5, quantity: 3 },
    { id: 3, name: "Prodotto 3", price: 8, quantity: 1 }
  ];
  const newItem = { id: 4, name: "Prodotto 4", price: 12, quantity: 2 };
  const newTotalItems = addToShoppingCart(shoppingCart1, newItem);
  console.log("Nuovo numero totale di elementi nel carrello:", newTotalItems);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(cart) {
    let maxItem = null;
    let maxPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      if (item.price > maxPrice) {
        maxItem = item;
        maxPrice = item.price;
      }
    }
    return maxItem;
  }
  const shoppingCart2 = [
    { id: 1, name: "Prodotto 1", price: 10, quantity: 2 },
    { id: 2, name: "Prodotto 2", price: 5, quantity: 3 },
    { id: 3, name: "Prodotto 3", price: 8, quantity: 1 }
  ];
  const maxItem = maxShoppingCart(shoppingCart2);
  console.log("Oggetto più costoso nel carrello:", maxItem);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(cart) {
    if (cart.length === 0) {
      return null;
    }
    return cart[cart.length - 1]; 
  }
  const shoppingCart3 = [
    { id: 1, name: "Prodotto 1", price: 10, quantity: 2 },
    { id: 2, name: "Prodotto 2", price: 5, quantity: 3 },
    { id: 3, name: "Prodotto 3", price: 8, quantity: 1 }
  ];
  const latestItem = latestShoppingCart(shoppingCart3);
  console.log("Ultimo elemento nel carrello:", latestItem);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
    let count = 0;
    while (count < 3) {
      const randomNumber = Math.floor(Math.random() * 10);
      console.log("Numero casuale generato:", randomNumber);
      if (randomNumber > x) {
        count++;
      } else {
        count = 0;
      }
    }
  }
  const x = 5;
  loopUntil(x);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        sum += arr[i];
        count++;
      }
    }
    if (count === 0) {
      return 0;
    }
    return sum / count;
  }
  const array = [1, 2, "3", 4, 5, "six", 7, 8, 9, NaN];
  const result = average(array);
  console.log("Media aritmetica dell'array:", result);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(strings) {
    let longestString = "";
    for (let i = 0; i < strings.length; i++) {
      const currentString = strings[i];
      if (currentString.length > longestString.length) {
        longestString = currentString;
      }
    }
    return longestString;
  }
  const array1 = ["Ciao", "Hello", "Bonjour", "Hola", "Ave", "Szia", "Hallo"];
  const result1 = longest(array1);
  console.log("Stringa più lunga nell'array:", result1);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function spamFilter(emailContent) {
    const spamKeywords = ["SPAM", "SCAM"];
    for (let i = 0; i < spamKeywords.length; i++) {
      if (emailContent.includes(spamKeywords[i])) {
        return false;
      }
    }
    return true; 
  }
  const email1 = "Ciao, hai vinto un premio!";
  const email2 = "Offerta speciale solo per te!";
  const email3 = "SPAM inviato dal tuo amico, nessuna truffa.";
  const isSpam1 = spamFilter(email1);
  const isSpam2 = spamFilter(email2);
  const isSpam3 = spamFilter(email3);
  console.log("Is spam 1:", isSpam1);    
  console.log("Is spam 2:", isSpam2);   
  console.log("Is spam 3:", isSpam3);   

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function daysPassed(date) {
    const now = new Date();
    const diffInMilliseconds = now - date;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const days = Math.floor(diffInMilliseconds / millisecondsPerDay);
    return days;
  }
  const startDate = new Date("2002-12-08");
  const days = daysPassed(startDate);
  console.log("Giorni passati dalla data:", days);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
    const matrix = [];
    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        row.push(`${i}${j}`);
      }
      matrix.push(row);
    }
    return matrix;
  }
  const x1 = 3;
  const y = 2;
  const result2 = matrixGenerator(x1, y);
  console.log("Matrice generata:", result2);
