//this first array refers to classes on the HTML file
buttonColors = ["red", "yellow", "blue", "green"];

//this section ahead lets the user initialize the game, and calls
$(document).keypress(function() {
    var press = event.key; 
    if (press === "a") {
        level = 1; //this is a counter for the levels; it starts at level 1 and goes up with each turn 
        gamePattern = []; //this second array stores the order of colors for the game to operate; should be rebooted with each game 
        userClickedPattern = []; //this third array stores the order of colors the user clicks; should be rebooted with each game 
        gameChoice();
        userChoice();
        level = level + 1;
    }
    else {
        console.log(press);
    }
})

//this function generates a random choice for the game, selects it, and stores it
function gameChoice() {
    var randomNumber = Math.floor((Math.random()*4)); //generates random number 
    var randomChosenColor = buttonColors[randomNumber]; //assigns color value from the array, based on the number 
    console.log(randomChosenColor); //logs color, just to check 
    gamePattern.push(randomChosenColor); //adds to array 
    buttonAnimation(randomChosenColor); //plays animation and sound 
}

function userChoice() {
    $(".row .btn").click(function() {
        var userChosenColor = this.id; //the "buttonID" variable stores the particular identity of the clicked button
        console.log(userChosenColor); //logs color, just to check 
        userClickedPattern.push(userChosenColor); //adds to array 
        buttonAnimation(userChosenColor); //plays animation and sound 
    })
}

function buttonAnimation(color) {
    var sound = new Audio("sounds/" + color + ".mp3"); //creates audio file based on the color 
    sound.play(); //plays corresponding audio file 
    $("#" + [color]).addClass("pressed"); //simulates the corresponding button being pressed 
    setTimeout(function() { //calls a function that adds a timed response 
        $("#" + [color]).removeClass("pressed"); //simulates the button being un-pressed 
    }, 200); //this specifies that the button will be un-pressed after 200 milliseconds
}




//function nextSequence() {
//}

//function simonSound(selectedButton) {
//    var sound = new Audio("sounds/" + selectedButton + ".mp3");
//}