// ============================================
// CIPAI - COGNITIVE INTELLIGENCE PLATFORM
// JavaScript Navigation & Interactivity
// ============================================

// ========== NAVIGATION SYSTEM ==========
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeButtons();
    initializeAnimations();
});

function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get target section
            const targetSection = this.getAttribute('data-section');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            const sectionToShow = document.getElementById(`section-${targetSection}`);
            if (sectionToShow) {
                sectionToShow.classList.add('active');
                
                // Scroll to top of content
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== BUTTON HANDLERS ==========
function initializeButtons() {
    // Historical button
    const btnHistorico = document.getElementById('btnHistorico');
    if (btnHistorico) {
        btnHistorico.addEventListener('click', function() {
            navigateTo('historico');
        });
    }
    
    // New Analysis button
    const btnNovaAnalise = document.getElementById('btnNovaAnalise');
    if (btnNovaAnalise) {
        btnNovaAnalise.addEventListener('click', function() {
            navigateTo('nova-decisao');
        });
    }
}

// ========== NAVIGATION HELPER ==========
function navigateTo(sectionId) {
    const navItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (navItem) {
        navItem.click();
    }
}

// Make navigateTo available globally for inline onclick handlers
window.navigateTo = navigateTo;

// ========== ANIMATIONS ==========
function initializeAnimations() {
    // Animate progress bars on load
    const progressFills = document.querySelectorAll('.progress-fill, .slider-fill, .criteria-fill, .readiness-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    progressFills.forEach(fill => {
        observer.observe(fill);
    });
}

// ========== METRIC CARDS HOVER EFFECTS ==========
document.addEventListener('DOMContentLoaded', function() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ========== LANGUAGE SELECTOR ==========
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        // In a real implementation, this would trigger translation
        console.log('Language changed to:', this.value);
        
        // Show notification (for demo purposes)
        showNotification(`Idioma alterado para: ${this.options[this.selectedIndex].text}`);
    });
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 1rem 1.5rem;
        box-shadow: var(--shadow-xl);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== SEARCH FUNCTIONALITY ==========
function initializeSearch() {
    // Placeholder for future search functionality
    console.log('Search functionality initialized');
}

// ========== EXPORT FUNCTIONALITY ==========
function exportToPDF() {
    // Placeholder for PDF export
    showNotification('Exportação de PDF em desenvolvimento', 'info');
}

function exportToExcel() {
    // Placeholder for Excel export
    showNotification('Exportação de Excel em desenvolvimento', 'info');
}

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Open search modal (to be implemented)
        console.log('Search shortcut triggered');
    }
    
    // Ctrl/Cmd + H for home
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        navigateTo('painel');
    }
});

// ========== LOAD STATE PERSISTENCE ==========
function saveState() {
    const activeSection = document.querySelector('.nav-item.active');
    if (activeSection) {
        const sectionId = activeSection.getAttribute('data-section');
        localStorage.setItem('cipai-active-section', sectionId);
    }
}

function loadState() {
    const savedSection = localStorage.getItem('cipai-active-section');
    if (savedSection) {
        navigateTo(savedSection);
    }
}

// Save state before page unload
window.addEventListener('beforeunload', saveState);

// Load state on page load
window.addEventListener('load', loadState);

// ========== PRINT FUNCTIONALITY ==========
function printCurrentSection() {
    window.print();
}

// ========== SHARE FUNCTIONALITY ==========
function shareAnalysis() {
    if (navigator.share) {
        navigator.share({
            title: 'CIPAI - Análise de Decisão',
            text: 'Confira esta análise do CIPAI',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy link to clipboard
        navigator.clipboard.writeText(window.location.href)
            .then(() => showNotification('Link copiado para área de transferência!'))
            .catch(err => console.error('Error copying:', err));
    }
}

// ========== TOOLTIP SYSTEM ==========
function initializeTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--bg-tertiary);
                border: 1px solid var(--border-color);
                padding: 0.5rem 1rem;
                border-radius: var(--radius-sm);
                font-size: 0.875rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            
            this.tooltipElement = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltipElement) {
                this.tooltipElement.remove();
                this.tooltipElement = null;
            }
        });
    });
}

// Initialize tooltips on load
document.addEventListener('DOMContentLoaded', initializeTooltips);

// ========== MODAL SYSTEM ==========
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'flex') {
                closeModal(modal.id);
            }
        });
    }
});

// ========== CONSOLE WELCOME MESSAGE ==========
console.log('%c🧠 CIPAI - Cognitive Intelligence Platform', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cVersion 2.3 - Master Final', 'font-size: 12px; color: #9ca3af;');
console.log('%cCenário 01: Dr. Eduardo - Dilema do Profissional Liberal', 'font-size: 14px; color: #60a5fa;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #2d3548;');

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
});

// ========== DEBUG MODE ==========
const DEBUG_MODE = false;

function debug(...args) {
    if (DEBUG_MODE) {
        console.log('[CIPAI Debug]', ...args);
    }
}

// Export functions for global use
window.cipai = {
    navigateTo,
    showNotification,
    exportToPDF,
    exportToExcel,
    printCurrentSection,
    shareAnalysis,
    openModal,
    closeModal,
    debug
};
