# Especificação de design — Marketing for you

Fonte de verdade visual. Alterações aqui exigem aprovação explícita.

---

## 0. O que foi retirado da referência

Analisado: `InspIRACAO.png` (captura integral) e o site em `links.txt` — digitalxperience.pt.

**Aproveitado como direção — estrutura e atmosfera:**

- Base escura contínua, com a cor de acento como único ponto de saturação da página
- Um só acento cromático, usado com disciplina: eyebrows, ícones, botões, sublinhados
- Eyebrow curta em maiúsculas com marcador, acima de cada título de secção
- Grelha de cards para os serviços, com ícone de traço, título e descrição curta
- Faixas de CTA de largura contida que interrompem o ritmo escuro
- Blocos de prova social e parceiros perto do fim, antes do rodapé
- Ritmo vertical generoso, com respiro grande entre secções

**Deliberadamente rejeitado:**

- A paleta laranja sobre azul-noite — substituída por verde-lima sobre preto neutro
- O tipo geométrico bold tipo Poppins — substituído por Clash Display + Inter
- Cards com cantos pouco arredondados e contornos duros — os nossos são mais suaves e assentam em elevação, não em contorno
- Faixas de CTA em laranja sólido com texto escuro — as nossas são escuras com moldura de acento
- Densidade de dez serviços — temos três, e o layout assume isso em vez de compensar
- Métricas de destaque tipo "800+ clientes" — não temos, e não vamos fingir que temos
- Qualquer texto, ícone, imagem, nome ou elemento de marca

A identidade final é original e pertence ao Marketing for you.

## 1. Direção visual

**Escuro, técnico, preciso. Confiança por engenharia, não por entusiasmo.**

O site é a demonstração do produto — se vendemos velocidade e SEO, a página tem de parecer e sentir-se rápida. Isso significa: pouca coisa em movimento, nada a carregar tarde, nada decorativo a pagar renda.

Três princípios que resolvem qualquer dúvida de execução:

1. **Um só acento.** O verde-lima é escasso e por isso significa alguma coisa. Se está em todo o lado, não aponta para nada. Numa secção, o acento marca no máximo dois elementos.
2. **O espaço faz o trabalho da decoração.** Hierarquia por escala e respiro, não por caixas, sombras e linhas.
3. **Sem entusiasmo falso.** Sem gradientes vibrantes, sem brilhos, sem elementos flutuantes. O tom é o de quem tem competência a mais para precisar de a anunciar.

## 2. Paleta

### Principal

| Token | Valor | Uso |
|---|---|---|
| `--ink-900` | `#0A0C0B` | Fundo base da página |
| `--ink-800` | `#111413` | Fundo de secção alternada |
| `--ink-700` | `#161A18` | Superfície de card |
| `--ink-600` | `#1D221F` | Card em hover, campos de input |
| `--line` | `#252B28` | Contornos e divisórias |
| `--line-strong` | `#333A36` | Contorno em hover |

Preto neutro com um leve desvio verde — nunca azul-noite. É o que separa a nossa base da referência ao primeiro olhar.

### Acento

| Token | Valor | Uso |
|---|---|---|
| `--lime-300` | `#D8FF85` | Texto de acento sobre fundo escuro, ícones |
| `--lime-400` | `#B4F135` | **Acento primário** — botões, eyebrows, sublinhados |
| `--lime-500` | `#9BD91C` | Hover de botão primário |
| `--lime-glow` | `rgba(180, 241, 53, 0.18)` | Halo de foco e sombra de botão |
| `--lime-wash` | `rgba(180, 241, 53, 0.07)` | Fundo de chip, moldura de ícone |

Texto sobre `--lime-400` é **sempre** `--ink-900`. Nunca branco.

### Texto

| Token | Valor | Contraste sobre `--ink-900` |
|---|---|---|
| `--text-1` | `#F2F5F1` | 17.8:1 — títulos e corpo principal |
| `--text-2` | `#A7AFA9` | 7.4:1 — corpo secundário, descrições |
| `--text-3` | `#6E766F` | 3.6:1 — **apenas** metadados e legendas ≥ 18px |

`--text-3` nunca em texto corrido de tamanho normal — não passa AA.

### Secundária e de apoio

| Token | Valor | Uso |
|---|---|---|
| `--moss` | `#22372B` | Lavagens de fundo, gradientes subtis, ilustração |
| `--danger` | `#FF6B5F` | Erros de formulário |
| `--warn` | `#FFC24D` | Avisos — uso raro |

