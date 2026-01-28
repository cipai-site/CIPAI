# ðŸ“ GUIA: Como Adicionar Novos CenÃ¡rios ao CIPAI

## VisÃ£o Geral

Este guia explica como criar novos cenÃ¡rios de decisÃ£o no sistema CIPAI de forma rÃ¡pida e padronizada.

---

## â±ï¸ Tempo Estimado: 15-20 minutos

Com o novo sistema de templates, adicionar um cenÃ¡rio completo leva apenas **15-20 minutos**, comparado com **2-3 horas** no sistema antigo.

---

## ðŸ“‹ Passo 1: Criar Arquivo JSON do CenÃ¡rio

### LocalizaÃ§Ã£o
```
/assets/data/scenarios/seu-cenario.json
```

### Template Base

Copie o arquivo `scenario-schema.json` como referÃªncia ou use este template mÃ­nimo:

```json
{
  "id": "seu-cenario-id",
  "title": "Your Decision Title in English",
  "titlePt": "TÃ­tulo da sua DecisÃ£o em PortuguÃªs",
  
  "category": "strategic",
  "categoryLabel": "Strategic Decision",
  "categoryLabelPt": "DecisÃ£o EstratÃ©gica",
  
  "aiConfidence": 75,
  "confidenceLevel": "medium-high",
  
  "alternatives": [
    {
      "id": "option-1",
      "name": "Option 1 Name",
      "namePt": "Nome da OpÃ§Ã£o 1",
      "score": 7.5,
      "recommended": true,
      "advantages": [
        {"en": "Advantage 1", "pt": "Vantagem 1"},
        {"en": "Advantage 2", "pt": "Vantagem 2"}
      ],
      "risks": [
        {"en": "Risk 1", "pt": "Risco 1"},
        {"en": "Risk 2", "pt": "Risco 2"}
      ]
    },
    {
      "id": "option-2",
      "name": "Option 2 Name",
      "namePt": "Nome da OpÃ§Ã£o 2",
      "score": 6.0,
      "recommended": false,
      "advantages": [
        {"en": "Advantage 1", "pt": "Vantagem 1"}
      ],
      "risks": [
        {"en": "Risk 1", "pt": "Risco 1"}
      ]
    }
  ],
  
  "recommendation": {
    "title": "Recommended Path",
    "titlePt": "Caminho Recomendado",
    "summary": {
      "en": "Summary of recommendation in English",
      "pt": "Resumo da recomendaÃ§Ã£o em PortuguÃªs"
    }
  }
}
```

---

## ðŸ“Š Passo 2: Definir Categoria

Escolha uma das categorias disponÃ­veis:

| Categoria | Label EN | Label PT |
|-----------|----------|----------|
| `strategic` | Strategic Decision | DecisÃ£o EstratÃ©gica |
| `financial` | Financial Decision | DecisÃ£o Financeira |
| `operational` | Operational Decision | DecisÃ£o Operacional |
| `people` | People Decision | DecisÃ£o de Pessoas |
| `legal` | Legal Decision | DecisÃ£o JurÃ­dica |
| `technical` | Technical Decision | DecisÃ£o TÃ©cnica |

---

## ðŸŽ¯ Passo 3: Definir NÃ­vel de ConfianÃ§a

Configure `aiConfidence` (0-100) e `confidenceLevel`:

| Confidence | Level | Quando Usar |
|------------|-------|-------------|
| 85-100 | `high` | Dados sÃ³lidos, baixa incerteza |
| 70-84 | `medium-high` | Boa base de dados, alguma incerteza |
| 55-69 | `medium` | Dados razoÃ¡veis, incerteza moderada |
| 40-54 | `medium-low` | Dados limitados, incerteza significativa |
| 0-39 | `low` | Poucos dados, alta incerteza |

---

## âœ… Passo 4: Criar Alternativas

Cada cenÃ¡rio deve ter **pelo menos 2 alternativas**, mas pode ter atÃ© **5**.

### Estrutura de uma Alternativa

```json
{
  "id": "opcao-unica",
  "name": "Option Name (English)",
  "namePt": "Nome da OpÃ§Ã£o (PortuguÃªs)",
  "score": 7.5,
  "recommended": true,
  "advantages": [
    {"en": "Clear advantage", "pt": "Vantagem clara"},
    {"en": "Another benefit", "pt": "Outro benefÃ­cio"}
  ],
  "risks": [
    {"en": "Potential risk", "pt": "Risco potencial"},
    {"en": "Another concern", "pt": "Outra preocupaÃ§Ã£o"}
  ]
}
```

### Dicas para PontuaÃ§Ã£o (Score)

