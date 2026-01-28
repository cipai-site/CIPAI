/**
 * CIPAI - CFO Module COMPLETO (Financial Analysis)
 * VersÃ£o com TODA a profundidade do Demo 2
 */

import { renderHeader } from '../components.js';

export async function render(i18n) {
    const isPt = i18n.getLang() === 'pt-br';
    
    const header = renderHeader(
        isPt ? 'ðŸ’° MÃ³dulo CFO - InteligÃªncia Financeira' : 'ðŸ’° CFO Module - Financial Intelligence',
        isPt ? 'AnÃ¡lise financeira com cadeia de raciocÃ­nio, scoring de confianÃ§a e quantificaÃ§Ã£o de incerteza' : 'AI-powered financial analysis with reasoning chain, confidence scoring, and uncertainty quantification',
        []
    );

    return `
        ${header}
        <div class="animate-in">
            <!-- Module Header with Confidence -->
            <div class="cfo-module-header">
                <div class="module-icon-large">ðŸ’°</div>
                <h2 class="module-title-large">${isPt ? 'MÃ³dulo CFO - InteligÃªncia Financeira' : 'CFO Module - Financial Intelligence'}</h2>
                <p class="module-subtitle">${isPt ? 'AnÃ¡lise financeira com cadeia de raciocÃ­nio, scoring de confianÃ§a e quantificaÃ§Ã£o de incerteza' : 'AI-powered financial analysis with reasoning chain, confidence scoring, and uncertainty quantification'}</p>
                
                <div class="confidence-display-large">
                    <div class="confidence-number-huge">84%</div>
                    <div class="confidence-details-large">
                        <div class="confidence-label-large">${isPt ? 'CONFIANÃ‡A GERAL DA ANÃLISE FINANCEIRA' : 'OVERALL FINANCIAL ANALYSIS CONFIDENCE'}</div>
                        <div class="confidence-text-large">${isPt ? 'Baseado em 8 mÃ©tricas financeiras + 6 passos de raciocÃ­nio + 4 premissas validadas' : 'Based on 8 financial metrics + 6 reasoning steps + 4 validated assumptions'}</div>
                        <div class="memory-indicator-large">ðŸ§  ${isPt ? 'Comparado com 23 anÃ¡lises financeiras similares (confianÃ§a mÃ©dia: 81%)' : 'Compared against 23 similar financial analyses (avg confidence: 81%)'}</div>
                    </div>
                </div>
            </div>

            <!-- Financial Metrics Grid -->
            <div class="financial-metrics-grid">
                <div class="metric-card-detailed">
                    <div class="metric-label-detail">${isPt ? 'PROJEÃ‡ÃƒO DE RECEITA' : 'REVENUE PROJECTION'}</div>
                    <div class="metric-value-huge">$4.2M</div>
                    <div class="metric-detail-text">${isPt ? 'Estimativa ARR Ano 1' : 'Year 1 ARR estimate'}</div>
                    <div class="metric-confidence-bar">
                        <div class="confidence-label-small">${isPt ? 'ConfianÃ§a: 82% | Range: $3.8M - $4.6M' : 'Confidence: 82% | Range: $3.8M - $4.6M'}</div>
                    </div>
                </div>

                <div class="metric-card-detailed">
                    <div class="metric-label-detail">${isPt ? 'RAZÃƒO LTV/CAC' : 'LTV/CAC RATIO'}</div>
                    <div class="metric-value-huge">3.8x</div>
                    <div class="metric-detail-text">${isPt ? 'Unit economics fortes' : 'Strong unit economics'}</div>
                    <div class="metric-confidence-bar">
                        <div class="confidence-label-small">${isPt ? 'ConfianÃ§a: 88% | Benchmark da indÃºstria: 3.0x+' : 'Confidence: 88% | Industry benchmark: 3.0x+'}</div>
                    </div>
                </div>

                <div class="metric-card-detailed">
                    <div class="metric-label-detail">${isPt ? 'PERÃODO DE PAYBACK' : 'PAYBACK PERIOD'}</div>
                    <div class="metric-value-huge">8 mo</div>
                    <div class="metric-detail-text">${isPt ? 'Payback de aquisiÃ§Ã£o de clientes' : 'Customer acquisition payback'}</div>
                    <div class="metric-confidence-bar">
                        <div class="confidence-label-small">${isPt ? 'ConfianÃ§a: 79% | Meta: <12 meses' : 'Confidence: 79% | Target: <12 months'}</div>
                    </div>
                </div>

                <div class="metric-card-detailed">
                    <div class="metric-label-detail">${isPt ? 'TAXA DE BURN' : 'BURN RATE'}</div>
                    <div class="metric-value-huge">$185K</div>
                    <div class="metric-detail-text">${isPt ? 'Consumo mensal de caixa' : 'Monthly cash consumption'}</div>
                    <div class="metric-confidence-bar">
                        <div class="confidence-label-small">${isPt ? 'ConfianÃ§a: 91% | Runway: 14 meses' : 'Confidence: 91% | Runway: 14 months'}</div>
                    </div>
                </div>

                <div class="metric-card-detailed">
                    <div class="metric-label-detail">${isPt ? 'MARGEM BRUTA' : 'GROSS MARGIN'}</div>
                    <div class="metric-value-huge">72%</div>
                    <div class="metric-detail-text">${isPt ? 'Margens SaaS fortes' : 'Strong SaaS margins'}</div>
                    <div class="metric-confidence-bar">
                        <div class="confidence-label-small">${isPt ? 'ConfianÃ§a: 86% | MÃ©dia da indÃºstria: 70-80%' : 'Confidence: 86% | Industry avg: 70-80%'}</div>
                    </div>
                </div>

                <div class="metric-card-detailed">
                    <div class="metric-label-detail">${isPt ? 'PROJEÃ‡ÃƒO ROI (5 ANOS)' : 'ROI PROJECTION (5YR)'}</div>
                    <div class="metric-value-huge">4.2x</div>
                    <div class="metric-detail-text">${isPt ? 'MÃºltiplo de retorno esperado' : 'Expected return multiple'}</div>
                    <div class="metric-confidence-bar">
                        <div class="confidence-label-small">${isPt ? 'ConfianÃ§a: 68% | Alta incerteza' : 'Confidence: 68% | High uncertainty'}</div>
                    </div>
                </div>
            </div>

            <!-- Financial Reasoning Chain -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ”—</div>
                    <div class="section-title">${isPt ? 'Cadeia de RaciocÃ­nio Financeiro' : 'Financial Reasoning Chain'}</div>
                </div>

                <div class="memory-note-large">
                    ðŸ§  <strong>${isPt ? 'Contexto de Aprendizado:' : 'Learning Context:'}</strong> ${isPt ? 'Este modelo financeiro segue padrÃµes de 23 anÃ¡lises SaaS early-stage similares. A IA identificou indicadores-chave de sucesso: LTV/CAC >3.0x (correlaÃ§Ã£o: 82%), margem bruta >70% (correlaÃ§Ã£o: 74%) e perÃ­odo de payback <12mo (correlaÃ§Ã£o: 68%).' : 'This financial model follows patterns from 23 similar early-stage SaaS analyses. AI has identified key success indicators: LTV/CAC >3.0x (correlation: 82%), gross margin >70% (correlation: 74%), and payback period <12mo (correlation: 68%).'}
                </div>

                <div class="reasoning-chain-detailed">
                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">1</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'ValidaÃ§Ã£o do Modelo de Receita:' : 'Revenue Model Validation:'} ${isPt ? 'TrajetÃ³ria de crescimento de MRR Ã© sustentÃ¡vel em 35% MoM' : 'MRR growth trajectory is sustainable at 35% MoM'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 82% | Baseado em 6 meses de dados reais, anÃ¡lise de cohort, taxa de churn de 8%' : 'Confidence: 82% | Based on 6 months actual data, cohort analysis, churn rate 8%'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver Fontes Financeiras (5)' : 'View Financial Sources (5)'}')">${isPt ? 'ðŸ“Š Ver Fontes Financeiras (5)' : 'ðŸ“Š View Financial Sources (5)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">2</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'AnÃ¡lise de Unit Economics:' : 'Unit Economics Analysis:'} ${isPt ? 'RazÃ£o LTV/CAC de 3.8x indica modelo de negÃ³cio saudÃ¡vel' : 'LTV/CAC ratio of 3.8x indicates healthy business model'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 88% | LTV: $24.500 | CAC: $6.450 | Payback: 8 meses' : 'Confidence: 88% | LTV: $24,500 | CAC: $6,450 | Payback: 8 months'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver Fontes de CÃ¡lculo (4)' : 'View Calculation Sources (4)'}')">${isPt ? 'ðŸ“Š Ver Fontes de CÃ¡lculo (4)' : 'ðŸ“Š View Calculation Sources (4)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">3</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'ProjeÃ§Ã£o de Fluxo de Caixa:' : 'Cash Flow Projection:'} ${isPt ? 'Runway atual de 14 meses, suficiente para marco de SÃ©rie B' : 'Current runway 14 months, sufficient for Series B milestone'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 85% | Burn mensal: $185K | Caixa em mÃ£os: $2.6M' : 'Confidence: 85% | Monthly burn: $185K | Cash on hand: $2.6M'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver Modelo de Fluxo de Caixa (3)' : 'View Cash Flow Model (3)'}')">${isPt ? 'ðŸ“Š Ver Modelo de Fluxo de Caixa (3)' : 'ðŸ“Š View Cash Flow Model (3)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">4</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'AnÃ¡lise de AvaliaÃ§Ã£o:' : 'Valuation Analysis:'} ${isPt ? 'AvaliaÃ§Ã£o post-money de $18M Ã© justa baseado em comparÃ¡veis' : '$18M post-money valuation is fair based on comparables'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 76% | Empresas comparÃ¡veis negociando em mÃºltiplo ARR de 12-15x' : 'Confidence: 76% | Comparable companies trading at 12-15x ARR multiple'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver ComparÃ¡veis (8)' : 'View Comparables (8)'}')">${isPt ? 'ðŸ“Š Ver ComparÃ¡veis (8)' : 'ðŸ“Š View Comparables (8)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">5</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'Retorno Ajustado ao Risco:' : 'Risk-Adjusted Return:'} ${isPt ? 'Retorno esperado de 4.2x em 5 anos no 25Âº percentil de saÃ­da' : 'Expected 4.2x return over 5 years at 25th percentile exit'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 68% | Caso base: 4.2x | Caso bull: 8.7x | Caso bear: 1.2x' : 'Confidence: 68% | Base case: 4.2x | Bull case: 8.7x | Bear case: 1.2x'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver Modelo de Retorno (3)' : 'View Return Model (3)'}')">${isPt ? 'ðŸ“Š Ver Modelo de Retorno (3)' : 'ðŸ“Š View Return Model (3)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">6</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'AnÃ¡lise de CenÃ¡rio de SaÃ­da:' : 'Exit Scenario Analysis:'} ${isPt ? 'MÃºltiplas vias de saÃ­da identificadas com probabilidades razoÃ¡veis' : 'Multiple exit pathways identified with reasonable probabilities'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 72% | AquisiÃ§Ã£o estratÃ©gica (60%), IPO (25%), Compra secundÃ¡ria (15%)' : 'Confidence: 72% | Strategic acquisition (60%), IPO (25%), Secondary buyout (15%)'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver AnÃ¡lise de Mercado (6)' : 'View Market Analysis (6)'}')">${isPt ? 'ðŸ“Š Ver AnÃ¡lise de Mercado (6)' : 'ðŸ“Š View Market Analysis (6)'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Financial Recommendation -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ’¡</div>
                    <div class="section-title">${isPt ? 'RecomendaÃ§Ã£o Financeira' : 'Financial Recommendation'}</div>
                </div>

                <div class="ai-recommendation-large">
                    <div class="rec-icon-large">ðŸ’¼</div>
                    <div class="rec-content-large">
                        <div class="rec-title-large">${isPt ? 'RECOMENDAÃ‡ÃƒO FINANCEIRA DA IA' : 'AI FINANCIAL RECOMMENDATION'}</div>
                        <div class="rec-decision-large">${isPt ? 'Prosseguir com investimento na avaliaÃ§Ã£o atual.' : 'Proceed with investment at current valuation.'}</div>
                        <div class="rec-explanation-large">
                            ${isPt
                                ? 'A anÃ¡lise financeira mostra unit economics fortes (LTV/CAC: 3.8x), margens brutas sustentÃ¡veis (72%), posiÃ§Ã£o de caixa saudÃ¡vel (runway de 14 meses) e avaliaÃ§Ã£o justa (mÃºltiplo ARR de 13x). A projeÃ§Ã£o de retorno ajustado ao risco de 4.2x em 5 anos atende aos critÃ©rios de investimento.'
                                : 'Financial analysis shows strong unit economics (LTV/CAC: 3.8x), sustainable gross margins (72%), healthy cash position (14mo runway), and fair valuation (13x ARR multiple). Risk-adjusted return projection of 4.2x over 5 years meets investment criteria.'
                            }
                        </div>
                        <div class="rec-strengths-large">
                            ${isPt ? 'Pontos fortes principais: Modelo de receita comprovado, aquisiÃ§Ã£o eficiente de clientes, margens escalÃ¡veis. Risco principal: Timing de mercado e dinÃ¢mica competitiva.' : 'Key strengths: Proven revenue model, efficient customer acquisition, scalable margins. Primary risk: Market timing and competitive dynamics.'}
                        </div>
                        <div class="rec-score-large">${isPt ? 'Score: 8.4/10' : 'Score: 8.4/10'}</div>
                    </div>
                </div>

                <div class="human-decision-box">
                    <div class="human-decision-icon">ðŸ‘¤</div>
                    <div class="human-decision-content">
                        <div class="human-decision-title">${isPt ? 'SUA DECISÃƒO FINANCEIRA' : 'YOUR FINANCIAL DECISION'}</div>
                        <div class="human-decision-text">${isPt ? 'Aguardando sua revisÃ£o e aprovaÃ§Ã£o' : 'Awaiting your review and approval'}</div>
                        <div class="human-decision-subtext">${isPt ? 'A IA fornece anÃ¡lise financeira e recomendaÃ§Ã£o. VocÃª mantÃ©m autoridade final sobre decisÃµes de investimento. Revise as premissas, anÃ¡lise de sensibilidade e projeÃ§Ãµes financeiras abaixo.' : 'AI provides financial analysis and recommendation. You retain final authority on investment decisions. Review assumptions, sensitivity analysis, and financial projections below.'}</div>
                        <div class="pending-badge-large">â³ ${isPt ? 'AGUARDANDO SUA DECISÃƒO' : 'PENDING YOUR DECISION'}</div>
                    </div>
                </div>
            </div>

            <!-- Key Financial Assumptions -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ’­</div>
                    <div class="section-title">${isPt ? 'Principais Premissas Financeiras' : 'Key Financial Assumptions'}</div>
                </div>

                <div class="assumptions-grid-detailed">
                    <div class="assumption-card-detailed assumption-validated">
                        <div class="assumption-icon">ðŸ“ˆ</div>
                        <div class="assumption-title">${isPt ? 'Taxa de Crescimento de Receita' : 'Revenue Growth Rate'}</div>
                        <div class="assumption-text">${isPt ? 'Assume crescimento de 35% MoM sustentado por 12 meses, entÃ£o declÃ­nio para 15% MoM' : 'Assumes 35% MoM growth sustained for 12 months, then declining to 15% MoM'}</div>
                        <div class="assumption-status">
                            <span class="status-icon">âœ…</span>
                            <span>${isPt ? 'Validado pelo desempenho histÃ³rico de cohort' : 'Validated by historical cohort performance'}</span>
                        </div>
                        <div class="assumption-link" onclick="alert('${isPt ? 'Ver dados de crescimento' : 'View growth data'}')">${isPt ? 'ðŸ“Š Ver dados de crescimento' : 'ðŸ“Š View growth data'}</div>
                    </div>

                    <div class="assumption-card-detailed assumption-medium">
                        <div class="assumption-icon">ðŸ’°</div>
                        <div class="assumption-title">${isPt ? 'Estabilidade do Custo de AquisiÃ§Ã£o de Clientes' : 'Customer Acquisition Cost Stability'}</div>
                        <div class="assumption-text">${isPt ? 'CAC permanece estÃ¡vel em $6.450 apesar do scaling (assume eficiÃªncia de marketing)' : 'CAC remains stable at $6,450 despite scaling (assumes marketing efficiency)'}</div>
                        <div class="assumption-status">
                            <span class="status-icon">âš ï¸</span>
                            <span>${isPt ? 'ConfianÃ§a mÃ©dia - requer monitoramento' : 'Medium confidence - requires monitoring'}</span>
                        </div>
                        <div class="assumption-link" onclick="alert('${isPt ? 'Ver premissas de CAC' : 'View CAC assumptions'}')">${isPt ? 'ðŸ“Š Ver premissas de CAC' : 'ðŸ“Š View CAC assumptions'}</div>
                    </div>

                    <div class="assumption-card-detailed assumption-validated">
                        <div class="assumption-icon">ðŸŽ¯</div>
                        <div class="assumption-title">${isPt ? 'Tamanho de Mercado EndereÃ§Ã¡vel' : 'Market Size Addressable'}</div>
                        <div class="assumption-text">${isPt ? 'TAM de $2.5B com participaÃ§Ã£o de mercado de 15% alcanÃ§Ã¡vel em 5 anos' : '$2.5B TAM with 15% achievable market share over 5 years'}</div>
                        <div class="assumption-status">
                            <span class="status-icon">âœ…</span>
                            <span>${isPt ? 'Apoiado por pesquisa da indÃºstria' : 'Supported by industry research'}</span>
                        </div>
                        <div class="assumption-link" onclick="alert('${isPt ? 'Ver pesquisa de mercado' : 'View market research'}')">${isPt ? 'ðŸ“Š Ver pesquisa de mercado' : 'ðŸ“Š View market research'}</div>
                    </div>
                </div>
            </div>

            <!-- Financial Sensitivity Analysis -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">âš¡</div>
                    <div class="section-title">${isPt ? 'AnÃ¡lise de Sensibilidade Financeira' : 'Financial Sensitivity Analysis'}</div>
                </div>

                <div class="sensitivity-section-detailed">
                    <div class="sensitivity-title-large">
                        <span class="sensitivity-icon-large">âš¡</span>
                        ${isPt ? 'O Que Mudaria a RecomendaÃ§Ã£o Financeira?' : 'What Would Change the Financial Recommendation?'}
                    </div>

                    <div class="sensitivity-grid-detailed">
                        <div class="sensitivity-item-detailed sensitivity-critical">
                            <div class="sensitivity-var-title">${isPt ? 'Limite de RazÃ£o LTV/CAC' : 'LTV/CAC Ratio Threshold'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se a razÃ£o cair abaixo de 3.0x, a recomendaÃ§Ã£o muda para "Due diligence adicional necessÃ¡ria"' : 'If ratio falls below 3.0x, recommendation changes to "Additional due diligence required"'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: Indica que unit economics podem nÃ£o suportar rentabilidade de longo prazo em escala' : 'Impact: Indicates unit economics may not support long-term profitability at scale'}</em>
                            </div>
                        </div>

                        <div class="sensitivity-item-detailed sensitivity-critical">
                            <div class="sensitivity-var-title">${isPt ? 'Taxa de Burn Mensal' : 'Monthly Burn Rate'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se o burn exceder $220K/mÃªs sem crescimento correspondente de receita, dispara reavaliaÃ§Ã£o de risco' : 'If burn exceeds $220K/month without corresponding revenue growth, triggers risk reassessment'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: Reduz runway abaixo de 12 meses, exigindo financiamento bridge ou cortes de custo' : 'Impact: Reduces runway below 12 months, requiring bridge financing or cost cuts'}</em>
                            </div>
                        </div>

                        <div class="sensitivity-item-detailed sensitivity-warning">
                            <div class="sensitivity-var-title">${isPt ? 'Taxa de Churn' : 'Churn Rate'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se o churn anual exceder 15%, a recomendaÃ§Ã£o muda para "Aguardar melhoria de retenÃ§Ã£o"' : 'If annual churn exceeds 15%, recommendation shifts to "Wait for retention improvement"'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: Reduz significativamente a projeÃ§Ã£o de LTV, minando a tese de unit economics' : 'Impact: Significantly reduces LTV projection, undermining unit economics thesis'}</em>
                            </div>
                        </div>

                        <div class="sensitivity-item-detailed sensitivity-warning">
                            <div class="sensitivity-var-title">${isPt ? 'MÃºltiplo de AvaliaÃ§Ã£o' : 'Valuation Multiple'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se a avaliaÃ§Ã£o exceder 20x ARR atual (22% superior), requer taxas de crescimento irreais para alcanÃ§ar retornos alvo' : 'If valuation exceeds 20x current ARR (22% higher), requires unrealistic growth rates to achieve target returns'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: Exige premissas de avaliaÃ§Ã£o de saÃ­da menos conservadoras ou maior crescimento de receita' : 'Impact: Requires less conservative exit valuation assumptions or higher revenue growth'}</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 5-Year Financial Projections -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ“Š</div>
                    <div class="section-title">${isPt ? 'ProjeÃ§Ãµes Financeiras de 5 Anos' : '5-Year Financial Projections'}</div>
                </div>

                <table class="financial-projections-table">
                    <thead>
                        <tr>
                            <th>${isPt ? 'MÃ‰TRICA' : 'METRIC'}</th>
                            <th>${isPt ? 'ANO 1' : 'YEAR 1'}</th>
                            <th>${isPt ? 'ANO 2' : 'YEAR 2'}</th>
                            <th>${isPt ? 'ANO 3' : 'YEAR 3'}</th>
                            <th>${isPt ? 'ANO 4' : 'YEAR 4'}</th>
                            <th>${isPt ? 'ANO 5' : 'YEAR 5'}</th>
                            <th>${isPt ? 'CONFIANÃ‡A' : 'CONFIDENCE'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-row-label">ARR</td>
                            <td>$4.2M</td>
                            <td>$9.8M</td>
                            <td>$18.5M</td>
                            <td>$28.2M</td>
                            <td>$35.4M</td>
                            <td class="confidence-cell">76%</td>
                        </tr>
                        <tr>
                            <td class="table-row-label">${isPt ? 'Margem Bruta' : 'Gross Margin'}</td>
                            <td>72%</td>
                            <td>74%</td>
                            <td>76%</td>
                            <td>77%</td>
                            <td>78%</td>
                            <td class="confidence-cell">82%</td>
                        </tr>
                        <tr>
                            <td class="table-row-label">Net Burn</td>
                            <td>-$2.2M</td>
                            <td>-$3.1M</td>
                            <td>-$1.2M</td>
                            <td>$2.4M</td>
                            <td>$6.8M</td>
                            <td class="confidence-cell">68%</td>
                        </tr>
                        <tr>
                            <td class="table-row-label">${isPt ? 'Clientes' : 'Customers'}</td>
                            <td>42</td>
                            <td>118</td>
                            <td>245</td>
                            <td>412</td>
                            <td>580</td>
                            <td class="confidence-cell">71%</td>
                        </tr>
                        <tr>
                            <td class="table-row-label">LTV/CAC</td>
                            <td>3.8x</td>
                            <td>4.1x</td>
                            <td>4.4x</td>
                            <td>4.6x</td>
                            <td>4.8x</td>
                            <td class="confidence-cell">73%</td>
                        </tr>
                        <tr>
                            <td class="table-row-label">${isPt ? 'AvaliaÃ§Ã£o' : 'Valuation'}</td>
                            <td>$18M</td>
                            <td>$45M</td>
                            <td>$92M</td>
                            <td>$155M</td>
                            <td>$285M</td>
                            <td class="confidence-cell">62%</td>
                        </tr>
                    </tbody>
                </table>

                <div class="projection-methodology">
                    <strong>${isPt ? 'Metodologia de ProjeÃ§Ã£o:' : 'Projection Methodology:'}</strong> ${isPt ? 'Baseado em anÃ¡lise de cohort, benchmarks da indÃºstria e padrÃµes histÃ³ricos de crescimento. A confianÃ§a diminui em anos externos devido ao aumento da incerteza. Premissas conservadoras usadas para proteÃ§Ã£o de downside.' : 'Based on cohort analysis, industry benchmarks, and historical growth patterns. Confidence decreases in outer years due to increased uncertainty. Conservative assumptions used for downside protection.'}
                    <span class="methodology-link" onclick="alert('${isPt ? 'Ver metodologia de projeÃ§Ã£o' : 'View projection methodology'}')">${isPt ? 'ðŸ“Š Ver metodologia de projeÃ§Ã£o' : 'ðŸ“Š View projection methodology'}</span>
                </div>
            </div>
        </div>
    `;

    // NOVO: Risk Snapshot
    const riskSnapshot = `
        <div class="risk-snapshot-section">
            <div class="risk-snapshot-header">
                <div class="risk-snapshot-icon">ðŸ“Š</div>
                <div>
                    <div class="risk-snapshot-title">${isPt ? 'Snapshot de Risco Financeiro' : 'Financial Risk Snapshot'}</div>
                </div>
            </div>
            
            <div class="risk-indicators-grid">
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'RISCO DE LIQUIDEZ' : 'LIQUIDITY RISK'}</div>
                    <div class="risk-indicator-value risk-low">${isPt ? 'BAIXO' : 'LOW'}</div>
                    <div class="risk-indicator-detail">${isPt ? '12+ meses de runway' : '12+ months runway'}</div>
                </div>
                
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'RISCO DE SOLVÃŠNCIA' : 'SOLVENCY RISK'}</div>
                    <div class="risk-indicator-value risk-low">${isPt ? 'BAIXO' : 'LOW'}</div>
                    <div class="risk-indicator-detail">${isPt ? 'Margens sustentÃ¡veis' : 'Sustainable margins'}</div>
                </div>
                
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'RISCO DE EXECUÃ‡ÃƒO' : 'EXECUTION RISK'}</div>
                    <div class="risk-indicator-value risk-medium">${isPt ? 'MÃ‰DIO' : 'MEDIUM'}</div>
                    <div class="risk-indicator-detail">${isPt ? 'Depende de crescimento' : 'Growth-dependent'}</div>
                </div>
                
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'RISCO DE MERCADO' : 'MARKET RISK'}</div>
                    <div class="risk-indicator-value risk-medium">${isPt ? 'MÃ‰DIO' : 'MEDIUM'}</div>
                    <div class="risk-indicator-detail">${isPt ? 'CompetiÃ§Ã£o aumentando' : 'Competition rising'}</div>
                </div>
            </div>
            
            <div class="time-to-recover">
                <div class="recover-label">${isPt ? 'TEMPO PARA RECUPERAR INVESTIMENTO' : 'TIME TO RECOVER INVESTMENT'}</div>
                <div class="recover-value">${isPt ? '5-7 anos' : '5-7 years'}</div>
            </div>
            
            <div class="scenario-outcomes">
                <div class="scenario-outcome-card worst-case">
                    <div class="outcome-label">${isPt ? 'PIOR CENÃRIO' : 'WORST CASE'}</div>
                    <div class="outcome-icon">ðŸ“‰</div>
                    <div class="outcome-text">
                        ${isPt
                            ? 'Crescimento desacelera para 10% MoM, churn aumenta para 8%, mÃºltiplo de saÃ­da cai para 8x ARR. Retorno: 1.8x em 7 anos (~9% CAGR). Capital nÃ£o perdido, mas abaixo de alternativas.'
                            : 'Growth slows to 10% MoM, churn rises to 8%, exit multiple drops to 8x ARR. Return: 1.8x in 7 years (~9% CAGR). Capital not lost, but below alternatives.'
                        }
                    </div>
                </div>
                
                <div class="scenario-outcome-card best-case">
                    <div class="outcome-label">${isPt ? 'MELHOR CENÃRIO' : 'BEST CASE'}</div>
                    <div class="outcome-icon">ðŸ“ˆ</div>
                    <div class="outcome-text">
                        ${isPt
                            ? 'Crescimento acelera para 40% MoM, churn se mantÃ©m em 3%, mÃºltiplo de saÃ­da sobe para 20x ARR. Retorno: 8.5x em 5 anos (~54% CAGR). Categoria-definidor, potencial unicÃ³rnio.'
                            : 'Growth accelerates to 40% MoM, churn holds at 3%, exit multiple rises to 20x ARR. Return: 8.5x in 5 years (~54% CAGR). Category-defining, unicorn potential.'
                        }
                    </div>
                </div>
            </div>
            ${riskSnapshot}

        </div>
    `;
}

export function init(i18n) {
    console.log('âœ… CFO Module COMPLETO inicializado');
}
