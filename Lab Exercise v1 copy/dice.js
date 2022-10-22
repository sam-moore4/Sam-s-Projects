// Function to generate random number 
var x = diceSix();
document.getElementById("answer").innerHTML = ('You rolled a ' + " " + x)

function diceSix(min, max) { 
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
  
function displayAnswer() {
    document.getElementById("answer").style.display = "block"
}