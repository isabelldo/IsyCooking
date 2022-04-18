import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Rezepte } from '../shared/rezepte';
import { Zutaten } from '../shared/zutaten';
import { BestehtAus } from '../shared/bestehtAus';
import { Location } from '@angular/common';

@Component({
  selector: 'ID-hinzufuegen',
  templateUrl: './hinzufuegen.component.html',
  styleUrls: ['./hinzufuegen.component.css'],
})

export class HinzufuegenComponent implements OnInit {
  form!: FormGroup;
  @Input() rezept!: Rezepte;
  @Input() zutaten!: Zutaten;
  @Input() bestehtAus!: BestehtAus;
  IdRezept: string = '';
  IdZutat: string = '';
  alleZutaten!: Zutaten[];


  constructor(
    private fb: FormBuilder,
    private bs: BackendService,
    private router: Router,
    private location: Location
    ) 
    {
      this.form = this.fb.group(
        {
          nameControl: ['', Validators.required],
          TitelbildControl: [''],
          KategorieControl: ['', Validators.required],
          AnzahlPortionenControl: ['', Validators.required],
          VorbereitungszeitControl: ['', Validators.required],
          GesamtzeitControl: ['', Validators.required],
          AnleitungControl: ['', Validators.required],
          ZutatControl: ['', Validators.required],
          MengeControl: ['', Validators.required],
          MengeneinheitControl: ['', Validators.required]
        });
        this.rezept = {_id:'', name:'', Titelbild:'', Kategorie:'', Anzahl_Portionen:'', Vorbereitungszeit:'', Gesamtzeit:'', Anleitung:''};
        this.zutaten = {_id:'', Zutat:''};
        this.bestehtAus = {_id:'', IdRezept:'', IdZutat:'', Menge:'', Mengeneinheit:''};
     }

  ngOnInit(): void 
  {
  
  }

  postRezept(): void 
  {
    const values = this.form.value;
    this.rezept.name = values.nameControl;
    this.rezept.Titelbild = values.TitelbildControl;
    this.rezept.Kategorie = values.KategorieControl;
    this.rezept.Anzahl_Portionen = values.AnzahlPortionenControl;
    this.rezept.Vorbereitungszeit = values.VorbereitungszeitControl;
    this.rezept.Gesamtzeit = values.GesamtzeitControl;
    this.rezept.Anleitung = values.AnleitungControl;

    this.bs.postRezepte(this.rezept)
      .subscribe(
        response => 
        {
          this.IdRezept = this.rezept._id;
        },
        error => 
        {
          console.log(error);
        }
      );
    this.postZutat();
    this.router.navigateByUrl('/rezepte');
  }

  postZutat(): void 
  {
    const values = this.form.value;
    this.zutaten.Zutat = values.ZutatControl;
    this.bs.getZutaten().subscribe(
      (response: Zutaten[]) => 
      {
        this.alleZutaten = response;
        for(let i = 0; i < this.alleZutaten.length; i++)
        {
            if(this.alleZutaten[i].Zutat == this.zutaten.Zutat)
            {
              this.IdZutat = this.alleZutaten[i]._id;
              this.postVerknüpfung(this.IdZutat, this.IdRezept);
            }
            else 
            {
              this.bs.postZutaten(this.zutaten).subscribe(
              response => 
              {
              console.log(response);
              console.log(response._id);
              this.IdZutat = this.zutaten._id;
               },
              error => 
              {
              console.log(error);
               }
             );
          }
        } 
      }
    )
  }

  postVerknüpfung(IdZutat: string, IdRezept: string): void 
  {
    const values = this.form.value;
    this.bestehtAus.IdRezept = IdRezept;
    this.bestehtAus.IdZutat = IdZutat;
    this.bestehtAus.Menge = values.MengeControl;
    this.bestehtAus.Mengeneinheit = values.MengeneinheitControl;
    
    this.bs.postVerknüpfungen(this.bestehtAus)
      .subscribe(
        response => 
        {
          console.log(response);
          console.log(response._id);
        },
        error => 
        {
          console.log(error);
        }
      );
      this.form.reset();
    this.router.navigateByUrl('/rezepte');
  }

  cancel(): void 
  {
  this.location.back();
  }

  AddRow(): void 
  {
    const values = this.form.value;
    let Zutat = values.ZutatControl;
    let Menge = values.MengeControl;
    let Mengeneinheit = values.MengeneinheitControl;

    let inputOk = true;
                if (Zutat == '' && Menge == '' && Mengeneinheit == '') 
                {
                  inputOk = false;
                }
                else{
                  inputOk = true;
                }

            if (inputOk) 
            {
                let newTr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                td1.innerHTML = Zutat;
                td2.innerHTML = Menge;
                td3.innerHTML = Mengeneinheit;

                newTr.appendChild(td1);
                newTr.appendChild(td2);
                newTr.appendChild(td3);

                let tbody = document.getElementById('table_body');
                let inputTr = document.getElementById('input_tr');

                td1.setAttribute("formControlName", "ZutatControl");
                td2.setAttribute("formControlName", "MengeControl");
                td3.setAttribute("formControlName", "MengeneinheitControl");
                
                tbody?.insertBefore(newTr, inputTr);     // vor die Input-Zeile einfuegen

                values.ZutatControl = '';
                values.MengeControl = '';
                values.MengeneinheitControl = '';
          }
        }

        deleteRow(): void 
        {
        } 
}
