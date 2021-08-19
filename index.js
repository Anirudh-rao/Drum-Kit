//To Select and Interact with all the buttons
var NumberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumberOfButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //Detects Mouse Click; 
        var ButtonClick = this.innerHTML;
        MakeSound(ButtonClick);
        ButtonAnimation(ButtonClick);

    });

}
//Detects KeyPress;
document.addEventListener("keypress", function (event) {
    MakeSound(event.key);
    ButtonAnimation(event.key);
});
//Function to  produce Sound;
function MakeSound(key) {


    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
    }

}
//Function to Animate the selected Button;
function ButtonAnimation(Currentkey) {
    //Animated The Selected Button;
    var ActiveButton = document.querySelector("." + Currentkey);
    ActiveButton.classList.add("pressed");
    //Deselects the Animated Button;
    setTimeout(function () {
        ActiveButton.classList.remove("pressed");
    }, 100);
}




