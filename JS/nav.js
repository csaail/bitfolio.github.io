const gitele = document.getElementById("github");
const linkele = document.getElementById("linkedin")
const gmaele = document.getElementById("gmail")


gitele.addEventListener("click", function() {
    const redirectUrl = "https://github.com/csaail";
    window.location.href = redirectUrl;
});

linkele.addEventListener("click", function() {
    const redirectUrl1 = "https://www.linkedin.com/in/saail-chavan-135a1a1b6/";
    window.location.href = redirectUrl1;
});

gmaele.addEventListener("click", function() {
    const redirectUrl2 = "mailto:saailchavan02@gmail.com";
    window.location.href = redirectUrl2;
});