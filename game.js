//this first array refers to classes on the HTML file
var buttonColors = ["red", "yellow", "blue", "green"]; 
var level = 0; //this is a counter for the levels; it starts at level 1 and goes up with each turn 
var gamePattern = []; //this second array stores the order of colors for the game to operate; should be rebooted with each game 
var userClickedPattern = []; //this third array stores the order of colors the user clicks; should be rebooted with each game         
let gameOver = true;

//this section ahead lets the user initialize the game, and calls
$(document).keypress(function() {
    if (gameOver === true) {
        nextSequence();
        gameOver = false;
    }
})

$(".row .btn").click(function() {
    var userChosenColor = this.id; //the "buttonID" variable stores the particular identity of the clicked button
    console.log(userChosenColor); //logs color, just to check 
    userClickedPattern.push(userChosenColor); //adds to array 
    buttonAnimation(userChosenColor); //plays animation and sound 
    compareLists();
})

function compareLists() {
    if (userClickedPattern == gamePattern) {
        console.log("same");
    } else if (userClickedPattern != gamePattern) {
        setTimeout(function() { //calls a function that adds a timed response 
            wrongChoiceAnimation();//simulates the button being un-pressed 
        }, 500)
        gameOver = true;
    }
}

function nextSequence() {
    level = level + 1;
    console.log(level);
    $("#level-title").text("Level " + level + "!");
    gameChoice();
}

//this function generates a random choice for the game, selects it, and stores it
function gameChoice() {
    var randomNumber = Math.floor((Math.random()*4)); //generates random number 
    var randomChosenColor = buttonColors[randomNumber]; //assigns color value from the array, based on the number 
    console.log(randomChosenColor); //logs color, just to check 
    gamePattern.push(randomChosenColor); //adds to array 
    buttonAnimation(randomChosenColor); //plays animation and sound 
}

function buttonAnimation(color) {
    simonSounds(color);
    $("#" + [color]).addClass("pressed"); //simulates the corresponding button being pressed 
    setTimeout(function() { //calls a function that adds a timed response 
        $("#" + [color]).removeClass("pressed"); //simulates the button being un-pressed 
    }, 200); //this specifies that the button will be un-pressed after 200 milliseconds
}

function simonSounds(input) {
    var sound = new Audio("sounds/" + input + ".mp3"); //creates audio file based on the color 
    sound.play(); //plays corresponding audio file 
}

function wrongChoiceAnimation() {
    simonSounds("wrong");
    $("#level-title").text("Wrong! Game Over");
    $("body").addClass("game-over");
    setTimeout(function() { 
        $("body").removeClass("game-over"); 
    }, 200);
}
