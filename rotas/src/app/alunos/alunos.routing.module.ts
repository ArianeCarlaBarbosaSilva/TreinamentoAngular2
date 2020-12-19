import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

//Com rotas filhas, temos os dois componentes rtenderizados ao mesmo tempo na tela
//o componente pai alunos e um dos filhos selecionados
const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent, children: [ 
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }