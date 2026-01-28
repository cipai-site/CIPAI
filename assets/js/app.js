/**
 * CIPAI - AplicaÃ§Ã£o Principal
 * Sistema SPA (Single Page Application)
 */

import { Router } from './router.js';
import { I18n } from './i18n.js';
import { renderSidebar, renderHeader } from './components.js';

class App {
    constructor() {
        this.router = null;
        this.i18n = null;
        this.currentLang = 'pt-br';
        this.currentPage = 'dashboard';
    }

    async init() {
        console.log('ðŸš€ Inicializando CIPAI...');

        try {
            // 1. Inicializar i18n
            await this.initI18n();

            // 2. Renderizar estrutura base
            this.renderBaseLayout();

            // 3. Inicializar router
            this.initRouter();

            // 4. Configurar event listeners
            this.setupEventListeners();

            // 5. Remover loading screen
            this.hideLoadingScreen();

            console.log('âœ… CIPAI inicializado com sucesso!');
        } catch (error) {
            console.error('âŒ Erro ao inicializar CIPAI:', error);
            this.showError(error);
        }
    }

    async initI18n() {
        // Verificar idioma salvo no localStorage
        const savedLang = localStorage.getItem('cipai_language') || 'pt-br';
        this.currentLang = savedLang;

        // Inicializar sistema i18n
        this.i18n = new I18n(this.currentLang);
        await this.i18n.load();

        // Atualizar atributo lang do HTML
        document.documentElement.lang = this.currentLang;
    }

    renderBaseLayout() {
        const app = document.getElementById('app');
        
        // Limpar loading screen
        app.innerHTML = '';

        // Criar estrutura base
        const container = document.createElement('div');
        container.className = 'container';
        container.innerHTML = `
            ${renderSidebar(this.i18n, this.currentPage)}
            <main class="main">
                <div id="header"></div>
                <div id="content" class="content"></div>
            </main>
        `;

        app.appendChild(container);
    }

    initRouter() {
        this.router = new Router(this.i18n);
        this.router.init();

        // Listener para mudanÃ§as de rota
        window.addEventListener('routechange', (e) => {
            this.currentPage = e.detail.page;
            this.updateActiveNav();
        });
    }

    setupEventListeners() {
        // Listener para troca de idioma
        window.addEventListener('languagechange', async (e) => {
            const newLang = e.detail.lang;
            
            // Evitar loop se jÃ¡ estÃ¡ no idioma correto
            if (newLang === this.currentLang) {
                return;
            }
            
            this.currentLang = newLang;
            localStorage.setItem('cipai_language', this.currentLang);
            document.documentElement.lang = this.currentLang;

            // Recarregar i18n
            await this.i18n.changeLang(this.currentLang);

            // Re-renderizar sidebar com novo idioma
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.outerHTML = renderSidebar(this.i18n, this.currentPage);
            }

            // Re-renderizar conteÃºdo
            await this.router.navigate(this.currentPage, false);
        });

        // Listener para navegaÃ§Ã£o na sidebar
        document.addEventListener('click', (e) => {
            const navItem = e.target.closest('.nav-item');
            if (navItem && navItem.dataset.page) {
                e.preventDefault();
                this.router.navigate(navItem.dataset.page);
            }
        });

        // Listener para voltar/avanÃ§ar do navegador
        window.addEventListener('popstate', () => {
            this.router.handlePopState();
        });
    }

    updateActiveNav() {
        // Remover active de todos os itens
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Adicionar active no item atual
        const currentItem = document.querySelector(`[data-page="${this.currentPage}"]`);
        if (currentItem) {
            currentItem.classList.add('active');
        }
    }

    hideLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hide');
            setTimeout(() => loadingScreen.remove(), 300);
        }
    }

    showError(error) {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="error-screen">
                <div class="error-content">
                    <div class="error-icon">âš ï¸</div>
                    <div class="error-title">Erro ao Carregar CIPAI</div>
                    <div class="error-message">${error.message}</div>
                    <button class="btn btn-primary" onclick="location.reload()">
                        ðŸ”„ Recarregar
                    </button>
                </div>
            </div>
        `;
    }
}

// Inicializar aplicaÃ§Ã£o quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});

// Expor App globalmente para debug
window.CIPAI = App;
