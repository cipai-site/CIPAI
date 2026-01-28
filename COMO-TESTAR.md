# ðŸ§ª GUIA DE TESTE - CIPAI

## âš ï¸ IMPORTANTE: Servidor Local NecessÃ¡rio

O CIPAI usa **ES6 Modules** (JavaScript moderno), que nÃ£o funcionam abrindo o arquivo HTML diretamente no navegador por questÃµes de seguranÃ§a CORS.

**VocÃª precisa rodar um servidor HTTP local!**

---

## ðŸš€ MÃ©todo 1: Python (MAIS FÃCIL) â­

### Windows / Mac / Linux

1. Abra o **Terminal** (ou Prompt de Comando no Windows)
2. Navegue atÃ© a pasta do projeto:
```bash
cd Downloads/cipai-refactored
```

3. Execute o comando:
```bash
python -m http.server 8000
```

Ou se tiver Python 2:
```bash
python -m SimpleHTTPServer 8000
```

4. Abra o navegador e acesse:
```
http://localhost:8000
```

5. Pronto! O sistema deve carregar normalmente âœ…

---

## ðŸš€ MÃ©todo 2: Node.js + http-server

Se vocÃª tem Node.js instalado:

1. Instale o http-server globalmente:
```bash
npm install -g http-server
```

2. Na pasta do projeto:
```bash
http-server -p 8000
```

3. Acesse:
```
http://localhost:8000
```

---

## ðŸš€ MÃ©todo 3: VS Code (RECOMENDADO para desenvolvedores)

1. Abra a pasta `cipai-refactored` no VS Code
2. Instale a extensÃ£o **"Live Server"** por Ritwick Dey
3. Clique com botÃ£o direito no arquivo `index.html`
4. Selecione **"Open with Live Server"**
5. O navegador abre automaticamente! âœ…

**Vantagem:** Auto-reload quando vocÃª editar arquivos!

---

## ðŸš€ MÃ©todo 4: PHP

Se vocÃª tem PHP instalado:

```bash
cd cipai-refactored
php -S localhost:8000
```

Acesse: `http://localhost:8000`

---

## âœ… O Que Testar Depois que Rodar

### 1. Dashboard
- [ ] Sistema carrega sem erros no console (F12)
- [ ] Sidebar aparece Ã  esquerda
- [ ] Logo "CIPAI" no topo
- [ ] 4 mÃ©tricas cognitivas aparecem
- [ ] Tabela de "DecisÃµes Recentes" aparece

### 2. NavegaÃ§Ã£o
- [ ] Clique em "Nova DecisÃ£o" no menu
- [ ] FormulÃ¡rio aparece
- [ ] Clique em "Painel Cognitivo" para voltar
- [ ] URL muda para #new-decision e #dashboard

### 3. CenÃ¡rio
- [ ] Na tabela do Dashboard, clique em "Contratar CTO SÃªnior"
- [ ] PÃ¡gina do cenÃ¡rio carrega
- [ ] Alerta do Modelo Pessoal aparece (amarelo)
- [ ] Cadeia de RaciocÃ­nio (4 passos numerados)
- [ ] 3 Premissas aparecem
- [ ] 3 Alternativas (cards de trade-off)
- [ ] RecomendaÃ§Ã£o da IA (card amarelo no final)

### 4. InternacionalizaÃ§Ã£o
- [ ] Seletor de idioma no rodapÃ© da sidebar
- [ ] Troque para "ðŸ‡ºðŸ‡¸ English"
- [ ] Interface muda para inglÃªs
- [ ] Volte para "ðŸ‡§ðŸ‡· PortuguÃªs"
- [ ] Interface volta para portuguÃªs

### 5. Responsividade
- [ ] Redimensione a janela do navegador
- [ ] Teste em tela pequena (< 768px)
- [ ] Sidebar deve se comportar bem

---

## ðŸ› Problemas Comuns

### 1. "Carregando CIPAI..." fica travado

**Causa:** VocÃª abriu o arquivo diretamente (file://) sem servidor

**SoluÃ§Ã£o:** Use um dos mÃ©todos acima para rodar servidor local

---

### 2. Console mostra erro "CORS"

**Causa:** Mesmo problema - sem servidor local

**SoluÃ§Ã£o:** Use servidor HTTP local

---

### 3. Console mostra "Failed to fetch"

**Causa:** Arquivo JSON nÃ£o encontrado ou caminho errado

**SoluÃ§Ã£o:** 
- Verifique se a estrutura de pastas estÃ¡ correta
- Certifique-se que `assets/data/scenarios/cto-hire.json` existe

---

### 4. PÃ¡gina em branco

**SoluÃ§Ã£o:**
1. Abra o Console (F12)
2. Veja erros em vermelho
3. Me envie print do console

---

## ðŸ“Š Checklist Final

```
TESTE CIPAI - Fase 2

SERVIDOR:
[ ] Rodei servidor local (mÃ©todo: _____)
[ ] Acessei http://localhost:8000
[ ] PÃ¡gina carregou

DASHBOARD:
[ ] Sistema carregou sem erros
[ ] Sidebar aparece
[ ] 4 mÃ©tricas visÃ­veis
[ ] Tabela de decisÃµes aparece

CENÃRIO:
[ ] Cliquei em "Contratar CTO SÃªnior"
[ ] CenÃ¡rio carregou
[ ] Alerta amarelo aparece
[ ] 4 passos de raciocÃ­nio
[ ] 3 premissas
[ ] 3 alternativas (trade-offs)
[ ] RecomendaÃ§Ã£o final

NAVEGAÃ‡ÃƒO:
[ ] Cliquei em "Nova DecisÃ£o"
[ ] FormulÃ¡rio aparece
[ ] Voltei ao Dashboard
[ ] URL muda (#dashboard, #new-decision)

IDIOMA:
[ ] Troquei para English
[ ] Interface mudou
[ ] Voltei para PortuguÃªs

CONSOLE:
[ ] Sem erros vermelhos
[ ] Apenas logs em verde/azul

STATUS: âœ… TUDO FUNCIONANDO | âš ï¸ COM PROBLEMAS
```

---

## ðŸ’¡ Dica de Ouro

**Use Python!** Ã‰ o mais simples e jÃ¡ vem instalado na maioria dos sistemas.

```bash
cd Downloads/cipai-refactored
python -m http.server 8000
```

Depois acesse: `http://localhost:8000`

**Ã‰ sÃ³ isso!** ðŸŽ‰

---

## ðŸ“ž Precisa de Ajuda?

Se nÃ£o funcionar:
1. Tire print do **Console do navegador** (F12 â†’ Console)
2. Tire print da **tela**
3. Me envie ambos
4. Diga qual mÃ©todo tentou usar

Vou te ajudar a resolver! ðŸš€
