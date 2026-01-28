/**
 * CIPAI - Internationalization (i18n)
 * Sistema de traduÃ§Ã£o e internacionalizaÃ§Ã£o
 */

export class I18n {
    constructor(lang = 'pt-br') {
        this.currentLang = lang;
        this.translations = {};
        this.fallbackLang = 'en';
    }

    async load() {
        try {
            console.log(`ðŸŒ Carregando idioma: ${this.currentLang}`);
            
            const response = await fetch(`assets/data/i18n/${this.currentLang}.json`);
            
            if (!response.ok) {
                throw new Error(`Falha ao carregar idioma ${this.currentLang}`);
            }

            this.translations = await response.json();
            console.log(`âœ… Idioma ${this.currentLang} carregado com sucesso`);
            
        } catch (error) {
            console.error(`âŒ Erro ao carregar idioma ${this.currentLang}:`, error);
            
            // Tentar carregar idioma de fallback
            if (this.currentLang !== this.fallbackLang) {
                console.log(`ðŸ”„ Tentando carregar idioma de fallback: ${this.fallbackLang}`);
                this.currentLang = this.fallbackLang;
                await this.load();
            } else {
                throw error;
            }
        }
    }

    async changeLang(lang) {
        this.currentLang = lang;
        await this.load();
        
        // Disparar evento de mudanÃ§a de idioma
        window.dispatchEvent(new CustomEvent('languagechange', {
            detail: { lang }
        }));
    }

    /**
     * Traduz uma chave
     * @param {string} key - Chave de traduÃ§Ã£o (ex: "nav.core.title")
     * @param {object} params - ParÃ¢metros para interpolaÃ§Ã£o (ex: {count: 5})
     * @returns {string} Texto traduzido
     */
    t(key, params = {}) {
        // Dividir chave em partes (ex: "nav.core.title" â†’ ["nav", "core", "title"])
        const keys = key.split('.');
        
        // Navegar pelo objeto de traduÃ§Ãµes
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`âš ï¸ TraduÃ§Ã£o nÃ£o encontrada: ${key}`);
                return key; // Retornar a chave se nÃ£o encontrar traduÃ§Ã£o
            }
        }

        // Se o valor nÃ£o for string, retornar a chave
        if (typeof value !== 'string') {
            console.warn(`âš ï¸ TraduÃ§Ã£o nÃ£o Ã© string: ${key}`);
            return key;
        }

        // Interpolar parÃ¢metros
        return this.interpolate(value, params);
    }

    /**
     * Interpola parÃ¢metros em uma string
     * @param {string} str - String com placeholders (ex: "{{count}} items")
     * @param {object} params - ParÃ¢metros (ex: {count: 5})
     * @returns {string} String interpolada
     */
    interpolate(str, params) {
        return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return params[key] !== undefined ? params[key] : match;
        });
    }

    /**
     * Retorna traduÃ§Ã£o com fallback
     * @param {string} key - Chave de traduÃ§Ã£o
     * @param {string} fallback - Texto de fallback
     * @param {object} params - ParÃ¢metros
     * @returns {string} Texto traduzido ou fallback
     */
    tOr(key, fallback, params = {}) {
        const translation = this.t(key, params);
        return translation === key ? fallback : translation;
    }

    /**
     * Verifica se uma traduÃ§Ã£o existe
     * @param {string} key - Chave de traduÃ§Ã£o
     * @returns {boolean}
     */
    has(key) {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return false;
            }
        }
        
        return typeof value === 'string';
    }

    /**
     * Retorna idioma atual
     * @returns {string}
     */
    getLang() {
        return this.currentLang;
    }

    /**
     * Retorna idioma em formato legÃ­vel
     * @returns {string}
     */
    getLangName() {
        const names = {
            'pt-br': 'PortuguÃªs',
            'en': 'English',
            'es': 'EspaÃ±ol'
        };
        return names[this.currentLang] || this.currentLang;
    }

    /**
     * Lista idiomas disponÃ­veis
     * @returns {Array}
     */
    getAvailableLanguages() {
        return [
            { code: 'pt-br', name: 'PortuguÃªs', flag: 'ðŸ‡§ðŸ‡·' },
            { code: 'en', name: 'English', flag: 'ðŸ‡ºðŸ‡¸' }
        ];
    }
}
