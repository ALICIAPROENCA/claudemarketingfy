# Memória do projeto — Marketing for you

Histórico vivo de decisões e aprendizados. Só entra aqui o que ajuda a continuidade do projeto.

Última atualização: 2026-08-07

---

## Decisões aprovadas

**2026-08-07 — Stack: HTML + CSS + JS puro.**
Sem framework, sem build, sem dependências. Substituiu a recomendação inicial de Astro + Tailwind, por escolha explícita do cliente. Justificação aceite: controlo total do HTML e zero dependências servem bem uma agência que vende performance.

**2026-08-07 — Idioma: só português na fase 1.**
PT-PT. NL e EN adiados para a fase 2. Decorreu diretamente da mudança de stack — em vanilla, 3 idiomas completos significavam manter 3 cópias de cada HTML à mão. O cliente preferiu tirar o site PT de pé primeiro e decidir a estratégia i18n depois.

**2026-08-07 (revisto no mesmo dia) — Posicionamento: português como acesso, não como tradução.**

A primeira versão desta decisão estava errada e foi substituída. Registo o erro porque a distinção é o centro do projeto:

- ❌ **O que ficou registado primeiro:** "atender falantes de português é um diferencial entre outros; ativar só na fase 2, quando houver NL/EN."
- ✅ **O que é de facto:** a agência opera nos Países Baixos e serve **microempreendedores lusófonos que não falam holandês**. O português não é uma língua do site — é a razão pela qual o cliente consegue comprar. Sem ele, este cliente não tem agência nenhuma acessível.

Consequências que decorrem daqui e valem mais do que a decisão em si:

- O concorrente não é outra agência — é **o cliente continuar sem site**. O site tem de vencer a inércia, não uma proposta rival.
- O tom muda: explicar, não impressionar. Sem jargão, sem anglicismos, sem termos técnicos por traduzir.
- O medo a dissolver é ser enganado numa língua que não se domina. Isto explica por que razão o preço tem de estar visível e por que razão o motivo da promoção tem de ser declarado.
- Português neutro, não exclusivamente PT-PT nem PT-BR — o público vem de várias origens.
- Na fase 2, NL/EN passam a servir um **público novo** (expansão de mercado), não o público atual. O site PT continua principal.

**2026-08-07 — Preços publicados na página.**

Todos os valores **sem BTW**.

| Item | Valor |
|---|---|
| Website completo, promoção de lançamento | €199, sem data publicada |
| Website completo, normal | €799 |
| Serviços de SEO | Sob consulta |

Inclui: até 5 páginas, 2 revisões, Google My Business.

O motivo da promoção é publicado junto ao preço, não escondido. Numa oferta de €199 contra €799, a explicação é o que separa "oportunidade" de "desconfiança", e o público-alvo já chega desconfiado. ~~Motivo original: construir portfólio.~~ Substituído a 2026-08-20 — ver entrada dessa data.

Valores sem BTW são aceitáveis por o público ser B2B (microempreendedores), mas a indicação `sem BTW` tem de estar visível junto ao preço, não em rodapé.

**2026-08-07 — Sem manutenção, sem mensalidades.**
Substituiu uma ideia inicial de manutenção a €50/mês, abandonada por simplificação. O website é pagamento único e fica do cliente.

Na página, isto escreve-se **de forma afirmativa** — "pagamento único, sem mensalidades", como item incluído no card de preço — e nunca como "não inclui manutenção", que soa a serviço em falta. Para quem tem orçamento apertado e desconfia de contratos com fidelização, a ausência de custo recorrente é argumento de venda.

**2026-08-07 — Alojamento e domínio: custo do cliente, com acompanhamento.**
Pagos por ele diretamente ao fornecedor e registados em nome dele; a agência ajuda a escolher, registar e configurar, em português.

Enquadramento aprovado: o custo não é apresentado como encargo escondido, mas como **independência** — o site fica mesmo do cliente e não depende da agência para continuar no ar. Isso torna coerente todo o resto do posicionamento (pagamento único, sem fidelização).

