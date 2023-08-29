var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").setAttribute("src", "./images/dice"+randomNumber1+".png");

document.querySelector("img.img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
    document.querySelector("img.trophy2").style.visibility = "hidden";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "IT'S A DRAW??!!"
    document.querySelector("img.trophy1").style.visibility = "hidden";
    document.querySelector("img.trophy2").style.visibility = "hidden";
} else {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!"
    document.querySelector("img.trophy1").style.visibility = "hidden";
}
