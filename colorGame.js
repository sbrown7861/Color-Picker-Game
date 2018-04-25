// List of colors to randomize

var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

//Loop for colors

var squares = document.querySelectorAll(".square");

//Target color for game
var pickedColor = colors[3];

//Span to select for HTML alteration
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//Add intial color to squared
	squares[i].style.backgroundColor = colors[i];
	//Add event listener for squares
	squares[i].addEventListener("click", function () {
		//Grab color of picked square and compare it to the var pickedColor
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			alert("Corect");
		} else {
			alert("Wrong");
		}
	});
}