Regra de execução: a menção ao custo aparece **junto ao preço**, não só na FAQ. Um custo obrigatório descoberto depois de agendar a call é a forma mais rápida de perder este público. Não publicar valores de alojamento — variam por fornecedor e desatualizam-se.

**2026-08-07 → REVOGADA em 2026-08-10 — Garantia de devolução do dinheiro.**

Esteve aprovada durante três dias como "o argumento mais forte do projeto", presente no hero, no card de preço e como primeira pergunta da FAQ, com prazo de 3 dias após a entrega.

**Removida por decisão explícita do cliente:** o preço já é baixo e a devolução não é praticável. Saiu dos três sítios, e a pergunta *"E se eu não gostar do site?"* foi retirada da FAQ a pedido.

Registo o que se perdeu, para a decisão poder ser reavaliada com informação e não por esquecimento: era a única frase da página que anulava por inteiro o medo de ser enganado — o medo central deste público — e era o que tornava €199 legível como oportunidade em vez de suspeita. O trabalho que ela fazia passou para as **2 revisões incluídas**, que são uma resposta mais fraca porque prometem correção, não saída.

Se um dia aparecer resistência ao preço ou dúvida sobre confiança, é aqui que se deve olhar primeiro.

**2026-08-07 — Enschede, trabalho à distância com todo o país.**
Enquadrado como vantagem, não como limitação: o público não precisa de se deslocar nem de se explicar presencialmente numa língua que não domina.

**2026-08-07 — Atendimento em português e inglês. Ordem dos idiomas invertida.**
Plano anterior era NL e depois EN. Agora **EN é a fase 2 e NL a fase 3**.

Motivo: a agência já atende anglófonos, portanto o EN serve clientes que existem hoje e que neste momento não têm por onde entrar — é acessibilidade, tal como o português. O NL é outra coisa: público novo, concorrência local estabelecida, e um argumento de venda diferente (deixaria de ser "eu falo a sua língua"). Não é urgente.

**2026-08-07 — Tratamento por "você" em todo o site.**
Sem "si", sem "consigo", sem "tu", sem alternâncias. Onde o vocabulário divergir entre PT-PT e PT-BR, preferir o termo que ambos entendem; não havendo, preferir a forma brasileira por coerência com o "você" (*hospedagem*, não *alojamento*). Mesmo termo em toda a página.

**2026-08-07 — Alterações após as 2 revisões: trabalho avulso, orçamentado antes de começar.**
Respostas de FAQ redigidas em `specs/site.md` §6.2. Reforçam deliberadamente o "pagamento único, sem fidelização" já afirmado no card de preço — mesma promessa, dois sítios onde a dúvida surge.

**2026-08-07 — Prova social como secção editável à mão.**
Testemunhos escritos diretamente no HTML, em blocos com instruções em comentário e um modelo para copiar. Não em JSON carregado por JS: uma agência de SEO não pode ter o conteúdo mais persuasivo invisível para o Google. Grid `auto-fit`, adapta-se a qualquer número sem mexer em código. Sem JSON-LD de `Review`/`AggregateRating` — o Google não aceita marcação de avaliações auto-publicadas. Detalhe em `specs/site.md` §6.1.

**2026-08-07 — Landing única, conversão por Calendly.**
Página única com âncoras, mais duas páginas legais. CTA primária "Agendar call" apontando ao Calendly, repetida em 4 pontos. Sem formulário de contacto na fase 1 — um só canal de conversão.

**2026-08-07 (revisto) — Público-alvo: microempreendedores lusófonos nos Países Baixos.**
Substituiu "empreendedores/solopreneurs + B2B/tech" genérico, que era demasiado vago para orientar decisões de copy e layout. B2B/tech lusófono nos Países Baixos permanece como secundário.

