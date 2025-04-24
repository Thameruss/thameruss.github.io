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
        { text: '<span class="output">eJPT <br>CPTS - In Progress</span>', delay: 1000 },
        
        { text: '<span class="prompt"># Let\'s connect...</span>', delay: 800 },
        
        { text: '<span class="cursor"></span>', delay: 500 }
    ];
    
    // Function to animate typing
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
    ScrollReveal().reveal('.hero-content', {
        delay: 200,
        distance: '20px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.about-content, .skills-container', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100
    });
});
