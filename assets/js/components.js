/**
 * CIPAI - Components
 * Componentes reutilizÃ¡veis da interface
 */

/**
 * Renderiza a sidebar de navegaÃ§Ã£o
 */
export function renderSidebar(i18n, currentPage = 'dashboard') {
    const navSections = [
        {
            title: i18n.t('nav.core.title'),
            items: [
                { id: 'decision-context', icon: 'ðŸŽ¯', label: i18n.t('nav.core.items.context') },
                { id: 'dashboard', icon: 'ðŸ§ ', label: i18n.t('nav.core.items.dashboard') },
                { id: 'scenario-hub', icon: 'ðŸŽ­', label: i18n.getLang() === 'pt-br' ? 'DemonstraÃ§Ãµes' : 'Demos' },
                { id: 'personal-model', icon: 'ðŸ‘¤', label: i18n.t('nav.core.items.personalModel') },
                { id: 'new-decision', icon: 'âž•', label: i18n.t('nav.core.items.newDecision') },
                { id: 'history', icon: 'ðŸ“Š', label: i18n.t('nav.core.items.history') },
                { id: 'compare', icon: 'ðŸ”„', label: i18n.t('nav.core.items.compare') }
            ]
        },
        {
            title: i18n.t('nav.modules.title'),
            items: [
                { id: 'cfo-module', icon: 'ðŸ’°', label: i18n.t('nav.modules.items.cfo') },
                { id: 'clo-module', icon: 'âš–ï¸', label: i18n.t('nav.modules.items.clo') }
            ]
        },
        {
            title: i18n.t('nav.intelligence.title'),
            items: [
                { id: 'decision-memory', icon: 'ðŸ§©', label: i18n.t('nav.intelligence.items.memory') },
                { id: 'pattern-analysis', icon: 'ðŸ“ˆ', label: i18n.t('nav.intelligence.items.patterns') }
            ]
        },
        {
            title: i18n.t('nav.system.title'),
            items: [
                { id: 'settings', icon: 'âš™ï¸', label: i18n.t('nav.system.items.settings') }
            ]
        }
    ];

    const sectionsHTML = navSections.map(section => `
        <div class="nav-section">
            <div class="nav-section-title">${section.title}</div>
            ${section.items.map(item => `
                <a href="#${item.id}" 
                   class="nav-item ${item.id === currentPage ? 'active' : ''}" 
                   data-page="${item.id}">
                    <span class="nav-icon">${item.icon}</span>
                    ${item.label}
                </a>
            `).join('')}
        </div>
    `).join('');

    return `
        <aside class="sidebar">
            <div class="logo">
                <h1>CIPAI</h1>
                <div class="tagline">${i18n.t('app.tagline')}</div>
            </div>
            
            <nav class="nav">
                ${sectionsHTML}
            </nav>

            <!-- Language Selector -->
            <div class="sidebar-footer">
                ${renderLanguageSelector(i18n)}
            </div>
        </aside>
    `;
}

/**
 * Renderiza o header de uma pÃ¡gina
 */
export function renderHeader(title, subtitle, actions = []) {
    const actionsHTML = actions.map(action => `
        <button class="btn ${action.class || 'btn-secondary'}" 
                onclick="${action.onClick}"
                ${action.disabled ? 'disabled' : ''}>
            ${action.icon ? `<span>${action.icon}</span>` : ''}
            ${action.label}
        </button>
    `).join('');

    return `
        <header class="header">
            <div>
                <div class="header-title">${title}</div>
                ${subtitle ? `<div class="header-subtitle">${subtitle}</div>` : ''}
            </div>
            ${actions.length > 0 ? `
                <div class="header-actions">
                    ${actionsHTML}
                </div>
            ` : ''}
        </header>
    `;
}

/**
 * Renderiza um card
 */
export function renderCard({ title, subtitle, content, footer, className = '' }) {
    return `
        <div class="card ${className}">
            ${title || subtitle ? `
                <div class="card-header">
                    ${title ? `<div class="card-title">${title}</div>` : ''}
                    ${subtitle ? `<div class="card-subtitle">${subtitle}</div>` : ''}
                </div>
            ` : ''}
            ${content ? `<div class="card-body">${content}</div>` : ''}
            ${footer ? `<div class="card-footer">${footer}</div>` : ''}
        </div>
    `;
}

/**
 * Renderiza um card de mÃ©trica cognitiva
 */