**2026-08-07 — Tipografia: Clash Display (títulos) + Inter (interface e corpo).**
Contraste entre títulos expressivos e corpo neutro. Ambas self-hosted, licença livre.

**2026-08-07 — Paleta: escuro + verde-lima elétrico.**
Preto neutro com desvio verde (`#0A0C0B`) e acento `#B4F135`. Mantém a atmosfera escura da referência com identidade própria; o verde comunica velocidade e crescimento, alinhado com a proposta dos 14 dias e do SEO.

**2026-08-07 — Regra dos placeholders.**
Nada além dos três serviços confirmados pode ser escrito na página. Tudo o resto usa `[[A DEFINIR: ...]]`. Sem números, testemunhos ou projetos inventados. Aplica-se também a secções inteiras: prova social e portfólio são **removidas** se continuarem vazias no lançamento, não preenchidas.

---

**2026-08-10 — Prazo de entrega: até 14 dias (era "menos de 7 dias").**
Substituiu o prazo original em todo o lado: título, meta tags, JSON-LD, cards de serviço, timeline e FAQ. A timeline passou a 1–3 / 4–10 / 11–14 dias, com as mesmas três etapas.

**2026-08-10 — Preço "a partir de €199", promoção até 30 de setembro de 2026.**
O "a partir de" existe porque até 5 páginas está incluído; acima disso é orçamento à parte. O card diz isso de forma afirmativa e visível, para o cliente não descobrir o limite depois de agendar.

**2026-08-10 — "holandês" em vez de "neerlandês" em todo o copy.**
Termo que o público-alvo realmente usa.

**2026-08-10 — SEO: acrescentado o trabalho continuado de ~3 meses.**
Novo item na secção "o que significa otimizado para o Google", a explicar que subir nas pesquisas leva tempo e que existe um acompanhamento de cerca de 3 meses sobre as palavras-chave, como serviço à parte.

Escrito **como objetivo do trabalho**, não como promessa de posição: *"com o objetivo de chegar à primeira página"*. Ninguém controla o Google, e as specs proíbem garantias de posição. Com a garantia de devolução agora removida, uma promessa de resultado que falhasse deixaria o cliente sem promessa e sem saída — o que custaria mais confiança do que a frase forte alguma vez ganharia.

**2026-08-10 — Retirada a frase "a otimização não é um extra que se paga depois".**
Contradizia o facto de a agência vender serviços de SEO em separado. O site nasce bem construído; o posicionamento continuado é outro serviço.

---

**2026-08-10 — Manutenção mensal opcional: €19,90/mês, sem BTW.**

Inverte duas decisões de 2026-08-07 ("sem manutenção, sem mensalidades" e "hospedagem e domínio são custo do cliente"). Ambas foram substituídas por decisão explícita.

Como ficou: o site continua a ser compra única a partir de €199. A mensalidade é **opcional** e inclui hospedagem, domínio e manutenção. Quem preferir contrata a hospedagem por conta própria, com acompanhamento em português e sem custo adicional.

O "opcional" é o que mantém verdadeiras as frases de independência que já estavam na página ("o site é seu", "sem fidelização"). Se um dia passar a obrigatória, o produto deixa de ser um site que se compra e passa a ser uma subscrição — e há **três** sítios a reescrever: card de preço e duas respostas da FAQ.

Regra de execução: o valor aparece no card com o mesmo destaque de um item incluído, com a etiqueta `opcional` ao lado. Nunca em letra pequena — é um custo recorrente, e é exatamente o tipo de coisa que este público teme descobrir tarde.

**2026-08-10 — Domínio sob o plano de €19,90/mês fica registado em nome da agência.**

Decisão do cliente, com instrução explícita de não dar ênfase ao facto na página.

Como foi executado: **removidas as afirmações que deixaram de ser verdadeiras** para quem contrata a mensalidade — *"o site é seu de qualquer maneira"*, *"não fica preso a ninguém"* e a promessa de poder levar o domínio para outro fornecedor. Não foram substituídas por outra afirmação sobre o assunto.

