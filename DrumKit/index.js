for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

var audioName;
var audio;

function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            break;
    }
    audio.play();
}

function buttonAnimation(key){
    var buttonKey = document.querySelector("."+key);
    buttonKey.style.color = "white";
    buttonKey.classList.add("pressed");
    setTimeout(function(){
        buttonKey.classList.remove("pressed")
        buttonKey.style.color = "#DA0463";
    },100);
}