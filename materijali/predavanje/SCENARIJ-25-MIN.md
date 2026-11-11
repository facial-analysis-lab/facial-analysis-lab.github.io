# Umjetna inteligencija i analiza lica: što model vidi, a što ne zna

Materijal za Mihaela Holija, 11. studenoga 2026. Publika: studenti medicine.

## Što je profesor tražio

Video od oko 25 minuta, bogat ilustracijama, koji objašnjava kako tehnologija radi i što omogućuje. Profesor te predstavlja, stoga preskoči biografski uvod. Kamera nije obvezna: možeš snimiti glas preko prikaza i demonstracija. Nakon videa profesor vodi isprobavanje preko QR koda; studenti mogu spremiti vlastiti screenshot. Spajanje je dogovoreno oko 17:30, početak oko 17:40.

Ovo je scenarij s predviđenim demonstracijama i stankama, a ne obećanje da samo čitanje teksta traje 25 minuta. Snimi probu sa štopericom. Kad završiš ranije, proširi opažanja iz demonstracije; nemoj samo usporavati govor ili dodavati prazne stanke. Primjeri rezultata u tekstu su ilustrativni, ne izmjereni rezultati projekta.

## Raspored videa

| Vrijeme | Tema | Što gledatelj vidi |
|---|---|---|
| 00:00–01:30 | Pitanje i cilj | Aplikacija na vlastitom licu, zatim naslov |
| 01:30–03:30 | Tri različita zadatka | Detekcija lica / analiza obilježja / identifikacija |
| 03:30–05:30 | Kako slika postaje podatak | Fotografija → pikseli → model → rezultat |
| 05:30–07:30 | Kako model uči | Učenje na primjerima i odvojeno testiranje |
| 07:30–09:30 | Što radi ova aplikacija | Kamera → preglednik → tri modela → prikaz |
| 09:30–12:00 | Izrazi lica | Neutralno lice i osmijeh; promjene rezultata |
| 12:00–14:00 | Dob i kategorije spola | Procjena dobi i ograničenja oznaka |
| 14:00–16:30 | Kada rezultat postaje nestabilan | Svjetlo, udaljenost i zakretanje glave |
| 16:30–18:30 | Broj uz rezultat | Modelov rezultat nasuprot provjerenoj točnosti |
| 18:30–20:30 | Poveznica s medicinom | Edukacijski model nasuprot klinički provjerenom alatu |
| 20:30–22:00 | Privatnost i granice | Obrada u pregledniku, screenshot, privola |
| 22:00–24:00 | Pokretanje na mobitelu | Otvaranje linka, dopuštenje kamere, Screenshot |
| 24:00–25:00 | Tri poruke i prijelaz profesoru | QR kod, kratke upute, zaključak |

## Tekst za govor i režija

### 1. 00:00–01:30 — Počni demonstracijom, bez osobnog predstavljanja

**Prikaz:** svoje lice u aplikaciji. Prvih desetak sekundi neutralan izraz, zatim osmijeh. Ne koristi lica pacijenata ni tuđe fotografije bez dopuštenja.

„Može li računalo, samo gledajući sliku lica, procijeniti dob ili prepoznati osmijeh? Na ekranu vidite aplikaciju koja upravo pokušava napraviti nešto slično. Kamera daje sliku, a modeli iz te slike izračunavaju rezultate koji se stalno mijenjaju. Kada se nasmijem ili okrenem glavu, mijenja se ulazna slika, a zatim i rezultat.

Za početak obratite pozornost na dvije stvari. Prvo, sustav je brz: odgovor se prikazuje dok osoba sjedi ispred kamere. Drugo, rezultat nije uvijek stabilan i nije nužno točan. Ta kombinacija brzine i nesigurnosti važna je kada razmišljamo o umjetnoj inteligenciji u medicini.

Danas ćemo proći kako takva tehnologija radi, što ova aplikacija stvarno radi i gdje su njezine granice. Cilj nije naučiti programirati. Cilj je moći pogledati izlaz jednog AI sustava i postaviti dobra pitanja: na temelju čega je ovo izračunato, kada može pogriješiti i smijemo li se na taj rezultat osloniti?“

