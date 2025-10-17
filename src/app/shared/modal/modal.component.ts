import { Component, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BotaoControleComponent } from "../botao-controle/botao-controle.component";
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule, BotaoControleComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = 'incrementar';

  constructor(public formBuscaService: FormBuscaService) {}
}
