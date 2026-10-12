window.aeyeHasAccess = false;
window.aeyeAccessReady = new Promise((resolve, reject) => { window.resolveAeyeAccess = resolve; window.rejectAeyeAccess = reject; });
window.aeyeAccessReady.catch(() => {});
(() => {
  const page = document.body.dataset.page;
  const status = document.getElementById('authStatus');
  const form = document.getElementById('authForm');
  let registering = false, stopProfile, stopUsers, auth, db;
  function message(text, error = false) { status.textContent = text; status.dataset.error = String(error); }
  function deny(text) {
    window.aeyeHasAccess = false;
    window.rejectAeyeAccess(new Error(text));
    const video = document.getElementById('inputVideo');
    if (video?.srcObject) video.srcObject.getTracks().forEach(track => track.stop());
    document.querySelectorAll('.fullscreen-video').forEach(el => el.remove());
    const content = document.getElementById('protectedContent');
    if (content) content.hidden = true;
    if (page !== 'login') location.replace('index.html'); else message(text, true);
  }
  function errorText(error) {
    const errors = {
      'auth/invalid-credential': 'E-mail ili lozinka nisu ispravni.',
      'auth/wrong-password': 'E-mail ili lozinka nisu ispravni.',
      'auth/user-not-found': 'E-mail ili lozinka nisu ispravni.',
      'auth/email-already-in-use': 'Račun već postoji. Prijavite se.',
      'auth/invalid-email': 'Unesite ispravnu e-mail adresu.',
      'auth/weak-password': 'Lozinka mora imati najmanje 6 znakova.',
      'auth/too-many-requests': 'Previše pokušaja. Pokušajte kasnije.',
      'auth/network-request-failed': 'Provjerite internetsku vezu.',
      'auth/operation-not-allowed': 'U Firebaseu uključite prijavu e-mailom.'
    };
    return errors[error.code] || 'Zahtjev nije uspio. Provjerite vezu i Firebase postavke pa pokušajte ponovno.';
  }
  function users() {
    if (stopUsers) return;
    stopUsers = db.collection('users').onSnapshot(snapshot => {
      const body = document.getElementById('usersBody'); body.replaceChildren();
      document.getElementById('userCount').textContent = `${snapshot.size} korisnika`;
      const labels = { pending: 'Čeka odobrenje', approved: 'Odobren', rejected: 'Pristup odbijen' };
      const docs = snapshot.docs.sort((a,b) => (a.data().status === 'pending' ? 0 : 1) - (b.data().status === 'pending' ? 0 : 1));
      for (const doc of docs) {
        const data = doc.data(), row = document.createElement('tr');
        for (const value of [data.name || '—', data.email, data.role === 'admin' ? 'Administrator' : labels[data.status] || 'Nepoznat status']) {
          const cell = document.createElement('td'); cell.textContent = value; row.append(cell);
        }
        const actions = document.createElement('td');
        if (data.role !== 'admin') for (const [label, next] of [['Odobri','approved'], ['Odbij / ukini','rejected']]) {
          const button = document.createElement('button'); button.type = 'button'; button.textContent = label; button.disabled = data.status === next;
          button.addEventListener('click', async () => {
            button.disabled = true;
            try { await doc.ref.update({ status: next }); message(`Pristup za ${data.email}: ${labels[next].toLowerCase()}.`); }
            catch (error) { message(errorText(error), true); button.disabled = false; }
          }); actions.append(button);
        }
        row.append(actions); body.append(row);
      }
    }, error => { message(errorText(error), true); document.getElementById('usersBody').replaceChildren(); });
  }
  function profileChanged(user, snapshot) {
    // Require approval from the server, never from an offline cache.
    if (snapshot.metadata.fromCache) return;
    const profile = snapshot.exists ? snapshot.data() : null;
    const approved = profile?.status === 'approved', admin = approved && profile.role === 'admin';
    if (approved && (page !== 'admin' || admin)) {
      if (page === 'login') { location.replace('homepage.html'); return; }
      window.aeyeHasAccess = true;
      document.getElementById('protectedContent').hidden = false;
      document.getElementById('accountEmail').textContent = user.email;
      const link = document.getElementById('adminLink'); if (link) link.hidden = !admin;
      if (page === 'homepage') status.hidden = true; else { message('Odobrite korisnike ili ukinite postojeći pristup.'); users(); }
      window.resolveAeyeAccess(user); return;
    }
    if (stopUsers) { stopUsers(); stopUsers = null; }
    if (page !== 'login') { deny('Nemate odobren pristup.'); return; }
    form.hidden = true; document.querySelector('.tabs').hidden = true;
    document.getElementById('sessionActions').hidden = false;
    message(!profile ? 'Registracija nije dovršena. Odjavite se i ponovno se prijavite kako biste poslali zahtjev.' : profile.status === 'rejected' ? 'Administrator je odbio ili ukinuo pristup. Obratite se administratoru.' : 'Vaš račun čeka odobrenje administratora.');
  }
  async function ensureProfile(user, name) {
    const ref = db.collection('users').doc(user.uid), snapshot = await ref.get({ source: 'server' });
    if (!snapshot.exists) await ref.set({ name, email: user.email, role: 'user', status: 'pending', createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  }
  const config = window.AEYE_FIREBASE_CONFIG;
  if (!config?.apiKey || !config.authDomain || !config.projectId || !config.appId || !window.firebase) { deny('Prijava još nije povezana. Potrebno je dodati Firebase konfiguraciju.'); return; }
  try { firebase.initializeApp(config); auth = firebase.auth(); db = firebase.firestore(); }
  catch (error) { deny(errorText(error)); return; }
  document.getElementById('logoutButton')?.addEventListener('click', async () => {
    try { await auth.signOut(); location.replace('index.html'); } catch (error) { message(errorText(error), true); }
  });
  auth.onAuthStateChanged(user => {
    if (stopProfile) stopProfile(); if (stopUsers) { stopUsers(); stopUsers = null; }
    if (!user) {
      if (page !== 'login') { deny('Prijavite se za pristup.'); return; }
      form.hidden = false; document.querySelector('.tabs').hidden = false; document.getElementById('sessionActions').hidden = true;
      document.getElementById('submitButton').disabled = false; document.getElementById('resetPassword').disabled = false; message(''); return;
    }
    message('Provjera odobrenja…');
    stopProfile = db.collection('users').doc(user.uid).onSnapshot({ includeMetadataChanges: true }, snapshot => profileChanged(user, snapshot), error => deny(errorText(error)));
  }, () => deny('Prijava nije dostupna.'));
  if (page !== 'login') return;
  function mode(register) {
    registering = register;
    document.getElementById('nameField').hidden = !register; document.getElementById('fullName').required = register;
    document.getElementById('passwordHint').hidden = !register; document.getElementById('resetPassword').hidden = register;
    document.getElementById('password').autocomplete = register ? 'new-password' : 'current-password';
    document.getElementById('formTitle').textContent = register ? 'Zatražite pristup.' : 'Dobro došli.';
    document.getElementById('formDescription').textContent = register ? 'Izradite račun. Administrator zatim odobrava pristup.' : 'Prijavite se za pristup aplikaciji.';
    document.getElementById('submitButton').textContent = register ? 'Registriraj se' : 'Prijavi se';
    document.getElementById('loginTab').setAttribute('aria-pressed', String(!register)); document.getElementById('registerTab').setAttribute('aria-pressed', String(register)); message('');
  }
  document.getElementById('loginTab').addEventListener('click', () => mode(false));
  document.getElementById('registerTab').addEventListener('click', () => mode(true));
  form.addEventListener('submit', async event => {
    event.preventDefault(); const button = document.getElementById('submitButton'); button.disabled = true;
    message(registering ? 'Izrada računa…' : 'Prijava…');
    try {
      await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
      const email = document.getElementById('email').value.trim(), password = document.getElementById('password').value;
      const result = registering ? await auth.createUserWithEmailAndPassword(email, password) : await auth.signInWithEmailAndPassword(email, password);
      await ensureProfile(result.user, registering ? document.getElementById('fullName').value.trim() : ''); document.getElementById('password').value = '';
    } catch (error) { message(errorText(error), true); } finally { button.disabled = false; }
  });
  document.getElementById('checkAccess').addEventListener('click', async () => {
    message('Provjera odobrenja…');
    try { await auth.currentUser.reload(); const snapshot = await db.collection('users').doc(auth.currentUser.uid).get({ source: 'server' }); profileChanged(auth.currentUser, snapshot); }
    catch (error) { message(errorText(error), true); }
  });
  document.getElementById('resetPassword').addEventListener('click', async () => {
    const email = document.getElementById('email');
    if (!email.value || !email.reportValidity()) { message('Prvo unesite svoju e-mail adresu.', true); return; }
    try { await auth.sendPasswordResetEmail(email.value.trim()); message('Ako račun postoji, poslane su upute za novu lozinku.'); }
    catch (error) { message(errorText(error), true); }
  });
})();
