const projectData = {
    project1: {
        title: "React Native Emergency Guide App",
        description: `
            <h4>Project Overview</h4>
            <p>A react app designed to help emergency services locate people in need of assistance.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>User authentication and account management</li>
                <li>Map integration with real-time location tracking</li>
                <li>Emergency contact list</li>
                <li>Real-time chat with emergency services</li>
                <li>Emergency alert system</li>
            </ul>

            <h4>Technologies Used</h4>
            <p>HTML5, CSS3, JavaScript, React Native</p>
            
            <h4>Challenges & Solutions</h4>
            <p>One of the main challenges was implementing a map integration with real-time location tracking. This was solved by learning how to use the Google Maps API.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="Images/nativeLogo.png" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
    project2: {
        title: "Tower Mercs",
        description: `
            <h4>Project Overview</h4>
            <p>A turn based action adventure game with multiplayer features, where you must recruit a group of mercenaries to fight and hopefully defeat the evil witch.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>Turn-based combat</li>
                <li>Online Co-op</li>
                <li>3D Exploration</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>Unreal Engine, PaperZD plugin, C++</p>
            
            <h4>Challenges & Solutions</h4>
            <p>Creating an intuitive drag-and-drop interface that worked well on both desktop and mobile devices was challenging. The solution was to develop custom touch handlers for mobile while using a library for desktop interactions.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="Images/towerMercs.png" alt="Tower Mercs picture" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
    project3: {
        title: "Eternal Voyage",
        description: `
            <h4>Project Overview</h4>
            <p>A VR CO-OP game where you must either work together or against players to complete tasks around a ship.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>VR</li>
                <li>Online Multiplayer</li>
                <li>Task based gameplay</li>
            </ul>

            <h4>Technologies Used</h4>
            <p>Unreal Engine, C++</p>
            
            <h4>Challenges & Solutions</h4>
            <p>Online multiplayer was difficult to implement, and took continous effort in researching, testing, and debugging. Unreal Engine's features.</p>

            <div style="text-align: center; margin-top: 20px;">
                <img src="Images/eternalVoyage.png" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
    project4: {
        title: "ML Pong",
        description: `
            <h4>Project Overview</h4>
            <p>A basic program teaching machine learning agents Pong. Using Unity and Anaconda.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>Machine learning</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>Unity, Anaconda</p>
            
            <h4>Challenges & Solutions</h4>
            <p>The biggest challenge was getting the machine learning agents to learn to play Pong. The solution was to use a reinforcement learning algorithm and training multiple agents over time.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="Images/mlPong.png" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
    project5: {
        title: "DreamWare",
        description: `
            <h4>Project Overview</h4>
            <p>A Kiosk game where you can play up to 4 minigames and compete with friends.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>4 Different Minigames</li>
                <li>Leaderboard</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>Unity, C#</p>
            
            <h4>Challenges & Solutions</h4>
            <p>The biggest challenge was UI making sure information was clearly displayed and understood even for younger audiences.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="Images/dreamscapes.png" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
            </div>
        `,
    },
    project6: {
        title: "This Portfolio Site",
        description: `
            <h4>Project Overview</h4>
            <p>A portfolio site built with basic html, css, and javascript.</p>
            
            <h4>Key Features</h4>
            <ul>
                <li>Responsive Design</li>
                <li>Various UI Features</li>
            </ul>
            
            <h4>Technologies Used</h4>
            <p>HTML5, CSS3, JavaScript</p>
            
            <h4>Challenges & Solutions</h4>
            <p>The biggest challenge was getting learning various techniques and implementing them into the site, which was primarily solved by reading documentation looking up said features.</p>
            
            <div style="text-align: center; margin-top: 20px;">
                <img src="Images/portfolioSite.png" alt="Project Screenshot" style="max-width: 100%; border: 2px solid var(--border);">
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
                alert('Message sent, thanks for reaching out.');
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