Sem terceira cor de marca. Se um elemento parece precisar de uma, o problema é de layout.

### Regras de cor

- Fundo da página é `--ink-900` de ponta a ponta; secções alternadas usam `--ink-800`, nunca branco
- O acento nunca preenche áreas grandes — no máximo um botão, um chip ou um ícone de cada vez
- Sem gradiente entre duas cores de marca; gradientes apenas de `--ink` para `--ink`, ou lavagens de `--moss` a 0% de opacidade
- Cor nunca é o único portador de significado

## 3. Tipografia

| Papel | Família | Pesos | Origem |
|---|---|---|---|
| Títulos | **Clash Display** | 500, 600 | Fontshare, licença livre — self-hosted |
| Interface e corpo | **Inter** | 400, 500, 600 | OFL — self-hosted, subset latino |

Máximo quatro ficheiros `woff2`. `Clash Display 600` e `Inter 400` levam `preload` — são as únicas acima da dobra.

### Escala

Fluida com `clamp()`, sem saltos por breakpoint.

| Token | Tamanho | Família / Peso | Altura de linha | Espaçamento |
|---|---|---|---|---|
| `--fs-display` | `clamp(2.75rem, 7vw, 5.25rem)` | Clash 600 | 0.96 | -0.03em |
| `--fs-h2` | `clamp(2rem, 4.5vw, 3.25rem)` | Clash 600 | 1.06 | -0.02em |
| `--fs-h3` | `clamp(1.375rem, 2.2vw, 1.75rem)` | Clash 500 | 1.2 | -0.01em |
| `--fs-h4` | `1.125rem` | Inter 600 | 1.35 | 0 |
| `--fs-lead` | `clamp(1.0625rem, 1.6vw, 1.25rem)` | Inter 400 | 1.6 | 0 |
| `--fs-body` | `1rem` | Inter 400 | 1.7 | 0 |
| `--fs-sm` | `0.9375rem` | Inter 400 | 1.6 | 0 |
| `--fs-eyebrow` | `0.75rem` | Inter 600 | 1 | 0.16em, maiúsculas |

### Regras

- Clash Display **só** em títulos. Nunca em botões, nav, labels ou corpo.
- Texto corrido entre 60 e 75 caracteres por linha (`max-width: 68ch`)
- Números em tabelas e listas com `font-variant-numeric: tabular-nums`
- Sem itálico. Ênfase por peso 600 ou pela cor de acento.
- Sem texto em maiúsculas além da eyebrow
- Sem justificação — sempre alinhado à esquerda

### Eyebrow

Marcador quadrado de 6px em `--lime-400`, `gap` de 10px, texto em `--lime-300`. Precede todos os `h2` de secção. É o único elemento repetido em toda a página, e é o que dá coesão ao conjunto.

## 4. Espaçamento

Base de 4px.

`--sp-1: 4px` · `--sp-2: 8px` · `--sp-3: 12px` · `--sp-4: 16px` · `--sp-5: 24px` · `--sp-6: 32px` · `--sp-7: 48px` · `--sp-8: 64px` · `--sp-9: 96px` · `--sp-10: 128px` · `--sp-11: 160px`

- **Padding vertical de secção:** `clamp(64px, 6vw, 104px)` — reduzido a 2026-09-01; os 160px anteriores davam 320px entre secções e liam-se como buraco
- **Container:** `max-width: 1240px`, gutter 20px em mobile e 40px a partir de `lg`
- **Grelha:** 12 colunas em desktop, `gap` de 24px; coluna única abaixo de `md`
- **Título → corpo:** `--sp-5` · **Eyebrow → título:** `--sp-4` · **Corpo → CTA:** `--sp-7`
- **Padding interno de card:** 32px em desktop, 24px em mobile

O respiro entre secções nunca desce abaixo de 64px, mesmo em mobile. É a diferença entre premium e apertado.

## 5. Bordas e raios

| Token | Valor | Uso |
|---|---|---|
| `--r-sm` | `8px` | Chips, tags, molduras de ícone pequenas |
| `--r-md` | `12px` | Inputs, molduras de ícone |
| `--r-lg` | `20px` | Cards, blocos de CTA, painéis |
| `--r-xl` | `28px` | Contentores grandes, mockups |
| `--r-pill` | `999px` | Botões, eyebrow chips |

