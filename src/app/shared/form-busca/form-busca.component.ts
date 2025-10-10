import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CardComponent } from "../card/card.component";
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    MatButtonToggleModule, 
    CardComponent, 
    MatIconModule, 
    MatChipsModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog, public formBuscaService: FormBuscaService){}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
