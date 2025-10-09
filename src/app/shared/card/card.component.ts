import { Component, Input, input } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';

}