O que a página diz hoje: o site (conteúdo, texto, imagens, desenho) é do cliente — verdadeiro nos dois cenários — e que o domínio fica no nome dele **quando é ele a contratar a hospedagem**, o que também é verdadeiro. Sobre o outro cenário, a página não afirma nada.

Nota para quem continuar o projeto: não reintroduzir frases de posse do domínio sem verificar qual dos dois cenários se aplica. As specs (§6.2) proíbem respostas que escondam um limite, e este é o ponto do site onde essa regra é mais fácil de quebrar sem dar por isso.

**2026-08-20 — Fotografias reais da fundadora no site.**

Duas fotos pessoais (não profissionais) entraram na página:

| Ficheiro | Onde | Porquê |
|---|---|---|
| `hero-alicia-*` | Hero, substituiu o espaço reservado vazio | As casas de empena holandesas atrás provam "estou nos Países Baixos" num segundo — a metade do argumento que o texto não conseguia provar sozinho |
| `retrato-alicia-*` | Ao lado do texto da história pessoal | Único retrato com rosto nítido e contacto visual; o texto pessoal pedia uma foto pessoal |

Uma terceira foto (praia em Portugal) foi **deixada de fora**: num site que precisa de afirmar presença na Holanda, uma praia portuguesa empurra na direção contrária e lê-se como férias. Fica disponível caso se queira um par Portugal → Holanda na secção da trajetória.

Decisões de execução:

- O retrato acompanha o **texto emocional**, não o bloco inteiro — a pedido, e é o sítio certo: a foto entra exatamente quando o texto deixa de falar de SEO e passa a falar da pessoa.
- A moldura de janela de browser saiu do hero (uma pessoa dentro de um navegador fica estranha), mas o markup ficou guardado em comentário no `index.html`, pronto a voltar quando houver screenshots de projetos reais.
- Processadas em AVIF + WebP, duas larguras cada, todas abaixo de 215 KB. Utilitário Python de uma vez só, fora do projeto — o site continua sem build step.
- Tratamento de `design.md` §8 aplicado por CSS (`saturate(.72) brightness(.88)` + vinheta), não gravado nos ficheiros: mantém os originais intactos e o efeito ajustável.

**Continua em aberto:** sessão fotográfica profissional. As fotos atuais são pessoais e nota-se — mas um rosto real imperfeito vale muito mais do que um retângulo vazio, sobretudo num público que compra confiança numa pessoa.

**2026-08-20 — Foto do hero substituída por versão sem corte, e o recorte forçado saiu do CSS.**

A versão anterior cortava a fila de casas de empena. Isso não é um detalhe estético: aquelas casas são a **única prova visual** de que a foto foi tirada nos Países Baixos, e metade do argumento de venda é estar cá. Cortá-las esvaziava a razão de a foto existir.

Original novo (1225×1600) usado **sem recorte nenhum**, na sua proporção nativa (0.766), com o mesmo tratamento de cor da versão anterior.

**A armadilha que isto revelou, e que vale a pena não repetir:** o CSS tinha `aspect-ratio: 4/5` mais `object-fit: cover` no hero. Ou seja, mesmo depois de eu processar a imagem sem cortes, o browser voltava a cortá-la para 0.8 — e cortava exatamente por cima das casas.

Regra: **a proporção decide-se no processamento da imagem, nunca no CSS.** Forçar `aspect-ratio` numa foto já recortada é recortá-la duas vezes, e a segunda vez é cega. Anotado no `styles.css`.

Consequência prática: as dimensões declaradas no `<img>` (`width`/`height`) têm de ser atualizadas sempre que a proporção mudar, senão volta o salto de layout. Estão em 800×1045.

**2026-08-20 — Justificação do preço reescrita, e a data-limite saiu do site.**

Duas decisões tomadas em conjunto, ambas contra o que estava registado. Avisei antes, por causa da regra de conflito; o cliente confirmou as duas.

