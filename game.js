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
        var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
        sound.play();
        $("#" + [randomChosenColor]).addClass("pressed");
        setTimeout(function() {
            $("#" + [randomChosenColor]).removeClass("pressed");
        }, 200);
    }
    else {
        console.log(press);
    }

})

$(".row .btn").click(function() {
    //the "buttonID" variable stores the particular identity of the clicked button
    var buttonID = this.id;
    console.log(buttonID);
    $("#" + [buttonID]).addClass("pressed");
    var sound = new Audio("sounds/" + buttonID + ".mp3");
    sound.play();
    setTimeout(function() {
        $("#" + [buttonID]).removeClass("pressed");
    }, 200);
    

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