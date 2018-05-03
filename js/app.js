/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.

var x;

function spinWheel(){

	console.log("start");

	var num = Math.floor(Math.random()*36);

	var even = document.getElementById("evenNum");
	var odd = document.getElementById("oddNum");
	var zero = document.getElementById("zeroNum");

	if(num %2 === 0 && num !== 0){
		even.innerHTML = num;
	}
	else if(num%2 !== 0){
		odd.innerHTML = num;
	}
	else if(num === 0){
		zero.innerHTML = num;
	}

	x = setTimeout(function(){ spinWheel()}, 5000);
};

function startSpin(){
	spinWheel();
}

function stopSpin(){
	console.log("stop");
	clearTimeout(x);
}


// function randomNum(){
// 	var num = Math.floor(Math.random()*36);
// 	return num;
// }

// console.log(randomNum());