**Režija:** ostatak vremena prikaži promjenu rezultata te svojim riječima opiši što se stvarno dogodilo. Ne obećavaj da će osmijeh svaki put biti prepoznat.

### 2. 01:30–03:30 — Detekcija nije identifikacija

**Ilustracija:** tri ista portreta. Prvi ima okvir, drugi oznake dobi i izraza, treći upit „Je li ovo ista osoba?“.

„Pod nazivom prepoznavanje lica često se miješaju različiti zadaci. Prvi je detekcija: postoji li na slici lice i gdje se nalazi? Pravokutnik koji vidite na slici odgovor je na to pitanje. Detektor ne mora znati tko je osoba kako bi pronašao njezino lice.

Drugi je analiza obilježja. Kada imamo područje lica, drugi modeli mogu pokušati procijeniti neka njegova svojstva. U ovoj aplikaciji prikazuju se procijenjena dob, izlaz kategorije koju biblioteka naziva gender i klasifikacija izraza lica. Upravo to danas istražujemo.

Treći je identifikacija ili provjera identiteta. Primjer bi bio uspoređivanje lica s prethodno spremljenim predloškom. To je drukčiji zadatak i ova demonstracija ga ne provodi. Aplikacija vas ne uspoređuje s imenikom osoba i ne pokušava odrediti vaše ime.

Zašto je razlika važna? Zato što uspjeh u jednom zadatku ne znači uspjeh u drugom. Sustav može dobro pronaći lice, a loše procijeniti njegovu dob. Može pronaći osmijeh, a da o identitetu osobe ili njezinu stvarnom raspoloženju ništa ne zna.“

**Režija:** pokaži okvir u aplikaciji i kratko uključi/isključi njegov prikaz. Naglasi da sakrivanje okvira ne isključuje analizu.

### 3. 03:30–05:30 — Slika kao skup brojeva

**Ilustracija:** povećaj mali dio vlastite fotografije do vidljivih piksela; zatim nacrtaj jednostavan niz „slika → obrada → procjena“.

„Nama je lice cjelina. Računalu je ulazna slika niz brojčanih vrijednosti koje predstavljaju boje piksela. Iz tih brojeva model uči obrasce povezane s nekim zadatkom. Ne vidi osobu na način na koji je vidi čovjek i nema njezinu životnu priču.

U dubokim neuronskim mrežama obrada prolazi kroz više slojeva. Koristan pojednostavljeni prikaz jest da raniji slojevi mogu reagirati na jednostavnije vizualne obrasce, dok kasniji kombiniraju informacije potrebne za konačnu procjenu. Nemojte to shvatiti kao doslovan prikaz pojedinog neurona ili kao objašnjenje svake odluke modela.

Najvažnije je da promjena fotografije mijenja i brojeve na ulazu. Kada promijenimo osvjetljenje, udaljenost ili kut kamere, mijenjamo problem koji model treba riješiti. Osoba je ista, ali podaci koje računalo dobiva nisu isti.

To je dobra priprema za sljedeću demonstraciju. Nećemo promijeniti osobu, nego uvjete snimanja. Zatim ćemo pogledati koliko se promijenila procjena.“

**Režija:** 30–40 sekundi usporedi kadar izbliza i iz veće udaljenosti. Opiši opažanje, bez izvođenja zaključka o ukupnoj točnosti.

### 4. 05:30–07:30 — Učenje i testiranje

**Ilustracija:** tri odvojene skupine kartica: podaci za učenje, podešavanje i završno testiranje. To su shematski primjeri, ne podaci kojima si ti trenirao modele.

„Tradicionalnom programu možemo zadati konkretno pravilo. Kod strojnog učenja model dobiva primjere i tijekom treniranja prilagođava svoje parametre kako bi bolje rješavao zadatak. Za nadzirano učenje primjeri imaju pridružene oznake ili ciljne vrijednosti.

