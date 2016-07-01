var numSquares = 6
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")

easyButton.addEventListener("click", function() {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

hardButton.addEventListener("click", function() {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick new random color from array
	pickedColor = pickColor();

	//change color display to match pickedColor
	colorDisplay.textContent = pickedColor;

	//change color of squares on page
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		h1.style.background = "steelblue";
	}

	this.textContent = "New Colors";

	messageDisplay.textContent = "";

});


colorDisplay.textContent = pickedColor;


for (i = 0; i < squares.length; i++) {
	// Add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners
	squares[i].addEventListener("click", function() {
		// Grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(color) {
	// loop through all squares 
	for (i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make array
	var arr = []
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor())
	}
	// return array
	return arr;
}

function randomColor() {
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g+ ", " + b +")";
}