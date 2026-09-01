/* Marketing for you — JS vanilla, sem dependências.
   Três módulos: header, drawer de navegação, entrada de elementos.
   O site funciona por inteiro sem este ficheiro. */

/* ── Header: compacta ao scroll ─────────────────────────────────── */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  const update = () => {
    header.classList.toggle('is-stuck', window.scrollY > 80);
    ticking = false;
  };

  addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
}

/* ── Drawer de navegação (< 1024px) ─────────────────────────────── */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  const focusable = () =>
    nav.querySelectorAll('a[href], button:not([disabled])');

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    if (open) focusable()[0]?.focus();
  };

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  // Fecha ao seguir uma âncora
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a') && isOpen()) setOpen(false);
  });

  // Esc fecha e devolve o foco ao botão
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) { setOpen(false); toggle.focus(); }
  });

  // Trap de foco enquanto aberto
  nav.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !isOpen()) return;
    const items = [...focusable()];
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Volta ao estado normal se a janela crescer para desktop
  matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches && isOpen()) setOpen(false);
  });
}

/* ── Entrada de elementos: uma vez por elemento ─────────────────── */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  // Sem IntersectionObserver ou com movimento reduzido: mostra tudo já.
  if (!('IntersectionObserver' in window) ||
      matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    // Stagger entre irmãos, no máximo 4 por sequência
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry, i) => {
        entry.target.style.setProperty('--reveal-delay', `${Math.min(i, 3) * 60}ms`);
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // não re-anima
      });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px' });

  items.forEach((el) => observer.observe(el));

  // Segunda rede de segurança. A do <head> cobre "o JS não arrancou";
  // esta cobre "o JS arrancou mas o observador nunca disparou" — pode
  // acontecer se o separador nunca chegar a ser desenhado. Sem ela, a
  // página fica permanentemente em branco, que é o pior desfecho possível
  // num site que vende competência técnica.
  clearTimeout(window.__revealFailsafe);
  setTimeout(() => {
    if (!document.querySelector('[data-reveal].is-visible')) {
      document.documentElement.classList.remove('js');
    }
  }, 2000);
}

/* ── Ano do rodapé ──────────────────────────────────────────────── */
function initYear() {
  const el = document.getElementById('ano');
  if (el) el.textContent = new Date().getFullYear();
}

initHeader();
initNav();
initReveal();
initYear();

/* ── Simulador de orçamento ─────────────────────────────────────── */
/* Usa os preços reais. Acima de 5 páginas não inventa um valor por
   página — diz "orçamento à parte", que é a verdade. */
function initCalculadora() {
  const calc = document.querySelector('.calc');
  if (!calc) return;

  const valor  = document.getElementById('calc-valor');
  const extras = document.getElementById('calc-extras');
  const t = calc.dataset;

  const textos = {
    base:      t.base      || 'a partir de €199',
    orcamento: t.orcamento || 'sob orçamento',
    paginas:   t.paginas   || 'Páginas acima de 5, orçamentadas à parte',
    manut:     t.manut     || 'Manutenção, hospedagem e domínio — €19,90/mês, sem BTW',
    seo:       t.seo       || 'Serviços de SEO — sob consulta',
  };

  const escolhido = (nome) =>
    calc.querySelector(`input[name="${nome}"]:checked`)?.value;

  function atualizar() {
    const muitasPaginas = escolhido('paginas') === '2';
    valor.textContent = muitasPaginas ? textos.orcamento : textos.base;

    const linhas = [];
    if (muitasPaginas)                  linhas.push(textos.paginas);
    if (escolhido('manutencao') === '1') linhas.push(textos.manut);
    if (escolhido('seo') === '1')        linhas.push(textos.seo);

    extras.replaceChildren(...linhas.map((texto) => {
      const li = document.createElement('li');
      li.textContent = texto;
      return li;
    }));
  }

  calc.addEventListener('change', atualizar);
  atualizar();
}

/* ── Diagnóstico ────────────────────────────────────────────────── */
/* Três perguntas, resposta à medida. Não promete resultados: devolve o
   que faz sentido fazer a seguir. */
function initDiagnostico() {
  const quiz = document.getElementById('quiz');
  if (!quiz) return;

  const passos = [...quiz.querySelectorAll('.quiz__step')];
  const fim = quiz.querySelector('.quiz__fim');
  const titulo = document.getElementById('quiz-titulo');
  const texto = document.getElementById('quiz-texto');
  const respostas = [];

  const RESULTADOS = JSON.parse(quiz.dataset.resultados || '{}');

  function mostrar(indice) {
    passos.forEach((p, i) => { p.hidden = i !== indice; });
    fim.hidden = true;
  }

  function concluir() {
    const chave = respostas[0].startsWith('site-nao') ? 'sem-site'
                : respostas[1] === 'google-sim'       ? 'visivel'
                : 'invisivel';
    const r = RESULTADOS[chave] || {};
    titulo.textContent = r.titulo || '';
    texto.textContent = r.texto || '';
    passos.forEach((p) => { p.hidden = true; });
    fim.hidden = false;
    fim.scrollIntoView({ block: 'nearest' });
  }

  quiz.addEventListener('click', (e) => {
    const botao = e.target.closest('.quiz__opt');
    if (!botao) return;
    respostas.push(botao.dataset.valor);
    if (respostas.length < passos.length) mostrar(respostas.length);
    else concluir();
  });

  document.getElementById('quiz-repetir')?.addEventListener('click', () => {
    respostas.length = 0;
    mostrar(0);
  });
}

initCalculadora();
initDiagnostico();