Važno je razlikovati treniranje modela od njegova korištenja. U ovom projektu koristim već istrenirane modele iz biblioteke face-api.js. Moj je doprinos izrada i povezivanje web-aplikacije, kamere, učitavanja modela, analize i prikaza rezultata. Ovom demonstracijom ne tvrdim da sam od početka trenirao vlastitu neuronsku mrežu.

Kada model treniramo, rezultat na poznatim primjerima nije dovoljan. Treba provjeriti kako radi na odvojenim primjerima koje nije vidio tijekom učenja. Inače možemo dobiti sustav koji je dobro prilagođen skupu za učenje, ali se loše ponaša na novim ljudima ili u novim uvjetima.

Za medicinsku publiku korisno pitanje glasi: jesu li ljudi i uvjeti u testiranju slični ljudima i uvjetima u kojima namjeravamo koristiti alat? Bez tog pitanja broj na prezentaciji lako može zvučati uvjerljivije nego što zaslužuje.“

### 5. 07:30–09:30 — Arhitektura aplikacije

**Ilustracija:** „kamera → videokadar → Tiny Face Detector → modeli dobi/spola i izraza → rezultat na ekranu“.

„U ovoj aplikaciji preglednik prvo učitava programski kod i prethodno pripremljene modele. Zatim traži dopuštenje za kameru. Snimka kamere prikazuje se u videoelementu, a analiza ponavlja nad dostupnim kadrovima.

Za pronalaženje jednog lica koristim Tiny Face Detector. Na detektirano lice nadovezuju se analiza izraza i procjena dobi i kategorije spola. Rezultati se prikazuju uz video i na sloju za crtanje preko slike. Kada nema detekcije, nova procjena nije dostupna.

Ovdje je važno razumjeti da se analiza kadrova u prikazanom kodu provodi u pregledniku. Aplikacija za tu analizu ne šalje svaki kadar nekom AI razgovornom servisu. Ipak, za početno učitavanje koristi internetske resurse. To nije isto što i tvrdnja da stranica nikad ne uspostavlja mrežne veze.

Za mirniji prikaz procjenu dobi dodatno zaglađujem prosjekom posljednjih do trideset dobivenih procjena. Prosjek smanjuje skakanje broja, ali ne dokazuje da je procjena postala točna. Može i usporiti promjenu prikaza kada se promijeni osoba.“

**Režija:** pokaži početno učitavanje u već snimljenom isječku, zatim tri funkcionalne cjeline. Nemoj cijele dvije minute prikazivati kod.

### 6. 09:30–12:00 — Izraz lica i osjećaj nisu ista stvar

**Prikaz:** 60–75 sekundi vlastitog neutralnog izraza, osmijeha i podignutih obrva. Zadrži svaki izraz nekoliko sekundi.

„Biblioteka nudi kategorije kao što su neutralno, sretno, tužno, ljutito, uplašeno, gađenje i iznenađenje. Na zaslonu ćete vidjeti engleske nazive tih izlaza. Model traži vizualne obrasce povezane s tim kategorijama.

Kada se namjerno nasmijem, mogu dobiti veću vrijednost uz happy. Ali ja sam u ovom trenutku samo promijenio položaj mišića lica. Iz tog rezultata ne slijedi da je sustav pouzdano izmjerio moje unutarnje emocionalno stanje.

To je posebno važno pri razmišljanju o pacijentu. Izraz ima kontekst, a jedan vizualni signal nije zamjena za razgovor i cjelovitu procjenu. U literaturi su detaljno opisana ograničenja zaključivanja o emocijama samo iz pokreta lica. Zato je preciznije govoriti o klasifikaciji izraza nego o čitanju emocija.

Pogledajte sada što se događa kada pokušam ponoviti isti izraz. Rezultat može varirati između pokušaja. Ako je model pogriješio, neću to izbaciti iz demonstracije. Upravo nam pogreška pomaže razumjeti što model može, a što mu samo mi pripisujemo.“

**Izvor uz ovu temu:** Barrett i sur., 2019., https://doi.org/10.1177/1529100619832930 . Ne tvrdi da izraz lica omogućuje dijagnozu depresije, boli ili anksioznosti.

