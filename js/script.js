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

// Experience Card Toggle Functionality
function setupExperienceToggles() {
    const companyCards = document.querySelectorAll('.company-card');
    
    companyCards.forEach(card => {
        const header = card.querySelector('.company-header');
        const toggleBtn = card.querySelector('.toggle-btn');
        
        header.addEventListener('click', () => {
            // Close all other cards
            companyCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });
            
            // Toggle current card
            card.classList.toggle('active');
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

// Company Card Keyboard Navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close all open company cards on ESC
            document.querySelectorAll('.company-card.active').forEach(card => {
                card.classList.remove('active');
            });
        }
    });
}

// Auto-expand first company card on load
function autoExpandFirstCard() {
    const firstCard = document.querySelector('.company-card');
    if (firstCard) {
        setTimeout(() => {
            firstCard.classList.add('active');
        }, 500);
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    setupExperienceToggles();
    setupScrollAnimations();
    setupSkillAnimations();
    setupKeyboardNavigation();
    autoExpandFirstCard();
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

// Print functionality - expand all cards before printing
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.company-card').forEach(card => {
        card.classList.add('active');
    });
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