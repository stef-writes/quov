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
        technologies: ["Python", "JavaScript", "VSCode"],
        github: "https://github.com/stef-writes/search-engine"
    },
    project2: {
        title: "LLM Orchestration",
        description: "Very basic LLM Orchestration engine.  Designed to operate via RAG & DAG (heavy use of AI to help make this).",
        video: "https://www.youtube.com/embed/oR4bj00NbzU",
        technologies: ["Python", "React", "LangChain", "Node.js"]
    },
    project3: {
        title: "Visualizing Entropy & Complexity",
        description: "Co-coding with AI to create a simple data vizualization of the relationship between entropy & complexity.",
        video: "https://www.youtube.com/embed/CP6_ffEmzd4",
        technologies: ["Claude", "Cursor"]
    },
    project4: {
        title: "Simulating Synesthesia (Poorly)",
        description: "Co-coding with AI to simulate synthesia by mapping sound to color based physical properties like frequency.",
        video: "https://www.youtube.com/embed/IbGvLDrtJqE",
        technologies: ["Claude", "Deepseek", "NumPy", "Matplotlib"]
    }
};

var slideIndex = 1;

// Open project modal
function openProject(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projects[projectId];
    
    // Update modal content
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').innerHTML = `<p>${project.description}</p>`;
    
    // Update technologies and add GitHub link
    const tagsContainer = document.getElementById('projectTags');
    tagsContainer.innerHTML = `
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        ${project.github ? `<a href="${project.github}" target="_blank" class="button" style="margin-left: 1rem;">GitHub</a>` : ''}
    `;
    
    // Handle video or images
    const carouselContainer = document.querySelector('.carousel-container');
    if (project.video) {
        // Show video
        carouselContainer.innerHTML = `
            <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                    src="${project.video}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        `;
    } else {
        // Show image carousel
        carouselContainer.innerHTML = `
            <div class="carousel-slide fade">
                <img src="${project.images[0]}" alt="Project Image 1">
            </div>
            <div class="carousel-slide fade">
                <img src="${project.images[1]}" alt="Project Image 2">
            </div>
            <div class="carousel-slide fade">
                <img src="${project.images[2]}" alt="Project Image 3">
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            <div class="dot-container">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        `;
        showSlides(slideIndex);
    }
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
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
    // Close modal when clicking the close button or outside
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    window.onclick = function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) {
            closeModal();
        }
    }
}); 