/**
 * CIPAI - Scenario Hub (Demo Selection)
 * Hub para escolha de cenÃ¡rios de demonstraÃ§Ã£o
 */

import { renderHeader } from '../components.js';

export async function render(i18n) {
    const isPt = i18n.getLang() === 'pt-br';
    
    const header = renderHeader(
        isPt ? 'ðŸŽ¯ Escolha um CenÃ¡rio de DemonstraÃ§Ã£o' : 'ðŸŽ¯ Choose a Demo Scenario',
        isPt ? 'Explore diferentes tipos de decisÃµes com anÃ¡lises completas da IA' : 'Explore different types of decisions with complete AI analyses',
        []
    );

    return `
        ${header}
        <div class="animate-in">
            <!-- Intro Banner -->
            <div class="demo-intro-banner">
                <div class="demo-intro-icon">ðŸŽ­</div>
                <div class="demo-intro-content">
                    <h2>${isPt ? 'DemonstraÃ§Ãµes Interativas CIPAI' : 'CIPAI Interactive Demonstrations'}</h2>
                    <p>${isPt 
                        ? 'Cada cenÃ¡rio demonstra as capacidades completas do sistema: anÃ¡lise multi-dimensional, raciocÃ­nio transparente, avaliaÃ§Ã£o de trade-offs e recomendaÃ§Ãµes contextualizadas. Escolha um cenÃ¡rio abaixo para explorar.'
                        : 'Each scenario demonstrates the system\'s complete capabilities: multi-dimensional analysis, transparent reasoning, trade-off evaluation, and contextualized recommendations. Choose a scenario below to explore.'
                    }</p>
                </div>
            </div>

            <!-- Scenarios Grid -->
            <div class="demo-scenarios-grid">
                <!-- Scenario 1: CTO Hire -->
                <div class="demo-scenario-card" onclick="window.router.navigate('scenario', { demo: 'cto-hire' })">
                    <div class="demo-scenario-icon">ðŸ‘¨â€ðŸ’¼</div>
                    <div class="demo-scenario-badge demo-badge-people">${isPt ? 'PESSOAS' : 'PEOPLE'}</div>
                    <h3 class="demo-scenario-title">${isPt ? 'ContrataÃ§Ã£o de CTO' : 'CTO Hire Decision'}</h3>
                    <p class="demo-scenario-desc">
                        ${isPt
                            ? 'DecisÃ£o crÃ­tica de contrataÃ§Ã£o: escolher entre candidato tÃ©cnico sÃ³lido vs lÃ­der com experiÃªncia de scaling. AnÃ¡lise de fit cultural, risco tÃ©cnico e impacto organizacional.'
                            : 'Critical hiring decision: choosing between solid technical candidate vs leader with scaling experience. Analysis of cultural fit, technical risk, and organizational impact.'
                        }
                    </p>
                    <div class="demo-scenario-meta">
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">ðŸ“Š</span>
                            <span class="demo-meta-text">${isPt ? '3 opÃ§Ãµes' : '3 options'}</span>
                        </div>
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">â±ï¸</span>
                            <span class="demo-meta-text">${isPt ? '5 min' : '5 min'}</span>
                        </div>
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">ðŸŽ¯</span>
                            <span class="demo-meta-text">${isPt ? 'Complexidade: MÃ©dia' : 'Complexity: Medium'}</span>
                        </div>
                    </div>
                    <button class="demo-scenario-btn">${isPt ? 'â–¶ï¸ Ver DemonstraÃ§Ã£o' : 'â–¶ï¸ View Demo'}</button>
                </div>

                <!-- Scenario 2: SAFE vs Priced Round -->
                <div class="demo-scenario-card" onclick="window.router.navigate('scenario', { demo: 'safe-vs-priced' })">
                    <div class="demo-scenario-icon">ðŸ’°</div>
                    <div class="demo-scenario-badge demo-badge-financial">${isPt ? 'FINANCEIRO' : 'FINANCIAL'}</div>
                    <h3 class="demo-scenario-title">${isPt ? 'SAFE vs Rodada Precificada' : 'SAFE vs Priced Round'}</h3>
                    <p class="demo-scenario-desc">
                        ${isPt
                            ? 'DecisÃ£o de estrutura de captaÃ§Ã£o: nota conversÃ­vel (SAFE) com menos diluiÃ§Ã£o imediata vs rodada precificada com mais clareza. AnÃ¡lise financeira profunda com projeÃ§Ãµes multi-ano.'
                            : 'Fundraising structure decision: convertible note (SAFE) with less immediate dilution vs priced round with more clarity. Deep financial analysis with multi-year projections.'
                        }
                    </p>
                    <div class="demo-scenario-meta">
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">ðŸ“Š</span>
                            <span class="demo-meta-text">${isPt ? '2 opÃ§Ãµes' : '2 options'}</span>
                        </div>
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">â±ï¸</span>
                            <span class="demo-meta-text">${isPt ? '7 min' : '7 min'}</span>
                        </div>
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">ðŸŽ¯</span>
                            <span class="demo-meta-text">${isPt ? 'Complexidade: Alta' : 'Complexity: High'}</span>
                        </div>
                    </div>
                    <button class="demo-scenario-btn">${isPt ? 'â–¶ï¸ Ver DemonstraÃ§Ã£o' : 'â–¶ï¸ View Demo'}</button>
                </div>

                <!-- Scenario 3: GTM Strategy -->
                <div class="demo-scenario-card" onclick="window.router.navigate('scenario', { demo: 'gtm-strategy' })">
                    <div class="demo-scenario-icon">ðŸš€</div>
                    <div class="demo-scenario-badge demo-badge-strategic">${isPt ? 'ESTRATÃ‰GICO' : 'STRATEGIC'}</div>
                    <h3 class="demo-scenario-title">${isPt ? 'EstratÃ©gia Go-to-Market' : 'Go-to-Market Strategy'}</h3>
                    <p class="demo-scenario-desc">
                        ${isPt
                            ? 'DecisÃ£o estratÃ©gica de GTM: PLG (product-led growth) vs Sales-led vs hÃ­brido. AnÃ¡lise de CAC, LTV, time-to-revenue e fit com produto/mercado.'
                            : 'Strategic GTM decision: PLG (product-led growth) vs Sales-led vs hybrid. Analysis of CAC, LTV, time-to-revenue, and product/market fit.'
                        }
                    </p>
                    <div class="demo-scenario-meta">
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">ðŸ“Š</span>
                            <span class="demo-meta-text">${isPt ? '3 opÃ§Ãµes' : '3 options'}</span>
                        </div>
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">â±ï¸</span>
                            <span class="demo-meta-text">${isPt ? '6 min' : '6 min'}</span>
                        </div>
                        <div class="demo-meta-item">
                            <span class="demo-meta-icon">ðŸŽ¯</span>
                            <span class="demo-meta-text">${isPt ? 'Complexidade: Alta' : 'Complexity: High'}</span>
                        </div>
                    </div>
                    <button class="demo-scenario-btn">${isPt ? 'â–¶ï¸ Ver DemonstraÃ§Ã£o' : 'â–¶ï¸ View Demo'}</button>
                </div>
            </div>

            <!-- Feature Highlights -->
            <div class="demo-features-section">
                <h3 class="demo-features-title">${isPt ? 'âœ¨ O Que VocÃª VerÃ¡ em Cada DemonstraÃ§Ã£o' : 'âœ¨ What You\'ll See in Each Demo'}</h3>
                <div class="demo-features-grid">
                    <div class="demo-feature-card">
                        <div class="demo-feature-icon">ðŸ§ </div>
                        <div class="demo-feature-title">${isPt ? 'Cadeia de RaciocÃ­nio Completa' : 'Complete Reasoning Chain'}</div>
                        <div class="demo-feature-desc">${isPt ? 'Veja exatamente como a IA chegou Ã s suas conclusÃµes, passo a passo' : 'See exactly how AI reached its conclusions, step by step'}</div>
                    </div>
                    <div class="demo-feature-card">
                        <div class="demo-feature-icon">ðŸ“Š</div>
                        <div class="demo-feature-title">${isPt ? 'AnÃ¡lise Multi-Dimensional' : 'Multi-Dimensional Analysis'}</div>
                        <div class="demo-feature-desc">${isPt ? 'Financeiro, jurÃ­dico, estratÃ©gico, pessoas - todos os Ã¢ngulos considerados' : 'Financial, legal, strategic, people - all angles considered'}</div>
                    </div>
                    <div class="demo-feature-card">
                        <div class="demo-feature-icon">âš–ï¸</div>
                        <div class="demo-feature-title">${isPt ? 'AvaliaÃ§Ã£o de Trade-offs' : 'Trade-off Evaluation'}</div>
                        <div class="demo-feature-desc">${isPt ? 'Entenda as vantagens e desvantagens de cada opÃ§Ã£o claramente' : 'Understand advantages and disadvantages of each option clearly'}</div>
                    </div>
                    <div class="demo-feature-card">
                        <div class="demo-feature-icon">ðŸŽ¯</div>
                        <div class="demo-feature-title">${isPt ? 'Scoring de ConfianÃ§a' : 'Confidence Scoring'}</div>
                        <div class="demo-feature-desc">${isPt ? 'Saiba o quÃ£o confiante a IA estÃ¡ em cada recomendaÃ§Ã£o e por quÃª' : 'Know how confident AI is in each recommendation and why'}</div>
                    </div>
                    <div class="demo-feature-card">
                        <div class="demo-feature-icon">âš¡</div>
                        <div class="demo-feature-title">${isPt ? 'AnÃ¡lise de Sensibilidade' : 'Sensitivity Analysis'}</div>
                        <div class="demo-feature-desc">${isPt ? 'Descubra quais premissas sÃ£o crÃ­ticas e o que mudaria a recomendaÃ§Ã£o' : 'Discover which assumptions are critical and what would change recommendation'}</div>
                    </div>
                    <div class="demo-feature-card">
                        <div class="demo-feature-icon">ðŸ‘¤</div>
                        <div class="demo-feature-title">${isPt ? 'Autoridade Humana Final' : 'Final Human Authority'}</div>
                        <div class="demo-feature-desc">${isPt ? 'VocÃª sempre mantÃ©m a decisÃ£o final - IA apenas recomenda e explica' : 'You always retain final decision - AI only recommends and explains'}</div>
                    </div>
                </div>
            </div>

            <!-- Back Button -->
            <div class="demo-back-section">
                <button class="btn btn-secondary" onclick="window.router.navigate('dashboard')">
                    â† ${isPt ? 'Voltar ao Dashboard' : 'Back to Dashboard'}
                </button>
            </div>
        </div>
    `;
}

export function init(i18n) {
    console.log('âœ… Scenario Hub inicializado');
}
