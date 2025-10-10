import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent implements OnInit {
  promocoes: Promocao[] = [];

  constructor(private servicoPromocao: PromocaoService) { }

  ngOnInit(){
    this.servicoPromocao.listar().subscribe(dados => this.promocoes = dados);
  }
}
