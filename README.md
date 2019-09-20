                                                            Ételfutár

Leírás:

Az alkalmazás egy céges tesztfeladat keretében készült el, azóta is fejlesztés alatt áll. Mind a frontend mind a szerver & adatbázis saját munka. Az alkalmazást deploy-oltam HEROKU-n, így a git repo külső szemlélőknek csak code review-ra érdemes. Az alkalmazás egy "ételfutár" egyszerűsített megoldása. Bejelentkezés után lehet ételeket rendelni azokat ki/be rakni a kosárba/ból rendelés előtt. Regisztráció szükséges az ételek rendeléséhez, de az ételek megtekintése nem kötött felhasználói fiók meglétéhez. Az egyes ételekhez elérhető az adatbázisból kinyert információ alapján, hogy vegetáriánus vagy fűszeres-e amennyiben az, külön ikon és egy felugró kis szöveg jelzi azt. (Ezek randomizált értékek az adatbázisban, az elsődleges szempont az implementáció helyes megléte volt, ezért fordulhat elő vegetáriánus marhapörkölt :-)). Rendelni 20.000 forint értékben lehet, afelett az alkalmazás nem enged. Adatbázishoz eredetileg mySQL-t használtam de a HEROKU a postgreSQL-t támogatja natívan szóval jelenleg azon fut. A szerver mappában egyébként a posgtreSQL SQL parancsai is megvannak. Vannak hiányzó részek még az alkalmazásban ezek fejlesztés alatt állnak, a szerveren knex helyett ORM-re kell átállni, a frontend-en egyelőre be vannak égetve az api hívások, valamint a user autentikáció is hiányos, és apróbb feature-öket szeretnék még implementálni (profil adatok, szerkeszthető kosárfelsőhatár, google maps api...).

Felhasznált technológiák:
-Backend: Node.js
-Frontend: React.js
-Adatbázis: mySQL / PostgreSQL

Heroku link: http://otifood.herokuapp.com/