### 7. 12:00–14:00 — Procjena dobi i ograničenja kategorija

**Prikaz:** rezultat dobi tijekom istog lica u dva položaja. Ne izmišljaj poznatu točnost niti prikazuj stvarnu dob drugih osoba.

„Broj uz dob je procjena iz izgleda lica na slici. To nije čitanje datuma rođenja. Ako je rezultat, primjerice, dvadeset osam, to ne znači da osoba ima točno toliko godina niti da je pogreška sustava uvijek unutar određene granice.

Za procjenu takvog modela trebali bismo imati odvojeni skup ljudi poznate dobi i unaprijed odabrati način mjerenja pogreške. Mogli bismo promatrati prosječnu apsolutnu pogrešku u godinama, ali i raspodjelu pogrešaka te razlike među skupinama. Nekoliko primjera na meni nije dovoljna validacija.

Drugi izlaz biblioteka naziva gender i svodi ga na dvije kategorije. Važno je da taj naziv ne shvatimo kao pouzdano utvrđivanje biološkog spola, rodnog identiteta ili nekog medicinskog svojstva osobe. To je ograničen izlaz konkretnog vizualnog modela i njegove sheme oznaka.

Za današnju vježbu nemojte rezultat doživjeti kao osobnu ocjenu. Umjesto toga pitajte se što je model dobio kao ulaz i što bi moglo objasniti promjenu njegova izlaza.“

### 8. 14:00–16:30 — Kontrolirani pokus

**Prikaz:** četiri pokušaja po 20–25 sekundi: ravno i dobro osvijetljeno; lice zakrenuto; veća udaljenost; slabije osvjetljenje. Pripremi snimke unaprijed.

„Napravimo mali pokus u kojem mijenjamo samo jedan uvjet odjednom. Prvo imamo lice okrenuto prema kameri i dovoljno svjetla. Zatim zakrećem glavu, a ostale uvjete pokušavam zadržati jednakima. Nakon toga povećavam udaljenost. U zadnjem pokušaju mijenjam osvjetljenje.

Kod svakog pokušaja pratim tri stvari: nalazi li model lice, koliko je rezultat stabilan i koliko brzo se prikaz osvježava. Neću sve promjene odmah pripisati jednome uzroku. Na primjer, okretanjem glave mogu istodobno promijeniti i osvjetljenje dijela lica.

Ovakva demonstracija nije znanstvena studija točnosti, jer nemamo dovoljno sudionika ni standardizirani postupak. Ali jest dobar način da postavimo hipotezu i vidimo zašto sustav trebamo ispitati prije primjene.

U medicinskom razmišljanju korisno je zadržati upravo tu disciplinu: razlikovati opažanje od objašnjenja i demonstraciju od dokaza. Ako danas vidimo da model jednom radi izvrsno, time nismo dokazali da će dobro raditi na svim ljudima i uređajima.“

**Režija:** komentiraj stvarna opažanja. Ako se rezultat nije promijenio, reci to; ne glumi unaprijed očekivani neuspjeh.

### 9. 16:30–18:30 — Što znači broj uz rezultat?

**Ilustracija:** „happy: 0.90“ uz tekst „primjer izlaza modela, nije izmjerena ukupna točnost“. Zatim tri odvojene kartice: rezultat, kalibracija, točnost na skupu.

„Uz kategoriju vidimo broj. Lako ga je protumačiti kao postotak sigurnosti ili dokaz da je sustav devedeset posto točan. Takvo tumačenje nije automatski opravdano.

Modelov izlaz za pojedinu sliku razlikuje se od izmjerene uspješnosti na skupu primjera. Da bismo znali odgovaraju li izlazne vrijednosti stvarnoj učestalosti točnih procjena, trebali bismo ispitati i kalibraciju. Bez tog ispitivanja velika vrijednost može pratiti i pogrešnu procjenu.

