import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, ContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
