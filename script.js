// Project data
const projects = {
    project1: {
        title: "AI Image Recognition System",
        description: "A sophisticated machine learning project that can identify and classify objects in real-time using computer vision techniques. The system uses a custom-trained neural network to achieve 95% accuracy in object detection across 1000 different categories. Key features include real-time processing, multi-object detection, and confidence scoring for each prediction.",
        images: ["https://via.placeholder.com/800x400/2a2a2a/ffffff?text=AI+Image+Recognition", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Real-time+Processing", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Neural+Network+Architecture"],
        technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"]
    },
    project2: {
        title: "E-commerce Platform Redesign",
        description: "A complete overhaul of an existing e-commerce platform focusing on user experience and modern design principles. The project implemented a responsive design system, improved checkout flow, and added advanced filtering capabilities. The new design increased conversion rates by 40% and reduced cart abandonment by 25%.",
        images: ["https://via.placeholder.com/800x400/2a2a2a/ffffff?text=E-commerce+Homepage", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Product+Listing", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Checkout+Process"],
        technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    project3: {
        title: "Data Analytics Dashboard",
        description: "An interactive dashboard for visualizing complex business metrics and KPIs. Built using modern web technologies, the dashboard features real-time data updates, custom filtering options, and export capabilities. The system processes over 1 million data points daily and provides insights through intuitive visualizations.",
        images: ["https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Dashboard+Overview", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Performance+Metrics", "https://via.placeholder.com/800x400/2a2a2a/ffffff?text=Data+Visualization"],
        technologies: ["D3.js", "Vue.js", "Python", "PostgreSQL"]
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