Contorno padrão: `1px solid var(--line)`. Nunca mais grosso que 1px, exceto o anel de foco.

Sombras são para elevação real, nunca decorativas:

- `--shadow-card`: `0 1px 2px rgba(0,0,0,.4), 0 12px 32px rgba(0,0,0,.28)`
- `--shadow-glow`: `0 0 0 1px var(--lime-glow), 0 8px 28px var(--lime-glow)` — apenas em botão primário no hover

## 6. Botões

| Variante | Fundo | Texto | Contorno | Hover |
|---|---|---|---|---|
| Primário | `--lime-400` | `--ink-900` | — | `--lime-500`, `translateY(-2px)`, `--shadow-glow` |
| Secundário | transparente | `--text-1` | `1px --line` | contorno `--line-strong`, fundo `--ink-700` |
| Fantasma / link | — | `--lime-300` | — | seta desliza 4px à direita |

- Forma `--r-pill`, padding `16px 32px` em desktop e `14px 24px` em mobile
- Inter 600, `--fs-sm`, sem maiúsculas
- Altura mínima 48px; alvo de toque mínimo 44×44px
- Transição `180ms cubic-bezier(0.16, 1, 0.3, 1)` em `background`, `transform` e `box-shadow` — nunca em `all`
- Foco: `outline: 2px solid var(--lime-400); outline-offset: 3px`, nunca removido
- Ícone opcional à direita, 16px, alinhado ao centro óptico
- **Um só botão primário visível por écrã**

## 7. Cards

- Fundo `--ink-700`, contorno `1px --line`, raio `--r-lg`, padding 32px
- Ícone de traço de 24px em `--lime-400`, dentro de uma moldura de 52px com raio `--r-md` e fundo `--lime-wash`
- Ordem interna: moldura de ícone → `--sp-5` → título `--fs-h3` → `--sp-3` → descrição `--fs-sm` em `--text-2` → `--sp-5` → link fantasma
- Hover: fundo `--ink-600`, contorno `--line-strong`, `translateY(-4px)`, 200ms. Sem escala, sem rotação.
- Altura igual entre irmãos do mesmo grid, sempre
- Sem imagem de fundo dentro do card
- O card inteiro é clicável quando tem link — com `<a>` a cobrir a área, não `onclick` no `<div>`

## 7.1 Card de testemunho

Deliberadamente sóbrio. Quanto mais um testemunho é decorado, menos verdadeiro parece — e o nosso público chega desconfiado.

- Fundo `--ink-700`, contorno `1px --line`, raio `--r-lg`, padding 28px
- Citação em `--fs-lead`, `--text-1`, peso 400. **Sem aspas gigantes decorativas**, sem itálico.
- Autor no fundo do card: avatar circular de 48px, nome em Inter 600 `--fs-sm` `--text-1`, negócio e cidade em `--fs-sm` `--text-3`
- Sem foto: o avatar é substituído por um círculo de 48px com fundo `--lime-wash`, contorno `1px --line`, e as iniciais em `--lime-300` Inter 600. Nunca um ícone genérico de pessoa.
- **Sem estrelas de avaliação.** Não temos sistema de avaliação; estrelas desenhadas à mão são decoração a fingir que são dados.
- Grid `repeat(auto-fit, minmax(320px, 1fr))` com `gap` de 24px — o layout ajusta-se a qualquer número de testemunhos sem alteração de código (ver `specs/site.md` §6.1)
- Alturas independentes; testemunhos têm comprimentos diferentes e forçar altura igual cria espaço vazio esquisito
- Sem hover, sem elevação, sem carrossel. É conteúdo para ler, não para interagir.

## 7.2 Card de preço

Dois cards lado a lado: website (destaque) e SEO (secundário).

**Card do website — o único elemento da página com destaque de acento:**

