//this first array refers to classes on the HTML file
buttonColors = ["red", "yellow", "blue", "green"];
//this second array stores the order of colors for the game to operate
gamePattern = [];

var randomNumber = Math.floor((Math.random()*4));
    randomChosenColor = buttonColors[randomNumber];
    selectedButton = $("." + [randomChosenColor]).css("color", "black");
    console.log(randomChosenColor);

function nextSequence() {
    var randomNumber = Math.floor((Math.random()*4));
    randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
}
