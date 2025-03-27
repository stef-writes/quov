// Get the modals
var modals = document.getElementsByClassName("modal");

// Get the buttons that opens the modals
var buttons = document.getElementsByClassName("button");

// Get the <span> elements that closes the modals
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var projectId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        document.getElementById(projectId + 'Modal').style.display = "block";
        showSlides(1); // Reset carousel to first slide
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        var modalId = this.parentElement.parentElement.id;
        document.getElementById(modalId).style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Carousel functionality
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
} 