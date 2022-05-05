let containerDiv = document.querySelector("div.container");

for (let i = 1; i <= 100; i++) {
  
    if ((i % 3 === 0) && (i % 5 === 0)) {

    console.log("fizzbuzz");
    containerDiv.innerHTML += '<div class="box fizzbuzz">fizzbuzz</div>';

    } else if ((i % 3 === 0)) {

    console.log ("fizz");
    containerDiv.innerHTML += '<div class="box fizz">fizz</div>';

    } else if (( i % 5 === 0)) {

    console.log ("buzz");
    containerDiv.innerHTML += '<div class="box buzz">buzz</div>';

    } else {

    console.log(i); 
    containerDiv.innerHTML += '<div class="box">' + i + '</div>';
    
    }

}