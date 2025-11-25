const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer: IntersectionObserver | null = null;

function applyStagger(parent: Element) {
  const children = Array.from(parent.children);
  for (let i = 0; i < children.length; i++) {
    const el = children[i] as HTMLElement;
    if (!el.classList.contains('reveal')) continue;
    const delay = Math.min(100, 50 + i * 25);
    el.style.transitionDelay = prefersReducedMotion ? '0ms' : `${delay}ms`;
  }
}

function observe(el: Element) {
  if (!observer) return;
  observer.observe(el);
}

function initObserver() {
  if (prefersReducedMotion) return;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          target.classList.add('reveal-in');
          observer!.unobserve(target);
        }
      }
    },
    { threshold: [0, 0.2, 0.5, 1], rootMargin: '0px' },
  );
}

function markReveal(el: Element) {
  const node = el as HTMLElement;
  if (!node.classList.contains('reveal')) {
    node.classList.add('reveal');
  }
  observe(node);
}

function scan() {
  if (prefersReducedMotion) return;
  const candidates = document.querySelectorAll(
    '[data-reveal], .reveal, [class*="animate-"], .card, .rounded-lg, .shadow-medium, .shadow-strong',
  );
  candidates.forEach((el) => markReveal(el));

  const groups = document.querySelectorAll('[data-reveal-group], .grid, .reveal-stagger');
  groups.forEach((parent) => applyStagger(parent));
}

export function initScrollReveal() {
  initObserver();
  scan();
  const mo = new MutationObserver(() => {
    scan();
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

export function refreshScrollReveal() {
  scan();
}

