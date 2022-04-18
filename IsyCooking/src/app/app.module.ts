import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RezepteComponent } from './rezepte/rezepte.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { AnsichtRezepteComponent } from './ansicht-rezepte/ansicht-rezepte.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    RezepteComponent,
    HinzufuegenComponent,
    StartseiteComponent,
    AnsichtRezepteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
