// Variable to hold number of squares for easy or hard mode
var numOfSquares = 6;
// List of colors to randomize
var colors = [];
//Target color for game
var pickedColor;

//query selector for squares class
var squares = document.querySelectorAll(".square");
//Span to select for color blocks
var colorDisplay = document.getElementById("colorDisplay");
//Span to select for the menu/alerts
var messageDisplay = document.getElementById("message");
// Event listener for the game status bar
var h1 = document.querySelector("h1");
//Selector for the buttons
var modeButtons = document.querySelectorAll(".mode");
//Event listener for the reset button
var resetButton = document.getElementById("reset");

init();

function init(){

	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numOfSquares = 3;
		}else{
			numOfSquares = 6;
		}
		reset();
		
	});
}
	
	// Loop for the HTML squares
for (var i = 0; i < squares.length; i++){
	//Add event listener for squares
	squares[i].addEventListener("click", function () {
		//Grab color of picked square and compare it to the var pickedColor
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			chnageColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323"
			messageDisplay.textContent = "Try Again";
		}
	});
}

	reset();
	
}

function reset(){
	colors = generateRandomColors(numOfSquares);
	//Pick a new color from the array
	pickedColor = pickColor();
	//Change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//Reset the span for winning a round
	messageDisplay.textContent = "";
	//Reset the Play again message
	resetButton.textContent = "New Colors";
	//Change colors of the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";	
		squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

// Function to change all the squares/background to the correct color when guessed.
function chnageColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

//Function to a random color as the goal color
function pickColor(){
	var random =  Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array add num colors to array
	var arr = []
	for(var i = 0; i < num; i++){
		//get random color and push to array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//Pick a R,G,B from 0-255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}