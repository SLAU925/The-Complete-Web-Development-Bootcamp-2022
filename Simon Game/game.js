var buttonColours = ["red","blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var hasStarted = false;
var level = 0;

function nextSequence(){
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).animate({opacity: "0.2"},20);
    $("#"+randomChosenColour).animate({opacity: "1.0"}),20;
    makeSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
}

function makeSound(color){
    var audio;
    switch(color){
        case "red":
            audio = new Audio("sounds/red.mp3");
            break;
        case "green":
            audio = new Audio("sounds/green.mp3");
            break;
        case "yellow":
            audio = new Audio("sounds/yellow.mp3");
            break;
        case "blue":
            audio = new Audio("sounds/blue.mp3");
            break;
        default:
            audio = new Audio("sounds/wrong.mp3");
            break;
    }
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else{
        makeSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
    }
}

function startOver(){
    gamePattern =[];
    level = 0;
    hasStarted =false;
}

$(".btn").on("click",function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    
    makeSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
})

$(document).on("keypress",function(event){
    if(hasStarted === false){
        nextSequence();
        $("h1").text("Level "+level);
        hasStarted = true;
    }
})


