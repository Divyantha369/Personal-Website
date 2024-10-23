document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('.masthead__menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive mobile menu toggle
    const menuButton = document.createElement('button');
    menuButton.innerText = '☰';
    menuButton.classList.add('menu-toggle');
    const mastheadWrap = document.querySelector('.masthead__inner-wrap');
    mastheadWrap.prepend(menuButton);

    menuButton.addEventListener('click', () => {
        const menu = document.querySelector('.masthead__menu ul');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('All fields are required!');
            } else {
                alert('Form submitted successfully!');
                this.reset(); // Clear the form after submission
            }
        });
    }
});
