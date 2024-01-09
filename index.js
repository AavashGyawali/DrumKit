var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var audioElements = {}; // Object to store audio elements

// Function to preload audio
function preloadSound(soundUrl) {
  var audio = new Audio(soundUrl);
  audio.load();
  return audio;
}

// Function to play the sound
function playSound(key) {
  if (audioElements[key]) {
    audioElements[key].currentTime = 0;
    audioElements[key].play();
  }
}

// Preload all the sound files
var soundFiles = {
  w: 'sounds/tom-1.mp3',
  a: 'sounds/tom-2.mp3',
  s: 'sounds/tom-3.mp3',
  d: 'sounds/tom-4.mp3',
  j: 'sounds/snare.mp3',
  k: 'sounds/crash.mp3',
  l: 'sounds/kick-bass.mp3'
};

// Loop through soundFiles and preload each sound
for (var key in soundFiles) {
  audioElements[key] = preloadSound(soundFiles[key]);
}

// Add event listeners for button clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
    case "a":
    case "s":
    case "d":
    case "j":
    case "k":
    case "l":
      playSound(key);
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
