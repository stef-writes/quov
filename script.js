// Project data
const projects = {
    project1: {
        title: "Basic Search Engine",
        description: "This is a basic search engine program that is comprised of: Search Index, Search Algorithm, Web Crawler, and a Command-Line Interface (CLI) Module",
        images: [
            "assets/projects/project1/proj1.png",
            "assets/projects/project1/proj11.png",
            "assets/projects/project1/proj111.png"
        ],
        technologies: ["Python", "JavaScript", "VSCode"]
    },
    project2: {
        title: "Coming Soon!",
        description: "...",
        images: ["https://via.placeholder.com/800x400/2a2a2a/ffffff?text=E-commerce+Homepage", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Product+Listing", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Checkout+Process"],
        technologies: ["...", "...", "...", "...", "..."]
    },
    project3: {
        title: "Coming Soon!",
        description: "...",
        images: ["https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Dashboard+Overview", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Performance+Metrics", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Data+Visualization"],
        technologies: ["...", "...", "...", "...", "..."]
    }
};

let slideIndex = 1;

// Function to open project modal
function openProject(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projects[projectId];
    
    // Update modal content
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').innerHTML = `<p>${project.description}</p>`;
    
    // Update technologies
    const tagsContainer = document.getElementById('projectTags');
    tagsContainer.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');
    
    // Update carousel images
    const slides = document.getElementsByClassName('carousel-slide');
    for (let i = 0; i < slides.length; i++) {
        if (project.images[i]) {
            slides[i].querySelector('img').src = project.images[i];
        }
    }
    
    // Reset carousel to first slide
    slideIndex = 1;
    showSlides(slideIndex);
    
    // Show modal
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Carousel functions
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking the close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) {
            closeModal();
        }
    }

    // Show first slide initially
    showSlides(slideIndex);
}); 