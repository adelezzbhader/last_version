// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! We will contact you soon.');
        e.target.reset();
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter properties
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const activeButton = button.parentElement.querySelector('.filter-btn.active');
        if (activeButton) {
            activeButton.classList.remove('active');
        }
        button.classList.add('active');
    });
});