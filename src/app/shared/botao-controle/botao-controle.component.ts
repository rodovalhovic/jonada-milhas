import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao-controle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao-controle.component.html',
  styleUrl: './botao-controle.component.scss'
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
}
