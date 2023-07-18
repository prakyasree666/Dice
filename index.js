
var randomNum = Math.floor(Math.random() *6) +1;

var randomDice = "dice" + randomNum + ".png";

var imageSource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var randomNum2 = Math.floor(Math.random() *6) +1;

var randomDice2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomNum > randomNum2){
  document.querySelector("h1").textContent= "🎉Player 1 wins";
}
else if(randomNum < randomNum2){
  document.querySelector("h1").textContent= "🎉Player 2 wins";
}
else{
    document.querySelector("h1").textContent= "😶Draw!!"
}