Na ovoj aplikaciji dodatno postoji prag detekcije i postavka ulazne veličine. Prag utječe na to koje detekcije prihvaćamo. Ulazna veličina mijenja obradu slike i može utjecati na brzinu i ponašanje modela. Broj FPS govori koliko se brzo obrada ponavlja; ne govori koliko je procjena ispravna.

Kada vam netko pokaže AI demonstraciju, odvojite zato tri pitanja. Koliko brzo radi? Koliko često je točan u definiranom zadatku? I koliko je provjeren u uvjetima u kojima ga namjeravamo koristiti? Na ta pitanja ne odgovara isti broj.“

**Režija:** kratko pokaži FPS i promjenu ulazne veličine. Nemoj obećati poboljšanje točnosti koje nisi izmjerio.

### 10. 18:30–20:30 — Zašto je ovo zanimljivo medicini?

**Ilustracija:** dvije kolone: „edukacijska demonstracija“ i „klinička primjena“. U drugoj: definirana svrha, relevantni podaci, validacija, nadzor, odgovornost.

„Ova aplikacija nije medicinski uređaj niti sam ovim projektom dokazao kliničku primjenjivost. Njezina je vrijednost za ovo predavanje u tome što na dostupnom primjeru možemo vidjeti princip rada računalnog vida i njegova ograničenja.

Kada bi netko sličnu tehnologiju predložio za određenu medicinsku namjenu, prvo bi morao precizno definirati zadatak. Što želimo mjeriti, kod kojih ljudi, u kojim uvjetima i s kakvom posljedicom ako pogriješimo? Tek tada ima smisla birati podatke i način validacije.

Za razmišljanje uzmimo dva različita promašaja: sustav može propustiti nešto što je važno ili može prikazati nešto čega nema. Posljedice tih pogrešaka ovise o svrsi alata. Nije dovoljno reći da je ukupna točnost visoka, osobito ako ne znamo na kome je mjerena.

Odgovorna uporaba uključuje sigurnost, transparentnost i ljudsku odgovornost. WHO te teme izričito obrađuje u smjernicama o umjetnoj inteligenciji u zdravstvu. Za nas je poruka praktična: uvjerljiv vizualni prikaz nije zamjena za dokaze o korisnosti i sigurnosti.“

**Izvor:** WHO, Ethics and governance of artificial intelligence for health, 2021., https://www.who.int/publications/i/item/9789240029200 . Ovo je obrazovna rasprava, ne savjet za kliničko odlučivanje.

### 11. 20:30–22:00 — Privatnost i screenshot

**Prikaz:** nacrt uređaja s obradom unutar preglednika; posebno označi preuzimanje programa/modela s interneta i spremanje slike na uređaj.

„Kod demonstracije koristimo vlastitu kameru i dobrovoljno sudjelovanje. Prikazani kod analizira kadar u pregledniku i nema funkciju slanja fotografije na serversku bazu. To ipak ne znači da općenito svaka stranica koja koristi kameru radi na isti način.

Gumb Screenshot izrađuje sliku iz videozapisa i nacrtanih rezultata te pokreće njezino preuzimanje. Time nastaje nova datoteka na uređaju. Ako je poslije podijelite, sami odlučujete kome je dajete. Nemojte snimati druge sudionike ili koristiti fotografije pacijenata.

Za današnju aktivnost dovoljan je vaš vlastiti kadar. Sudjelovanje može biti i samo promatranje. Rezultat nije dijagnoza niti potvrda nečijeg identiteta, dobi ili emocionalnog stanja.“

### 12. 22:00–24:00 — Kako će studenti pokrenuti aplikaciju

**Prikaz:** prethodno snimi zaslon mobitela od otvaranja adrese do spremanja screenshota. Pri demonstraciji dopuštenja nemoj snimiti privatne obavijesti.

„Nakon videa na ekranu će biti QR kod. Skenirajte ga kamerom mobitela i otvorite poveznicu u pregledniku. Za ovu aktivnost pristup je privremeno otvoren bez lozinke.

Preglednik će zatražiti dopuštenje kamere. Ako želite sudjelovati, dopustite ga i pričekajte učitavanje modela. Držite lice prema kameri, uz dovoljno svjetla i bez drugih lica u kadru. Obrada je namijenjena jednom detektiranom licu u trenutku.

