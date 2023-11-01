let moon = document.getElementById("moon");
let text = document.getElementById("text");
let cityLeft = document.getElementById("back-mount");
let cityRight = document.getElementById("front-mount");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * 0.8 + "px";
    text.style.marginTop = value * 1.5 + "px";
    cityLeft.style.left = value * -1.5 + "px";
    cityRight.style.left = value * 1.5 + "px";
    c1.style.left = value * -1.5 + "px";
    c2.style.left = value * 1.5 + "px";
});

let dwnld = document.getElementById("download");
let contact = document.getElementById("contact");
dwnld.addEventListener("click", function () {
    window.location.href = "cv.html";
    // Hide the elements when the download button is clicked
    hideElements();
});