- Contorno `1px --lime-400` em vez de `--line`; lavagem de fundo `--lime-wash` sobre `--ink-700`
- Chip no topo, `--r-pill`, fundo `--lime-400`, texto `--ink-900`, Inter 600 `--fs-eyebrow`: `PROMOÇÃO PORTFÓLIO`
- Bloco de preço: `€199` em Clash Display 600 a `--fs-display` reduzido (`clamp(3rem, 6vw, 4rem)`), com `€799` imediatamente ao lado em `--fs-h4`, `--text-3`, `text-decoration: line-through`
- O valor riscado nunca fica escondido, em letra minúscula ou numa linha separada — a comparação é o argumento
- `sem BTW` em `--fs-sm` `--text-3`, na mesma linha de base do preço. Nunca em rodapé, nunca em asterisco, nunca abaixo dos 14px.
- Abaixo do preço, o motivo em `--fs-sm` `--text-2`: a explicação de que o valor é promocional por construção de portfólio. **É a linha mais importante do card** e nunca é omitida por questões de espaço.
- Data-limite em `--fs-sm`, `--lime-300`, com ícone de calendário de 16px. Texto por extenso.
- Lista do que inclui, com marcador de check de 16px em `--lime-400`, `--fs-sm`, `--text-2`:
  - Até 5 páginas
  - 2 revisões
  - Google My Business
  - **Pagamento único, sem mensalidades** — apresentado como item incluído, com o mesmo check dos restantes. É um benefício, não a ausência de um serviço. Nunca escrever "sem manutenção".
- CTA primária em largura total no fundo do card
- **Selo de garantia**, imediatamente abaixo da CTA: ícone de escudo de 16px em `--lime-400` + texto `--fs-sm` `--text-2`. Sem caixa, sem fundo, sem contorno — uma promessa desta dimensão perde força se for embrulhada como um anúncio. O peso vem da posição, não da decoração.
- O prazo de **3 dias** vai na mesma linha do selo, no mesmo tamanho e na mesma cor. Nunca em `--text-3`, nunca num asterisco, nunca abaixo dos 14px. Uma condição em letra pequena por baixo de uma promessa grande é o padrão exato que este público reconhece como armadilha — e aqui destruiria o melhor argumento da página.

**Card do SEO:**

- Estilo de card normal (§7), sem acento
- Em vez de valor: `Sob consulta` em Clash Display 500 `--fs-h3`, `--text-1`
- CTA secundária: `Falar sobre SEO`

Regra: nunca inventar um terceiro tier. Dois cards num grid de dois — não é um buraco a preencher.

## 8. Fotografia e imagem

**Direção:** ambientes de trabalho reais, superfícies escuras, luz lateral dura. Ecrãs e dispositivos aparecem, pessoas aparecem pouco e nunca a olhar para a câmara.

> **Exceção deliberada — retratos da fundadora (2026-08-20).**
>
> A regra do "nunca a olhar para a câmara" foi escrita contra fotografia de banco decorativa, onde o contacto visual é encenação. Num retrato da pessoa que presta o serviço, é o contrário: o contacto visual é precisamente o que gera confiança, e este público compra confiança numa pessoa que fala a sua língua.
>
> Aplica-se **apenas** a fotografias reais da fundadora. Para todo o resto — ambientes, dispositivos, terceiros — a regra original mantém-se.
>
> Em uso hoje: `hero-alicia-*` (hero, plano inteiro num canal holandês) e `retrato-alicia-*` (secção da história pessoal). Ambas mantêm o tratamento obrigatório abaixo.

Tratamento obrigatório:

- Dessaturação para cerca de 70%, com sombras puxadas para o frio (misturar `--moss` nas zonas escuras)
- Sobreposição `--ink-900` a 55–70% quando houver texto por cima
- Vinheta subtil nos limites, para a imagem se fundir no fundo da página em vez de flutuar sobre ele
- Nunca uma fotografia a cores plenas ao lado de outra tratada

> **Onde o tratamento é aplicado (2026-08-20).** No **ficheiro da imagem**, não por `filter` CSS.
>
> Razão: fotografias com luz dura precisam de ter a sombra **levantada antes** de serem dessaturadas e escurecidas. Um filtro CSS só consegue escurecer o que já lá está, e fecha o lado sombrio de um rosto num bloco preto — que é precisamente onde vive a expressão.
>
> A ordem correta é: levantar sombras (gama < 1) → dessaturar → arrefecer sombras → escurecer → vinheta. Cada fotografia leva a sua dosagem: luz uniforme pede mão pesada, luz dura pede mão leve com sombra levantada.
>
> **Não acrescentar `filter:` a `.portrait img`** — trataria a imagem uma segunda vez.

**Proibido:** stock corporativo de sorrisos e apertos de mão; pessoas a apontar para gráficos; qualquer imagem retirada da referência; imagens de banco genéricas de "marketing digital" com setas e ícones a voar.

**Tratamento do produto** — o produto é um website, logo mostra-se em ecrã:

