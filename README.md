# Pedido de Namoro — Site Romântico (GitHub Pages)

Este é um site fofo e romântico com 7 páginas, pensado para pedir a volta do namoro. 
Inclui corações animados, design moderno e um botão de música (para tocar *Tempinho Bom — Salvador da Rima*).

## Estrutura
- `index.html` — Página 1 — **Jogo do Coração**
- `senha.html` — Página 2 — **Senha (070723)**
- `pag3.html` — Página 3 — **Mensagem de Amor (Parte 1)**
- `pag4.html` — Página 4 — **Mensagem de Amor (Parte 2)**
- `pag5.html` — Página 5 — **Mensagem de Amor (Parte 3)**
- `pag6.html` — Página 6 — **Pedido de Volta**
- `pag7.html` — Página 7 — **Pedido Final** (botões **Sim/Não** + confete de corações)

Arquivos compartilhados:
- `assets/css/style.css` — Estilos, fontes, animações, *glassmorphism*
- `assets/js/hearts-bg.js` — Corações flutuando no fundo
- `assets/js/music.js` — Botão flutuante para tocar/pausar música
- `assets/js/confetti-hearts.js` — Animação final de corações (canvas)

## Música
Devido às políticas de autoplay do navegador, a música só toca após um clique.  
Coloque o arquivo MP3 da música em `assets/music/` com o nome **`Tempinho_Bom_Salvador_da_Rima.mp3`**.
O botão redondo no canto inferior direito toca/pausa a faixa.

## Como publicar no GitHub Pages
1. Crie um novo repositório no GitHub (público).
2. Envie todos os arquivos deste projeto para a raiz do repositório.
3. Vá em **Settings → Pages → Build and deployment**:
   - **Source:** selecione **Deploy from a branch**
   - **Branch:** escolha **main** (ou `master`) e o diretório `/ (root)`
4. Aguarde a página publicar e acesse a URL do GitHub Pages (mostrada nas configurações).

## Personalizações rápidas
- **Texto:** edite o conteúdo das páginas `pag3.html` a `pag7.html` diretamente.
- **Cores:** ajuste as variáveis em `:root` no `assets/css/style.css`.
- **Quantidade de corações do jogo:** altere `const total = 16;` em `index.html`.
- **Senha:** troque a verificação no `senha.html` (`'070723'`).

Boa surpresa! 💖
