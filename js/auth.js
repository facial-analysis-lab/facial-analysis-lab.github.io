// A convenience gate for a static site, not server-side authentication.
window.aeyeHasAccess = false;
window.aeyeAccessReady = new Promise((resolve, reject) => {
  window.resolveAeyeAccess = resolve;
  window.rejectAeyeAccess = reject;
});
window.aeyeAccessReady.catch(() => {});

(() => {
  const sessionKey = 'aeye-daily-access';
  const page = document.body.dataset.page;
  const status = document.getElementById('authStatus');

  function today() {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Zagreb', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return { date: `${values.year}-${values.month}-${values.day}`, password: values.year.slice(-2) + values.day };
  }
  function authorized() {
    try { return sessionStorage.getItem(sessionKey) === today().date; }
    catch { return false; }
  }
  function clearSession() {
    try { sessionStorage.removeItem(sessionKey); } catch {}
  }
  function leave() {
    window.aeyeHasAccess = false;
    const video = document.getElementById('inputVideo');
    if (video && video.srcObject) video.srcObject.getTracks().forEach(track => track.stop());
    document.querySelectorAll('.fullscreen-video').forEach(el => el.remove());
    const content = document.getElementById('protectedContent');
    if (content) content.hidden = true;
    clearSession();
    window.rejectAeyeAccess(new Error('Potrebna je prijava.'));
    location.replace('index.html');
  }
  if (page === 'login') {
    if (authorized()) { location.replace('homepage.html'); return; }
    document.getElementById('authForm').addEventListener('submit', event => {
      event.preventDefault();
      const input = document.getElementById('password');
      const current = today();
      if (input.value !== current.password) {
        status.textContent = 'Lozinka nije ispravna.';
        status.dataset.error = 'true';
        input.value = '';
        input.focus();
        return;
      }
      try { sessionStorage.setItem(sessionKey, current.date); }
      catch {
        status.textContent = 'Omogućite pohranu podataka u pregledniku za prijavu.';
        status.dataset.error = 'true';
        return;
      }
      input.value = '';
      location.replace('homepage.html');
    });
    return;
  }
  if (page !== 'homepage' || !authorized()) { leave(); return; }
  window.aeyeHasAccess = true;
  document.getElementById('protectedContent').hidden = false;
  status.hidden = true;
  window.resolveAeyeAccess();
  document.getElementById('logoutButton').addEventListener('click', leave);
  const check = () => { if (!authorized()) leave(); };
  setInterval(check, 1000);
  window.addEventListener('focus', check);
  window.addEventListener('pageshow', check);
  document.addEventListener('visibilitychange', check);
})();