- Mockup de janela de browser minimalista: barra superior de 32px em `--ink-700`, três pontos de 8px em `--line`, sem URL falso
- Raio `--r-xl`, `--shadow-card`, contorno `1px --line`
- Screenshots reais dos sites entregues — nunca layouts inventados como se fossem trabalho feito
- Enquanto não houver projetos reais: mostrar componentes do próprio site em detalhe, ou não mostrar nada. Nunca portfólio fictício.
- Em mobile, o mockup de desktop corta-se à direita em vez de encolher até ficar ilegível

**Ícones:** apenas de traço, 1.5px, cantos arredondados, grelha de 24px, uma única família em todo o site. Sem ícones preenchidos, sem emojis, sem ilustrações a cores.

## 9. Movimento

Discreto, rápido, uma vez só.

- **Entrada:** `opacity 0→1` e `translateY(16px→0)`, 500ms, `cubic-bezier(0.16, 1, 0.3, 1)`
- Disparada por `IntersectionObserver` a 15% de visibilidade, **desligada após disparar** — nada re-anima ao voltar a subir
- Stagger de 60ms entre irmãos, com máximo de 4 elementos por sequência
- **Hover:** 180ms; **transições de estado:** 200ms; nada acima de 500ms
- Header: encolhe de 88px para 64px e ganha fundo `--ink-900` com desfoque ao passar 80px de scroll
- `prefers-reduced-motion: reduce` → todas as animações e transições desativadas, conteúdo visível de imediato. Não encurtar: desativar.
- Animar apenas `opacity` e `transform`. Nunca `height`, `top`, `width` ou `box-shadow` em movimento contínuo.

**Proibido:** parallax, carrosséis automáticos, contadores numéricos, texto a ser escrito letra a letra, cursores personalizados, scroll-jacking, elementos a flutuar em loop, pré-loader.

## 10. Desktop e mobile

**Desktop (≥ 1024px)**

- Nav horizontal completo, CTA primária à direita
- Hero assimétrico: texto em 7 colunas, visual em 5
- Serviços em 3 colunas
- Timeline dos 14 dias na horizontal, com linha de ligação
- Padding de secção até 160px

**Mobile (< 1024px)**

- Header com logo e ícone de menu; drawer em écrã inteiro, fundo `--ink-900`, links em `--fs-h3`, CTA primária no fundo do drawer
- Hero empilhado, texto primeiro; visual só depois da CTA — nunca a empurrar a CTA para fora do écrã
- Serviços numa coluna, cards em largura total
- Timeline na vertical, com linha à esquerda
- Padding de secção mínimo de 80px
- CTA primária do header permanece visível e acessível com o polegar
- Testado desde 320px, sem scroll horizontal em nenhuma largura

## 11. A evitar

- Segunda cor de marca a competir com o verde-lima
- Laranja sobre azul-noite — é a assinatura da referência
- Poppins ou qualquer geométrica bold como fonte de títulos
- Glassmorphism, neomorfismo, brilhos roxos de "IA"
- Gradientes multicolor, malhas coloridas, orbes desfocados
- Emojis como ícones, ícones preenchidos, famílias de ícones misturadas
- Sombras a fingir profundidade onde não há hierarquia
- Números, percentagens, contagens de clientes ou testemunhos inventados
- Logótipos de parceiros ou clientes que não são clientes
- Estrelas de avaliação desenhadas, quando não há sistema de avaliação por trás
- Contadores regressivos, escassez falsa ("últimas vagas", "resta 1 lugar"), pop-ups de saída

  > **Revisto em 2026-08-20.** A condição de fim da promoção passou a ser o número de vagas, por decisão do cliente, e a data foi retirada do site.
  >
  > O que continua proibido: relógios a contar, barras a esvaziar, números de vagas restantes a diminuir no écrã, e qualquer variação de "últimas vagas" ou "resta 1 lugar". A condição é declarada uma vez, em texto corrido, e não é encenada.
  >
  > A razão da proibição não mudou: o público-alvo teme ser enganado, e teatro de urgência confirma-lhe o medo. Uma condição dita com naturalidade lê-se como regra de negócio; a mesma condição com um contador ao lado lê-se como armadilha.

- Secções acrescentadas só para a página ficar mais longa
- Texto dentro de imagens
- Mais de um botão primário no mesmo écrã
- `transition: all`
- Bibliotecas de animação — contradizem o orçamento de 20KB de JS e a promessa de performance
