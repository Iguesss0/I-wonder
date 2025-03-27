document.addEventListener("DOMContentLoaded", function() {
    let myHeader = document.getElementById("myHeading");
    myHeader.textContent = "Wagga Wagga";
    
    let age = 15;
    const birthYear = 2010;
    let sum = age + 3;
    console.log("2028 will be a banger", sum);
    
    if (age >= 18) {
        console.log("You are an adult");
    } else {
        console.log("Stop Swearing");
    }
    
    if (age >= 12 && age <= 18) {
        console.log("You are grinding for the World Cup!");
    }
    
    if (age < 12 || age > 22) {
        console.log("You have either still never played GeoGuessr or graduated college");
    }
    
    let clueless = age < 12;
    if (!clueless) {
        console.log("You haven't played GeoGuessr yet");
    }
        let container = document.querySelector(".container");
    
        // Check if the element is in the viewport
        function checkVisibility() {
            let rect = container.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                container.classList.add("visible"); // Add the visible class when the element is in the viewport
            }
        }
    
        // Add fade-in class o container
        container.classList.add("fade-in");
    
        // Trigger the visibility check on scroll
        window.addEventListener("scroll", checkVisibility);
        
        // Also check on initial load
        checkVisibility();
    });
        const leftImage = document.querySelector(".top-left-image");
        const rightImage = document.querySelector(".top-right-image");
    
        // Function to check visibility
        function checkVisibility() {
            const rectLeft = leftImage.getBoundingClientRect();
            const rectRight = rightImage.getBoundingClientRect();
            
            // Add animation class when images are in the viewport
            if (rectLeft.top >= 0 && rectLeft.bottom <= window.innerHeight) {
                leftImage.classList.add("visible");
            }
            if (rectRight.top >= 0 && rectRight.bottom <= window.innerHeight) {
                rightImage.classList.add("visible");
            }
        }
    
        // Trigger on page load and scroll
        window.addEventListener("scroll", checkVisibility);
        checkVisibility();  // Also check on initial load
    


