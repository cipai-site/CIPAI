/**
 * CIPAI - New Decision Page
 * FormulÃ¡rio para criar nova anÃ¡lise de decisÃ£o
 */

import { renderHeader, renderCard } from '../components.js';

export async function render(i18n) {
    const header = renderHeader(
        i18n.t('newDecision.title'),
        i18n.t('newDecision.subtitle')
    );

    const formHTML = `
        <div class="form-group">
            <label class="form-label">${i18n.t('newDecision.form.decisionName')}</label>
            <input type="text" class="form-input" placeholder="${i18n.t('newDecision.form.decisionNamePlaceholder')}">
        </div>

        <div class="form-group">
            <label class="form-label">${i18n.t('newDecision.form.category')}</label>
            <select class="form-select form-input">
                <option value="strategic">${i18n.t('newDecision.form.categories.strategic')}</option>
                <option value="financial">${i18n.t('newDecision.form.categories.financial')}</option>
                <option value="operational">${i18n.t('newDecision.form.categories.operational')}</option>
                <option value="hr">${i18n.t('newDecision.form.categories.hr')}</option>
                <option value="legal">${i18n.t('newDecision.form.categories.legal')}</option>
                <option value="technical">${i18n.t('newDecision.form.categories.technical')}</option>
            </select>
        </div>

        <div class="form-group">
            <label class="form-label">${i18n.t('newDecision.form.context')}</label>
            <textarea class="form-input form-textarea" placeholder="${i18n.t('newDecision.form.contextPlaceholder')}"></textarea>
        </div>

        <div class="grid grid-2" style="gap: 16px;">
            <div class="form-group">
                <label class="form-label">${i18n.t('newDecision.form.urgency')}</label>
                <select class="form-select form-input">
                    <option value="low">${i18n.t('newDecision.form.urgencyLevels.low')}</option>
                    <option value="medium">${i18n.t('newDecision.form.urgencyLevels.medium')}</option>
                    <option value="high">${i18n.t('newDecision.form.urgencyLevels.high')}</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">${i18n.t('newDecision.form.timeline')}</label>
                <select class="form-select form-input">
                    <option value="immediate">${i18n.t('newDecision.form.timelineOptions.immediate')}</option>
                    <option value="1week">${i18n.t('newDecision.form.timelineOptions.oneWeek')}</option>
                    <option value="1month">${i18n.t('newDecision.form.timelineOptions.oneMonth')}</option>
                    <option value="3months">${i18n.t('newDecision.form.timelineOptions.threeMonths')}</option>
                    <option value="6months">${i18n.t('newDecision.form.timelineOptions.sixMonths')}</option>
                    <option value="1year">${i18n.t('newDecision.form.timelineOptions.oneYear')}</option>
                </select>
            </div>
        </div>

        <div class="form-group" style="margin-top: 32px;">
            <button class="btn btn-primary">${i18n.t('newDecision.buttons.analyze')}</button>
            <button class="btn btn-secondary" onclick="window.location.hash='dashboard'">${i18n.t('newDecision.buttons.cancel')}</button>
        </div>
    `;

    return `
        ${header}
        <div class="animate-in" style="max-width: 800px;">
            ${renderCard({
                title: 'Configure sua AnÃ¡lise',
                content: formHTML
            })}
        </div>
    `;
}

export function init() {
    console.log('âœ… New Decision inicializado');
}
