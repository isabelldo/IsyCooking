import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Rezepte } from '../shared/rezepte';
import { Zutaten } from '../shared/zutaten';
import { BestehtAus } from '../shared/bestehtAus';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ID-ansicht-rezepte',
  templateUrl: './ansicht-rezepte.component.html',
  styleUrls: ['./ansicht-rezepte.component.css']
})
export class AnsichtRezepteComponent implements OnInit {
  id: string = '';
  rezept: Rezepte;
  zutat: Zutaten[];
  bestehtAus: BestehtAus[];
  alleZutaten: Zutaten[];
  alleMengenangaben: BestehtAus[];
  id_BestehtAus: string = '';

  constructor(
    private route: ActivatedRoute, 
    private bs: BackendService,
    private router: Router,
    private location: Location,
  ) { 
    this.rezept = {_id:'', name:'', Titelbild:'', Kategorie:'', Anzahl_Portionen:'', Vorbereitungszeit:'', Gesamtzeit:'', Anleitung:''};
    this.zutat = [{_id:'', Zutat:''}];
    this.bestehtAus = [{_id:'', IdRezept:'', IdZutat:'', Menge:'', Mengeneinheit:''}];
    this.alleZutaten = [{_id:'', Zutat:''}];
    this.alleMengenangaben= [{_id:'', IdRezept:'', IdZutat:'', Menge:'', Mengeneinheit:''}];
  }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
    this.filterBestehtAus(this.id);
    this.zugehörigeZutaten(this.alleMengenangaben);
  }

  readOne(id: string): void {
    this.bs.getOne(id).subscribe(
    (response: Rezepte) => 
    {
      this.rezept = response;
      return this.rezept;
    },
      error => console.log(error)
    );
}

filterBestehtAus(id: string): void 
{
  this.bs.getVerknüpfungen().subscribe(
    (response: BestehtAus[]) => 
    {
      let index = 0;
      this.bestehtAus = response;
    for (let i = 0; i < this.bestehtAus.length; i++)
    {
      if(this.bestehtAus[i].IdRezept == id)
      {
        this.alleMengenangaben[index] = this.bestehtAus[i];
        index++;
      }
    }
    console.log(this.alleMengenangaben);
    return this.alleMengenangaben;
    },
    error => console.log(error)
    );
}

zugehörigeZutaten(Menge: BestehtAus[]): void 
{
  this.bs.getZutaten().subscribe(
    (response: Zutaten[]) => 
    {
      this.zutat = response;
      let index = 0;
    for (let i = 0; i < this.zutat.length; i++)
    {
      if(this.zutat[i]._id == Menge[i].IdZutat)
      {
        this.alleZutaten[index] = this.zutat[i];
        index++;
      }
    }
    console.log(this.alleZutaten);
    return this.alleZutaten;
    },
    error => console.log(error)
    );
}

delete(id: string): void 
{
  this.bs.deleteRezept(id).subscribe();
  this.router.navigateByUrl('/rezepte');
  this.bs.deleteVerknüpfung(id).subscribe();
  this.router.navigateByUrl('/rezepte');
}
}
