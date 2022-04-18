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
![Startseite](https://user-images.githubusercontent.com/82314893/163843306-a98cb49f-2634-48d8-841b-6ea76b8d1a0d.png)

### Rezepte 
![Rezepteüberblick](https://user-images.githubusercontent.com/82314893/163843395-8d4c3bfe-a171-4d95-a345-b1c3dbb87d60.png)
Auf der Seite "Rezepte" können alle vorhandenen Rezepte mit Vorschaubild und Name eingesehen werden.
Die Rezepte werden dort automatisch den verschiedenen Kategorien (Tapas, Hauptspeisen, Desserts) hinzugefügt 
und befinden sich jeweils in einer Slide-Gallery. 
![SlideBoxenÜbersicht](https://user-images.githubusercontent.com/82314893/163843434-e2a99a52-7b47-4083-9088-c82569a475db.png)


### Anzeige-Rezept
![RezeptEinzelansicht](https://user-images.githubusercontent.com/82314893/163843477-cac1bf1c-40e9-4c6a-ab76-cdc50231db93.png)
Die seite "Anzeige-Rezept" kann nur durch die Seite "Rezepte" erreicht werden, um ein gesamtes Rezept
einzuschauen. Dort sind alle Details zum Rezept aufgelistet. Mithilfe des Mülleinmer-Icons kann das geöffnete
Rezept gelöscht werden.
![AnleitungUndZutaten](https://user-images.githubusercontent.com/82314893/163843554-d4bebdc1-7fb5-4065-81b6-9bc75bb7933a.png)

### Rezepte-Hinzufügen 
![RezeptHinzufügen](https://user-images.githubusercontent.com/82314893/163843584-5c7efc0f-bd9d-444b-a06e-ee74a981503d.png)
![RezeptHinzufügen2](https://user-images.githubusercontent.com/82314893/163843617-967d6115-7a54-4df1-8916-cce24587053c.png)
Auf der letzten Seite können Rezepte hinzugefügt werden. 
***

## Ausblick
1. Seite "Rezept-Hinzufügen" Zutaten hinzufügen können und in der Datenbank automaisch 
abspeichern lassen.
2. Formatierung der Tabelle auf der Seite "Ansicht-Rezept", damit Zutat, Menge und Mengeneinheit
immer jeweils in einer Reihe stehen
3. Dateiupload auf der Seite "Rezepte-Hinzufügen", mit Speicherung in der Datenbank.




