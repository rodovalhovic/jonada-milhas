import { Component, forwardRef, Input } from '@angular/core';
import { BotaoControleComponent } from "../botao-controle/botao-controle.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  standalone: true,
  imports: [BotaoControleComponent, ReactiveFormsModule],
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SeletorPassageiroComponent), //pega a referencia depois
    multi: true //pode ser provido em multiplos lugares ao mesmo tempo
  }]
})
export class SeletorPassageiroComponent implements ControlValueAccessor{
  //A interface ControlValueAccessor é responsável por estabelecer a comunicação entre o componente de contador de passageiros e 
  // o formulário, permitindo a integração e interação corretas entre eles.

  //mais informaçõs sobre isso https://cursos.alura.com.br/course/angular-componentizacao-formularios-interacao-apis/task/135156?b2cUser=true

  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  value: number = 0;
  onChange = (val: number) => {}
  onTouch = () => {}

  //armaneza e escreve o valor do input
  writeValue(val: any): void {
    this.value = val;
  }

  //faz o vinculo com a alteração do valor e o formulario dinamico
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn
  }
  
  incrementar(){
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar(){
    if(this.value > 0){
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
