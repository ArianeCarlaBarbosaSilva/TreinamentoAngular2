import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  onMudouValor(evento){
    //console.log(evento.novoValor);
  }
  
  constructor() { }

  ngOnInit(): void {  }

  botaoClicado(){
    alert('Botão foi clicado!');
  }
  //Recebe um evento como parâmetro
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  //Recebe o valor string do input como parâmetro
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  //Trata eventos do mouse
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
