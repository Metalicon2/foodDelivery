                                                            Ételfutár

1. pizza-api / pizza mappában:

$ npm i

2. pizza-api mappa:

$ npm start

3. pizza mappa:

$ npm start

(rá fog kérdezni a portváltásra a react-app az induláskor => Yes)

4. mysql szerver indítása szükséges

5. server.js file-ban a user,password,database property-kre a mysql-ben megfelelő adatokat meg kell adni

let knex = require('knex')({
  client: 'mysql',
  version: '8.0',
  connection: {
    host : '127.0.0.1',
    user : YOUR_USER,
    password : YOUR_PASSWORD,
    database : YOUR_DATABASE_NAME
  }
});

6. mysql konzolban: source <Elérési útvonala az sql file-nak>;

Felhasznált technológiák:
-Backend: Node.js
-Frontend: React.js
-Adatbázis: mySQL

Leírás:

A projektet a backend írásával kezdtem, a frontend ezután készült el. 
Mellékeltem egy menuitems.sql file-t ami minden szükséges sql kódot tartalmaz.
