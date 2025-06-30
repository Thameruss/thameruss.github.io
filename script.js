document.addEventListener('DOMContentLoaded', function() {
    // Terminal typing effect
    const terminalText = document.getElementById('terminal-text');
    
    // Terminal text content with your format - UPDATED with different information
    const lines = [
        { text: '<span class="prompt"># whoami</span>', delay: 400 },
        { text: '<span class="output">root@thamer</span>', delay: 800 },
        
        { text: '<span class="prompt"># skills --list</span>', delay: 500 },
        { text: '<span class="output">[\'penetration testing\', \'web exploitation\', \'red teaming\']</span>', delay: 1000 },
        
        { text: '<span class="prompt"># location</span>', delay: 500 },
        { text: '<span class="output">Kuwait 🇰🇼</span>', delay: 800 },
        
        { text: '<span class="prompt"># cat certifications.txt</span>', delay: 600 },
        { text: '<span class="output">eJPT <br>CRTA <br>CPTS - In Progress</span>', delay: 1000 },
        
        { text: '<span class="prompt"># Let\'s connect...</span>', delay: 800 },
        
        { text: '<span class="cursor"></span>', delay: 500 }
    ];
    
    // Function to animate typin
    async function typeTerminal() {
        terminalText.innerHTML = '';
        
        for (const line of lines) {
            const p = document.createElement('p');
            terminalText.appendChild(p);
            
            p.innerHTML = line.text;
            p.style.opacity = '0';
            
            // Fade in effect
            await new Promise(resolve => {
                setTimeout(() => {
                    p.style.transition = 'opacity 0.5s';
                    p.style.opacity = '1';
                    resolve();
                }, 100);
            });
            
            // Pause between lines
            await new Promise(resolve => setTimeout(resolve, line.delay));
        }
    }
    
    // Start the animation
    typeTerminal();
    
    // Add scroll into view effect for sections
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add scroll reveal animations
    // Initialize ScrollReveal safely
    if (typeof ScrollReveal === 'function') {
        const sr = ScrollReveal({
            reset: false,
            distance: '20px',
            duration: 800,
            delay: 200
        });

        sr.reveal('.hero-content', {
            origin: 'bottom'
        });

        sr.reveal('.about-content, .skills-container, .achievements-container', {
            origin: 'bottom',
            interval: 100
        });
    }
    
    // Initialize particles.js with optimized settings
    if (typeof particlesJS === 'function') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 40, density: { enable: true, value_area: 800 } },
                color: { value: "#ff3e3e" },
                shape: { type: "circle" },
                opacity: {
                    value: 0.4,
                    random: true,
                    animation: { enable: true, speed: 0.5, minimumValue: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ff3e3e",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 2 }
                }
            },
            retina_detect: false
        });
    }
});

window.addEventListener('error', function(e) {
    if (e.target.src) {
        console.warn('Failed to load script:', e.target.src);
        // Remove any loading states if present
        document.body.classList.remove('loading');
    }
}, true);