**O que saiu:**

- *"Estou a construir o meu portfólio"* — estava registada como "a linha mais importante do card"
- *"Válido até 30 de setembro de 2026"* — e com ela o alarme de calendário que existia em `CLAUDE.md`

**O que entrou:**

> É uma promoção de lançamento, por tempo limitado e com um número reduzido de vagas por mês. Trabalho com poucos clientes de cada vez para entregar cada site com o mesmo cuidado — quando as vagas desta condição acabarem, o valor volta ao preço normal.

O chip passou de `PROMOÇÃO PORTFÓLIO` a `PROMOÇÃO DE LANÇAMENTO`.

**O que se ganhou e o que se perdeu**, para poder ser reavaliado com informação:

A frase do **cuidado por cliente** é boa e é honesta — argumento de qualidade, credível vindo de quem trabalha sozinha, e explica o preço sem pedir fé.

O que se perdeu foi a **verificabilidade**. "Estou a construir portfólio" era confirmável pelo próprio leitor: não há trabalhos publicados no site, portanto a razão batia certo com o que ele via. "As vagas estão a acabar" pede-lhe que acredite numa coisa que não pode confirmar — e este público chega precisamente com medo de acreditar em coisas que não consegue verificar. `design.md` §11 proibia contagens de vagas exatamente por isso.

Sinal a vigiar: se aparecer hesitação em agendar, ou perguntas do tipo "quantas vagas restam?", é aqui que se deve olhar.

**Consequência prática:** o gatilho de manutenção deixou de ser uma data e passou a ser um facto do negócio. Ninguém é avisado automaticamente quando as vagas acabam — depende de a Alicia dizer. Enquanto o card anunciar vagas que já não existem, o site está a mentir.

**2026-08-20 — Bloco do SEO reestruturado: frase em destaque + as três fases dos 3 meses.**

O bloco era um muro de texto numa página cheia de estrutura, e a melhor frase do projeto estava apresentada como um subtítulo qualquer.

Duas mudanças:

1. *"Aparecer no Google é como construir reputação num país novo"* passou a `--fs-h2`, com respiro à volta. É o argumento inteiro da secção e agora tem o peso de uma declaração.
2. Três fases — Mês 1 arrumar a casa, Mês 2 dar ao Google o que ler, Mês 3 ganhar reputação — que descrevem **processo, nunca resultados**.

A segunda mudança usa a mesma técnica que já tinha tornado os 14 dias credíveis: quem sabe o que vai acontecer não acha o prazo suspeito. Com o SEO o problema era pior, porque são três meses de espera e a página não dizia o que se passava nesse tempo.

Regra a manter: **nunca acrescentar números a estas fases.** São etapas de trabalho, não promessas de resultado.

Detalhe de execução: a barra sobre cada fase ganha força do mês 1 para o mês 3, e só a última leva acento. A reputação constrói-se — desvanecer as barras dizia visualmente o contrário do texto.

Descartadas: um estudo de caso (não existem clientes) e uma segunda fotografia da fundadora (o retrato aparece logo a seguir e competiria; além disso não explicava nada).

**2026-08-20 (revisto no mesmo dia) — Retrato substituído por foto de escritório, e tratamento passou a ser feito na imagem.**

O primeiro retrato (fundo verde, selfie) foi substituído por uma foto de escritório: blazer, estante com dossiês e um globo atrás, mãos juntas sob o queixo, a sorrir. Escolhida entre seis por ser a única simultaneamente calorosa e competente — o gesto lê-se como quem está a ouvir, que é a promessa da página para quem teme não ser compreendido.

Descartadas e porquê, para não voltarem a ser propostas: expressão contrariada, olhos fechados, riso congelado a meio. Guardada em reserva a de olhar direto (registo mais formal) e a das mãos no teclado (possível imagem de apoio para "Como funciona", ainda por decidir).

