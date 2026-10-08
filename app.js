(() => {
  'use strict';
  const c = window.GUIA_CONFIG;
  if (!c) return; // Sem configuração, os links permanecem desactivados.
  const money = value => Number(value).toFixed(2).replace('.', ',') + ' MT';
  document.querySelectorAll('[data-price]').forEach(el => { el.textContent = money(c.precoActual); });
  const expired = c.dataFinalPromocao && Number.isFinite(Date.parse(c.dataFinalPromocao)) && Date.now() >= Date.parse(c.dataFinalPromocao);
  const active = c.vendasActivas === true && !expired;
  document.querySelectorAll('.purchase').forEach(el => {
    if (active) {
      el.href = c.checkout;
      el.removeAttribute('aria-disabled');
      el.textContent = el.dataset.label.replace('{preco}', money(c.precoActual));
    } else {
      el.removeAttribute('href');
      el.setAttribute('aria-disabled', 'true');
      el.textContent = 'Disponível em breve';
    }
  });
  document.querySelectorAll('.availability').forEach(el => {
    el.hidden = active;
    if (expired) el.textContent = 'Disponível em breve · Oferta em actualização.';
  });
  if (c.mostrarPrecoAnterior === true && c.precoAnterior > c.precoActual) {
    document.querySelectorAll('.old-price').forEach(el => { el.hidden = false; el.textContent = 'De ' + money(c.precoAnterior); });
  }
  const end = Date.parse(c.dataFinalPromocao);
  if (active && Number.isFinite(end)) {
    document.querySelectorAll('.promotion').forEach(el => {
      el.hidden = false;
      el.textContent = 'Preço promocional até ' + new Intl.DateTimeFormat('pt-MZ', {dateStyle:'long', timeStyle:'short', timeZone:'Africa/Maputo'}).format(end) + ' (hora de Moçambique).';
    });
    // Bloqueia também uma página mantida aberta depois do prazo real.
    const checkExpiry = () => {
      if (Date.now() >= end) {
        document.querySelectorAll('.purchase').forEach(el => { el.removeAttribute('href'); el.setAttribute('aria-disabled','true'); el.textContent='Disponível em breve'; });
        document.querySelectorAll('.promotion').forEach(el => { el.hidden=true; });
        clearInterval(timer);
      }
    };
    const timer = setInterval(checkExpiry, 1000);
  }
})();
