const projectData = {
    project1: {
        title: "Enchanted E-Commerce",
        description: `
            <h4>Project Overview</h4>
            <p>A fully responsive e-commerce platform built from scratch, featuring a sleek design and robust functionality.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>User authentication and account management</li>
                <li>Product catalog with filtering and sorting</li>
                <li>Shopping cart and wishlist</li>
                <li>Secure payment processing</li>
                <li>Order tracking and history</li>
                <li>Admin dashboard for inventory management</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, Stripe API</p>
            
            <h4>Challenges & Solutions</h4>
            <p>One of the main challenges was implementing a real-time inventory system that would update across all active user sessions. This was solved by using WebSockets to create a pub/sub model for inventory updates.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="/api/placeholder/600/300" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
    project2: {
        title: "Dungeon Task Tracker",
        description: `
            <h4>Project Overview</h4>
            <p>A gamified task management application that turns productivity into an exciting adventure.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>Drag-and-drop task organization</li>
                <li>Priority levels and deadlines</li>
                <li>Achievement system with rewards</li>
                <li>Team collaboration tools</li>
                <li>Data visualization for productivity trends</li>
                <li>Mobile responsive design</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>HTML5, CSS3, JavaScript, React, Firebase, Chart.js</p>
            
            <h4>Challenges & Solutions</h4>
            <p>Creating an intuitive drag-and-drop interface that worked well on both desktop and mobile devices was challenging. The solution was to develop custom touch handlers for mobile while using a library for desktop interactions.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="/api/placeholder/600/300" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
    project3: {
        title: "Crystal Weather Oracle",
        description: `
            <h4>Project Overview</h4>
            <p>A beautiful weather forecasting application with visually stunning displays and accurate predictions.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>Real-time weather updates</li>
                <li>7-day forecast with detailed information</li>
                <li>Location-based weather tracking</li>
                <li>Weather alerts and notifications</li>
                <li>Animated weather visualizations</li>
                <li>Historical weather data</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>HTML5, CSS3, JavaScript, Vue.js, Weather API, Geolocation API</p>
            
            <h4>Challenges & Solutions</h4>
            <p>Creating smooth animations that reflected weather conditions while maintaining performance was difficult. The solution involved using CSS animations combined with canvas elements for more complex visualizations.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="/api/placeholder/600/300" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    const loading = document.getElementById('loading');
    loading.style.display = 'flex';

    // Simulate loading time (remove in production)
    setTimeout(() => {
        loading.style.display = 'none';
    }, 1500);

    // Mobile navigation toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project modal functionality
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');
    const projectDetailBtns = document.querySelectorAll('.project-detail-btn');

    // Open modal with project details
    projectDetailBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                modalBody.innerHTML = project.description;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // In a real application, you would send this data to a server
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            loading.style.display = 'flex';
            setTimeout(() => {
                loading.style.display = 'none';
                alert('Your message has been sent! Thank you for reaching out.');
                contactForm.reset();
            }, 1500);
        });
    }

    // Typewriter effect for the header
    function typeWriter(element, text, i = 0) {
        if (i < text.length) {
            element.textContent = text.substring(0, i + 1);
            setTimeout(() => typeWriter(element, text, i + 1), 100);
        }
    }

    // Initialize animations
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        const originalText = h1Element.textContent;
        h1Element.textContent = '';
        setTimeout(() => {
            typeWriter(h1Element, originalText);
        }, 500);
    }

    // Reveal sections on scroll
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
            }
        });
    };

    // Initial check for sections in viewport
    revealSections();

    // Check for sections on scroll
    window.addEventListener('scroll', revealSections);

    // Resume button event (placeholder)
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Resume download would start here in a real application!');
        });
    }
});