**Mudança técnica que vale mais do que a troca de foto:** o tratamento de `design.md` §8 deixou de ser um filtro CSS e passou a ser gravado nos ficheiros, por um utilitário Python de uma vez só (fora do projeto — o site continua sem build step).

Motivo: as fotos de escritório têm sol direto a cortar o rosto em diagonal. Escurecer por CSS fechava o lado sombrio em preto e destruía a expressão, que é a razão de a foto existir. Ao nível da imagem é possível **levantar a sombra antes de dessaturar** (gama 0.88), depois arrefecer as sombras com `--moss` e aplicar vinheta.

Regra a manter: **não voltar a pôr `filter:` em `.portrait img`** — seria tratar duas vezes. Está anotado no CSS.

Cada foto tem a sua receita: o hero pede mão pesada (céu azul forte, luz uniforme), o retrato pede mão leve com sombra levantada.

**2026-08-20 — Exceção registada em `design.md` §8: contacto visual permitido em retratos da fundadora.**
A regra do "nunca a olhar para a câmara" existia contra fotografia de banco decorativa. Num retrato de quem presta o serviço, o contacto visual é o que gera confiança. Exceção limitada a fotos reais da fundadora; para tudo o resto a regra mantém-se.

**2026-08-10 — Posicionamento afinado: atendimento em português, site na língua dos clientes do cliente.**

O novo título torna explícito algo que estava implícito e valia mais do que parecia: o **atendimento** é em português, mas o **site** é feito na língua de quem vai comprar ao cliente — holandês, tipicamente.

Isto resolve uma ambiguidade real. Um microempreendedor podia recear que "site em português" significasse um site que os clientes holandeses dele não entenderiam. A frase *"Eles podem ser holandeses, e você pode falar apenas Hallo! Alles goed?"* diz isso melhor do que qualquer explicação.

**2026-08-10 — "Como funciona" passou a ter duas linhas de trabalho.**
Antes só existia a criação do site. Agora: *Criação do seu site do zero* (até 14 dias) e *O serviço de SEO* (dia 1 consulta grátis, dia 5 análise de palavras-chave, dia 6 início do projeto), no mesmo modelo visual.

Consequência: o `h2` deixou de poder ser "Catorze dias, três etapas", que já só descrevia metade da secção. Passou a "Como trabalhamos juntos".

**2026-08-10 — História pessoal no bloco de SEO.**
A mudança de país duas vezes em menos de 5 anos, e o propósito de ajudar empreendedores lusófonos, passaram a fazer parte do copy.

É a primeira vez que a página fala de uma pessoa e não de um serviço, e vale mais aqui do que valeria noutro projeto: este público compra confiança em alguém que passou pelo mesmo. Reforça a pendência da **fotografia real** — o texto pede um rosto.

---

## Decisões rejeitadas

| Rejeitado | Motivo |
|---|---|
| Astro + Tailwind | Cliente preferiu vanilla. Era a recomendação inicial. |
| Next.js, WordPress/Elementor | Pesados para uma landing estática; WordPress contradiz a promessa de performance. |
| 3 idiomas completos no lançamento | Inviável em vanilla sem build — manutenção tripla à mão. Adiado, não cancelado. |
| Neerlandês como idioma principal inicial | Invertido a pedido do cliente: PT primeiro. |
| Formulário de pedido de orçamento, WhatsApp, auditoria SEO como isca | Descartados em favor do Calendly como CTA primária única. |
| Paleta laranja sobre azul-noite | É a assinatura visual da referência. Copiá-la comprometeria a originalidade. |
| Poppins | Fonte da referência; segura mas pouco distintiva. |
| Blog / CMS na fase 1 | Fora de escopo. |

---

## Alterações realizadas

- **2026-08-07** — Criado `links.txt` com o link da referência (digitalxperience.pt), a pedido.
- **2026-08-07** — Criado o cérebro documental: `CLAUDE.md`, `specs/site.md`, `specs/design.md`, `memoria.md`.
- **2026-08-07** — Stack revista de Astro + Tailwind para HTML/CSS/JS puro, com o escopo de idiomas ajustado em consequência.

