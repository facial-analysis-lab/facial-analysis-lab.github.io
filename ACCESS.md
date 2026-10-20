# Dnevna lozinka

Prijava traži samo četiri znamenke: zadnje dvije znamenke godine + dvoznamenkasti dan u mjesecu, prema vremenskoj zoni Europe/Zagreb. Primjer: 20. listopada 2026. → 2620; 8. listopada 2026. → 2608. Mjesec nije dio lozinke.

Prijava vrijedi u trenutačnoj kartici do promjene dana ili odjave. Sesija sprema cijeli datum kako stara prijava ne bi postala valjana sljedeći mjesec. Izravan ulazak na homepage bez prijave vraća na index. Pri isteku sesije kamera se zaustavlja. Registracija i administracija više se ne koriste; stara admin adresa vraća na login.

Firebase više nije povezan s aplikacijom. Ranije spremljeni računi i podaci u Firebase projektu nisu obrisani. Postojeća serverska pravila ostaju u Firebase konzoli.

Ovo je jednostavna klijentska prepreka na javnom statičkom webu. Lozinka je predvidljiva, računa se prema satu uređaja i provjera se može zaobići izmjenom JavaScripta ili sessionStoragea. Nije zamjena za autentifikaciju na serveru.
