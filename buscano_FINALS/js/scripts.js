document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1'; 
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const projects = [
        
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <a href="${project.link}">
                <img src="${project.image}" alt="${project.title}" class="project_image">
            </a>
        `;
        projectList.appendChild(projectItem);
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

(function() {
    emailjs.init('2oV0p16ZmJxYZasaR'); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_32k0f2q', 'template_8d0lnz7', this)
        .then(function() {
            document.getElementById('contact-message').innerText = 'Message sent successfully!';
        }, function(error) {
            document.getElementById('contact-message').innerText = 'Failed to send message. Please try again later.';
        });
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
