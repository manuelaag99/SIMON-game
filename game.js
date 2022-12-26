//this first array refers to classes on the HTML file
buttonColors = ["red", "yellow", "blue", "green"];
//this second array stores the order of colors for the game to operate
gamePattern = [];


$(document).keypress(function() {
    var press = event.key;
    if (press === "a") {
        var randomNumber = Math.floor((Math.random()*4));
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    $("#" + [randomChosenColor]).addClass("pressed");
    setTimeout(function() {
        $("#" + [randomChosenColor]).removeClass("pressed");
    }, 200);
    var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
    sound.play();
    }
    else {
        console.log(press);
    }
})



//selectedButton.addClass("pressed");


//$(document).click(playAudio());
//selectedButton.addClass("pressed");
//setTimeout(function() {
//    selectedButton.removeClass("pressed");
//}, 200);




//function nextSequence() {
//}

//function simonSound(selectedButton) {
//    var sound = new Audio("sounds/" + selectedButton + ".mp3");
//}