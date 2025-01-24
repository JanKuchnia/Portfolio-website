// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project image lightbox functionality
const projectImages = document.querySelectorAll('.projects img');
const lightbox = document.createElement('div');
const lightboxImg = document.createElement('img');

lightbox.style.display = 'none';
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
lightbox.style.zIndex = '1000';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';

lightboxImg.style.maxWidth = '90%';
lightboxImg.style.maxHeight = '90%';

lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Contact form validation
const contactForm = document.querySelector('.contact form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(e) {
    let isValid = true;

    // Reset previous error states
    [nameInput, emailInput, messageInput].forEach(input => {
        input.style.borderColor = '';
    });

    // Name validation
    if (nameInput.value.trim() === '') {
        nameInput.style.borderColor = 'red';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = 'red';
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        messageInput.style.borderColor = 'red';
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
        alert('Please fill out all fields correctly.');
    }
});

// Optional: Add a basic project filter functionality
const skillTags = document.querySelectorAll('.skills li');
const projectArticles = document.querySelectorAll('.projects article');

skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const skill = tag.textContent.toLowerCase();
        
        projectArticles.forEach(article => {
            const projectSkills = article.getAttribute('data-skills').toLowerCase().split(',');
            article.style.display = projectSkills.includes(skill) ? 'block' : 'none';
        });
    });
});