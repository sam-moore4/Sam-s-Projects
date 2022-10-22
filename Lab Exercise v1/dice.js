// Function to generate random number 
function diceSix(min, max) { 
    min = Math.ceil(1);
    max = Math.floor(6);
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("total").innerHTML = ('You rolled a ' + " " + x)
    } 
  