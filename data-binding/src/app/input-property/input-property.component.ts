import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //A variavel é vista como nome interna e externamente
  //@Input() nome: string = ''; 
  //A variavel é vista internamente como nomeCurso
  //Mas externamente é vista como nome
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
