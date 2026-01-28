/**
 * CIPAI - Router
 * Sistema de roteamento SPA
 */

export class Router {
    constructor(i18n) {
        this.i18n = i18n;
        this.currentPage = null;
        this.routes = {
            // Core
            'dashboard': () => import('./pages/dashboard-simple.js'),
            'decision-context': () => import('./pages/decision-context.js'),
            'new-decision': () => import('./pages/new-decision-complete.js'),
            'history': () => import('./pages/history-enhanced.js'),
            'compare': () => import('./pages/compare.js'),
            'personal-model': () => import('./pages/personal-model.js'),
            
            // Modules
            'cfo-module': () => import('./pages/cfo-module-complete.js'),
            'clo-module': () => import('./pages/clo-module-complete.js'),
            
            // Intelligence
            'decision-memory': () => import('./pages/decision-memory-complete.js'),
            'pattern-analysis': () => import('./pages/pattern-analysis-complete.js'),
            
            // System
            'settings': () => import('./pages/settings-complete.js'),
            
            // Scenarios (carregamento dinÃ¢mico)
            'scenario': () => import('./pages/scenario.js'),
            'scenario-hub': () => import('./pages/scenario-hub.js')
        };
    }

    init() {
        // Obter pÃ¡gina inicial da URL ou usar dashboard
        const hash = window.location.hash.slice(1) || 'dashboard';
        this.navigate(hash, false);
    }

    async navigate(page, pushState = true) {
        console.log(`ðŸ“ Navegando para: ${page}`);

        // Validar se a rota existe
        if (!this.routes[page] && !page.startsWith('scenario/')) {
            console.warn(`âš ï¸ Rota nÃ£o encontrada: ${page}`);
            page = 'dashboard';
        }

        // Atualizar URL
        if (pushState) {
            window.history.pushState({ page }, '', `#${page}`);
        }

        // Atualizar pÃ¡gina atual
        this.currentPage = page;

        // Disparar evento de mudanÃ§a de rota
        window.dispatchEvent(new CustomEvent('routechange', {
            detail: { page }
        }));

        // Carregar e renderizar pÃ¡gina
        await this.loadPage(page);
    }

    async loadPage(page) {
        const contentEl = document.getElementById('content');
        
        if (!contentEl) {
            console.error('âŒ Elemento #content nÃ£o encontrado');
            return;
        }

        try {
            // Mostrar loading
            contentEl.innerHTML = this.renderLoading();

            // Determinar qual mÃ³dulo carregar
            let pageModule;
            let pageData = null;

            if (page.startsWith('scenario/')) {
                // CenÃ¡rio especÃ­fico
                const scenarioId = page.split('/')[1];
                pageModule = await this.routes['scenario']();
                pageData = { scenarioId };
            } else {
                // PÃ¡gina normal
                pageModule = await this.routes[page]();
            }

            // Renderizar pÃ¡gina
            const pageContent = await pageModule.render(this.i18n, pageData);
            
            // Fade out loading, fade in content
            contentEl.style.opacity = '0';
            
            setTimeout(() => {
                contentEl.innerHTML = pageContent;
                contentEl.style.opacity = '1';
                
                // Inicializar listeners da pÃ¡gina
                if (pageModule.init) {
                    pageModule.init(this.i18n, pageData);
                }
            }, 200);

        } catch (error) {
            console.error(`âŒ Erro ao carregar pÃ¡gina ${page}:`, error);
            contentEl.innerHTML = this.renderError(error);
        }
    }

    handlePopState() {
        const hash = window.location.hash.slice(1) || 'dashboard';
        this.navigate(hash, false);
    }

    renderLoading() {
        return `
            <div class="page-loading">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-card"></div>
            </div>
        `;
    }

    renderError(error) {
        return `
            <div class="alert alert-danger">
                <span style="font-size: 24px;">âš ï¸</span>
                <div>
                    <strong>${this.i18n.t('messages.error.generic')}</strong>
                    <p>${error.message}</p>
                </div>
            </div>
        `;
    }
}