Prvo promatrajte neutralan izraz nekoliko sekundi. Zatim se nasmiješite i pogledajte promjenu rezultata. Možete lagano okrenuti glavu ili promijeniti udaljenost. Cilj nije dobiti najljepši rezultat, nego uočiti što ga mijenja.

Kada želite spremiti uspomenu, pritisnite Screenshot. Ako mobilni preglednik ne preuzme datoteku kako očekujete, možete napraviti običnu snimku zaslona uređaja. Nemojte zaboraviti da je i tada riječ o vašoj slici s neprovjerenim procjenama modela.

Ako kamera ne radi, provjerite dopuštenje za ovu stranicu u pregledniku. Ako ste poveznicu otvorili unutar aplikacije za poruke, pokušajte je otvoriti u zasebnom pregledniku. Na sporijem uređaju ili vezi početno učitavanje može potrajati.“

**Režija:** najmanje 45–60 sekundi ovog segmenta neka bude stvarno prolazak kroz korake na mobitelu, uz komentare. Na različitim uređajima preuzimanje može izgledati drukčije.

### 13. 24:00–25:00 — Tri poruke i predaja profesoru

**Prikaz:** veliki QR kod, puna adresa i tri kratke upute. Ostavi kadar čitljiv; nemoj prekriti QR svojom kamerom ili titlovima.

„Za kraj bih izdvojio tri poruke. Prvo, model iz slike procjenjuje obrasce; ne razumije osobu na način na koji je razumije čovjek. Drugo, izražena izlazna vrijednost nije dokaz kliničke točnosti. Treće, pogreške i promjene rezultata važan su dio razumijevanja tehnologije.

Sada možete sami isprobati aplikaciju preko QR koda. Dopustite kameru ako želite sudjelovati, promijenite izraz ili kut snimanja i promatrajte rezultat. Screenshot možete spremiti kao uspomenu na vježbu.

Dok isprobavate, razmislite o jednom pitanju: što biste još trebali znati o ovom sustavu prije nego što biste njegov izlaz upotrijebili u važnoj odluci? Hvala na pažnji, a daljnje isprobavanje prepuštam profesoru.“

## Završni kadar za demonstraciju u dvorani

**Umjetna inteligencija testiranje**

https://facial-analysis-lab.github.io/

1. Skeniraj QR i otvori stranicu u pregledniku.
2. Dopusti kameru i pričekaj učitavanje.
3. Promijeni izraz lica; spremi uspomenu gumbom Screenshot.

Edukacijska demonstracija — rezultati nisu medicinska procjena. Sudjelovanje je dobrovoljno. Kamera analizira jedno lice u trenutku.

Datoteka QR koda: `qr-aplikacija.svg` (vektorska, pogodna za velik prikaz) ili `qr-aplikacija.png` ako je dostupna.

## Ilustracije i materijali

Napravi 10–13 jednostavnih prikaza prema režiji iznad. Na pojedinom prikazu neka budu jedna ideja, kratki naslov i velika ilustracija. Koristi snimke svoje aplikacije i vlastitog lica; za ove potrebe bolje su od generičnih slika robota. Zadrži prikaz dovoljno dugo da ga publika može pročitati. Nemoj ubaciti svaki odlomak scenarija na ekran.

Za objašnjenje piksela možeš povećati vlastitu fotografiju, a za učenje nacrtati kartice ulaznih primjera. Dijagram sustava možeš sastaviti od pet pravokutnika i strelica. Za ograničenja napravi četiri snimke istog lica pod različitim uvjetima. Za medicinski dio koristi shemu postupka provjere, bez stvarnih snimaka pacijenata.

YouTube nije nužan. Ako uzmeš vanjski isječak, prije provjeri njegovu znanstvenu poruku, uvjete korištenja i dopuštenje za ponovno uključivanje u vlastiti video. Navođenje autora samo po sebi ne daje pravo preuzimanja cijelog isječka. Jednostavnije je pokazati svoju aplikaciju i dati poveznicu na dodatni materijal.