---

**2026-08-07 — CTA revista: "Agendar conversa" em vez de "Agendar call".**
A spec continha uma contradição interna: §8 definia `Agendar call`, mas a regra de tom proíbe anglicismos. Num site cujo público não domina línguas estrangeiras, a palavra no botão mais importante da página não pode ser inglesa.

**2026-08-07 — Site construído (fase 1).**
`index.html`, `assets/css/styles.css`, `assets/js/main.js`, duas páginas legais, `robots.txt`, `sitemap.xml`.

Verificado: 1 `<h1>`, hierarquia de headings sem saltos, zero âncoras quebradas, zero imagens sem `alt`, sem scroll horizontal, JSON-LD válido (Organization + WebSite + FAQPage), CTA idêntica nas 5 ocorrências. JS 3,8 KB e CSS 22 KB em bruto — muito abaixo do orçamento de 20 KB / 40 KB comprimidos.

---

## Problemas encontrados

**A pasta `referencias/` não existia.**
Os materiais de referência estavam na raiz: `InspIRACAO.png` e `links.txt`. Ambos apontavam para a mesma fonte — digitalxperience.pt.

**Vanilla + multilíngue é uma combinação cara.**
Sem build step, cada idioma é uma cópia manual de cada HTML. Foi o que forçou a decisão de adiar NL/EN. Vai voltar a colocar-se na fase 2 e não desaparece sozinho.

**Especificidade CSS: `.card p` estava a anular as cores dos componentes de preço.**
`.card p` (0,1,1) ganhava a `.chip`, `.price-deadline` e `.price-note` (0,1,0). O resultado era o chip da promoção com texto cinzento sobre lima — ilegível — e a data-limite sem a cor de acento. Resolvido com `.card :where(p)`, que baixa a especificidade para 0,1,0 e deixa a ordem de escrita decidir. Padrão a manter para futuras regras genéricas dentro de `.card`.

**Conteúdo escondido à espera de JavaScript.**
As animações de entrada começavam em `opacity:0`. Se o JS falhasse ou fosse bloqueado, a página ficava em branco — inaceitável num site que vende SEO. Resolvido: a regra que esconde só se aplica sob `.js`, classe adicionada por um script inline antes da pintura.

**Vocabulário PT-PT no copy, contra a regra de português neutro.**
Escaparam *telemóvel*, *logótipo* e *estou a construir*. Corrigidos para *celular*, *logotipo* e *estou montando*. Vale reler o copy à procura de mais casos sempre que houver texto novo.

**Não existem dados reais do produto.**
Apenas os três serviços. Um site de agência vive de prova social e portfólio, e não há nenhum dos dois. É a principal restrição do projeto neste momento.

---

## Soluções aplicadas

- **Referência tratada como direção, não como modelo.** Extraído o esqueleto estrutural e a atmosfera escura com acento único; substituídas paleta, tipografia, tratamento de cards e densidade. O que foi aproveitado e o que foi rejeitado está listado em `specs/design.md`, secção 0.
- **i18n adiado mas não bloqueado.** O HTML é escrito para não encarecer a tradução: texto sempre em nós de texto simples, nada gerado por JS, sem concatenação no meio de frases, estrutura de pastas pronta para `/nl/` e `/en/`, `hreflang` comentado no `<head>`.
- **Ausência de prova social tratada como decisão de design, não como buraco.** A página constrói credibilidade por competência demonstrada — a secção "SEO em detalhe" e a timeline dos 14 dias substituem os números que não temos. O próprio site é a prova.

---

## Pendências

Bloqueiam o lançamento (não podem ser inventadas):

