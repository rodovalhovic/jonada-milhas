import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatIconModule, MatAutocompleteModule, AsyncPipe ],
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss'
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefix: string = '';

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions = [];

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe(dados => {
      this.unidadesFederativas = dados;
      console.log(this.unidadesFederativas);
    });
  }
}
