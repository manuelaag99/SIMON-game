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
    counter = 0;
    for (i=1; i < gamePattern.length+1; i++) {
        if (userClickedPattern[i] === gamePattern[i]) {
            counter++;
        }; 
    }
    if (counter === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 800);
    } else {
        setTimeout(function() { //calls a function that adds a timed response 
            wrongChoiceAnimation();//simulates the button being un-pressed 
        }, 500);
        //gameOver = true
        setTimeout(function() { //calls a function that adds a timed response 
            startOver(); 
        }, 1000);
    }
}

function nextSequence() { 
    level++; //raises the level by 1
    $("#level-title").text("Level " + level + "!"); //changes the HTML page title according to the level 
    setTimeout(function() { //calls a function that adds a timed response 
        gameChoice(); 
    }, 500);
}

function gameChoice() { //this function generates a random choice for the game, selects it, and stores it 
    var randomNumber = Math.floor((Math.random()*4)); //generates random number 
    console.log(randomNumber)
    var randomChosenColor = buttonColors[randomNumber]; //assigns color value from the array, based on the number 
    console.log(randomChosenColor); //logs color, just to check 
    gamePattern.push(randomChosenColor); //adds to array 
    buttonAnimation(randomChosenColor); //plays animation and sound 
}

function buttonAnimation(color) {
    simonSounds(color); //calls the function to create and play a sound file 
    $("#" + [color]).addClass("pressed"); //simulates the corresponding button being pressed 
    setTimeout(function() { //calls a function that adds a timed response 
        $("#" + [color]).removeClass("pressed"); //simulates the button being un-pressed 
    }, 200); //this specifies that the button will be un-pressed after 200 milliseconds
}

function simonSounds(input) { //this function creates and play a sound file 
    var sound = new Audio("sounds/" + input + ".mp3"); //creates audio file based on the color 
    sound.play(); //plays corresponding audio file 
}

function wrongChoiceAnimation() {
    simonSounds("wrong");
    $("#level-title").text("Wrong! Game Over. Press any key to restart.");
    $("body").addClass("game-over");
    setTimeout(function() { 
        $("body").removeClass("game-over"); 
    }, 200);
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    gameOver = true;
}