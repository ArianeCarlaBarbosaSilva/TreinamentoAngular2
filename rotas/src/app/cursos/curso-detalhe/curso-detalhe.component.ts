import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private cursosService: CursosService) { 
      console.log('chamou curso-detalhe');
  }

  ngOnInit(): void {
    //vamos nos inscrever nas mudanças do parâmetro
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['cursos/naoEncontrado']);//volta para home
        }
      }
    );
  }

  //quando o componente for destruído, cancelamos a inscricao
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}