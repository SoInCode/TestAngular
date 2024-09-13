import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Config } from '../params/config';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {
  private http: HttpClient = inject(HttpClient);

  public getMeteo(ville:string="paris"): Observable<any>{
    return this.http.get(Config.urlMeteo + ville).pipe(map(
      (data: any) =>{
        console.log(data);
        return data;
      }
    ))
  }
}
