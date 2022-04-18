import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnsichtRezepteComponent } from './ansicht-rezepte/ansicht-rezepte.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [

  {
    path: "",
    component: StartseiteComponent,
    pathMatch: 'full'
  },
  {
    path: "rezepte",
    component: RezepteComponent
  },
  {
    path: "rezepteHinzufügen",
    component: HinzufuegenComponent
  },
  {
    path: "ansicht-rezepte/:id", 
    component: AnsichtRezepteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
