import { getAllUsersData } from '../zemtuAllUsersData';
import { AllUsersData } from '../../model/all_users_data';


describe('testing getAllUsersData', () => {
    test('getAllUsersData', () => {
        const allUsersData = getAllUsersData();
        // expect(allUsersData).toMatchObject({
        //     "data": {
        //         "allUsers": {
        //             "edges": [
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "oliver.hock@gmail.com",
        //                         "firstName": "Oliver",
        //                         "id": "VXNlck5vZGU6MTMzNDI=",
        //                         "lastName": "Hock",
        //                         "username": "oliver",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "familie@gaier-home.de",
        //                         "firstName": "Andrea",
        //                         "id": "VXNlck5vZGU6MTM1MDg=",
        //                         "lastName": "Gaier",
        //                         "username": "andreag",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjI=",
        //                     "node": {
        //                         "city": "Hamburg",
        //                         "email": "sylnie@posteo.de",
        //                         "firstName": "Sylvia",
        //                         "id": "VXNlck5vZGU6MTM2NjA=",
        //                         "lastName": "Niedziella",
        //                         "username": "sunny",
        //                         "zip": "22549"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjM=",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "oro.la@aol.de",
        //                         "firstName": "László ",
        //                         "id": "VXNlck5vZGU6MTM2NzI=",
        //                         "lastName": "Orosz",
        //                         "username": "garrincha",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQ=",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "mareikeleissner@web.de",
        //                         "firstName": "Mareike",
        //                         "id": "VXNlck5vZGU6MTM5MDI=",
        //                         "lastName": "Leißner",
        //                         "username": "mareikelei",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjU=",
        //                     "node": {
        //                         "city": "Bad Essen",
        //                         "email": "grottendieckleon@gmail.com",
        //                         "firstName": "Fabien Leon",
        //                         "id": "VXNlck5vZGU6MTQwOTA=",
        //                         "lastName": "Grottendieck",
        //                         "username": "leon96",
        //                         "zip": "49152"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjY=",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "translingua8@gmail.com",
        //                         "firstName": "Helga",
        //                         "id": "VXNlck5vZGU6MTQ1MDQ=",
        //                         "lastName": "Stüwe",
        //                         "username": "benutzer11",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjc=",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "teilautos.test@gmail.com",
        //                         "firstName": "Teilautos",
        //                         "id": "VXNlck5vZGU6MTQ4NzM=",
        //                         "lastName": "Test",
        //                         "username": "teilautos.test",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjg=",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "nataliazielonka89@googlemail.com",
        //                         "firstName": "Natalia",
        //                         "id": "VXNlck5vZGU6MTQ5NjY=",
        //                         "lastName": "Zielonka",
        //                         "username": "nataliazielonka89",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjk=",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "chrdevr@web.de",
        //                         "firstName": "Christa",
        //                         "id": "VXNlck5vZGU6MTQ5NzI=",
        //                         "lastName": "de Vries",
        //                         "username": "chrdevr",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjEw",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "jens.redlich@gmx.net",
        //                         "firstName": "Jens",
        //                         "id": "VXNlck5vZGU6MTQ5NzM=",
        //                         "lastName": "Redlich",
        //                         "username": "jens.redlich",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjEx",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "kleinhausanna@gmail.com",
        //                         "firstName": "Ann-Christin",
        //                         "id": "VXNlck5vZGU6MTQ5NzQ=",
        //                         "lastName": "Kleinhaus",
        //                         "username": "kleinhausanna",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjEy",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "maike_kottmann@web.de",
        //                         "firstName": "Maike",
        //                         "id": "VXNlck5vZGU6MTQ5NzY=",
        //                         "lastName": "Kottmann",
        //                         "username": "maike_123",
        //                         "zip": "59303"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjEz",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "67karabel@gmail.com",
        //                         "firstName": "Tokcan",
        //                         "id": "VXNlck5vZGU6MTQ5Nzc=",
        //                         "lastName": "Karabel",
        //                         "username": "totu",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjE0",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "det@roggenkemper.eu",
        //                         "firstName": "Detlef",
        //                         "id": "VXNlck5vZGU6MTQ5ODQ=",
        //                         "lastName": "Roggenkemper",
        //                         "username": "detrogg",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjE1",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "bmek@freenet.de",
        //                         "firstName": "Dirk",
        //                         "id": "VXNlck5vZGU6MTUwMzE=",
        //                         "lastName": "Wienströer",
        //                         "username": "dirkwien",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjE2",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "chris@roggenkemper.eu",
        //                         "firstName": "Christiane",
        //                         "id": "VXNlck5vZGU6MTUwNDc=",
        //                         "lastName": "Roggenkemper",
        //                         "username": "chrisrogg",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjE3",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "lars@roggenkemper.eu",
        //                         "firstName": "Lars",
        //                         "id": "VXNlck5vZGU6MTUwNDg=",
        //                         "lastName": "Roggenkemper",
        //                         "username": "larsrogg",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjE4",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "annemarcher@web.de",
        //                         "firstName": "Anne",
        //                         "id": "VXNlck5vZGU6MTUwOTY=",
        //                         "lastName": "Marcher",
        //                         "username": "annemarcher@web.de",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjE5",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "markus.rhein-schomburg@oelde.de",
        //                         "firstName": "Stadt",
        //                         "id": "VXNlck5vZGU6MTUyMzc=",
        //                         "lastName": "Oelde",
        //                         "username": "stadt.oelde",
        //                         "zip": "59299"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjIw",
        //                     "node": {
        //                         "city": "Hoetmar",
        //                         "email": "info@ferienhof-schwienhorst.de",
        //                         "firstName": "Paul",
        //                         "id": "VXNlck5vZGU6MTUzMzM=",
        //                         "lastName": "Schwienhorst",
        //                         "username": "ferienhof+waf",
        //                         "zip": "48231"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjIx",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "markus.rhein-schomburg@t-online.de",
        //                         "firstName": "Markus",
        //                         "id": "VXNlck5vZGU6MTU1MTU=",
        //                         "lastName": "Rhein-Schomburg",
        //                         "username": "markus.rhein-schomburg",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjIy",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "hauptamt@everswinkel.de",
        //                         "firstName": "Hauptamt",
        //                         "id": "VXNlck5vZGU6MTU5MDA=",
        //                         "lastName": "Everswinkel",
        //                         "username": "hauptamt.everswinkel",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjIz",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "buchhaltung@autohaus-wortmann.de",
        //                         "firstName": "Autohaus",
        //                         "id": "VXNlck5vZGU6MTU5MDE=",
        //                         "lastName": "Wortmann",
        //                         "username": "autohaus.wortmann",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjI0",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "ordnungsamt@everswinkel.de",
        //                         "firstName": "Feuerwehr",
        //                         "id": "VXNlck5vZGU6MTU5MDg=",
        //                         "lastName": "Everswinkel",
        //                         "username": "feuerwehr.everswinkel",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjI1",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "info@hdg-everswinkel.de",
        //                         "firstName": "Haus",
        //                         "id": "VXNlck5vZGU6MTU5MDk=",
        //                         "lastName": "der Generationen",
        //                         "username": "haus.der.generationen",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjI2",
        //                     "node": {
        //                         "city": "Köln",
        //                         "email": "ahlrichs@asew.de",
        //                         "firstName": "Hanno",
        //                         "id": "VXNlck5vZGU6MTU5NDg=",
        //                         "lastName": "Ahlrichs",
        //                         "username": "hanno.ahlrichs",
        //                         "zip": "50933"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjI3",
        //                     "node": {
        //                         "city": "Köln",
        //                         "email": "scholz@asew.de",
        //                         "firstName": "Sarah",
        //                         "id": "VXNlck5vZGU6MTU5NTA=",
        //                         "lastName": "Scholz",
        //                         "username": "sarah.scholz",
        //                         "zip": "50933"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjI4",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "schneider@ostbevern.de",
        //                         "firstName": "Jürgen",
        //                         "id": "VXNlck5vZGU6MTYyMjg=",
        //                         "lastName": "Schneider",
        //                         "username": "juergen.schneider",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjI5",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "martinbaginski1989@gmail.com",
        //                         "firstName": "Martin",
        //                         "id": "VXNlck5vZGU6MTYyNjM=",
        //                         "lastName": "Baginski",
        //                         "username": "martin.baginski",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjMw",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "reisestelle@haverboecker.com",
        //                         "firstName": "Haver",
        //                         "id": "VXNlck5vZGU6MTYzNDI=",
        //                         "lastName": "und Boecker",
        //                         "username": "haver.boecker",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjMx",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "hubert.boecker@gmx.de",
        //                         "firstName": "Hubert",
        //                         "id": "VXNlck5vZGU6MTYzOTI=",
        //                         "lastName": "Böcker",
        //                         "username": "hubert.boecker",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjMy",
        //                     "node": {
        //                         "city": "Herzebrock-Clarholz",
        //                         "email": "marcelgentzsch@gmail.com",
        //                         "firstName": "Marcel",
        //                         "id": "VXNlck5vZGU6MTY2ODQ=",
        //                         "lastName": "Gentzsch",
        //                         "username": "marcel.gentzsch",
        //                         "zip": "33442"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjMz",
        //                     "node": {
        //                         "city": "Dietzhölztal",
        //                         "email": "s.simon@dietzhoelztal.de",
        //                         "firstName": "Stefanie",
        //                         "id": "VXNlck5vZGU6MTY2ODk=",
        //                         "lastName": "Simon",
        //                         "username": "stefanie.simon",
        //                         "zip": "35716"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjM0",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "melanie.westerbeck@t-online.de",
        //                         "firstName": "Melanie",
        //                         "id": "VXNlck5vZGU6MTY3NDQ=",
        //                         "lastName": "Westerbeck",
        //                         "username": "melanie.westerbeck",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjM1",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "pia.hussmann@freenet.de",
        //                         "firstName": "Pia",
        //                         "id": "VXNlck5vZGU6MTY4OTY=",
        //                         "lastName": "Hußmann",
        //                         "username": "pia.hussmann",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjM2",
        //                     "node": {
        //                         "city": "Alverskirchen",
        //                         "email": "teamalv@stoffwechsel-gilsdorf.de",
        //                         "firstName": "Dagmar",
        //                         "id": "VXNlck5vZGU6MTY5MDI=",
        //                         "lastName": "Gilsdorf",
        //                         "username": "dagmar.gilsdorf",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjM3",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "hiba-hib92@hotmail.com",
        //                         "firstName": "Heba",
        //                         "id": "VXNlck5vZGU6MTY5NDk=",
        //                         "lastName": "Abdah",
        //                         "username": "heba.abdah",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjM4",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "barbarairoth@yahoo.de",
        //                         "firstName": "Barbara",
        //                         "id": "VXNlck5vZGU6MTcwMzM=",
        //                         "lastName": "Roth",
        //                         "username": "barbara.roth",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjM5",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "maxmantler007@gmx.de",
        //                         "firstName": "Maximilian",
        //                         "id": "VXNlck5vZGU6MTcxNTQ=",
        //                         "lastName": "Mantler",
        //                         "username": "maximilian.mantler",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQw",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "claudia.hussmann@t-online.de",
        //                         "firstName": "Claudia",
        //                         "id": "VXNlck5vZGU6MTcyMDg=",
        //                         "lastName": "Hußmann",
        //                         "username": "claudia.hussmann",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQx",
        //                     "node": {
        //                         "city": "San Francisco",
        //                         "email": "nikount@outlook.com",
        //                         "firstName": "Nikolai",
        //                         "id": "VXNlck5vZGU6MTc5Nzc=",
        //                         "lastName": "Kaestner",
        //                         "username": "nikolai.kaestner",
        //                         "zip": "94112"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQy",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "alex.eck@gmx.net",
        //                         "firstName": "Alexander",
        //                         "id": "VXNlck5vZGU6MTc5ODk=",
        //                         "lastName": "Eck",
        //                         "username": "alexander.eck",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQz",
        //                     "node": {
        //                         "city": "Göttingen",
        //                         "email": "mieth@landkreisgoettingen.de",
        //                         "firstName": "Finja",
        //                         "id": "VXNlck5vZGU6MTgyMjk=",
        //                         "lastName": "Mieth",
        //                         "username": "finja.mieth",
        //                         "zip": "37083"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQ0",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "swa@dietechniker.info",
        //                         "firstName": "Stephan",
        //                         "id": "VXNlck5vZGU6MTkwNTA=",
        //                         "lastName": "Wassmann",
        //                         "username": "stephan.wassmann",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQ1",
        //                     "node": {
        //                         "city": "Hoetmar",
        //                         "email": "brittakrahl@web.de",
        //                         "firstName": "Britta",
        //                         "id": "VXNlck5vZGU6MTk0MDM=",
        //                         "lastName": "Krahl",
        //                         "username": "britta.krahl",
        //                         "zip": "48231"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQ2",
        //                     "node": {
        //                         "city": "Hoetmar",
        //                         "email": "m.krahl@web.de",
        //                         "firstName": "Markus",
        //                         "id": "VXNlck5vZGU6MTk0MDQ=",
        //                         "lastName": "Krahl",
        //                         "username": "markus.krahl",
        //                         "zip": "48231"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQ3",
        //                     "node": {
        //                         "city": "Hoetmar",
        //                         "email": "monja.krahl@web.de",
        //                         "firstName": "Monja",
        //                         "id": "VXNlck5vZGU6MTk0MDU=",
        //                         "lastName": "Krahl",
        //                         "username": "monja.krahl",
        //                         "zip": "48231"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQ4",
        //                     "node": {
        //                         "city": "Oelde",
        //                         "email": "silbergard@gmx.de",
        //                         "firstName": "Hildegard",
        //                         "id": "VXNlck5vZGU6MTk3NjM=",
        //                         "lastName": "Silberberg",
        //                         "username": "hildegard.silberberg",
        //                         "zip": "59302"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjQ5",
        //                     "node": {
        //                         "city": "Bielefeld",
        //                         "email": "nad_jennie.slivka@web.de",
        //                         "firstName": "Nadine",
        //                         "id": "VXNlck5vZGU6MTk4MDI=",
        //                         "lastName": "Slivka",
        //                         "username": "nadine.slivka",
        //                         "zip": "33613"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjUw",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "markus.josef.gabriel@gmail.com",
        //                         "firstName": "Markus Josef",
        //                         "id": "VXNlck5vZGU6MTk4NzE=",
        //                         "lastName": "Gabriel",
        //                         "username": "markus.josef.gabriel@gmail.com",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjUx",
        //                     "node": {
        //                         "city": "Hoetmar",
        //                         "email": "schnellehilfe@mail.de",
        //                         "firstName": "Nikos Bernd",
        //                         "id": "VXNlck5vZGU6MjAwMzc=",
        //                         "lastName": "Schnieders",
        //                         "username": "nikos.schnieders",
        //                         "zip": "48231"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjUy",
        //                     "node": {
        //                         "city": "Münster",
        //                         "email": "janineheiland97@googlemail.com",
        //                         "firstName": "Janine",
        //                         "id": "VXNlck5vZGU6MjAwODU=",
        //                         "lastName": "Heiland",
        //                         "username": "janine.heiland",
        //                         "zip": "48143"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjUz",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "amerkh98@gmail.com",
        //                         "firstName": "Amer",
        //                         "id": "VXNlck5vZGU6MjAxNjc=",
        //                         "lastName": "Alkhodari",
        //                         "username": "amer.alkhodari",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjU0",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "machine.user@teilautos-carsharing.de",
        //                         "firstName": "Machine",
        //                         "id": "VXNlck5vZGU6MjAyNTI=",
        //                         "lastName": "User",
        //                         "username": "machineuser-teilautos",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjU1",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "jwde@freenet.de",
        //                         "firstName": "Josef",
        //                         "id": "VXNlck5vZGU6MjAzNDk=",
        //                         "lastName": "Weiser",
        //                         "username": "josef.weiser",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjU2",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "austin@sendenhorst.de",
        //                         "firstName": "Stadt",
        //                         "id": "VXNlck5vZGU6MjA0MDU=",
        //                         "lastName": "Sendenhorst",
        //                         "username": "stadt.sendenhorst",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjU3",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "charlotte.koerner@online.de",
        //                         "firstName": "Charlotte",
        //                         "id": "VXNlck5vZGU6MjA0NTc=",
        //                         "lastName": "Körner",
        //                         "username": "charlotte.koerner",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjU4",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "TVerspohl@t-online.de",
        //                         "firstName": "Timo",
        //                         "id": "VXNlck5vZGU6MjA0ODU=",
        //                         "lastName": "Lütke-Verspohl",
        //                         "username": "tverspohl",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjU5",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "mail@woestheinrich.net",
        //                         "firstName": "Markus",
        //                         "id": "VXNlck5vZGU6MjA1MTE=",
        //                         "lastName": "Wöstheinrich",
        //                         "username": "markus.woestheinrich",
        //                         "zip": "59269"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjYw",
        //                     "node": {
        //                         "city": "Versmold",
        //                         "email": "vorzimmer@versmold.de",
        //                         "firstName": "Stadt",
        //                         "id": "VXNlck5vZGU6MjA3MTk=",
        //                         "lastName": "Versmold",
        //                         "username": "stadt.versmold",
        //                         "zip": "33775"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjYx",
        //                     "node": {
        //                         "city": "Versmold",
        //                         "email": "Liane.Fuelling@gmx.de",
        //                         "firstName": "Liane",
        //                         "id": "VXNlck5vZGU6MjA4MDQ=",
        //                         "lastName": "Fülling",
        //                         "username": "liane.fuelling",
        //                         "zip": "33775"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjYy",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "info@goldschmiede-wietkamp.de",
        //                         "firstName": "Marlene",
        //                         "id": "VXNlck5vZGU6MjA4ODk=",
        //                         "lastName": "Wietkamp",
        //                         "username": "marlene.wietkamp",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjYz",
        //                     "node": {
        //                         "city": "Versmold",
        //                         "email": "bohle.rpj@gmx.de",
        //                         "firstName": "Anke",
        //                         "id": "VXNlck5vZGU6MjExMzA=",
        //                         "lastName": "Bohle",
        //                         "username": "anke.bohle",
        //                         "zip": "33775"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjY0",
        //                     "node": {
        //                         "city": "Albersloh",
        //                         "email": "heinz-wenker@t-online.de",
        //                         "firstName": "Heinz",
        //                         "id": "VXNlck5vZGU6MjExNDc=",
        //                         "lastName": "Wenker",
        //                         "username": "heinz.wenker",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjY1",
        //                     "node": {
        //                         "city": "Warendorf",
        //                         "email": "fazerfahrer@web.de",
        //                         "firstName": "Karl-Heinz",
        //                         "id": "VXNlck5vZGU6MjExNjU=",
        //                         "lastName": "Zielinski",
        //                         "username": "karl-heinz.zielinski",
        //                         "zip": "48231"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjY2",
        //                     "node": {
        //                         "city": "Sassenberg",
        //                         "email": "kniesel@sassenberg.de",
        //                         "firstName": "Stadt",
        //                         "id": "VXNlck5vZGU6MjEyMDY=",
        //                         "lastName": "Sassenberg",
        //                         "username": "stadt.sassenberg",
        //                         "zip": "48336"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjY3",
        //                     "node": {
        //                         "city": "Alverskirchen",
        //                         "email": "tomasknierim@gmail.com",
        //                         "firstName": "Thomas",
        //                         "id": "VXNlck5vZGU6MjEyMTc=",
        //                         "lastName": "Knierim",
        //                         "username": "thomas.knierim",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjY4",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "pdl@st-josef-stift.de",
        //                         "firstName": "St. Josef",
        //                         "id": "VXNlck5vZGU6MjEyNDM=",
        //                         "lastName": "Stift",
        //                         "username": "st-josef.stift",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjY5",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "welp@ostbevern.de",
        //                         "firstName": "Gemeinde",
        //                         "id": "VXNlck5vZGU6MjE0MjM=",
        //                         "lastName": "Ostbevern",
        //                         "username": "gemeinde.ostbevern",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjcw",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "g.hlawatsch@scitel.de",
        //                         "firstName": "Dr. Gerhart",
        //                         "id": "VXNlck5vZGU6MjE1NTU=",
        //                         "lastName": "Hlawatsch",
        //                         "username": "dr-gerhart.hlawatsch",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjcx",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "mbergedieck@t-online.de",
        //                         "firstName": "Marlies",
        //                         "id": "VXNlck5vZGU6MjIwMjA=",
        //                         "lastName": "Bergedieck",
        //                         "username": "marlies.bergedieck",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjcy",
        //                     "node": {
        //                         "city": "Alverskirchen",
        //                         "email": "gruendke@web.de",
        //                         "firstName": "Mechthild",
        //                         "id": "VXNlck5vZGU6MjIwNTU=",
        //                         "lastName": "Gründkemeyer",
        //                         "username": "mechthild.gruendkemeyer",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjcz",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "mipless@me.com",
        //                         "firstName": "Michael",
        //                         "id": "VXNlck5vZGU6MjIzMTI=",
        //                         "lastName": "Pless",
        //                         "username": "michael.pless",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjc0",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "chi.sakimura@scitel.de",
        //                         "firstName": "Chieko",
        //                         "id": "VXNlck5vZGU6MjIzNDQ=",
        //                         "lastName": "Sakimura-Hlawatsch",
        //                         "username": "chieko.sakimura-hlawatsch",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjc1",
        //                     "node": {
        //                         "city": "Everswinkel",
        //                         "email": "udo-lischo@t-online.de",
        //                         "firstName": "Udo",
        //                         "id": "VXNlck5vZGU6MjI2MTQ=",
        //                         "lastName": "Lischo",
        //                         "username": "udo.lischo",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjc2",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "Marion3B@aol.com",
        //                         "firstName": "Marion",
        //                         "id": "VXNlck5vZGU6MjI5ODU=",
        //                         "lastName": "Korte",
        //                         "username": "marion.korte",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjc3",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "cord@ostbevern.de",
        //                         "firstName": "Ordnungsamt",
        //                         "id": "VXNlck5vZGU6MjMwNjA=",
        //                         "lastName": "Ostbevern",
        //                         "username": "ordnungsamt.ostbevern",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjc4",
        //                     "node": {
        //                         "city": "Sassenberg",
        //                         "email": "elisabeth.doehring@t-online.de",
        //                         "firstName": "Elisabeth",
        //                         "id": "VXNlck5vZGU6MjMyNzA=",
        //                         "lastName": "Döhring",
        //                         "username": "elisabeth.doehring",
        //                         "zip": "48336"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjc5",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "schubivolley@aol.com",
        //                         "firstName": "Stefan",
        //                         "id": "VXNlck5vZGU6MjMzMDU=",
        //                         "lastName": "Schubert",
        //                         "username": "stefan.schubert",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjgw",
        //                     "node": {
        //                         "city": "Beckum",
        //                         "email": "frank@giacinto.de",
        //                         "firstName": "Frank",
        //                         "id": "VXNlck5vZGU6MjM0MDY=",
        //                         "lastName": "Giacinto",
        //                         "username": "frank.giacinto",
        //                         "zip": "22549"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjgx",
        //                     "node": {
        //                         "city": "Drensteinfurt",
        //                         "email": "capricorn92@gmx.de",
        //                         "firstName": "Frederik",
        //                         "id": "VXNlck5vZGU6MjM3ODI=",
        //                         "lastName": "Müller",
        //                         "username": "frederik.mueller",
        //                         "zip": "48317"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjgy",
        //                     "node": {
        //                         "city": "Drensteinfurt",
        //                         "email": "zentrale-dienste@drensteinfurt.de",
        //                         "firstName": "Stadt",
        //                         "id": "VXNlck5vZGU6MjM4MTQ=",
        //                         "lastName": "Drensteinfurt",
        //                         "username": "stadt.drensteinfurt",
        //                         "zip": "48317"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjgz",
        //                     "node": {
        //                         "city": "Versmold",
        //                         "email": "Hans.Kahre@t-online.de",
        //                         "firstName": "Bündnis '90",
        //                         "id": "VXNlck5vZGU6MjM4MTU=",
        //                         "lastName": "Die Grünen OV",
        //                         "username": "die-gruenen.versmold",
        //                         "zip": "33775"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjg0",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "glashausmuenster06@gmail.com",
        //                         "firstName": "Astrid",
        //                         "id": "VXNlck5vZGU6MjM4NTg=",
        //                         "lastName": "Diestelkamp",
        //                         "username": "astrid.diestelkamp",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjg1",
        //                     "node": {
        //                         "city": "Unna",
        //                         "email": "kreis-unna@teilautos-carsharing.de",
        //                         "firstName": "Kreis",
        //                         "id": "VXNlck5vZGU6MjM5MzY=",
        //                         "lastName": "Unna",
        //                         "username": "kreis.unna",
        //                         "zip": "59425"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjg2",
        //                     "node": {
        //                         "city": "Drensteinfurt",
        //                         "email": "anni1959f@gmail.com",
        //                         "firstName": "Annegret",
        //                         "id": "VXNlck5vZGU6MjM5NDM=",
        //                         "lastName": "Frede",
        //                         "username": "annegret.frede",
        //                         "zip": "48317"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjg3",
        //                     "node": {
        //                         "city": "Kamen",
        //                         "email": "christiane.doll@vku-online.de",
        //                         "firstName": "Verkehrsgesellschaft",
        //                         "id": "VXNlck5vZGU6MjM5Njc=",
        //                         "lastName": "Kreis Unna",
        //                         "username": "verkehrsgesellschaft.kreis.unna",
        //                         "zip": "59174"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjg4",
        //                     "node": {
        //                         "city": "Drensteinfurt",
        //                         "email": "Imke85@gmx.net",
        //                         "firstName": "Imke",
        //                         "id": "VXNlck5vZGU6MjM5NzI=",
        //                         "lastName": "Friedrich",
        //                         "username": "imke.friedrich",
        //                         "zip": "48317"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjg5",
        //                     "node": {
        //                         "city": "Drensteinfurt",
        //                         "email": "Schwirkschlies-j@web.de",
        //                         "firstName": "Jens",
        //                         "id": "VXNlck5vZGU6MjM5NzM=",
        //                         "lastName": "Friedrich",
        //                         "username": "jens.friedrich",
        //                         "zip": "48317"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjkw",
        //                     "node": {
        //                         "city": "Drensteinfurt",
        //                         "email": "elke50maier@googlemail.com",
        //                         "firstName": "Elke",
        //                         "id": "VXNlck5vZGU6MjM5NzY=",
        //                         "lastName": "Maier",
        //                         "username": "elke.maier",
        //                         "zip": "48317"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjkx",
        //                     "node": {
        //                         "city": "Drensteinfurt",
        //                         "email": "annette.semptner@web.de",
        //                         "firstName": "Annette",
        //                         "id": "VXNlck5vZGU6MjM5OTg=",
        //                         "lastName": "Semptner",
        //                         "username": "annette.semptner",
        //                         "zip": "48317"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjky",
        //                     "node": {
        //                         "city": "Sendenhorst",
        //                         "email": "christinabenmoussa@yahoo.de",
        //                         "firstName": "Christina",
        //                         "id": "VXNlck5vZGU6MjQwMjE=",
        //                         "lastName": "Ben Moussa",
        //                         "username": "christina.ben-moussa",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjkz",
        //                     "node": {
        //                         "city": "Ahlen",
        //                         "email": "klaus.ottenberg@arcor.de",
        //                         "firstName": "Klaus",
        //                         "id": "VXNlck5vZGU6MjQwMzA=",
        //                         "lastName": "Ottenberg",
        //                         "username": "klaus.ottenberg",
        //                         "zip": "59227"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjk0",
        //                     "node": {
        //                         "city": "Ostbevern",
        //                         "email": "nadine.viefhues@web.de",
        //                         "firstName": "Nadine",
        //                         "id": "VXNlck5vZGU6MjQwNTA=",
        //                         "lastName": "Zühlke",
        //                         "username": "nadine.zuehlke",
        //                         "zip": "48346"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjk1",
        //                     "node": {
        //                         "city": "Sendenhorst-Albersloh",
        //                         "email": "info@autohaus-breul.de",
        //                         "firstName": "Autohaus",
        //                         "id": "VXNlck5vZGU6MjQwNzQ=",
        //                         "lastName": "Breul",
        //                         "username": "autohaus.breul",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjk2",
        //                     "node": {
        //                         "city": "Versmold",
        //                         "email": "w.beuge@t-online.de",
        //                         "firstName": "Wolfgang",
        //                         "id": "VXNlck5vZGU6MjQxNDY=",
        //                         "lastName": "Beuge",
        //                         "username": "wolfgang.beuge",
        //                         "zip": "33775"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjk3",
        //                     "node": {
        //                         "city": "Alverskirchen",
        //                         "email": "ralf.bertelmann@gmail.com",
        //                         "firstName": "Ralf",
        //                         "id": "VXNlck5vZGU6MjQyNDk=",
        //                         "lastName": "Bertelmann",
        //                         "username": "ralf.bertelmann",
        //                         "zip": "48351"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjk4",
        //                     "node": {
        //                         "city": "Sendenhorst-Albersloh",
        //                         "email": "bea1.bruns@gmail.com",
        //                         "firstName": "Beate",
        //                         "id": "VXNlck5vZGU6MjQyODg=",
        //                         "lastName": "Bruns",
        //                         "username": "beate.bruns",
        //                         "zip": "48324"
        //                     }
        //                 },
        //                 {
        //                     "cursor": "YXJyYXljb25uZWN0aW9uOjk5",
        //                     "node": {
        //                         "city": "Düsseldorf",
        //                         "email": "dirk.froelje@googlemail.com",
        //                         "firstName": "Dirk",
        //                         "id": "VXNlck5vZGU6MjQzMzI=",
        //                         "lastName": "Froelje",
        //                         "username": "dirk.froelje",
        //                         "zip": "40549"
        //                     }
        //                 }
        //             ],
        //             "pageInfo": {
        //                 "endCursor": "YXJyYXljb25uZWN0aW9uOjk5",
        //                 "hasNextPage": true,
        //                 "hasPreviousPage": false,
        //                 "startCursor": "YXJyYXljb25uZWN0aW9uOjA="
        //             }
        //         }
        //     }
        // }
        // )
    });
});

