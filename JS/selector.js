// Get references to the button and the div
const nextbtn = document.getElementById("nextButton");
const enable = document.getElementById("enable");
const dialogue = document.getElementById("dialogue");
const disable = document.getElementById("disable")
const cv = document.getElementById("cv");
const photo = document.getElementById("photo");
const figma = document.getElementById("figma");

// Add a click event listener to the button
nextbtn.addEventListener("click", function() {
    // Show the div by setting its display property to "block"
    enable.style.display = "flex";
    // Hide the button by setting its display property to "none"
    dialogue.style.display = "none";
    disable.style.display = "none";
});

cv.addEventListener("click",function(){
    const url = "skills.html";
    window.location.href = url;
});

figma.addEventListener("click",function(){
    const url = "figma.html";
    window.location.href = url;
});

photo.addEventListener("click",function(){
    const url = "photography.html";
    window.location.href = url;
});