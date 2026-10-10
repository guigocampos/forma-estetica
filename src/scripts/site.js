import { quoteMessage, whatsappUrl, quoteOptions } from '../lib/quote.mjs';

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const closeMenu = () => { menu?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('is-open'); };
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });

const form = document.querySelector('[data-quote]');
if (form) {
  const serviceField = form.querySelector('[name=service]');
  const vehicleField = form.querySelector('[name=vehicle]');
  const error = form.querySelector('[data-error]');
  const values = () => Object.fromEntries(new FormData(form));
  const preview = () => { try { form.querySelector('[data-message]').textContent = quoteMessage(values()); } catch { form.querySelector('[data-message]').textContent = 'Escolha um serviço e informe o veículo para preparar sua mensagem.'; } };
  const requested = new URLSearchParams(location.search).get('servico');
  if (quoteOptions.includes(requested)) serviceField.value = requested;
  preview();
  form.addEventListener('input', () => { vehicleField.setCustomValidity(''); error.textContent = ''; preview(); });
  form.addEventListener('change', preview);
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { serviceField.value = link.dataset.service; preview(); }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!vehicleField.value.trim()) { vehicleField.setCustomValidity('Informe qual é o seu veículo.'); vehicleField.reportValidity(); return; }
    if (!form.reportValidity()) return;
    try { location.assign(whatsappUrl(values())); } catch (problem) { error.textContent = problem.message; }
  });
}

const video = document.querySelector('#hero-video');
const toggle = document.querySelector('[data-video-toggle]');
if (video && toggle) {
  video.muted = true;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  let inView = true;
  const sync = () => { const playing = !video.paused; toggle.textContent = playing ? 'Pausar Ⅱ' : 'Reproduzir ▷'; toggle.setAttribute('aria-label', playing ? 'Pausar vídeo' : 'Reproduzir vídeo'); };
  const play = async () => { if (!video.getAttribute('src')) { video.src = video.dataset.videoSrc; video.load(); } try { await video.play(); } catch { sync(); } };
  video.addEventListener('play', sync); video.addEventListener('pause', sync);
  video.addEventListener('error', () => { toggle.textContent = 'Vídeo indisponível'; toggle.disabled = true; });
  toggle.addEventListener('click', () => { if (video.paused) { userPaused = false; play(); } else { userPaused = true; video.pause(); } });
  const update = () => { if (reduced.matches || userPaused || !inView || document.hidden) video.pause(); else play(); };
  reduced.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); }, { threshold: .15 }).observe(video);
}

