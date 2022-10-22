// Function to generate random number 
function rollDice() { 
    let selectedValue = document.getElementById("sidedDice").value;
    min = Math.ceil(1);
    max = Math.floor(selectedValue);
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("total").innerHTML = ('You rolled a ' + " " + x)

    if (x = 1){
        let image = document.getElementById("dicepic");
        image.src = "/Lab Exercise v1/img/dice-01.png";
    }

    if (x = 2){
    let image = document.getElementById("dicepic");
    image.src = "/Lab Exercise v1/img/dice-02.png";
    }


} 
  

