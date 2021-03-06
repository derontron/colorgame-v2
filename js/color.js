var numSquares = 6
var colors = [];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init() {
	// mode button event listeners
	setModeButtons();
	setSquares();
	reset();
}

function setModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setSquares() {
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
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick new random color from array
	pickedColor = pickColor();

	//change color display to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change color of squares on page
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";

}


resetButton.addEventListener("click", function() {
	reset();
});


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