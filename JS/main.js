// Function to set the greeting based on the time
function setGreeting() {
    const currentHour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');

    if (currentHour >= 0 && currentHour < 12) {
        greetingElement.textContent = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingElement.textContent = 'Good afternoon';
    } else {
        greetingElement.textContent = 'Good evening';
    }

    console.log('Greeting set:', greetingElement.textContent); // Debugging line
}

// Call the setGreeting function to set the initial greeting
setGreeting();


const showButton = document.getElementById("showButton");
const container1 = document.getElementById("dialogue-1");

//event listener for continue
showButton.addEventListener("click", function() {
    // Showing the div by setting its display property to "block"
    container1.style.display = "block";
    // Hiding the button by setting its display property to "none"
    showButton.style.display = "none";
});

var walk = document.getElementById("walk");
var dooor = document.getElementById("dooor")
currentIndex=0;
var messages = [
    "Welcome to my byte-sized corner of the internet",
    "Here, you can enter my pixelated palace, where art and code craft my digital identity.",
    "This is a bug-free website. If you see any bug, it's not a bug; it's a feature XD"
    // Add more messages as needed
];


var greetingElement = document.getElementById('greeting');
var nextButton = document.getElementById('nextButton');    
var door = document.getElementById("door");

nextButton.addEventListener('click', function () {
    if (currentIndex < messages.length) {
        greetingElement.textContent = messages[currentIndex];
        currentIndex++;

        if (currentIndex >= messages.length) {
            // If currentIndex is greater than or equal to the number of messages,
            // disable the "Next" button to stop further clicks
            nextButton.addEventListener("click", function() {
                    // Hiding the div by setting its display property to "block"
                    container1.style.display = "none";
                    // Hiding the button by setting its display property to "none"
                    showButton.style.display = "none";
                    walk.style.display="flex";
                    door.style.display="block";  
                    dooor.style.display="flex"         
            });
        }
    }
});

var imageElements = [document.getElementById("image1"), document.getElementById("image2")];
var doorElements = [document.getElementById("door-open"), document.getElementById("door-close")];
var currentInde = 0;

door.addEventListener("click", function () {

    // Updating the image source to the next image
    imageElements[currentInde].style.display = "none";
    doorElements[currentInde].style.display="none";
    currentInde = (currentInde + 1) % imageElements.length;
    imageElements[currentInde].style.display = "flex";
    doorElements[currentInde].style.display = "flex";

    // Triggering the animation
    walk.classList.remove("animate-left");
    walk.classList.add("animate-up");

    // Disabling the button after the animation starts
    door.disabled = true;

    // Redirecting to another link after the animation and fading out
    setTimeout(function () {
        window.location.href = 'selector.html';
    }, 2000);//transition timing
});
