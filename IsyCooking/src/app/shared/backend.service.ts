import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rezepte } from './rezepte';
import { Zutaten } from './zutaten';
import { BestehtAus } from './bestehtAus';

@Injectable({
  providedIn: 'root'
})

export class BackendService 
{
 RezepteURL = 'http://localhost:3000/rezepte/rezepte';
 ZutatenURL = 'http://localhost:3000/zutaten/zutaten';
 BestehtAusURL = 'http://localhost:3000/bestehtAus/bestehtAus';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Rezepte[]>
  {
    return this.http.get<Rezepte[]>(this.RezepteURL);
  }

  getOne(id: string): Observable<Rezepte> 
  {
    return this.http.get<Rezepte>(this.RezepteURL + '/' + id);
  }

  getZutaten(): Observable<Zutaten[]>
  {
    return this.http.get<Zutaten[]>(this.ZutatenURL);
  }

  getVerknüpfungen(): Observable<BestehtAus[]>
  {
    return this.http.get<BestehtAus[]>(this.BestehtAusURL);
  }

  postRezepte(data: Rezepte): Observable<Rezepte> 
  {
    return this.http.post<Rezepte>(this.RezepteURL, data);
  }

  postZutaten(data: Zutaten): Observable<Zutaten> 
  {
    return this.http.post<Zutaten>(this.ZutatenURL, data);
  }

  postVerknüpfungen(data: BestehtAus): Observable<BestehtAus> 
  {
    return this.http.post<BestehtAus>(this.BestehtAusURL, data);
  }

  deleteRezept(id: string): Observable<any>
  {
    return this.http.delete<any>(this.RezepteURL + '/' + id, {observe: 'response'});
  }  
  deleteVerknüpfung(id: string): Observable<any>
  {
    return this.http.delete<any>(this.BestehtAusURL + '/' + id, {observe: 'response'});
  }

}

