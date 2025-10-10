import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UnidadeFederativa } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) { 
  }

  listar() : Observable<UnidadeFederativa[]> {
    //se não tiver nada ele chama o método requestEstados
    if (!this.cache$) {
      //o metodo requestEstados é chamado uma única vez e o resultado é armazenado em cache$
      // o método requestEstados faz uma requisição GET para a rota '/estados' da API
      // resposta dessa requisição é armazenada na cache$ com o uso do operador shareReplay
      this.cache$ = this.requestEstados().pipe(
        // shareReplay armazena o resultado da requisição para que futuras chamadas retornem o valor em cache, evitando múltiplas requisições desnecessárias.
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}estados`);
  }
}