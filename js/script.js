// creo la variabile collegata al div con classe container
let containerDiv = document.querySelector("div.container");

// utilizzo un ciclo for con var i per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // per ogni i divisibile sia per 3 che per 5, stampo nella console "fizzbuzz" e creo dentro al div.container un div con classe box e fizzbuzz; testo fizzbuzz
    if ((i % 3 === 0) && (i % 5 === 0)) {

        console.log("fizzbuzz");
        containerDiv.innerHTML += '<div class="box fizzbuzz">fizzbuzz</div>';

        // per ogni i divisibile solo per 3, stampo nella console "fizz" e creo dentro al div.container un div con classe box e fizz; testo fizz
    } else if ((i % 3 === 0)) {

        console.log ("fizz");
        containerDiv.innerHTML += '<div class="box fizz">fizz</div>';

        // per ogni i divisibile solo per 5, stampo nella console "buzz" e creo dentro al div.container un div con classe box e buzz; testo buzz
    } else if (( i % 5 === 0)) {

        console.log ("buzz");
        containerDiv.innerHTML += '<div class="box buzz">buzz</div>';

        // per tutti gli altri casi, stampo nella console il valore di i e creo dentro al div.container un div con classe box; testo il valore di i
    } else {

        console.log(i); 
        containerDiv.innerHTML += '<div class="box">' + i + '</div>';
    
    }

}