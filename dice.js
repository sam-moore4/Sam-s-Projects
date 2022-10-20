// Function to generate random number 
function diceSix(min, max) { 
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
  
console.log('Dice Display is') 
  
// Function call
console.log(diceSix()); 