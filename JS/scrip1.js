    var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
        loader.style.display= "none";
    })

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


    // Get references to the button and the div
    const showButton = document.getElementById("showButton");
    const container1 = document.getElementById("container1");

    // Add a click event listener to the button
    showButton.addEventListener("click", function() {
        // Show the div by setting its display property to "block"
        container1.style.display = "block";
        // Hide the button by setting its display property to "none"
        showButton.style.display = "none";
    });


    var walk = document.getElementById("walk");

    currentIndex=0;

    var messages = [
        "Message 1",
        "Message 2",
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
                        // Hide the div by setting its display property to "block"
                        container1.style.display = "none";
                        // Hide the button by setting its display property to "none"
                        showButton.style.display = "none";
                        walk.style.display="block";
                        door.style.display="block";

                        
                });
            }
        }
    });


   

    var imageElements = [document.getElementById("image1"), document.getElementById("image2")];
    var currentInde = 0;
    
    door.addEventListener("click", function () {
    
        // Update the image source to the next image
        imageElements[currentInde].style.display = "none";
        currentInde = (currentInde + 1) % imageElements.length;
        imageElements[currentInde].style.display = "block";


        // Trigger the animation
        walk.classList.remove("animate-left");
        walk.classList.add("animate-up");
    
        // Disable the button after the animation starts
        door.disabled = true;
    
        // Redirect to another link after the animation and fading out
        setTimeout(function () {
            // Add your desired URL in the window.location.href
            window.location.href = 'main2.html';
        }, 3000); // Adjust the timing as needed
    });



// Get a reference to the trophy element by its id
    const gitele = document.getElementById("github");
    const linkele = document.getElementById("linkedin")
    const gmaele = document.getElementById("gmail")
    
    // Add a click event listener to the trophy element
    gitele.addEventListener("click", function() {
        const redirectUrl = "https://github.com/csaail";
        window.location.href = redirectUrl;
    });
    linkele.addEventListener("click", function() {
        const redirectUrl1 = "https://www.linkedin.com/in/saail-chavan-135a1a1b6/";
        window.location.href = redirectUrl1;
    });gmaele.addEventListener("click", function() {
        const redirectUrl2 = "";
        window.location.href = redirectUrl2;
    });
