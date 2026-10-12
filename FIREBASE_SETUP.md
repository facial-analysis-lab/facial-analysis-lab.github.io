# Postavljanje Aeye prijave

1. U Firebase Console napravite projekt i dodajte Web aplikaciju.
2. U Authentication → Sign-in method uključite Email/Password.
3. U Authentication → Settings → Authorized domains dodajte `mihaelholiaeye.github.io`. Za lokalno testiranje dodajte `localhost`.
4. Napravite Cloud Firestore bazu. U Rules editor kopirajte `firestore.rules` i objavite pravila. Ne koristite otvorena testna pravila.
5. Konfiguraciju iz Project settings → Your apps prepišite u `js/firebase-config.js`: apiKey, authDomain, projectId, appId. To je javna konfiguracija. Privatni service-account ključ ne smije se dodavati u projekt.
6. Registrirajte svoj račun na indexu. U Firestore → Data → users → dokument s vašim UID-em ručno postavite `role` na `admin` i `status` na `approved`. Prvi admin postavlja se isključivo kroz Firebase konzolu.
7. Prijavite se. Poveznica Administracija na homepageu vodi na odobravanje korisnika i ukidanje pristupa.

## Provjera nakon povezivanja

- U privatnom prozoru otvorite `homepage.html` i `admin.html`: vraćaju na index bez pokretanja kamere.
- Registrirajte drugi račun: čeka odobrenje, homepage ga vraća na index.
- Odobrite račun kao admin: dobiva pristup aplikaciji.
- Običan korisnik ne može otvoriti admin stranicu.
- Ukinite pristup dok je aplikacija otvorena: kamera se zaustavlja i korisnik se vraća na index.
- Provjerite pogrešnu lozinku, odjavu i reset lozinke.
- U Firestore Rules Playground provjerite da korisnik ne može mijenjati svoj status ili role niti čitati popis drugih korisnika.

## Stranice i zaštita

`index.html` je prijava, `homepage.html` je aplikacija, `admin.html` je administracija. `404.html` podržava i ručni unos `/homepage` i `/admin` na GitHub Pagesu preusmjeravanjem na odgovarajuću HTML stranicu koja provjerava pristup.

Lozinke obrađuje Firebase Authentication. Odobrenja se čitaju iz Firestorea i prate uživo dok postoji veza. Nova stranica traži potvrdu servera prije prikaza aplikacije. Sesija je ograničena na karticu preglednika. Korisnik ne može sam sebi odobriti pristup zbog Firestore pravila.

GitHub Pages javno poslužuje HTML, JavaScript i AI modele. Provjera prijave štiti normalan tok kroz aplikaciju; osoba koja prepravi klijentski kod može pokrenuti lokalnu analizu. Firebase pravila štite račune i odobrenja, ali ne javne statičke datoteke. Za zaštitu samih datoteka potreban je hosting sa serverskom provjerom sesije.