- **8.0-10.0**: OpÃ§Ã£o muito forte, poucos riscos
- **6.5-7.9**: OpÃ§Ã£o boa com trade-offs balanceados
- **5.0-6.4**: OpÃ§Ã£o viÃ¡vel mas com riscos significativos
- **< 5.0**: OpÃ§Ã£o nÃ£o recomendada

---

## ðŸ”§ Passo 5: Campos Opcionais (AvanÃ§ado)

### Context (Contexto EspecÃ­fico)

```json
"context": {
  "stage": "Series A",
  "arr": "$400K",
  "teamSize": 15,
  "qualquerOutroCampo": "valor"
}
```

### Personal Model Alert (Alerta do Modelo Pessoal)

```json
"personalModelAlert": {
  "en": "This decision conflicts with your risk profile...",
  "pt": "Esta decisÃ£o conflita com seu perfil de risco..."
}
```

### Reasoning Chain (Cadeia de RaciocÃ­nio)

```json
"reasoningChain": [
  {
    "step": 1,
    "text": "Step summary in English",
    "textPt": "Resumo do passo em PortuguÃªs",
    "detail": "Detailed explanation in English...",
    "detailPt": "ExplicaÃ§Ã£o detalhada em PortuguÃªs..."
  }
]
```

### Assumptions (Premissas)

```json
"assumptions": [
  {
    "title": "Assumption Title",
    "titlePt": "TÃ­tulo da Premissa",
    "text": "Assumption description...",
    "textPt": "DescriÃ§Ã£o da premissa...",
    "confidence": "medium",
    "status": "âš ï¸",
    "statusText": "Requires validation",
    "statusTextPt": "Requer validaÃ§Ã£o"
  }
]
```

---

## ðŸš€ Passo 6: Testar o CenÃ¡rio

ApÃ³s criar o arquivo JSON:

1. **Salve** o arquivo em `/assets/data/scenarios/`
2. **Reinicie** a aplicaÃ§Ã£o (se necessÃ¡rio)
3. **Navegue** atÃ© "HistÃ³rico de DecisÃµes" ou "Nova DecisÃ£o"
4. **Verifique** se o cenÃ¡rio aparece corretamente
5. **Teste** a troca de idioma (PT â†” EN)

---

## âœ¨ Exemplo Completo: ExpansÃ£o Internacional

```json
{
  "id": "international-expansion",
  "title": "Should We Expand to Latin America Now?",
  "titlePt": "Devemos Expandir para AmÃ©rica Latina Agora?",
  
  "category": "strategic",
  "categoryLabel": "Strategic Decision",
  "categoryLabelPt": "DecisÃ£o EstratÃ©gica",
  
  "value": "$500K investment required",
  "valuePt": "Investimento de $500K necessÃ¡rio",
  
  "aiConfidence": 68,
  "confidenceLevel": "medium",
  
  "context": {
    "currentMarket": "Brazil",
    "targetMarkets": ["Argentina", "Chile", "Mexico"],
    "currentARR": "$2M",
    "teamSize": 35,
    "runway": "18 months"
  },
  
  "alternatives": [
    {
      "id": "expand-now",
      "name": "Expand to 3 Countries Simultaneously",
      "namePt": "Expandir para 3 PaÃ­ses Simultaneamente",
      "score": 6.8,
      "recommended": false,
      "advantages": [
        {"en": "Fast market capture", "pt": "Captura rÃ¡pida de mercado"},
        {"en": "Economies of scale", "pt": "Economias de escala"},
        {"en": "First-mover advantage", "pt": "Vantagem de pioneiro"}
      ],
      "risks": [
        {"en": "High operational complexity", "pt": "Alta complexidade operacional"},
        {"en": "Significant capital requirement", "pt": "Requisito significativo de capital"},
        {"en": "Divided focus", "pt": "Foco dividido"}
      ]
    },
    {
      "id": "staged-expansion",
      "name": "Staged Expansion (1 Country per Quarter)",
      "namePt": "ExpansÃ£o em Etapas (1 PaÃ­s por Trimestre)",
      "score": 8.2,
      "recommended": true,
      "advantages": [
        {"en": "Controlled risk", "pt": "Risco controlado"},
        {"en": "Learn from each market", "pt": "Aprender com cada mercado"},
        {"en": "Capital-efficient", "pt": "Eficiente em capital"},
        {"en": "Allows for iteration", "pt": "Permite iteraÃ§Ã£o"}
      ],
      "risks": [
        {"en": "Slower market capture", "pt": "Captura de mercado mais lenta"},
        {"en": "Competitors may enter first", "pt": "Competidores podem entrar primeiro"}
      ]
    },
    {
      "id": "wait-5m-arr",
      "name": "Wait Until $5M ARR",
      "namePt": "Aguardar AtÃ© $5M ARR",
      "score": 5.5,
      "recommended": false,
      "advantages": [
        {"en": "Stronger financial position", "pt": "PosiÃ§Ã£o financeira mais forte"},
        {"en": "Proven product-market fit", "pt": "Product-market fit comprovado"},
        {"en": "Lower execution risk", "pt": "Menor risco de execuÃ§Ã£o"}
      ],
      "risks": [
        {"en": "May miss market window", "pt": "Pode perder janela de mercado"},
        {"en": "Competitors establish presence", "pt": "Competidores estabelecem presenÃ§a"},
        {"en": "Revenue growth may slow without expansion", "pt": "Crescimento de receita pode desacelerar sem expansÃ£o"}
      ]
    }
  ],
  
  "recommendation": {
    "title": "Staged Expansion Starting with Mexico",
    "titlePt": "ExpansÃ£o em Etapas ComeÃ§ando pelo MÃ©xico",
    "summary": {
      "en": "Based on market size ($50B TAM), regulatory similarity, and your current capital position ($3M cash, 18mo runway), AI recommends staged expansion starting with Mexico. This approach balances growth opportunity with execution risk.",
      "pt": "Baseado no tamanho do mercado ($50B TAM), similaridade regulatÃ³ria e sua posiÃ§Ã£o de capital atual ($3M caixa, 18 meses runway), a IA recomenda expansÃ£o em etapas comeÃ§ando pelo MÃ©xico. Esta abordagem equilibra oportunidade de crescimento com risco de execuÃ§Ã£o."
    },
    "conversionCriteria": [
      {"en": "Achieve $500K ARR in Mexico", "pt": "Atingir $500K ARR no MÃ©xico"},
      {"en": "Maintain >85% gross margin", "pt": "Manter >85% margem bruta"},
      {"en": "Build repeatable playbook", "pt": "Construir playbook repetÃ­vel"},
      {"en": "Keep CAC under $2K", "pt": "Manter CAC abaixo de $2K"}
    ]
  }
}
```

