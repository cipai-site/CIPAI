/**
 * CIPAI - CLO Module COMPLETO (Legal Analysis)
 * VersÃ£o com TODA a profundidade do Demo 2
 */

import { renderHeader } from '../components.js';

export async function render(i18n) {
    const isPt = i18n.getLang() === 'pt-br';
    
    const header = renderHeader(
        isPt ? 'âš–ï¸ MÃ³dulo CLO - InteligÃªncia JurÃ­dica' : 'âš–ï¸ CLO Module - Legal Intelligence',
        isPt ? 'AnÃ¡lise jurÃ­dica com revisÃ£o de contrato, avaliaÃ§Ã£o de risco e matching de precedentes' : 'AI-powered legal analysis with contract review, risk assessment, and precedent matching',
        []
    );

    // Risk Snapshot CLO
    const riskSnapshot = `
        <div class="risk-snapshot-section">
            <div class="risk-snapshot-header">
                <div class="risk-snapshot-icon">âš–ï¸</div>
                <div>
                    <div class="risk-snapshot-title">${isPt ? 'Snapshot de Risco JurÃ­dico' : 'Legal Risk Snapshot'}</div>
                </div>
            </div>
            
            <div class="risk-indicators-grid">
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'EXPOSIÃ‡ÃƒO LEGAL' : 'LEGAL EXPOSURE'}</div>
                    <div class="risk-indicator-value risk-medium">${isPt ? 'MÃ‰DIA' : 'MEDIUM'}</div>
                    <div class="risk-indicator-detail">${isPt ? 'ClÃ¡usulas negociÃ¡veis' : 'Negotiable clauses'}</div>
                </div>
                
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'RISCO DE PI' : 'IP RISK'}</div>
                    <div class="risk-indicator-value risk-high">${isPt ? 'ALTO' : 'HIGH'}</div>
                    <div class="risk-indicator-detail">${isPt ? 'Requer revisÃ£o' : 'Requires review'}</div>
                </div>
                
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'COMPLIANCE' : 'COMPLIANCE'}</div>
                    <div class="risk-indicator-value risk-medium">${isPt ? 'MÃ‰DIO' : 'MEDIUM'}</div>
                    <div class="risk-indicator-detail">${isPt ? 'GDPR/LGPD' : 'GDPR/LGPD'}</div>
                </div>
                
                <div class="risk-indicator-card">
                    <div class="risk-indicator-label">${isPt ? 'RESCISÃƒO' : 'TERMINATION'}</div>
                    <div class="risk-indicator-value risk-low">${isPt ? 'BAIXO' : 'LOW'}</div>
                    <div class="risk-indicator-detail">${isPt ? 'Termos claros' : 'Clear terms'}</div>
                </div>
            </div>
            
            <div class="time-to-recover">
                <div class="recover-label">${isPt ? 'TEMPO PARA RESOLVER DISPUTAS' : 'TIME TO RESOLVE DISPUTES'}</div>
                <div class="recover-value">${isPt ? '12-18 meses' : '12-18 months'}</div>
            </div>
            
            <div class="scenario-outcomes">
                <div class="scenario-outcome-card worst-case">
                    <div class="outcome-label">${isPt ? 'PIOR CENÃRIO' : 'WORST CASE'}</div>
                    <div class="outcome-icon">âš ï¸</div>
                    <div class="outcome-text">
                        ${isPt
                            ? 'Disputa de PI escala para litÃ­gio. Ambiguidade de co-desenvolvimento leva a processo de $2-5M, paralisa produto por 12-18 meses, danifica relaÃ§Ã£o com parceiro e reputaÃ§Ã£o no mercado. Custo total: $3-8M (legal + oportunidade).'
                            : 'IP dispute escalates to litigation. Co-development ambiguity leads to $2-5M lawsuit, product halted 12-18 months, damages partner relationship and market reputation. Total cost: $3-8M (legal + opportunity).'
                        }
                    </div>
                </div>
                
                <div class="scenario-outcome-card best-case">
                    <div class="outcome-label">${isPt ? 'MELHOR CENÃRIO' : 'BEST CASE'}</div>
                    <div class="outcome-icon">âœ…</div>
                    <div class="outcome-text">
                        ${isPt
                            ? 'NegociaÃ§Ã£o bem-sucedida das clÃ¡usulas crÃ­ticas (PI + IndenizaÃ§Ã£o). Contrato ajustado com proteÃ§Ã£o mÃºtua, clareza de propriedade de PI, e mecanismo de resoluÃ§Ã£o de disputas. Parceria prospera sem conflitos legais por 5+ anos.'
                            : 'Successful negotiation of critical clauses (IP + Indemnification). Contract adjusted with mutual protection, IP ownership clarity, and dispute resolution mechanism. Partnership thrives without legal conflicts for 5+ years.'
                        }
                    </div>
                </div>
            </div>
        </div>
    `;

    return `
        ${header}
        <div class="animate-in">
            <!-- Module Header -->
            <div class="clo-module-header">
                <div class="module-icon-large">âš–ï¸</div>
                <h2 class="module-title-large">${isPt ? 'MÃ³dulo CLO - InteligÃªncia JurÃ­dica' : 'CLO Module - Legal Intelligence'}</h2>
                <p class="module-subtitle">${isPt ? 'AnÃ¡lise jurÃ­dica com revisÃ£o de contrato, avaliaÃ§Ã£o de risco e matching de precedentes' : 'AI-powered legal analysis with contract review, risk assessment, and precedent matching'}</p>
                
                <div class="confidence-display-large">
                    <div class="confidence-number-huge">74%</div>
                    <div class="confidence-details-large">
                        <div class="confidence-label-large">${isPt ? 'CONFIANÃ‡A GERAL DA ANÃLISE JURÃDICA' : 'OVERALL LEGAL ANALYSIS CONFIDENCE'}</div>
                        <div class="confidence-text-large">${isPt ? 'Baseado em 89 clÃ¡usulas de contrato + 5 passos de raciocÃ­nio + 7 fatores de risco identificados' : 'Based on 89 contract clauses + 5 reasoning steps + 7 risk factors identified'}</div>
                        <div class="memory-indicator-large">âš–ï¸ ${isPt ? 'Comparado com 18 acordos de parceria similares (confianÃ§a mÃ©dia: 71%)' : 'Compared against 18 similar partnership agreements (avg confidence: 71%)'}</div>
                    </div>
                </div>
            </div>

            <!-- Risk Assessment Cards -->
            <div class="risk-assessment-grid">
                <div class="risk-card risk-medium">
                    <div class="risk-badge risk-badge-medium">${isPt ? 'RISCO MÃ‰DIO' : 'MEDIUM RISK'}</div>
                    <div class="risk-title">${isPt ? 'ExposiÃ§Ã£o de Responsabilidade' : 'Liability Exposure'}</div>
                    <div class="risk-description">${isPt ? 'ClÃ¡usulas de indenizaÃ§Ã£o requerem negociaÃ§Ã£o para equilibrar proteÃ§Ã£o mÃºtua' : 'Indemnification clauses require negotiation to balance mutual protection'}</div>
                    <div class="risk-confidence">${isPt ? 'ConfianÃ§a: 78% | 3 clÃ¡usulas crÃ­ticas identificadas' : 'Confidence: 78% | 3 critical clauses identified'}</div>
                </div>

                <div class="risk-card risk-high">
                    <div class="risk-badge risk-badge-high">${isPt ? 'RISCO ALTO' : 'HIGH RISK'}</div>
                    <div class="risk-title">${isPt ? 'Lacunas de ProteÃ§Ã£o de PI' : 'IP Protection Gaps'}</div>
                    <div class="risk-description">${isPt ? 'ProvisÃµes de propriedade intelectual precisam de esclarecimento sobre desenvolvimentos conjuntos' : 'Intellectual property ownership provisions need clarification on joint developments'}</div>
                    <div class="risk-confidence">${isPt ? 'ConfianÃ§a: 82% | 2 clÃ¡usulas ambÃ­guas encontradas' : 'Confidence: 82% | 2 ambiguous clauses found'}</div>
                </div>

                <div class="risk-card risk-low">
                    <div class="risk-badge risk-badge-low">${isPt ? 'RISCO BAIXO' : 'LOW RISK'}</div>
                    <div class="risk-title">${isPt ? 'Termos de RescisÃ£o' : 'Termination Terms'}</div>
                    <div class="risk-description">${isPt ? 'ProvisÃµes de saÃ­da sÃ£o favorÃ¡veis com perÃ­odo de aviso de 90 dias e direitos claros de transiÃ§Ã£o' : 'Exit provisions are favorable with 90-day notice period and clear transition rights'}</div>
                    <div class="risk-confidence">${isPt ? 'ConfianÃ§a: 88% | Termos padrÃ£o da indÃºstria' : 'Confidence: 88% | Industry standard terms'}</div>
                </div>

                <div class="risk-card risk-medium">
                    <div class="risk-badge risk-badge-medium">${isPt ? 'RISCO MÃ‰DIO' : 'MEDIUM RISK'}</div>
                    <div class="risk-title">${isPt ? 'Conformidade RegulatÃ³ria' : 'Regulatory Compliance'}</div>
                    <div class="risk-description">${isPt ? 'ObrigaÃ§Ãµes de privacidade de dados atendem aos padrÃµes atuais mas podem precisar de atualizaÃ§Ãµes para novas regulamentaÃ§Ãµes' : 'Data privacy obligations meet current standards but may need updates for new regulations'}</div>
                    <div class="risk-confidence">${isPt ? 'ConfianÃ§a: 72% | Monitoramento necessÃ¡rio' : 'Confidence: 72% | Monitoring required'}</div>
                </div>
            </div>

            <!-- Legal Reasoning Chain -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ”—</div>
                    <div class="section-title">${isPt ? 'Cadeia de RaciocÃ­nio JurÃ­dico' : 'Legal Reasoning Chain'}</div>
                </div>

                <div class="memory-note-large">
                    âš–ï¸ <strong>${isPt ? 'Contexto de Aprendizado:' : 'Learning Context:'}</strong> ${isPt ? 'Esta anÃ¡lise de contrato se baseia em padrÃµes de 18 acordos internacionais de parceria similares. A IA identificou indicadores-chave de risco: ambiguidade de PI (correlaÃ§Ã£o de disputa: 67%), indenizaÃ§Ã£o desequilibrada (taxa de litÃ­gio: 42%) e clÃ¡usulas fracas de rescisÃ£o (taxa de conflito: 38%).' : 'This contract analysis builds on patterns from 18 similar international partnership agreements. AI has identified key risk indicators: IP ambiguity (dispute correlation: 67%), unbalanced indemnification (litigation rate: 42%), and weak termination clauses (conflict rate: 38%).'}
                </div>

                <div class="reasoning-chain-detailed">
                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">1</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'AnÃ¡lise de Estrutura do Contrato:' : 'Contract Structure Analysis:'} ${isPt ? '89 clÃ¡usulas revisadas em 12 seÃ§Ãµes, estrutura segue framework padrÃ£o de parceria' : '89 clauses reviewed across 12 sections, structure follows standard partnership framework'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 86% | Formato: Acordo comercial padrÃ£o | JurisdiÃ§Ã£o: Lei de Delaware' : 'Confidence: 86% | Format: Standard commercial agreement | Jurisdiction: Delaware law'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver AnÃ¡lise de Documento (4)' : 'View Document Analysis (4)'}')">${isPt ? 'ðŸ“Š Ver AnÃ¡lise de Documento (4)' : 'ðŸ“Š View Document Analysis (4)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">2</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'AvaliaÃ§Ã£o de Responsabilidade:' : 'Liability Assessment:'} ${isPt ? 'ProvisÃµes de indenizaÃ§Ã£o requerem negociaÃ§Ã£o para alcanÃ§ar proteÃ§Ã£o mÃºtua' : 'Indemnification provisions require negotiation to achieve mutual protection'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 78% | Atual: Responsabilidade desequilibrada (divisÃ£o 70/30) | Meta: 50/50 indenizaÃ§Ã£o mÃºtua' : 'Confidence: 78% | Current: Unbalanced liability (70/30 split) | Target: 50/50 mutual indemnification'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver ClÃ¡usulas de Responsabilidade (3)' : 'View Liability Clauses (3)'}')">${isPt ? 'ðŸ“Š Ver ClÃ¡usulas de Responsabilidade (3)' : 'ðŸ“Š View Liability Clauses (3)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">3</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'AnÃ¡lise de ProteÃ§Ã£o de PI:' : 'IP Protection Analysis:'} ${isPt ? 'Lacunas crÃ­ticas identificadas em provisÃµes de propriedade de desenvolvimento conjunto' : 'Critical gaps identified in joint development ownership provisions'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 82% | Risco: Alto | 2 clÃ¡usulas ambÃ­guas na SeÃ§Ã£o 6.2 e 6.5' : 'Confidence: 82% | Risk: High | 2 ambiguous clauses in Section 6.2 and 6.5'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver ClÃ¡usulas de PI & Precedentes (5)' : 'View IP Clauses & Precedents (5)'}')">${isPt ? 'ðŸ“Š Ver ClÃ¡usulas de PI & Precedentes (5)' : 'ðŸ“Š View IP Clauses & Precedents (5)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">4</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'RevisÃ£o de Direitos de RescisÃ£o:' : 'Termination Rights Review:'} ${isPt ? 'ProvisÃµes de saÃ­da sÃ£o favorÃ¡veis com aviso padrÃ£o de 90 dias' : 'Exit provisions are favorable with standard 90-day notice'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 88% | RescisÃ£o: Por causa e conveniÃªncia | TransiÃ§Ã£o: PerÃ­odo de suporte de 6 meses' : 'Confidence: 88% | Termination: For cause and convenience | Transition: 6-month support period'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver Termos de RescisÃ£o (3)' : 'View Termination Terms (3)'}')">${isPt ? 'ðŸ“Š Ver Termos de RescisÃ£o (3)' : 'ðŸ“Š View Termination Terms (3)'}</div>
                        </div>
                    </div>

                    <div class="reasoning-step-detailed">
                        <div class="step-number-large">5</div>
                        <div class="step-content-large">
                            <div class="step-title">${isPt ? 'VerificaÃ§Ã£o de Conformidade RegulatÃ³ria:' : 'Regulatory Compliance Check:'} ${isPt ? 'ProvisÃµes de privacidade de dados atendem aos padrÃµes atuais GDPR/LGPD' : 'Data privacy provisions meet current GDPR/LGPD standards'}</div>
                            <div class="step-confidence-detail">${isPt ? 'ConfianÃ§a: 72% | Conformidade atual: Adequada | Risco futuro: RegulamentaÃ§Ãµes em evoluÃ§Ã£o' : 'Confidence: 72% | Current compliance: Adequate | Future risk: Evolving regulations'}</div>
                            <div class="step-sources-link" onclick="alert('${isPt ? 'Ver AnÃ¡lise de Conformidade' : 'View Compliance Analysis'}')">${isPt ? 'ðŸ“Š Ver AnÃ¡lise de Conformidade' : 'ðŸ“Š View Compliance Analysis'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Legal Recommendation -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ’¡</div>
                    <div class="section-title">${isPt ? 'RecomendaÃ§Ã£o JurÃ­dica' : 'Legal Recommendation'}</div>
                </div>

                <div class="ai-recommendation-large">
                    <div class="rec-icon-large">âš–ï¸</div>
                    <div class="rec-content-large">
                        <div class="rec-title-large">${isPt ? 'RECOMENDAÃ‡ÃƒO JURÃDICA DA IA' : 'AI LEGAL RECOMMENDATION'}</div>
                        <div class="rec-decision-large">${isPt ? 'Prosseguir com contrato APÃ“S negociar 2 clÃ¡usulas crÃ­ticas.' : 'Proceed with contract AFTER negotiating 2 critical clauses.'}</div>
                        <div class="rec-explanation-large">
                            ${isPt
                                ? 'A anÃ¡lise jurÃ­dica identifica perfil de risco gerenciÃ¡vel com duas questÃµes crÃ­ticas que requerem resoluÃ§Ã£o: (1) provisÃµes de propriedade de PI em desenvolvimentos conjuntos precisam de esclarecimento para prevenir disputas futuras, e (2) equilÃ­brio de indenizaÃ§Ã£o deve mudar de 70/30 para 50/50 proteÃ§Ã£o mÃºtua.'
                                : 'Legal analysis identifies manageable risk profile with two critical issues requiring resolution: (1) IP ownership provisions in joint developments need clarification to prevent future disputes, and (2) Indemnification balance should shift from 70/30 to 50/50 mutual protection.'
                            }
                        </div>
                        <div class="rec-strengths-large">
                            ${isPt ? 'Termos de rescisÃ£o sÃ£o favorÃ¡veis. Conformidade regulatÃ³ria Ã© adequada com monitoramento. Recomenda-se contratar consultoria jurÃ­dica para negociaÃ§Ãµes finais de clÃ¡usulas antes de assinar.' : 'Termination terms are favorable. Regulatory compliance is adequate with monitoring. Recommend engaging legal counsel for final clause negotiations before signing.'}
                        </div>
                        <div class="rec-score-large">${isPt ? 'Score: 7.1/10' : 'Score: 7.1/10'}</div>
                    </div>
                </div>

                <div class="human-decision-box">
                    <div class="human-decision-icon">ðŸ‘¤</div>
                    <div class="human-decision-content">
                        <div class="human-decision-title">${isPt ? 'SUA DECISÃƒO JURÃDICA' : 'YOUR LEGAL DECISION'}</div>
                        <div class="human-decision-text">${isPt ? 'Aguardando sua revisÃ£o e consulta com consultoria jurÃ­dica' : 'Awaiting your review and legal counsel consultation'}</div>
                        <div class="human-decision-subtext">${isPt ? 'A IA fornece anÃ¡lise jurÃ­dica e identifica fatores de risco. VocÃª mantÃ©m autoridade final sobre aprovaÃ§Ã£o de contrato. Recomenda-se revisar clÃ¡usulas crÃ­ticas com consultoria jurÃ­dica antes de prosseguir.' : 'AI provides legal analysis and identifies risk factors. You retain final authority on contract approval. Recommend reviewing critical clauses with legal counsel before proceeding.'}</div>
                        <div class="pending-badge-large">âš–ï¸ ${isPt ? 'REVISÃƒO JURÃDICA NECESSÃRIA' : 'LEGAL REVIEW REQUIRED'}</div>
                    </div>
                </div>
            </div>

            <!-- Critical Contract Clauses -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ“„</div>
                    <div class="section-title">${isPt ? 'ClÃ¡usulas Contratuais CrÃ­ticas' : 'Critical Contract Clauses'}</div>
                </div>

                <div class="contract-clauses-list">
                    <div class="clause-item clause-critical">
                        <div class="clause-header">
                            <div class="clause-badge clause-critical-badge">ðŸ”´ ${isPt ? 'CRÃTICO' : 'CRITICAL'}</div>
                            <div class="clause-title">${isPt ? 'SeÃ§Ã£o 6.2 - PI de Desenvolvimento Conjunto' : 'Section 6.2 - Joint Development IP'}</div>
                        </div>
                        <div class="clause-subtitle">${isPt ? 'Ambiguidade de Propriedade de PI' : 'IP Ownership Ambiguity'}</div>
                        <div class="clause-text">${isPt ? '"Toda propriedade intelectual desenvolvida conjuntamente deve ser de propriedade de acordo com a contribuiÃ§Ã£o, com direitos de licenciamento a serem determinados caso a caso."' : '"All intellectual property developed jointly shall be owned according to contribution, with licensing rights to be determined on a case-by-case basis."'}</div>
                        <div class="clause-issue">
                            <strong>âš ï¸ ${isPt ? 'Problema:' : 'Issue:'}</strong> ${isPt ? '"ContribuiÃ§Ã£o" e "caso a caso" nÃ£o estÃ£o definidos, criando risco de litÃ­gio. Recomenda-se: Definir mÃ©tricas de contribuiÃ§Ã£o e divisÃ£o de propriedade padrÃ£o (ex: propriedade conjunta 50/50 com licenciamento mÃºtuo).' : '"Contribution" and "case-by-case" are undefined, creating litigation risk. Recommend: Define contribution metrics and default ownership split (e.g., 50/50 joint ownership with mutual licensing).'}
                        </div>
                        <div class="clause-link" onclick="alert('${isPt ? 'Ver precedentes jurÃ­dicos & recomendaÃ§Ãµes' : 'View legal precedents & recommendations'}')">${isPt ? 'ðŸ“Š Ver precedentes jurÃ­dicos & recomendaÃ§Ãµes' : 'ðŸ“Š View legal precedents & recommendations'}</div>
                    </div>

                    <div class="clause-item clause-critical">
                        <div class="clause-header">
                            <div class="clause-badge clause-critical-badge">ðŸ”´ ${isPt ? 'CRÃTICO' : 'CRITICAL'}</div>
                            <div class="clause-title">${isPt ? 'SeÃ§Ã£o 8.3 - IndenizaÃ§Ã£o' : 'Section 8.3 - Indemnification'}</div>
                        </div>
                        <div class="clause-subtitle">${isPt ? 'ProteÃ§Ã£o de Responsabilidade Desequilibrada' : 'Unbalanced Liability Protection'}</div>
                        <div class="clause-text">${isPt ? '"A Empresa A deve indenizar a Empresa B por todas as reivindicaÃ§Ãµes, perdas e danos decorrentes do desempenho da Empresa A, com teto de responsabilidade de $5M. As obrigaÃ§Ãµes de indenizaÃ§Ã£o da Empresa B limitadas a $1.5M."' : '"Company A shall indemnify Company B for all claims, losses, and damages arising from Company A\'s performance, with liability cap of $5M. Company B\'s indemnification obligations limited to $1.5M."'}</div>
                        <div class="clause-issue">
                            <strong>âš ï¸ ${isPt ? 'Problema:' : 'Issue:'}</strong> ${isPt ? 'DivisÃ£o de responsabilidade 70/30 cria exposiÃ§Ã£o de risco desequilibrada. Recomenda-se: Negociar para pelo menos divisÃ£o 60/40 com tetos iguais ($3.5M cada) ou proporcional Ã  participaÃ§Ã£o de receita.' : '70/30 liability split creates unbalanced risk exposure. Recommend: Negotiate to at least 60/40 split with equal caps ($3.5M each) or proportional to revenue share.'}
                        </div>
                        <div class="clause-link" onclick="alert('${isPt ? 'Ver padrÃµes de indenizaÃ§Ã£o' : 'View indemnification standards'}')">${isPt ? 'ðŸ“Š Ver padrÃµes de indenizaÃ§Ã£o' : 'ðŸ“Š View indemnification standards'}</div>
                    </div>

                    <div class="clause-item clause-monitor">
                        <div class="clause-header">
                            <div class="clause-badge clause-monitor-badge">ðŸŸ¡ ${isPt ? 'MONITORAR' : 'MONITOR'}</div>
                            <div class="clause-title">${isPt ? 'SeÃ§Ã£o 7.4 - ProteÃ§Ã£o de Dados' : 'Section 7.4 - Data Protection'}</div>
                        </div>
                        <div class="clause-subtitle">${isPt ? 'EvoluÃ§Ã£o de Conformidade RegulatÃ³ria' : 'Regulatory Compliance Evolution'}</div>
                        <div class="clause-text">${isPt ? '"Ambas as partes devem cumprir com todas as leis aplicÃ¡veis de proteÃ§Ã£o de dados incluindo GDPR e LGPD conforme atualmente em vigor."' : '"Both parties shall comply with all applicable data protection laws including GDPR and LGPD as currently in force."'}</div>
                        <div class="clause-issue">
                            <strong>âš ï¸ ${isPt ? 'Nota:' : 'Note:'}</strong> ${isPt ? 'A clÃ¡usula Ã© atualmente adequada mas falta mecanismo para adaptar-se a novas regulamentaÃ§Ãµes. Recomenda-se: Adicionar provisÃ£o de revisÃ£o anual e processo de emenda para mudanÃ§as regulatÃ³rias.' : 'Clause is currently adequate but lacks mechanism for adapting to new regulations. Recommend: Add annual review provision and amendment process for regulatory changes.'}
                        </div>
                        <div class="clause-link" onclick="alert('${isPt ? 'Ver anÃ¡lise de conformidade' : 'View compliance analysis'}')">${isPt ? 'ðŸ“Š Ver anÃ¡lise de conformidade' : 'ðŸ“Š View compliance analysis'}</div>
                    </div>

                    <div class="clause-item clause-acceptable">
                        <div class="clause-header">
                            <div class="clause-badge clause-acceptable-badge">ðŸŸ¢ ${isPt ? 'ACEITÃVEL' : 'ACCEPTABLE'}</div>
                            <div class="clause-title">${isPt ? 'SeÃ§Ã£o 10.1 - RescisÃ£o por ConveniÃªncia' : 'Section 10.1 - Termination for Convenience'}</div>
                        </div>
                        <div class="clause-subtitle">${isPt ? 'Termos PadrÃ£o de RescisÃ£o' : 'Standard Termination Terms'}</div>
                        <div class="clause-text">${isPt ? '"Qualquer parte pode rescindir este acordo por conveniÃªncia com aviso por escrito de 90 dias. ApÃ³s a rescisÃ£o, as partes devem cooperar para transiÃ§Ã£o ordenada durante perÃ­odo de 6 meses."' : '"Either party may terminate this agreement for convenience with 90 days written notice. Upon termination, parties shall cooperate for orderly transition over 6-month period."'}</div>
                        <div class="clause-issue">
                            <strong>âœ… ${isPt ? 'AvaliaÃ§Ã£o:' : 'Assessment:'}</strong> ${isPt ? 'Os termos sÃ£o equilibrados e padrÃ£o da indÃºstria. Aviso de 90 dias e perÃ­odo de transiÃ§Ã£o de 6 meses fornecem proteÃ§Ã£o adequada para ambas as partes.' : 'Terms are balanced and industry-standard. 90-day notice and 6-month transition period provide adequate protection for both parties.'}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Legal Sensitivity Analysis -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">âš¡</div>
                    <div class="section-title">${isPt ? 'AnÃ¡lise de Sensibilidade JurÃ­dica' : 'Legal Sensitivity Analysis'}</div>
                </div>

                <div class="sensitivity-section-detailed">
                    <div class="sensitivity-title-large">
                        <span class="sensitivity-icon-large">âš¡</span>
                        ${isPt ? 'O Que Mudaria a RecomendaÃ§Ã£o JurÃ­dica?' : 'What Would Change the Legal Recommendation?'}
                    </div>

                    <div class="sensitivity-grid-detailed">
                        <div class="sensitivity-item-detailed sensitivity-critical">
                            <div class="sensitivity-var-title">${isPt ? 'Probabilidade de Disputa de PI' : 'IP Dispute Probability'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se a ambiguidade da clÃ¡usula de PI nÃ£o puder ser resolvida atravÃ©s de negociaÃ§Ã£o, a recomendaÃ§Ã£o muda para "Exigir parecer jurÃ­dico antes de assinar"' : 'If IP clause ambiguity cannot be resolved through negotiation, recommendation changes to "Require legal opinion before signing"'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: Propriedade de PI nÃ£o resolvida cria probabilidade de litÃ­gio de 67% com exposiÃ§Ã£o de custo de $500K-2M' : 'Impact: Unresolved IP ownership creates 67% litigation probability with $500K-2M cost exposure'}</em>
                            </div>
                        </div>

                        <div class="sensitivity-item-detailed sensitivity-critical">
                            <div class="sensitivity-var-title">${isPt ? 'EquilÃ­brio de IndenizaÃ§Ã£o' : 'Indemnification Balance'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se a divisÃ£o de responsabilidade nÃ£o puder melhorar para pelo menos 60/40, a recomendaÃ§Ã£o muda para "Solicitar cobertura de seguro abrangente"' : 'If liability split cannot improve to at least 60/40, recommendation shifts to "Request comprehensive insurance coverage"'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: Responsabilidade assimÃ©trica acima de diferencial de $2M requer mitigaÃ§Ã£o de risco adicional' : 'Impact: Asymmetric liability above $2M differential requires additional risk mitigation'}</em>
                            </div>
                        </div>

                        <div class="sensitivity-item-detailed sensitivity-warning">
                            <div class="sensitivity-var-title">${isPt ? 'MudanÃ§as RegulatÃ³rias' : 'Regulatory Changes'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se novas regulamentaÃ§Ãµes de dados forem promulgadas sem mecanismo de emenda, dispara requisito de renegociaÃ§Ã£o de contrato' : 'If new data regulations are enacted without amendment mechanism, triggers contract renegotiation requirement'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: NÃ£o conformidade pode resultar em multas de $10-20M e potencial quebra de contrato' : 'Impact: Non-compliance could result in $10-20M fines and potential contract breach'}</em>
                            </div>
                        </div>

                        <div class="sensitivity-item-detailed sensitivity-warning">
                            <div class="sensitivity-var-title">${isPt ? 'Custo de RescisÃ£o' : 'Termination Cost'}</div>
                            <div class="sensitivity-critical-point">
                                <strong>${isPt ? 'Ponto CrÃ­tico:' : 'Critical Point:'}</strong> ${isPt ? 'Se o parceiro exigir penalidades de rescisÃ£o excedendo $500K, a recomendaÃ§Ã£o muda para "Rejeitar modificaÃ§Ã£o"' : 'If partner demands termination penalties exceeding $500K, recommendation changes to "Reject modification"'}
                            </div>
                            <div class="sensitivity-impact-text">
                                <em>${isPt ? 'Impacto: Altos custos de saÃ­da reduzem flexibilidade estratÃ©gica e aumentam risco de lock-in' : 'Impact: High exit costs reduce strategic flexibility and increase lock-in risk'}</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Relevant Legal Precedents -->
            <div class="section">
                <div class="section-header">
                    <div class="section-icon">ðŸ“š</div>
                    <div class="section-title">${isPt ? 'Precedentes JurÃ­dicos Relevantes' : 'Relevant Legal Precedents'}</div>
                </div>

                <div class="precedents-list">
                    <div class="precedent-card">
                        <div class="precedent-title">TechCorp v. DataSystems (2023) - ${isPt ? 'Disputa de Propriedade de PI' : 'IP Ownership Dispute'}</div>
                        <div class="precedent-description">
                            ${isPt 
                                ? 'Acordo de desenvolvimento conjunto com clÃ¡usula de propriedade de PI ambÃ­gua levou a litÃ­gio de 18 meses sobre direitos de patente. Tribunal decidiu propriedade baseada em "contribuiÃ§Ã£o documentada" que nÃ£o estava definida no contrato original. Acordo: $1.8M em custos legais.'
                                : 'Joint development agreement with ambiguous IP ownership clause led to 18-month litigation over patent rights. Court ruled ownership based on "documented contribution" which was undefined in original contract. Settlement: $1.8M legal costs.'
                            }
                        </div>
                        <div class="precedent-relevance">
                            ðŸ“Š ${isPt ? 'RelevÃ¢ncia: 89% similar Ã  SeÃ§Ã£o 6.2 | JurisdiÃ§Ã£o: Delaware | Resultado: Define necessidade de framework explÃ­cito de PI' : 'Relevance: 89% similar to Section 6.2 | Jurisdiction: Delaware | Outcome: Defines need for explicit IP framework'}
                        </div>
                        <div class="precedent-link" onclick="alert('${isPt ? 'Ver detalhes do caso' : 'View case details'}')">${isPt ? 'ðŸ“Š Ver detalhes do caso' : 'ðŸ“Š View case details'}</div>
                    </div>

                    <div class="precedent-card">
                        <div class="precedent-title">GlobalPartners LLC v. Innovation Inc (2022) - ${isPt ? 'DesequilÃ­brio de IndenizaÃ§Ã£o' : 'Indemnification Imbalance'}</div>
                        <div class="precedent-description">
                            ${isPt
                                ? 'Parceria com divisÃ£o de indenizaÃ§Ã£o 80/20 levou a reivindicaÃ§Ã£o de responsabilidade de $4.2M. Tribunal manteve contrato mas notou "desequilÃ­brio significativo" na alocaÃ§Ã£o de risco. Relacionamento encerrado apÃ³s disputa.'
                                : 'Partnership with 80/20 indemnification split led to $4.2M liability claim. Court upheld contract but noted "significant imbalance" in risk allocation. Relationship terminated after dispute.'
                            }
                        </div>
                        <div class="precedent-relevance">
                            ðŸ“Š ${isPt ? 'RelevÃ¢ncia: 76% similar Ã  SeÃ§Ã£o 8.3 | JurisdiÃ§Ã£o: Nova York | Resultado: Apoia argumento de responsabilidade equilibrada' : 'Relevance: 76% similar to Section 8.3 | Jurisdiction: New York | Outcome: Supports balanced liability argument'}
                        </div>
                        <div class="precedent-link" onclick="alert('${isPt ? 'Ver detalhes do caso' : 'View case details'}')">${isPt ? 'ðŸ“Š Ver detalhes do caso' : 'ðŸ“Š View case details'}</div>
                    </div>

                    <div class="precedent-card">
                        <div class="precedent-title">DataProtect Inc v. EU Regulators (2024) - ${isPt ? 'Lacuna de Conformidade GDPR' : 'GDPR Compliance Gap'}</div>
                        <div class="precedent-description">
                            ${isPt
                                ? 'Contrato carecia de provisÃ£o para adaptar-se a novas regulamentaÃ§Ãµes. Quando emendas GDPR entraram em vigor, empresa enfrentou multa de â‚¬8M por nÃ£o conformidade. Contrato de parceria nÃ£o especificava responsabilidade por atualizaÃ§Ãµes regulatÃ³rias.'
                                : 'Contract lacked provision for adapting to new regulations. When GDPR amendments took effect, company faced â‚¬8M fine for non-compliance. Partnership contract did not specify responsibility for regulatory updates.'
                            }
                        </div>
                        <div class="precedent-relevance">
                            ðŸ“Š ${isPt ? 'RelevÃ¢ncia: 71% similar Ã  SeÃ§Ã£o 7.4 | JurisdiÃ§Ã£o: UE | Resultado: Destaca necessidade de mecanismo de atualizaÃ§Ã£o regulatÃ³ria' : 'Relevance: 71% similar to Section 7.4 | Jurisdiction: EU | Outcome: Highlights need for regulatory update mechanism'}
                        </div>
                        <div class="precedent-link" onclick="alert('${isPt ? 'Ver detalhes do caso' : 'View case details'}')">${isPt ? 'ðŸ“Š Ver detalhes do caso' : 'ðŸ“Š View case details'}</div>
                    </div>
                </div>
            </div>
            ${riskSnapshot}

        </div>
    `;
}

export function init(i18n) {
    console.log('âœ… CLO Module COMPLETO inicializado');
}
