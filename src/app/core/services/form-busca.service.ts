import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private dialog: MatDialog) { 
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      dataIda: new FormControl(null),
      dataVolta: new FormControl(null),
      tipo: new FormControl("Executiva"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
    })
  }

  getDescricaoPassageiros(): string{
    let descricao = ''
    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }
  
    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }
  
    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }
    return descricao

    // Interpolação de strings: Em JavaScript, podemos usar a sintaxe de interpolação de string (template literals) para inserir 
    // variáveis diretamente dentro das strings. Isso é feito usando a sintaxe ${}. No nosso código, utilizamos essa técnica para 
    // inserir a quantidade de adultos, crianças e bebês diretamente nas strings de descrição.

    // Operador ternário: O operador ternário é uma forma simplificada de escrever uma estrutura de controle if-else. 
    // A expressão antes do ? é a condição que está sendo verificada. Se essa condição for verdadeira, o código antes dos : é 
    // executado. Caso contrário, o código após os : é executado. No nosso código, usamos o operador ternário para decidir se devemos
    // ou não adicionar o 's' no final dos nomes dos passageiros e para inserir uma vírgula antes dos nomes das crianças e bebês, se 
    // já tivermos uma descrição para os adultos.

    // O operador ? (optional chaining): Este operador é usado para ler o valor de propriedades aninhadas dentro de um objeto sem ter
    //  que verificar explicitamente se cada nível intermediário é null ou undefined. Em outras palavras, se tentarmos ler uma 
    //  propriedade de undefined ou null, receberíamos um erro. Mas com o operador ?, o JavaScript retorna undefined em vez de lançar
    //   um erro. No nosso caso, utilizamos ? para ler os valores dos campos 'adultos', 'criancas' e 'bebes' de formBusca, sem ter
    //    que verificar se formBusca ou o resultado de formBusca.get('campo') são null ou undefined.
  }

  obterControle(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string){
    if(evento.selected){
      this.formBusca.patchValue({
        tipo,
      })
      console.log('Tipo de passagem alterado para: ', tipo)
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
        width: '50%'
    })
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;
  
    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }
}