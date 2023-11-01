var messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    // Add more messages as needed
];
var currentIndex = 0;
var greetingElement = document.getElementById('greeting');

document.getElementById('nextButton').addEventListener('click', function () {
    greetingElement.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
});

