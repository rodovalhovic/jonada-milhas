import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { SeletorPassageiroComponent } from "../seletor-passageiro/seletor-passageiro.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule, SeletorPassageiroComponent, SeletorPassageiroComponent, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = 'incrementar';

  constructor(public formBuscaService: FormBuscaService) {}
}
