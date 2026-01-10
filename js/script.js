// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Load saved theme preference
function loadTheme() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
}

// Tab Switching Functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Smooth Scroll Animation Observer
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Skill Tags Animation on Hover
function setupSkillAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Keyboard Navigation for Tabs
function setupKeyboardNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    document.addEventListener('keydown', (e) => {
        const activeTab = document.querySelector('.tab-btn.active');
        const currentIndex = Array.from(tabButtons).indexOf(activeTab);
        
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % tabButtons.length;
            tabButtons[nextIndex].click();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
            tabButtons[prevIndex].click();
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    setupTabs();
    setupScrollAnimations();
    setupSkillAnimations();
    setupKeyboardNavigation();
});

// Add event listener to theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Smooth scrolling for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Print functionality - show all tabs when printing
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.add('active');
    });
});

window.addEventListener('afterprint', () => {
    // Reset to only show active tab
    const activeTabButton = document.querySelector('.tab-btn.active');
    const targetTab = activeTabButton.getAttribute('data-tab');
    
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    document.getElementById(targetTab).classList.add('active');
});

// Optional: Add animation to achievements on scroll
function setupAchievementAnimations() {
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.achievement').forEach(achievement => {
        achievement.style.opacity = '0';
        achievement.style.transform = 'translateX(-20px)';
        achievementObserver.observe(achievement);
    });
}

// Initialize achievement animations
document.addEventListener('DOMContentLoaded', () => {
    setupAchievementAnimations();
});