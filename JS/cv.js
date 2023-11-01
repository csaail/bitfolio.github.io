const trophyIcon = document.getElementById("trophy");
const sprin = document.getElementById("sprinkles")
trophyIcon.addEventListener("click", function () {
 // Set the PDF file path (relative to your HTML file)
 const pdfPath = "Assets/cv-downolad/my-cv.pdf";
 sprin.style.display="flex"
 // Create an anchor element for downloading the PDF
 const downloadLink = document.createElement("a");
 downloadLink.href = pdfPath;
 downloadLink.download = "Saail's CV.pdf"; // Set the desired filename

 // Trigger a click event on the download link to initiate the download
 downloadLink.click();
});


// Get references to the button and the div
const nextbtn = document.getElementById("nextButton");
const dialogue = document.getElementById("dialogue");

// Add a click event listener to the button
nextbtn.addEventListener("click", function() {
    // Show the div by setting its display property to "block"
    dialogue.style.display = "none";
});

