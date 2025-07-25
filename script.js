document.addEventListener('DOMContentLoaded', function() {
    // Debugging check
    console.log("Script loaded successfully!");
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('header');
    if (mobileMenuBtn && header) {
        mobileMenuBtn.addEventListener('click', function() {
            header.classList.toggle('mobile-menu-open');
        });
    }

    // Handle all buttons with .btn class
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            
            // Add specific actions for different buttons
            switch(buttonText) {
                case 'Get Started':
                    alert('Redirecting to sign up...');
                    // window.location.href = "/signup";
                    break;
                case 'Demo':
                    alert('Launching demo...');
                    // document.querySelector('.demo-modal').style.display = 'block';
                    break;
                case 'Login':
                    alert('Opening login form...');
                    break;
                case 'Sign Up':
                    alert('Opening signup form...');
                    break;
                case 'Try All AI Systems Free':
                    alert('Starting AI systems trial...');
                    break;
                default:
                    console.log(`No specific action for ${buttonText}`);
            }
        });
    });

    // Video placeholder click
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            alert('Video player would open here in the full implementation.');
        });
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                message: this.querySelector('textarea').value
            };
            console.log('Form submitted:', formData);
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Pricing cards
    document.querySelectorAll('.pricing-card .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const plan = this.closest('.pricing-card').querySelector('h3').textContent;
            alert(`You selected the ${plan} plan. Redirecting to signup...`);
        });
    });

    // Scroll animations
    const animateOnScroll = function() {
        document.querySelectorAll('.feature-card, .step, .pricing-card, .system-card').forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animations
    document.querySelectorAll('.feature-card, .step, .pricing-card, .system-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    // Get Started Button - Scroll to signup section
    document.querySelector('.btn-primary').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#signup').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Demo Button - Show demo modal
    document.querySelector('.btn-secondary').addEventListener('click', function(e) {
        e.preventDefault();
        // Create demo modal if it doesn't exist
        if (!document.querySelector('#demo-modal')) {
            const modal = document.createElement('div');
            modal.id = 'demo-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <h3>Experience ScoreAI</h3>
                    <p>This would be your interactive demo content</p>
                    <button class="close-modal">Close</button>
                </div>
            `;
            document.body.appendChild(modal);
        }
        document.querySelector('#demo-modal').style.display = 'block';
    });
});