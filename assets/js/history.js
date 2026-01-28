/**
 * CIPAI - History Page
 * HistÃ³rico completo de decisÃµes analisadas
 */

import { renderHeader, renderBadge } from '../components.js';

export async function render(i18n) {
    const header = renderHeader(
        i18n.t('history.title'),
        i18n.t('history.subtitle'),
        [
            {
                icon: 'ðŸ”',
                label: i18n.t('common.search'),
                class: 'btn-secondary',
                onClick: 'alert("Busca em desenvolvimento")'
            },
            {
                icon: 'âž•',
                label: i18n.t('newDecision.title'),
                class: 'btn-primary',
                onClick: "window.location.hash='new-decision'"
            }
        ]
    );

    // Filtros
    const filters = `
        <div class="filters-bar" style="display: flex; gap: 12px; margin-bottom: 24px;">
            <button class="btn btn-sm btn-primary filter-active">${i18n.t('history.filters.all')}</button>
            <button class="btn btn-sm btn-secondary">${i18n.t('history.filters.pending')}</button>
            <button class="btn btn-sm btn-secondary">${i18n.t('history.filters.completed')}</button>
            <button class="btn btn-sm btn-secondary">${i18n.t('history.filters.archived')}</button>
        </div>
    `;

    // DecisÃµes
    const decisions = [
        {
            id: 'cto-hire',
            title: 'Contratar CTO SÃªnior por $180K/ano',
            titleEn: 'Hire Senior CTO at $180K/year',
            created: 'HÃ¡ 3 dias',
            createdEn: '3 days ago',
            value: '$180K/ano + equity',
            valueEn: '$180K/year + equity',
            scenarios: 3,
            dataPoints: 89,
            module: 'ðŸ’° CFO',
            status: 'ATIVO',
            statusEn: 'ACTIVE',
            statusClass: 'active',
            confidence: 64,
            confidenceRange: '58-72%',
            confidenceColor: 'var(--warning)',
            reasoningSteps: 4,
            assumptions: '3 chave, 2 validadas',
            assumptionsEn: '3 key, 2 validated',
            tradeoffs: 'Custo vs LideranÃ§a TÃ©cnica',
            tradeoffsEn: 'Cost vs Tech Leadership',
            recommendation: 'CTO FracionÃ¡rio (7.8/10)',
            recommendationEn: 'Fractional CTO (7.8/10)',
            reasoning: 'Gap de lideranÃ§a identificado â†’ AnÃ¡lise financeira â†’ Risco de pessoas avaliado â†’ CTO fracionÃ¡rio como estratÃ©gia de reduÃ§Ã£o de risco',
            reasoningEn: 'Leadership gap identified â†’ Financial analysis â†’ People risk assessed â†’ Fractional CTO as risk reduction strategy'
        },
        {
            id: 'gtm-strategy',
            title: 'EstratÃ©gia GTM: PLG vs Sales-Led',
            titleEn: 'GTM Strategy: PLG vs Sales-Led',
            created: 'HÃ¡ 1 semana',
            createdEn: '1 week ago',
            value: 'Caminho para $2M ARR',
            valueEn: 'Path to $2M ARR',
            scenarios: 3,
            dataPoints: 124,
            module: 'ðŸ’° CFO',
            status: 'ATIVO',
            statusEn: 'ACTIVE',
            statusClass: 'active',
            confidence: 79,
            confidenceRange: '74-84%',
            confidenceColor: 'var(--success)',
            reasoningSteps: 5,
            assumptions: '4 chave, 3 validadas',
            assumptionsEn: '4 key, 3 validated',
            tradeoffs: 'Escala vs Qualidade de Receita',
            tradeoffsEn: 'Scale vs Revenue Quality',
            recommendation: 'Abordagem HÃ­brida (7.6/10)',
            recommendationEn: 'Hybrid Approach (7.6/10)',
            reasoning: 'Caminho para $2M ARR analisado â†’ PLG: escala mais rÃ¡pida, menor ACV â†’ Enterprise: maior receita, mais lento â†’ Foco em produto Ãºnico mantido â†’ RecomendaÃ§Ã£o: PLG para SMB + assistÃªncia de vendas para mid-market',
            reasoningEn: 'Path to $2M ARR analyzed â†’ PLG: faster scale, lower ACV â†’ Enterprise: higher revenue, slower â†’ Single product focus maintained â†’ Recommendation: PLG for SMB + sales-assist for mid-market'
        },
        {
            id: 'series-a-analysis',
            title: 'AnÃ¡lise de Investimento SÃ©rie A - TechCorp',
            titleEn: 'Series A Investment Analysis - TechCorp',
            created: 'HÃ¡ 2 horas',
            createdEn: '2 hours ago',
            value: 'DecisÃ£o de $2.5M',
            valueEn: '$2.5M decision value',
            scenarios: 4,
            dataPoints: 156,
            module: 'ðŸ’° CFO',
            status: 'ATIVO',
            statusEn: 'ACTIVE',
            statusClass: 'active',
            confidence: 82,
            confidenceRange: '76-88%',
            confidenceColor: 'var(--success)',
            reasoningSteps: 4,
            assumptions: '3 chave, 2 validadas',
            assumptionsEn: '3 key, 2 validated',
            tradeoffs: '3 cenÃ¡rios pontuados',
            tradeoffsEn: '3 scenarios scored',
            recommendation: 'Investir agora (8.2/10)',
            recommendationEn: 'Invest now (8.2/10)',
            reasoning: 'ValidaÃ§Ã£o de mercado (92% conf) â†’ AvaliaÃ§Ã£o de equipe (85% conf) â†’ Modelo financeiro sustentÃ¡vel (78% conf) â†’ Risco mÃ©dio-baixo (75% conf) â†’ RecomendaÃ§Ã£o: Investir agora',
            reasoningEn: 'Market validation (92% conf) â†’ Team assessment (85% conf) â†’ Financial model sustainable (78% conf) â†’ Risk medium-low (75% conf) â†’ Recommendation: Invest now'
        },
        {
            id: 'partnership-review',
            title: 'RevisÃ£o de Acordo de Parceria - ExpansÃ£o Global',
            titleEn: 'Partnership Agreement Review - Global Expansion',
            created: 'HÃ¡ 5 horas',
            createdEn: '5 hours ago',
            value: 'Risco legal: MÃ©dio',
            valueEn: 'Legal risk: Medium',
            scenarios: 3,
            dataPoints: 89,
            module: 'âš–ï¸ CLO',
            status: 'ATIVO',
            statusEn: 'ACTIVE',
            statusClass: 'active',
            confidence: 74,
            confidenceRange: '68-80%',
            confidenceColor: 'var(--warning)',
            reasoningSteps: 5,
            assumptions: '7 fatores de risco',
            assumptionsEn: '7 risk factors',
            tradeoffs: '4 casos similares',
            tradeoffsEn: '4 similar cases',
            recommendation: 'Negociar 2 clÃ¡usulas',
            recommendationEn: 'Negotiate 2 clauses',
            reasoning: 'AnÃ¡lise de estrutura contratual â†’ AvaliaÃ§Ã£o de responsabilidade (Risco mÃ©dio) â†’ Lacunas de proteÃ§Ã£o de PI identificadas â†’ ClÃ¡usulas de rescisÃ£o favorÃ¡veis â†’ RecomendaÃ§Ã£o: Negociar 2 clÃ¡usulas antes de assinar',
            reasoningEn: 'Contract structure analysis â†’ Liability assessment (Medium risk) â†’ IP protection gaps identified â†’ Termination clauses favorable â†’ Recommendation: Negotiate 2 clauses before signing'
        },
        {
            id: 'q4-budget',
            title: 'EstratÃ©gia de RealocaÃ§Ã£o de OrÃ§amento Q4',
            titleEn: 'Q4 Budget Reallocation Strategy',
            created: 'Ontem',
            createdEn: 'Yesterday',
            value: '$850K realocados',
            valueEn: '$850K reallocated',
            scenarios: 5,
            dataPoints: 203,
            module: 'ðŸ’° CFO',
            status: 'CONCLUÃDO',
            statusEn: 'COMPLETED',
            statusClass: '',
            confidence: 91,
            confidenceRange: '87-94%',
            confidenceColor: 'var(--success)',
            reasoningSteps: 6,
            assumptions: '18% melhoria de ROI',
            assumptionsEn: '18% ROI improvement',
            tradeoffs: '5 departamentos afetados',
            tradeoffsEn: '5 departments affected',
            recommendation: 'Executado com sucesso',
            recommendationEn: 'Successfully executed',
            reasoning: 'AnÃ¡lise de performance Q3 â†’ IdentificaÃ§Ã£o de gargalos â†’ Modelagem de impacto de realocaÃ§Ã£o â†’ ValidaÃ§Ã£o com stakeholders â†’ ImplementaÃ§Ã£o aprovada',
            reasoningEn: 'Q3 performance analysis â†’ Bottleneck identification â†’ Reallocation impact modeling â†’ Stakeholder validation â†’ Implementation approved'
        }
    ];

    const isPt = i18n.getLang() === 'pt-br';

    const decisionsHTML = decisions.map(decision => `
        <div class="decision-card animate-in" onclick="window.location.hash='scenario/${decision.id}'" style="cursor: pointer;">
            <div class="decision-header">
                <div class="decision-title-block">
                    <div class="decision-title">${isPt ? decision.title : decision.titleEn}</div>
                    <div class="decision-meta">
                        <span>${isPt ? decision.created : decision.createdEn}</span>
                        <span>â€¢</span>
                        <span>${isPt ? decision.value : decision.valueEn}</span>
                        <span>â€¢</span>
                        <span>${decision.scenarios} ${isPt ? 'cenÃ¡rios analisados' : 'scenarios analyzed'}</span>
                        <span>â€¢</span>
                        <span>${decision.dataPoints} ${isPt ? 'pontos de dados processados' : 'data points processed'}</span>
                    </div>
                </div>
                <div class="decision-badges">
                    <span class="badge badge-module">${decision.module}</span>
                    <span class="badge badge-status ${decision.statusClass}">${isPt ? decision.status : decision.statusEn}</span>
                </div>
                <div class="confidence-display">
                    <div class="confidence-number" style="color: ${decision.confidenceColor};">${decision.confidence}<span style="font-size: 18px;">%</span></div>
                    <div class="confidence-label">${isPt ? 'ConfianÃ§a da IA' : 'AI Confidence'}</div>
                    <div class="confidence-range">${isPt ? 'Intervalo' : 'Range'}: ${decision.confidenceRange}</div>
                </div>
            </div>

            <div class="decision-insights">
                <div class="insights-grid">
                    <div class="insight-item">
                        <div class="insight-icon">ðŸ”—</div>
                        <div class="insight-content">
                            <div class="insight-label">${isPt ? 'Passos de RaciocÃ­nio' : 'Reasoning Steps'}</div>
                            <div class="insight-value">${decision.reasoningSteps} ${isPt ? 'passos validados' : 'steps validated'}</div>
                        </div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-icon">ðŸ’­</div>
                        <div class="insight-content">
                            <div class="insight-label">${isPt ? 'Premissas' : 'Assumptions'}</div>
                            <div class="insight-value">${isPt ? decision.assumptions : decision.assumptionsEn}</div>
                        </div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-icon">âš–ï¸</div>
                        <div class="insight-content">
                            <div class="insight-label">Trade-offs</div>
                            <div class="insight-value">${isPt ? decision.tradeoffs : decision.tradeoffsEn}</div>
                        </div>
                    </div>
                    <div class="insight-item">
                        <div class="insight-icon">âœ…</div>
                        <div class="insight-content">
                            <div class="insight-label">${isPt ? 'RecomendaÃ§Ã£o' : 'Recommendation'}</div>
                            <div class="insight-value">${isPt ? decision.recommendation : decision.recommendationEn}</div>
                        </div>
                    </div>
                </div>

                <div class="reasoning-preview">
                    <div class="reasoning-title">${isPt ? 'PRÃ‰VIA DO RACIOCÃNIO DA IA:' : 'AI REASONING PREVIEW:'}</div>
                    <div class="reasoning-steps">
                        ${isPt ? decision.reasoning : decision.reasoningEn}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    return `
        ${header}
        <div class="animate-in">
            ${filters}
            ${decisionsHTML}
        </div>
    `;
}

export function init() {
    console.log('âœ… History inicializado');
    
    // Event listeners para filtros
    document.querySelectorAll('.filters-bar button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filters-bar button').forEach(b => {
                b.classList.remove('btn-primary', 'filter-active');
                b.classList.add('btn-secondary');
            });
            e.target.classList.remove('btn-secondary');
            e.target.classList.add('btn-primary', 'filter-active');
        });
    });
}
