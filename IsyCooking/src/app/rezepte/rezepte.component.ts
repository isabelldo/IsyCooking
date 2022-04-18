import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Rezepte } from '../shared/rezepte';

@Component({
  selector: 'ID-rezepte',
  templateUrl: './rezepte.component.html',
  styleUrls: ['./rezepte.component.css']
})
export class RezepteComponent implements OnInit {
  id: String='';
  rezepte: Rezepte[];
  
  tapas: Rezepte[];
  hauptgerichte!: Rezepte[];
  desserts: Rezepte[];

  constructor(
    private bs: BackendService
    ) { 
      this.rezepte = [{_id:'', name:'', Titelbild:'', Kategorie:'', Anzahl_Portionen:'', Vorbereitungszeit:'', Gesamtzeit:'', Anleitung:''}];
      this.tapas = [{_id:'', name:'', Titelbild:'', Kategorie:'', Anzahl_Portionen:'', Vorbereitungszeit:'', Gesamtzeit:'', Anleitung:''}];
      this.hauptgerichte = [{_id:'', name:'', Titelbild:'', Kategorie:'', Anzahl_Portionen:'', Vorbereitungszeit:'', Gesamtzeit:'', Anleitung:''}];
      this.desserts = [{_id:'', name:'', Titelbild:'', Kategorie:'', Anzahl_Portionen:'', Vorbereitungszeit:'', Gesamtzeit:'', Anleitung:''}];
    }

  ngOnInit(): void {
    this.readRezepte();
    this.readTapas();
    this.readHauptgerichte();
    this.readDesserts(); 
    }

    readRezepte(): void 
    {
      this.bs.getAll().subscribe(
        (
          response: Rezepte[]) => 
          {
          this.rezepte = response;

          return this.rezepte; 
          },
      error => console.log(error)
        );
     }
readTapas(): void {
    this.bs.getAll().subscribe(
      (
        response: Rezepte[]) => {
        this.rezepte = response;
        let index = 0;
        
        for(let i = 0; i < this.rezepte.length; i++)
        {
          if(this.rezepte[i].Kategorie.includes("Tapas"))
          {
            this.tapas[index] = this.rezepte[i];
            index++;
          }
        }           
        return this.tapas;  
    },
    error => console.log(error)
    );
  }

  readHauptgerichte(): void {
    this.bs.getAll().subscribe(
      (
        response: Rezepte[]) => {
          this.rezepte = response;
        let index = 0;
        for(let i = 0; i < this.rezepte.length; i++)
        {
          if(this.rezepte[i].Kategorie.includes("Hauptgericht"))
          {
            this.hauptgerichte[index] = this.rezepte[i];
            index++;
          }
        }           
        return this.hauptgerichte;  
    },
    error => console.log(error)
    );
  }
  

  readDesserts(): void {
    this.bs.getAll().subscribe(
      (
        response: Rezepte[]) => {
        this.rezepte = response;
        let index = 0;
        for(let i = 0; i < this.rezepte.length; i++)
        {
          if(this.rezepte[i]?.Kategorie.includes("Dessert"))
          {
            this.desserts[index] = this.rezepte[i];
            index++;
          }
        }         
    },
    error => console.log(error)
    );
  }
}