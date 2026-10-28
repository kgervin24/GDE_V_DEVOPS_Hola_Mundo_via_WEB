# GDE_V_DEVOPS_Hola_Mundo_via_WEB

Egyszerű Node.js + Express alapú webalkalmazás a GDE DevOps tantárgy beadandó feladatához.

## Funkció

Az alkalmazás HTTP-n keresztül egy egyszerű "Hola Mundo!" oldalt jelenít meg.

## Követelmények

- Node.js
- npm

## Telepítés

```bash
npm install
```

## Fejlesztési lépések v1.0

- Linux VM létrehozása
- Mappastruktúra kialakítása a szerveren, ezzel párhuzamosan a Git repository létrehozása
- Node.js, npm, Git és Docker környezet ellenőrzése
- `app.js` megírása
- Működés tesztelése (`http://localhost:8080`)
- Git kapcsolat és autentikáció beállítása
- Git fájlkizárások beállítása (`.gitignore`)
- Első commit és első push a GitHub repositoryba

## Fejlesztési lépések v2.1

- A main főágból egy külön fejlesztési ág létrehozása feature/health-endpoint néven
     (`http://localhost:8080/health`)
- Az src/app.js fájlban módosítás készült, amely JSON formátumban ad visszajelzést az alkalmazás működéséről
- A fejlesztés során ellenőrzésre került, hogy a főoldal (/) és az új (/health) végpont is megfelelően működik
- COMMIT: 
  7195a81 - "README dokumentáció hozzáadása" - main ág
  4b50769 - "Health endpoint hozzáadása" - feature/health-endpoint ág

## Fejlesztési lépések v2.2

- A fejlesztési ág (feature/health-endpoint) beolvasztása a főágba (main)
- Mivel a main ágon nem történt új commit, a Git úgynevezett fast-forward merge műveletet hajtott végre.
- COMMIT: 
  358f758 - "Kezdeti webalkalmazás inicializálása" (v1.0)
  7195a81 - "README dokumentáció hozzáadása" \
                                              > main ág előrelép a 4b50769 commitra
  4b50769 - "Health endpoint hozzáadása"     /

## Fejlesztési lépések v2.3

- GitHub szinkronizáció (Git push)
- A git merge művelet a helyi repositoryban integrálta az új fejlesztést, 
  míg a git push a helyi main ág új állapotát továbbította a GitHub-ra.
- COMMIT: 
  358f758 - "Kezdeti webalkalmazás inicializálása"
  4b50769 - "Health endpoint hozzáadása" (merged)

## Fejlesztési lépések v3.1

- `Dockerfile` létrehozása
- `.dockerignore` létrehozása a szükségtelen fájlok kizárására
- Docker jogosultságok ellenőrzése, a parancsok végrehajtása "sudo" használatával
- Docker image létrehozása
    image_name: gde-devops-hola-mundo:1.0
    image_ ID: ade8e46b192f

## Fejlesztési lépések v3.2

- Docker image alapján `gde-hola-web` nevű konténer létrehozása
- A Linux VM 8081-es portjának továbbítása a konténer 8080-as portjára
- Böngészőben tesztelt végpontok:
      http://localhost:8081/ –> Hola Mundo főoldal
      http://localhost:8081/health –> JSON állapotellenőrzés

## Fejlesztési lépések v3.3

1. A konténer az image alapján létrehozott futtatható példányt.
2. Az image tartalmazza az alkalmazást és annak futtatókörnyezetét.
3. A konténer leállítása nem törli sem az image-et, sem a konténert.

- Konténer első indítása:
    `sudo docker run -d --name gde-hola-web -p 8081:8080 gde-devops-hola-mundo:1.0`

- Konténer leállítása:
    `sudo docker stop gde-hola-web`

- Konténer újra elindítása:
   `sudo docker start gde-hola-web`

