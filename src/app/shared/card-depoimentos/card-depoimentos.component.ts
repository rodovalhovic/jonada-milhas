import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Depoimento } from '../../core/types/types';
import { DepoimentosService } from '../../core/services/depoimentos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-depoimentos',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.scss'
})
export class CardDepoimentosComponent implements OnInit {
  depoimentos: Depoimento[] = [];

  constructor(private servicoDepoimentos: DepoimentosService){}

  ngOnInit(): void {
    this.servicoDepoimentos.listarDepoimentos().subscribe(dados => this.depoimentos = dados);
  }
}