export function renderCognitiveCard({ label, value, badge, details = [], className = '' }) {
    const detailsHTML = details.map(detail => `
        <div class="cognitive-detail">
            <span>${detail.icon}</span>
            <span>${detail.text}</span>
        </div>
    `).join('');

    return `
        <div class="cognitive-card ${className}">
            <div class="cognitive-header">
                <div>
                    <div class="cognitive-label">${label}</div>
                    <div class="cognitive-value">${value}</div>
                </div>
                ${badge ? `<div class="badge ${badge.class}">${badge.text}</div>` : ''}
            </div>
            ${detailsHTML}
        </div>
    `;
}

/**
 * Renderiza barra de confianÃ§a
 */
export function renderConfidenceBar(value, showPercentage = true) {
    return `
        <div class="confidence-bar">
            <div class="confidence-fill" style="width: ${value}%;"></div>
        </div>
        ${showPercentage ? `
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
                ${value}% de confianÃ§a
            </div>
        ` : ''}
    `;
}

/**
 * Renderiza badge
 */
export function renderBadge(text, type = 'info') {
    const typeClass = `badge-${type}`; // badge-high, badge-medium, badge-low, badge-info
    return `<span class="badge ${typeClass}">${text}</span>`;
}

/**
 * Renderiza um alerta
 */
export function renderAlert({ type = 'info', icon, title, message }) {
    return `
        <div class="alert alert-${type}">
            ${icon ? `<span style="font-size: 24px;">${icon}</span>` : ''}
            <div>
                ${title ? `<strong>${title}</strong>` : ''}
                ${message ? `<p>${message}</p>` : ''}
            </div>
        </div>
    `;
}

/**
 * Renderiza modal
 */
export function renderModal({ id, title, content, footer, size = 'medium' }) {
    return `
        <div class="modal-overlay" id="${id}">
            <div class="modal modal-${size}">
                <div class="modal-header">
                    <div class="modal-title">${title}</div>
                    <button class="modal-close" onclick="closeModal('${id}')">Ã—</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                ${footer ? `
                    <div class="modal-footer">
                        ${footer}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

/**
 * Renderiza um cenÃ¡rio/alternativa
 */
export function renderScenario({ name, score, advantages, risks, recommended = false }) {
    const advantagesHTML = advantages.map(adv => `<li>${adv}</li>`).join('');
    const risksHTML = risks.map(risk => `<li>${risk}</li>`).join('');

    let scoreColor = 'var(--danger)';
    if (score >= 7) scoreColor = 'var(--success)';
    else if (score >= 5) scoreColor = 'var(--warning)';

    return `
        <div class="tradeoff-option ${recommended ? 'recommended' : ''}">
            <div class="tradeoff-header">
                <div class="tradeoff-name">${name}</div>
                <div class="tradeoff-score" style="color: ${scoreColor};">${score}/10</div>
            </div>
            
            <div class="tradeoff-list-title">Vantagens</div>
            <ul class="tradeoff-list">
                ${advantagesHTML}
            </ul>
            
            <div class="tradeoff-list-title">Riscos</div>
            <ul class="tradeoff-list">
                ${risksHTML}
            </ul>
        </div>
    `;
}

/**
 * Renderiza seletor de idioma
 */
export function renderLanguageSelector(i18n) {
    const languages = i18n.getAvailableLanguages();
    const currentLang = i18n.getLang();

    return `
        <div class="language-selector">
            <select id="language-select" class="form-select" onchange="changeLanguage(this.value)">
                ${languages.map(lang => `
                    <option value="${lang.code}" ${lang.code === currentLang ? 'selected' : ''}>
                        ${lang.flag} ${lang.name}
                    </option>
                `).join('')}
            </select>
        </div>
    `;
}

/**
 * Renderiza skeleton loading
 */
export function renderSkeleton(type = 'card') {
    const skeletons = {
        text: '<div class="skeleton skeleton-text"></div>',
        title: '<div class="skeleton skeleton-title"></div>',
        card: '<div class="skeleton skeleton-card"></div>',
        full: `
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-card"></div>
        `
    };

    return skeletons[type] || skeletons.full;
}

/**
 * FunÃ§Ãµes auxiliares globais
 */
window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
    }
};

window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
    }
};

window.changeLanguage = function(lang) {
    // Evitar disparar evento se jÃ¡ estÃ¡ no idioma selecionado
    const currentLang = localStorage.getItem('cipai_language') || 'pt-br';
    if (lang === currentLang) {
        return;
    }
    
    window.dispatchEvent(new CustomEvent('languagechange', {
        detail: { lang }
    }));
};