- [x] ~~Link real do Calendly~~ → `https://calendly.com/alicia-croforyou/new-meeting`
- [ ] Renomear o evento no Calendly — o slug `new-meeting` é o nome por defeito e fica visível ao cliente
- [x] ~~Email e telefone~~ → `alicia.croforyou@gmail.com`, WhatsApp `+351 927 569 701`, telemóvel `682063769`
- [x] ~~Nome da marca~~ → **Marketing for you**
- [ ] **Confirmar indicativo do telemóvel** — `682063769` não é marcável como está. Se for holandês: `+31 6 82 06 37 69`.
- [ ] **Nome legal, KvK, BTW-nummer e morada** — adiados por decisão explícita (2026-08-07), mas continuam a bloquear o lançamento: obrigatório num site comercial nos Países Baixos, e é a informação que um público receoso procura para confirmar que a pessoa existe
- [ ] Texto jurídico das páginas de privacidade e cookies
- [ ] Logótipo definitivo — marca-palavra "Marketing for you" até lá

Decisões em aberto:

- [ ] Calendly: embed inline ou popup por interação?
- [ ] **Calendly configurado em português e no fuso Europe/Amsterdam** — se a página de agendamento abrir em inglês, a promessa de "tudo em português" quebra-se no exato momento da conversão. É o único ponto do funil que não controlamos por código.
- [ ] Analytics: Plausible, Umami, GA4 ou nenhum? Se implicar cookies, exige banner de consentimento.
- [ ] Onde alojar o site
- [ ] Fase 2: estratégia i18n para NL/EN — pastas manuais, script gerador, ou reconsiderar a stack
- [x] ~~Fotografia real da pessoa/equipa~~ → duas fotos pessoais em uso desde 2026-08-20. Falta uma sessão profissional.

Sem bloqueio imediato:

- [ ] Testemunhos e autorização de uso dos nomes — a secção editável já está especificada e espera-os
- [ ] Projetos de portfólio e screenshots
- [ ] Redes sociais
- [ ] Email próprio no domínio (`alicia@marketingforyou.nl` ou semelhante) em vez do Gmail — não bloqueia, mas o domínio vai ser comprado de qualquer forma e um endereço gratuito numa agência que vende presença profissional é uma incoerência que este público repara
- [x] ~~Fotografia real da pessoa~~ → duas fotos pessoais adicionadas 2026-08-20. Falta sessão profissional.

## ⏰ Manutenção de coerência (a data foi retirada)

- **A data de 30 de setembro de 2026 já não existe no site** (decisão de 2026-08-20). Deixou de haver um alarme de calendário.
- Em vez disso: **quando as vagas da promoção de lançamento acabarem, o card tem de passar a €799.** O gatilho passou a ser um facto do negócio em vez de uma data, o que significa que ninguém é avisado automaticamente — depende de a Alicia dizer. Vale a pena perguntar de vez em quando.

---

## Próximos passos

Bloqueiam a publicação:

1. **Dados legais no rodapé** — nome legal, KvK, BTW-nummer, morada
2. **Texto jurídico** das páginas de privacidade e cookies (ambas são só estrutura, com instruções no código)
3. ~~**Imagem real** para o hero~~ → feito 2026-08-20. Falta screenshot de projeto real para a moldura de browser (guardada em comentário no `index.html`).
4. **Ficheiros das fontes** — ver `assets/fonts/README.md`. Sem eles o site cai para a fonte do sistema.
5. **Confirmar o indicativo do telemóvel** e descomentar a linha no rodapé
6. **Domínio real** — substituir `marketingforyou.nl` em `robots.txt`, `sitemap.xml` e nas meta tags
7. **Renomear o evento do Calendly** (`new-meeting` é o nome por defeito) e confirmar idioma PT e fuso Amsterdam

Depois disso:

8. Imagem OG (`assets/img/og.jpg`) para partilhas no WhatsApp e redes
9. Auditoria Lighthouse em mobile — alvo ≥ 95 nas quatro categorias
10. Ativar a secção de testemunhos quando existir o primeiro
11. Reabrir a estratégia i18n: **EN primeiro**, NL depois
