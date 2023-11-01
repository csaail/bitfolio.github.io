  document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  
document.getElementById("back").onclick=function(){
  window.location.href='selector.html'
}

const pexelButtons = document.querySelectorAll('.pexel-button');

// Add a click event to each button
pexelButtons.forEach(function(button) {
  button.onclick = function() {
    // Redirect to the desired URL when any of the buttons is clicked
    window.location.href = "https://www.pexels.com/@saail-chavan-3631290/";
  };
});