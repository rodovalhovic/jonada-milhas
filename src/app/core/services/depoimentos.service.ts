import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depoimento } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {

  private urlApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listarDepoimentos():Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.urlApi}depoimentos`);
  }
}
