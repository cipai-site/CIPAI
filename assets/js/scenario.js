/**
 * CIPAI - Scenario Page
 * PÃ¡gina dinÃ¢mica para exibir cenÃ¡rios de decisÃ£o
 */

import { renderHeader, renderScenario, renderAlert, renderCard } from '../components.js';

export async function render(i18n, data) {
    const { scenarioId } = data;

    try {
        // Carregar dados do cenÃ¡rio
        const response = await fetch(`assets/data/scenarios/${scenarioId}.json`);
        
        if (!response.ok) {
            throw new Error(`CenÃ¡rio nÃ£o encontrado: ${scenarioId}`);
        }

        const scenario = await response.json();
        const lang = i18n.getLang();
        const isPt = lang === 'pt-br';

        // Header
        const header = renderHeader(
            isPt ? scenario.titlePt : scenario.title,
            `${isPt ? scenario.categoryLabelPt : scenario.categoryLabel} â€¢ ConfianÃ§a da IA: ${scenario.aiConfidence}%`,
            [
                {
                    icon: 'â†',
                    label: 'Voltar',
                    class: 'btn-secondary',
                    onClick: "window.location.hash='history'"
                }
            ]
        );

        // Personal Model Alert (se existir)
        let personalModelAlert = '';
        if (scenario.personalModelAlert) {
            personalModelAlert = renderAlert({
                type: 'warning',
                icon: 'ðŸŽ¯',
                title: 'ALERTA DO MODELO PESSOAL',
                message: isPt ? scenario.personalModelAlert.pt : scenario.personalModelAlert.en
            });
        }

        // Reasoning Chain (se existir)
        let reasoningChain = '';
        if (scenario.reasoningChain && scenario.reasoningChain.length > 0) {
            const stepsHTML = scenario.reasoningChain.map(step => `
                <div class="reasoning-step">
                    <div class="step-number">${step.step}</div>
                    <div class="step-content">
                        <div class="step-text">${isPt ? step.textPt : step.text}</div>
                        <div class="step-detail">${isPt ? step.detailPt : step.detail}</div>
                    </div>
                </div>
            `).join('');

            reasoningChain = renderCard({
                title: 'ðŸ”— Cadeia de RaciocÃ­nio da IA',
                content: `<div class="reasoning-chain">${stepsHTML}</div>`
            });
        }

        // Assumptions (se existir)
        let assumptions = '';
        if (scenario.assumptions && scenario.assumptions.length > 0) {
            const assumptionsHTML = scenario.assumptions.map(assumption => `
                <div class="assumption-card">
                    <div class="assumption-title">${isPt ? assumption.titlePt : assumption.title}</div>
                    <div class="assumption-text">${isPt ? assumption.textPt : assumption.text}</div>
                    <div class="assumption-status">
                        <span>${assumption.status}</span>
                        <span>${isPt ? assumption.statusTextPt : assumption.statusText}</span>
                    </div>
                </div>
            `).join('');

            assumptions = renderCard({
                title: 'ðŸ’­ Premissas Principais',
                content: `<div class="assumptions-grid">${assumptionsHTML}</div>`
            });
        }

        // Trade-off Analysis (Alternativas)
        const alternativesHTML = scenario.alternatives.map(alt => {
            return renderScenario({
                name: isPt ? alt.namePt : alt.name,
                score: alt.score,
                advantages: alt.advantages.map(a => isPt ? a.pt : a.en),
                risks: alt.risks.map(r => isPt ? r.pt : r.en),
                recommended: alt.recommended
            });
        }).join('');

        const tradeoffAnalysis = renderCard({
            title: 'âš–ï¸ AnÃ¡lise de Trade-offs',
            content: `<div class="tradeoff-comparison">${alternativesHTML}</div>`
        });

        // Recommendation
        let recommendation = '';
        if (scenario.recommendation) {
            const criteriaHTML = scenario.recommendation.conversionCriteria 
                ? scenario.recommendation.conversionCriteria.map(c => 
                    `<li>â€¢ ${isPt ? c.pt : c.en}</li>`
                  ).join('')
                : '';

            const alignmentHTML = scenario.recommendation.alignment
                ? `<p style="margin-top: 16px;"><strong>Por que isso alinha com seus valores:</strong> ${isPt ? scenario.recommendation.alignment.pt : scenario.recommendation.alignment.en}</p>`
                : '';

            recommendation = renderCard({
                title: `ðŸ¤– RECOMENDAÃ‡ÃƒO DA IA: ${isPt ? scenario.recommendation.titlePt : scenario.recommendation.title}`,
                className: 'recommendation-card',
                content: `
                    <p style="line-height: 1.7;">
                        ${isPt ? scenario.recommendation.summary.pt : scenario.recommendation.summary.en}
                    </p>
                    ${criteriaHTML ? `
                        <p style="margin-top: 16px;"><strong>CritÃ©rios para ConversÃ£o:</strong></p>
                        <ul style="list-style: none; padding-left: 0; line-height: 1.8;">
                            ${criteriaHTML}
                        </ul>
                    ` : ''}
                    ${alignmentHTML}
                `,
                footer: `
                    <button class="btn btn-primary">âœ… Aceitar RecomendaÃ§Ã£o</button>
                    <button class="btn btn-secondary">ðŸ”„ Solicitar AnÃ¡lise Alternativa</button>
                `
            });
        }

        return `
            ${header}
            <div class="animate-in">
                ${personalModelAlert}
                ${reasoningChain}
                ${assumptions}
                ${tradeoffAnalysis}
                ${recommendation}
            </div>
        `;

    } catch (error) {
        console.error('Erro ao carregar cenÃ¡rio:', error);
        return `
            ${renderHeader('Erro', 'NÃ£o foi possÃ­vel carregar o cenÃ¡rio')}
            ${renderAlert({
                type: 'danger',
                icon: 'âš ï¸',
                title: 'CenÃ¡rio nÃ£o encontrado',
                message: `NÃ£o foi possÃ­vel carregar o cenÃ¡rio "${scenarioId}". Verifique se o arquivo existe em assets/data/scenarios/${scenarioId}.json`
            })}
        `;
    }
}

export function init() {
    console.log('âœ… Scenario inicializado');
}
