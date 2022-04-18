# IsyCooking
Rezeptesammlung: ganz einfaches Hinzufügen, Löschen und Anschauen von Rezepten. 
***

## Inhalt im Überblick
1. [Technologien](#Technologien)
2. [Installation](#Intallation)
3. [Überblick über das Projekt](#Überblick-über-das-Projekt)
4. [Ausblick](#Ausblick)
***

## Technologien
* [Angular](https://angular.io)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://docs.mongodb.com/)
***

## Installation
```
$ git clone IsyCooking
$ cd ../path/to/the/file
$ npm install
$ npm start

$ npm backend 
$ npm i
$ npm run watch
```
***

## Überblick über das Projekt
Die Website ist in 4 Seiten unterteilt. 3 davon (Startseite, Rezepte, Rezepte Hinzufügen)
können von allen Seiten durch die Navigationsleiste am Top der Website erreicht werden. Die 4. Seite ist nur erreichbar,
indem auf der Rezepte-Seite auf ein Rezept geklickt wird (endweder Name oder Bild). Danach wird man auf die Detail-Ansicht-Seite
(Ansicht-Rezept) weitergeleitet.

### Startseite 
![Startseite](../IsyCooking/src/assets/ReadMeImages/Startseite)

### Rezepte 
![Rezepteübersicht](../IsyCooking/src/assets/ReadMeImages/RezepteÜbersicht)
Auf der Seite "Rezepte" können alle vorhandenen Rezepte mit Vorschaubild und Name eingesehen werden.
Die Rezepte werden dort automatisch den verschiedenen Kategorien (Tapas, Hauptspeisen, Desserts) hinzugefügt 
und befinden sich jeweils in einer Slide-Gallery. 
![RezepteSlideelemente](./src/assets/ReadMeImages/SlideBoxenÜbersicht)

### Anzeige-Rezept
![RezepteEinzelansicht](../IsyCooking/src/assets/ReadMeImages/RezepteEinzelansicht)
Die seite "Anzeige-Rezept" kann nur durch die Seite "Rezepte" erreicht werden, um ein gesamtes Rezept
einzuschauen. Dort sind alle Details zum Rezept aufgelistet. Mithilfe des Mülleinmer-Icons kann das geöffnete
Rezept gelöscht werden.
![RezepteEinzelübersicht](../IsyCooking/src/assets/ReadMeImages/AnleitungUndZutaten)

### Rezepte-Hinzufügen 
![RezeptHinzufügen](../IsyCooking/src/assets/ReadMeImages/RezeptHinzufügen)
![RezeptHinzufügen](../IsyCooking/src/assets/ReadMeImages/RezeptHinzufügen2)
Auf der letzten Seite können Rezepte hinzugefügt werden. 
***

## Ausblick
1. Seite "Rezept-Hinzufügen" Zutaten hinzufügen können und in der Datenbank automaisch 
abspeichern lassen.
2. Formatierung der Tabelle auf der Seite "Ansicht-Rezept", damit Zutat, Menge und Mengeneinheit
immer jeweils in einer Reihe stehen
3. Dateiupload auf der Seite "Rezepte-Hinzufügen", mit Speicherung in der Datenbank.




