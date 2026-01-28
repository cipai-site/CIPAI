/**
 * CIPAI - Dashboard Page (COMPLETO - Fiel ao Demo 2)
 * PÃ¡gina principal com anÃ¡lise ativa detalhada
 */

import { renderHeader } from '../components.js';

export async function render(i18n) {
    const isPt = i18n.getLang() === 'pt-br';
    
    const header = renderHeader(
        isPt ? 'Painel Cognitivo' : 'Cognitive Dashboard',
        isPt ? 'VisÃ£o geral do raciocÃ­nio da IA e inteligÃªncia de decisÃ£o' : 'AI reasoning and decision intelligence overview',
        [
            {
                icon: 'ðŸ“Š',
                label: isPt ? 'HistÃ³rico' : 'History',
                class: 'btn-secondary',
                onClick: "window.location.hash='history'"
            },
            {
                icon: 'âž•',
                label: isPt ? 'Nova AnÃ¡lise' : 'New Analysis',
                class: 'btn-primary',
                onClick: "window.location.hash='new-decision'"
            }
        ]
    );

    // AI Status
    const aiStatus = `
        <div class="ai-status animate-in">
            <div class="ai-status-icon">ðŸ§ </div>
            <div class="ai-status-content">
                <div class="ai-status-title">${isPt ? 'Sistema IA Ativo' : 'AI System Active'}</div>
                <div class="ai-status-text">
                    ${isPt 
                        ? 'Processando 2 decisÃµes ativas â€¢ 8 premissas validadas hoje â€¢ MemÃ³ria de decisÃ£o: 47 cenÃ¡rios indexados'
                        : 'Processing 2 active decisions â€¢ 8 assumptions validated today â€¢ Decision memory: 47 scenarios indexed'
                    }
                </div>
            </div>
            <div class="cognitive-badge badge-high">${isPt ? 'OPERACIONAL' : 'OPERATIONAL'}</div>
        </div>
    `;

    // MÃ©tricas Cognitivas (4 cards)
    const metrics = `
        <div class="cognitive-grid">
            <!-- Card 1: AI Confidence -->
            <div class="cognitive-card animate-in animate-delay-1">
                <div class="cognitive-header">
                    <div>
                        <div class="cognitive-label">${isPt ? 'ConfianÃ§a da IA (MÃ©dia)' : 'AI Confidence (Avg)'}</div>
                        <div class="cognitive-value">78<span style="font-size: 24px; color: var(--text-muted);">%</span></div>
                    </div>
                    <div class="cognitive-badge badge-high">${isPt ? 'ALTA' : 'HIGH'}</div>
                </div>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: 78%;"></div>
                </div>
                <div class="cognitive-detail">
                    <span>ðŸ“Š</span>
                    <span>${isPt ? 'Baseado em 47 cenÃ¡rios analisados' : 'Based on 47 analyzed scenarios'}</span>
                </div>
                <div class="cognitive-detail">
                    <span>âš¡</span>
                    <span>${isPt ? '12 decisÃµes de alta confianÃ§a (>85%)' : '12 high-confidence decisions (>85%)'}</span>
                </div>
            </div>

            <!-- Card 2: Uncertainty -->
            <div class="cognitive-card animate-in animate-delay-2">
                <div class="cognitive-header">
                    <div>
                        <div class="cognitive-label">${isPt ? 'Incertezas Sinalizadas' : 'Uncertainty Flagged'}</div>
                        <div class="cognitive-value">8</div>
                    </div>
                    <div class="cognitive-badge badge-medium">${isPt ? 'MONITORAR' : 'MONITOR'}</div>
                </div>
                <div class="cognitive-detail">
                    <span>âš ï¸</span>
                    <span>${isPt ? '3 exigem validaÃ§Ã£o' : 'Decisions requiring additional data'}</span>
                </div>
                <div class="cognitive-detail">
                    <span>ðŸŽ¯</span>
                    <span>${isPt ? '5 premissas crÃ­ticas para validar' : '5 critical assumptions to validate'}</span>
                </div>
                <div class="cognitive-detail">
                    <span>ðŸ“‰</span>
                    <span>${isPt ? '3 cenÃ¡rios com alta variÃ¢ncia' : '3 scenarios with high variance'}</span>
                </div>
            </div>

            <!-- Card 3: Reasoning Depth -->
            <div class="cognitive-card animate-in animate-delay-3">
                <div class="cognitive-header">
                    <div>
                        <div class="cognitive-label">${isPt ? 'Profundidade do RaciocÃ­nio' : 'Reasoning Depth'}</div>
                        <div class="cognitive-value">6.2<span style="font-size: 24px; color: var(--text-muted);">/10</span></div>
                    </div>
                    <div class="cognitive-badge badge-high">${isPt ? 'FORTE' : 'STRONG'}</div>
                </div>
                <div class="cognitive-detail">
                    <span>ðŸ§©</span>
                    <span>${isPt ? 'MÃ©dia de 4.3 passos de raciocÃ­nio por decisÃ£o' : 'Avg 4.3 reasoning steps per decision'}</span>
                </div>
                <div class="cognitive-detail">
                    <span>ðŸ”—</span>
                    <span>${isPt ? '23 referÃªncias cruzadas a decisÃµes passadas' : '23 cross-references to past decisions'}</span>
                </div>
                <div class="cognitive-detail">
                    <span>ðŸ“š</span>
                    <span>${isPt ? '156 pontos de dados analisados (mÃ©dia)' : '156 data points analyzed (avg)'}</span>
                </div>
            </div>

            <!-- Card 4: Assumptions Validated -->
            <div class="cognitive-card animate-in animate-delay-4">
                <div class="cognitive-header">
                    <div>
                        <div class="cognitive-label">${isPt ? 'Premissas Validadas' : 'Assumptions Validated'}</div>
                        <div class="cognitive-value">23</div>
                    </div>
                    <div class="cognitive-badge badge-high">${isPt ? 'VERIFICADO' : 'VERIFIED'}</div>
                </div>
                <div class="cognitive-detail">
                    <span>âœ…</span>
                    <span>${isPt ? '18 confirmadas, 5 rejeitadas este mÃªs' : '18 confirmed, 5 rejected this month'}</span>
                </div>
                <div class="cognitive-detail">
                    <span>â±ï¸</span>
                    <span>${isPt ? 'Ãšltima validaÃ§Ã£o: hÃ¡ 2 horas' : 'Last validation: 2 hours ago'}</span>
                </div>
                <div class="cognitive-detail">
                    <span>ðŸ“Š</span>
                    <span>${isPt ? '89% de taxa de precisÃ£o de validaÃ§Ã£o' : '89% validation accuracy rate'}</span>
                </div>
            </div>
        </div>
    `;

    // AnÃ¡lise Ativa Detalhada
    const activeAnalysis = `
        <div class="decision-reasoning animate-in animate-delay-5" style="cursor: pointer;" onclick="window.location.hash='scenario/series-a-analysis'">
            <div class="decision-reasoning-header">
                <div class="decision-title-row">
                    <div>
                        <div class="decision-main-title">${isPt ? 'AnÃ¡lise Ativa: Investimento SÃ©rie A - TechCorp' : 'Active Analysis: Series A Investment - TechCorp'}</div>
                        <div class="decision-meta">
                            <span>ðŸ’° ${isPt ? 'MÃ³dulo CFO' : 'CFO Module'}</span>
                            <span>â€¢</span>
                            <span>${isPt ? 'Criado hÃ¡ 2 horas' : 'Created 2 hours ago'}</span>
                            <span>â€¢</span>
                            <span>${isPt ? 'Valor da decisÃ£o: $2.5M' : 'Decision value: $2.5M'}</span>
                            <span>â€¢</span>
                            <span>${isPt ? '4 cenÃ¡rios analisados' : '4 scenarios analyzed'}</span>
                        </div>
                    </div>
                    <div class="confidence-score">
                        <div class="confidence-number">82%</div>
                        <div>
                            <div class="confidence-label-small">${isPt ? 'ConfianÃ§a da IA' : 'AI Confidence'}</div>
                            <div style="font-size: 10px; color: var(--text-muted);">${isPt ? 'Intervalo: 76-88%' : 'Range: 76-88%'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="decision-reasoning-content">
                <!-- Reasoning Chain -->
                <div class="reasoning-section">
                    <div class="reasoning-title">
                        <span>ðŸ”—</span>
                        ${isPt ? 'CADEIA DE RACIOCÃNIO DA IA' : 'AI REASONING CHAIN'}
                    </div>
                    <div class="reasoning-chain">
                        <div class="reasoning-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <div class="step-text">${isPt ? 'ValidaÃ§Ã£o de mercado confirmada: TAM $2.5B com 18% CAGR' : 'Market validation confirmed: TAM $2.5B with 18% CAGR'}</div>
                                <div class="step-detail">${isPt ? 'Fonte de dados: 3 relatÃ³rios da indÃºstria (Gartner, IDC, McKinsey) â€¢ ConfianÃ§a: 92%' : 'Data source: 3 industry reports (Gartner, IDC, McKinsey) â€¢ Confidence: 92%'}</div>
                            </div>
                        </div>
                        <div class="reasoning-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <div class="step-text">${isPt ? 'AvaliaÃ§Ã£o de equipe: Forte capacidade de execuÃ§Ã£o (8.2/10)' : 'Team assessment: Strong execution capability (8.2/10)'}</div>
                                <div class="step-detail">${isPt ? 'Baseado em: Sucesso de saÃ­da anterior, profundidade tÃ©cnica, expertise de domÃ­nio â€¢ ConfianÃ§a: 85%' : 'Based on: Previous exit success, technical depth, domain expertise â€¢ Confidence: 85%'}</div>
                            </div>
                        </div>
                        <div class="reasoning-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <div class="step-text">${isPt ? 'Modelo financeiro mostra economia unitÃ¡ria sustentÃ¡vel' : 'Financial model shows sustainable unit economics'}</div>
                                <div class="step-detail">${isPt ? 'RelaÃ§Ã£o LTV/CAC: 3.8x, PerÃ­odo de payback: 8 meses, Margem bruta: 72% â€¢ ConfianÃ§a: 78%' : 'LTV/CAC ratio: 3.8x, Payback period: 8 months, Gross margin: 72% â€¢ Confidence: 78%'}</div>
                            </div>
                        </div>
                        <div class="reasoning-step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <div class="step-text">${isPt ? 'Perfil de risco: MÃ©dio-baixo com exposiÃ§Ã£o gerenciÃ¡vel' : 'Risk profile: Medium-low with manageable exposure'}</div>
                                <div class="step-detail">${isPt ? 'RegulatÃ³rio: Baixo, CompetiÃ§Ã£o: MÃ©dio, ExecuÃ§Ã£o: Baixo â€¢ ConfianÃ§a: 75%' : 'Regulatory: Low, Competition: Medium, Execution: Low â€¢ Confidence: 75%'}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Key Assumptions -->
                <div class="reasoning-section">
                    <div class="reasoning-title">
                        <span>ðŸ’­</span>
                        ${isPt ? 'PREMISSAS PRINCIPAIS FEITAS PELA IA' : 'KEY ASSUMPTIONS MADE BY AI'}
                    </div>
                    <div class="assumptions-grid">
                        <div class="assumption-card">
                            <div class="assumption-title">${isPt ? 'TrajetÃ³ria de Crescimento de Mercado' : 'Market Growth Trajectory'}</div>
                            <div class="assumption-text">${isPt ? 'Assume crescimento de 15-18% YoY baseado em tendÃªncia histÃ³rica de 5 anos' : 'Assumes 15-18% YoY growth based on 5-year historical trend'}</div>
                            <div class="assumption-status">
                                <span>âœ…</span>
                                <span>${isPt ? 'Validado por 3 fontes independentes' : 'Validated by 3 independent sources'}</span>
                            </div>
                        </div>
                        <div class="assumption-card">
                            <div class="assumption-title">${isPt ? 'Estabilidade do CenÃ¡rio Competitivo' : 'Competitive Landscape Stability'}</div>
                            <div class="assumption-text">${isPt ? 'Nenhum novo entrante importante esperado nos prÃ³ximos 18 meses' : 'No major new entrant expected in next 18 months'}</div>
                            <div class="assumption-status">
                                <span>âš ï¸</span>
                                <span>${isPt ? 'ConfianÃ§a mÃ©dia - requer monitoramento' : 'Medium confidence - requires monitoring'}</span>
                            </div>
                        </div>
                        <div class="assumption-card">
                            <div class="assumption-title">${isPt ? 'Cronograma de ExecuÃ§Ã£o' : 'Execution Timeline'}</div>
                            <div class="assumption-text">${isPt ? 'LanÃ§amento do produto Q3 2026, crescimento de receita comeÃ§ando Q4' : 'Product launch Q3 2026, revenue ramp starting Q4'}</div>
                            <div class="assumption-status">
                                <span>âœ…</span>
                                <span>${isPt ? 'Baseado no desempenho histÃ³rico da equipe' : 'Based on team\'s historical performance'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Trade-off Analysis -->
                <div class="reasoning-section">
                    <div class="reasoning-title">
                        <span>âš–ï¸</span>
                        ${isPt ? 'ANÃLISE DE TRADE-OFFS' : 'TRADE-OFF ANALYSIS'}
                    </div>
                    <div class="tradeoff-comparison">
                        <div class="tradeoff-option recommended">
                            <div class="tradeoff-header">
                                <div class="tradeoff-name">${isPt ? 'Investir Agora (Recomendado)' : 'Invest Now (Recommended)'}</div>
                                <div class="tradeoff-score" style="color: var(--success);">8.2/10</div>
                            </div>
                            <div class="tradeoff-list-title">${isPt ? 'Vantagens' : 'Advantages'}</div>
                            <ul class="tradeoff-list">
                                <li>${isPt ? 'Melhor avaliaÃ§Ã£o ($18M vs $25M prÃ³xima rodada)' : 'Better valuation ($18M vs $25M next round)'}</li>
                                <li>${isPt ? 'Direitos pro-rata assegurados' : 'Pro-rata rights secured'}</li>
                                <li>${isPt ? 'Oportunidade de cadeira estratÃ©gica no conselho' : 'Strategic board seat opportunity'}</li>
                            </ul>
                            <div class="tradeoff-list-title">${isPt ? 'Riscos' : 'Risks'}</div>
                            <ul class="tradeoff-list">
                                <li>${isPt ? 'Risco de execuÃ§Ã£o em estÃ¡gio inicial' : 'Early stage execution risk'}</li>
                                <li>${isPt ? 'Capital travado por 4-6 anos' : 'Capital locked for 4-6 years'}</li>
                            </ul>
                        </div>

                        <div class="tradeoff-option">
                            <div class="tradeoff-header">
                                <div class="tradeoff-name">${isPt ? 'Aguardar SÃ©rie B' : 'Wait for Series B'}</div>
                                <div class="tradeoff-score" style="color: var(--warning);">6.5/10</div>
                            </div>
                            <div class="tradeoff-list-title">${isPt ? 'Vantagens' : 'Advantages'}</div>
                            <ul class="tradeoff-list">
                                <li>${isPt ? 'Mais dados sobre product-market fit' : 'More data on product-market fit'}</li>
                                <li>${isPt ? 'Menor risco de execuÃ§Ã£o' : 'Lower execution risk'}</li>
                                <li>${isPt ? 'TraÃ§Ã£o comprovada' : 'Proven traction'}</li>
                            </ul>
                            <div class="tradeoff-list-title">${isPt ? 'Riscos' : 'Risks'}</div>
                            <ul class="tradeoff-list">
                                <li>${isPt ? 'AvaliaÃ§Ã£o mais alta (prÃªmio de 40-60%)' : 'Higher valuation (40-60% premium)'}</li>
                                <li>${isPt ? 'Oportunidade de ownership diluÃ­da' : 'Diluted ownership opportunity'}</li>
                                <li>${isPt ? 'Termos de negÃ³cio competitivos' : 'Competitive deal terms'}</li>
                            </ul>
                        </div>

                        <div class="tradeoff-option">
                            <div class="tradeoff-header">
                                <div class="tradeoff-name">${isPt ? 'Recusar NegÃ³cio' : 'Pass on Deal'}</div>
                                <div class="tradeoff-score" style="color: var(--danger);">4.1/10</div>
                            </div>
                            <div class="tradeoff-list-title">${isPt ? 'Vantagens' : 'Advantages'}</div>
                            <ul class="tradeoff-list">
                                <li>${isPt ? 'Capital preservado para outras oportunidades' : 'Capital preserved for other opportunities'}</li>
                                <li>${isPt ? 'Sem exposiÃ§Ã£o a perdas' : 'No downside exposure'}</li>
                            </ul>
                            <div class="tradeoff-list-title">${isPt ? 'Riscos' : 'Risks'}</div>
                            <ul class="tradeoff-list">
                                <li>${isPt ? 'Perder oportunidade de alto potencial' : 'Miss high-potential opportunity'}</li>
                                <li>${isPt ? 'Perda de relacionamento com equipe fundadora' : 'Loss of relationship with founding team'}</li>
                                <li>${isPt ? 'Custo de oportunidade se empresa tiver sucesso' : 'Opportunity cost if company succeeds'}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Uncertainty Factors -->
                <div class="reasoning-section">
                    <div class="reasoning-title">
                        <span>âš ï¸</span>
                        ${isPt ? 'FATORES DE INCERTEZA' : 'UNCERTAINTY FACTORS'}
                    </div>
                    <div class="uncertainty-grid">
                        <div class="uncertainty-item">
                            <div class="uncertainty-icon">âš–ï¸</div>
                            <div class="uncertainty-content">
                                <div class="uncertainty-title">${isPt ? 'MudanÃ§as no CenÃ¡rio RegulatÃ³rio' : 'Regulatory Landscape Changes'}</div>
                                <div class="uncertainty-desc">${isPt ? 'Potenciais novas regulamentaÃ§Ãµes de privacidade de dados em mercados-chave podem impactar estratÃ©gia go-to-market' : 'Potential new data privacy regulations in key markets could impact go-to-market strategy'}</div>
                                <div class="uncertainty-impact">
                                    <span class="impact-label">${isPt ? 'Impacto se ocorrer:' : 'Impact if occurs:'}</span>
                                    <div class="impact-bar">
                                        <div class="impact-fill" style="width: 35%;"></div>
                                    </div>
                                    <span class="impact-label">35%</span>
                                </div>
                            </div>
                        </div>
                        <div class="uncertainty-item">
                            <div class="uncertainty-icon">ðŸ¢</div>
                            <div class="uncertainty-content">
                                <div class="uncertainty-title">${isPt ? 'PressÃ£o Competitiva de Incumbentes' : 'Competitive Pressure from Incumbents'}</div>
                                <div class="uncertainty-desc">${isPt ? 'Jogadores estabelecidos podem acelerar desenvolvimento de produto similar em resposta Ã  traÃ§Ã£o de mercado' : 'Established players may accelerate similar product development in response to market traction'}</div>
                                <div class="uncertainty-impact">
                                    <span class="impact-label">${isPt ? 'Impacto se ocorrer:' : 'Impact if occurs:'}</span>
                                    <div class="impact-bar">
                                        <div class="impact-fill" style="width: 50%;"></div>
                                    </div>
                                    <span class="impact-label">50%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return `
        ${header}
        <div class="animate-in">
            ${aiStatus}
            ${metrics}
            ${activeAnalysis}
        </div>
    `;
}

export function init(i18n) {
    console.log('âœ… Dashboard enriquecido inicializado');
}