## Provjerene poveznice za izvore

- Biblioteka i funkcije modela: https://github.com/justadudewhohacks/face-api.js/ . Detalji tvoje implementacije provjereni su u `homepage.html`: Tiny Face Detector, izrazi lica, ageGenderNet, lokalni prosjek dobi i screenshot.
- Barrett i sur. (2019.), Emotional Expressions Reconsidered: Challenges to Inferring Emotion From Human Facial Movements: https://doi.org/10.1177/1529100619832930 . Ograničenja zaključivanja o emocijama iz lica.
- WHO (2021.), Ethics and governance of artificial intelligence for health: https://www.who.int/publications/i/item/9789240029200 . Sigurnost, autonomija, transparentnost i odgovornost.

Na snimci uz relevantan prikaz napiši skraćeni izvor; sve poveznice stavi na završni prikaz ili u opis videa. Ne preuzimaj točnost iz dokumentacije biblioteke kao da je izmjerena točnost tvog projekta.

## Priprema snimanja i predavanja

- Prvo objavi promjene aplikacije i na mobitelu provjeri QR, ulazak bez lozinke, kameru i Screenshot. QR vodi na korijen nove organizacije prema Git remoteu; prije dijeljenja obvezno potvrdi da se objavljena stranica otvara.
- Izaberi mirno mjesto, provjeri mikrofon i napravi probnu snimku od 30 sekundi. Govor je važniji od prikaza tvoje kamere.
- Snimaj po segmentima od dvije do tri minute. Grešku popravi ponavljanjem rečenice; kasnije odreži višak.
- Ciljaj 1080p i čitljiv tekst. Završni video izvezi kao MP4 koji možeš otvoriti prije sastanka.
- U prvom prolazu izmjeri trajanje svakog segmenta. Ukupnih 25 minuta uključuje snimke aplikacije, objašnjenja i završni QR.
- Pripremi lokalni video i kopiju koju možeš poslati profesoru. Nemoj ovisiti samo o reproduciranju s interneta.
- Oko 17:30 provjeri dijeljenje zaslona i zvuka s profesorom. Isključi obavijesti. Pri dijeljenju videa obvezno uključi dijeljenje zvuka sustava i napravi kratku probu.
- Nakon videa ostavi QR prikaz otvoren za profesorovu demonstraciju. Upute trebaju biti čitljive i iz zadnjeg reda ili preko videopoziva.

## Odgovori na očekivana pitanja

**Jesi li sam trenirao modele?** Ne; koristim prethodno istrenirane modele face-api.js i implementirao sam web-aplikaciju koja ih povezuje s kamerom i prikazom rezultata.

**Zna li aplikacija tko sam?** Ne provodi identifikaciju niti usporedbu s bazom identiteta.

**Mjeri li emociju?** Klasificira vizualni izraz u kategorije modela. Iz toga ne možemo pouzdano zaključiti unutarnje emocionalno stanje.

**Je li procijenjena dob točna?** Nije zajamčeno. U projektu nije provedena klinička validacija niti treba izmišljati opću točnost.

**Šalje li kamera video na server?** U prikazanoj implementaciji AI analiza radi u pregledniku i nema funkcije prijenosa kadrova u serversku bazu. Stranica ipak preuzima kod i modele s interneta.

**Može li ovo dijagnosticirati bolest?** Ova aplikacija to ne radi i nije provjerena za tu svrhu.

**Zašto se broj dobi sporo mijenja?** Prikazuje se prosjek posljednjih do 30 procjena kako bi prikaz bio stabilniji.

**Zašto samo jedna osoba?** Kod koristi detectSingleFace; demonstraciju radite s jednim licem u kadru.

## Povratak lozinke sutra

U `js/auth.js` promijeni `const AEYE_REQUIRE_PASSWORD = false;` u `const AEYE_REQUIRE_PASSWORD = true;`, zatim commit i push. Time se vraća postojeća dnevna lozinka i odjava. Sam datum ne vraća zaštitu automatski.