---

## ðŸŽ¨ Passo 7: PersonalizaÃ§Ã£o Visual (Opcional)

Por padrÃ£o, o sistema usa:
- **Ãcones**: Baseados na categoria
- **Cores**: Baseadas na pontuaÃ§Ã£o e nÃ­vel de confianÃ§a
- **Layout**: Template padrÃ£o de cenÃ¡rio

Se quiser personalizar, adicione ao JSON:

```json
"display": {
  "icon": "ðŸŒŽ",
  "color": "var(--info)",
  "headerImage": "/assets/images/expansion.jpg"
}
```

---

## âœ… Checklist de Qualidade

Antes de finalizar seu cenÃ¡rio, verifique:

- [ ] ID Ãºnico e descritivo (formato slug)
- [ ] TÃ­tulos em inglÃªs e portuguÃªs
- [ ] Categoria correta selecionada
- [ ] Pelo menos 2 alternativas definidas
- [ ] Cada alternativa tem vantagens E riscos
- [ ] PontuaÃ§Ãµes fazem sentido (alternativa recomendada tem score mais alto)
- [ ] Textos em PT e EN estÃ£o completos
- [ ] RecomendaÃ§Ã£o final estÃ¡ clara
- [ ] Arquivo JSON Ã© vÃ¡lido (sem erros de sintaxe)

---

## ðŸ› Troubleshooting

### CenÃ¡rio nÃ£o aparece na lista
- Verifique se o arquivo estÃ¡ em `/assets/data/scenarios/`
- Confirme que o JSON Ã© vÃ¡lido (use um validador online)
- Reinicie a aplicaÃ§Ã£o

### Textos aparecem em branco
- Verifique se vocÃª preencheu tanto `en` quanto `pt`
- Confirme que nÃ£o hÃ¡ aspas quebradas

### Erro de carregamento
- Valide a estrutura JSON
- Confirme que todos os campos obrigatÃ³rios estÃ£o presentes
- Verifique o console do navegador para erros

---

## ðŸ“š Recursos Adicionais

- **Schema completo**: `/assets/data/scenarios/scenario-schema.json`
- **Exemplos**: Veja os cenÃ¡rios existentes em `/assets/data/scenarios/`
- **DocumentaÃ§Ã£o de componentes**: `/docs/components.md`

---

## ðŸŽ¯ PrÃ³ximos Passos

Depois de dominar a criaÃ§Ã£o bÃ¡sica de cenÃ¡rios:

1. Explore campos opcionais (reasoning chain, assumptions)
2. Adicione contexto especÃ­fico do seu domÃ­nio
3. Integre com Personal Model para alertas personalizados
4. Crie cenÃ¡rios compostos (decisÃµes sequenciais)

---

**Tempo estimado para criar um cenÃ¡rio completo:** 15-20 minutos â±ï¸  
**Tempo economizado vs sistema antigo:** ~2 horas âœ…
