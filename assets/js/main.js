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
  // O JS arrancou: a rede de segurança do <head> já não é precisa.
  clearTimeout(window.__revealFailsafe);

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
