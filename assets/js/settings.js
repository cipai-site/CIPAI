/**
 * CIPAI - Settings Page COMPLETO
 */

import { renderHeader } from '../components.js';

export async function render(i18n) {
    const isPt = i18n.getLang() === 'pt-br';
    
    const header = renderHeader(
        isPt ? 'âš™ï¸ ConfiguraÃ§Ãµes' : 'âš™ï¸ Settings',
        isPt ? 'PreferÃªncias do sistema, idioma e exportaÃ§Ã£o de dados' : 'System preferences, language, and data export',
        []
    );

    return `
        ${header}
        <div class="animate-in">
            <div class="settings-container">
                <!-- Language Settings -->
                <div class="settings-section">
                    <h3 class="settings-section-title">${isPt ? 'ðŸŒ Idioma' : 'ðŸŒ Language'}</h3>
                    <div class="settings-option">
                        <div class="settings-option-info">
                            <div class="settings-option-label">${isPt ? 'Idioma da Interface' : 'Interface Language'}</div>
                            <div class="settings-option-desc">${isPt ? 'Alterar idioma de todo o sistema' : 'Change system-wide language'}</div>
                        </div>
                        <div class="settings-option-control">
                            <select class="settings-select" onchange="window.i18n.setLang(this.value); window.router.refresh();">
                                <option value="pt-br" ${isPt ? 'selected' : ''}>PortuguÃªs (BR)</option>
                                <option value="en" ${!isPt ? 'selected' : ''}>English</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Notifications -->
                <div class="settings-section">
                    <h3 class="settings-section-title">${isPt ? 'ðŸ”” NotificaÃ§Ãµes' : 'ðŸ”” Notifications'}</h3>
                    <div class="settings-option">
                        <div class="settings-option-info">
                            <div class="settings-option-label">${isPt ? 'NotificaÃ§Ãµes por Email' : 'Email Notifications'}</div>
                            <div class="settings-option-desc">${isPt ? 'Receber atualizaÃ§Ãµes de anÃ¡lises por email' : 'Receive analysis updates via email'}</div>
                        </div>
                        <div class="settings-option-control">
                            <label class="toggle">
                                <input type="checkbox" checked>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                    <div class="settings-option">
                        <div class="settings-option-info">
                            <div class="settings-option-label">${isPt ? 'NotificaÃ§Ãµes Push' : 'Push Notifications'}</div>
                            <div class="settings-option-desc">${isPt ? 'Receber alertas no navegador' : 'Receive browser alerts'}</div>
                        </div>
                        <div class="settings-option-control">
                            <label class="toggle">
                                <input type="checkbox">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Data Export -->
                <div class="settings-section">
                    <h3 class="settings-section-title">${isPt ? 'ðŸ’¾ ExportaÃ§Ã£o de Dados' : 'ðŸ’¾ Data Export'}</h3>
                    <div class="settings-option">
                        <div class="settings-option-info">
                            <div class="settings-option-label">${isPt ? 'Exportar DecisÃµes' : 'Export Decisions'}</div>
                            <div class="settings-option-desc">${isPt ? 'Baixar todas as decisÃµes e anÃ¡lises em formato JSON' : 'Download all decisions and analyses in JSON format'}</div>
                        </div>
                        <div class="settings-option-control">
                            <button class="btn btn-secondary" onclick="alert('${isPt ? 'Exportando dados...' : 'Exporting data...'}')">
                                ${isPt ? 'ðŸ“¥ Exportar JSON' : 'ðŸ“¥ Export JSON'}
                            </button>
                        </div>
                    </div>
                    <div class="settings-option">
                        <div class="settings-option-info">
                            <div class="settings-option-label">${isPt ? 'Exportar Modelo Pessoal' : 'Export Personal Model'}</div>
                            <div class="settings-option-desc">${isPt ? 'Baixar seu PDM (valores, restriÃ§Ãµes, padrÃµes)' : 'Download your PDM (values, constraints, patterns)'}</div>
                        </div>
                        <div class="settings-option-control">
                            <button class="btn btn-secondary" onclick="alert('${isPt ? 'Exportando PDM...' : 'Exporting PDM...'}')">
                                ${isPt ? 'ðŸ“¥ Exportar PDM' : 'ðŸ“¥ Export PDM'}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- About -->
                <div class="settings-section">
                    <h3 class="settings-section-title">${isPt ? 'â„¹ï¸ Sobre o Sistema' : 'â„¹ï¸ About System'}</h3>
                    <div class="about-box">
                        <div class="about-logo">ðŸ§  CIPAI</div>
                        <div class="about-title">${isPt ? 'Sistema de InteligÃªncia Cognitiva para DecisÃ£o Pessoal' : 'Cognitive Intelligence for Personal AI Decision System'}</div>
                        <div class="about-version">${isPt ? 'VersÃ£o' : 'Version'} 2.0.0</div>
                        <div class="about-desc">
                            ${isPt
                                ? 'CIPAI Ã© um sistema de apoio Ã  decisÃ£o baseado em IA que integra anÃ¡lise financeira, jurÃ­dica e estratÃ©gica para fornecer recomendaÃ§Ãµes contextualizadas mantendo autoridade humana final.'
                                : 'CIPAI is an AI-powered decision support system that integrates financial, legal, and strategic analysis to provide contextualized recommendations while maintaining final human authority.'
                            }
                        </div>
                        <div class="about-features">
                            <div class="about-feature">âœ… ${isPt ? 'AnÃ¡lise multi-dimensional' : 'Multi-dimensional analysis'}</div>
                            <div class="about-feature">âœ… ${isPt ? 'MemÃ³ria de decisÃµes longitudinal' : 'Longitudinal decision memory'}</div>
                            <div class="about-feature">âœ… ${isPt ? 'Reconhecimento de padrÃµes' : 'Pattern recognition'}</div>
                            <div class="about-feature">âœ… ${isPt ? 'TransparÃªncia e rastreabilidade' : 'Transparency and traceability'}</div>
                        </div>
                    </div>
                </div>

                <!-- Danger Zone -->
                <div class="settings-section danger-zone">
                    <h3 class="settings-section-title">${isPt ? 'âš ï¸ Zona de Perigo' : 'âš ï¸ Danger Zone'}</h3>
                    <div class="settings-option">
                        <div class="settings-option-info">
                            <div class="settings-option-label">${isPt ? 'Limpar Todas as DecisÃµes' : 'Clear All Decisions'}</div>
                            <div class="settings-option-desc">${isPt ? 'Remove permanentemente todas as decisÃµes e anÃ¡lises' : 'Permanently removes all decisions and analyses'}</div>
                        </div>
                        <div class="settings-option-control">
                            <button class="btn btn-danger" onclick="if(confirm('${isPt ? 'Tem certeza? Esta aÃ§Ã£o nÃ£o pode ser desfeita.' : 'Are you sure? This action cannot be undone.'}')) alert('${isPt ? 'Funcionalidade em desenvolvimento' : 'Feature in development'}')">
                                ${isPt ? 'ðŸ—‘ï¸ Limpar Dados' : 'ðŸ—‘ï¸ Clear Data'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function init(i18n) {
    console.log('âœ… Settings COMPLETO inicializado');
}
