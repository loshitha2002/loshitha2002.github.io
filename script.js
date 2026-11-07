'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  menuToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}));

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.project-card[data-status]')];
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(b => {
    const selected = b === button;
    b.classList.toggle('active', selected);
    b.setAttribute('aria-pressed', String(selected));
  });
  cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.status !== filter; });
}));

const evidence = [
  {id:'codearena', title:'CodeArena 1.0 — 2025', src:'assets/evidence/codearena-2025-finalists.webp', description:'Selection list showing team BinaryBrains_UOP, University of Peradeniya, among teams selected for the physical round.'},
  {id:'vcoders', title:'VCoders 4.0 — 2025', src:'assets/evidence/vcoders-2025-certificate.webp', description:'Certificate from UOJ Coders V4.0 Finale, University of Jaffna, 23–24 August 2025.'},
  {id:'morax', title:'MoraXtreme 10.0 — 2025', src:'assets/evidence/morax-2025-certificate.webp', description:'Certificate of participation in MoraXtreme 10.0, 6 October 2025.'},
  {id:'ieee19', title:'IEEEXtreme 19.0 — 2025', src:'assets/evidence/ieeextreme-19-certificate.webp', description:'IEEE certificate of participation in IEEEXtreme 19.0, 25 October 2025.'},
  {id:'ieee18', title:'IEEEXtreme 18.0 — 2024', src:'assets/evidence/ieeextreme-18-certificate.webp', description:'IEEE certificate of participation in IEEEXtreme 18.0, 26 October 2024.'},
];
const modal = document.getElementById('evidence-dialog');
const modalImage = document.getElementById('dialog-image');
const modalTitle = document.getElementById('dialog-title');
const modalDesc = document.getElementById('dialog-description');
const modalCount = document.getElementById('dialog-count');
let evidenceIndex = 0;
function renderEvidence() {
  const current = evidence[evidenceIndex];
  modalImage.src = current.src;
  modalImage.alt = `${current.title}: ${current.description}`;
  modalTitle.textContent = current.title;
  modalDesc.textContent = current.description;
  modalCount.textContent = `${String(evidenceIndex + 1).padStart(2,'0')} / ${String(evidence.length).padStart(2,'0')}`;
}
document.querySelectorAll('[data-evidence]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    evidenceIndex = Math.max(0, evidence.findIndex(entry => entry.id === trigger.dataset.evidence));
    renderEvidence();
    if (typeof modal.showModal === 'function') modal.showModal();
  });
});
document.getElementById('dialog-close')?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', event => { if (event.target === modal) modal.close(); });
document.getElementById('dialog-prev')?.addEventListener('click', () => { evidenceIndex = (evidenceIndex - 1 + evidence.length) % evidence.length; renderEvidence(); });
document.getElementById('dialog-next')?.addEventListener('click', () => { evidenceIndex = (evidenceIndex + 1) % evidence.length; renderEvidence(); });
modal?.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { evidenceIndex = (evidenceIndex + 1) % evidence.length; renderEvidence(); }
  if (event.key === 'ArrowLeft') { evidenceIndex = (evidenceIndex - 1 + evidence.length) % evidence.length; renderEvidence(); }
});

const observer = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, {threshold: .08, rootMargin:'0px 0px 35px 0px'}) : null;
document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
document.getElementById('year').textContent = new Date().getFullYear();
