import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
    //metodo que faz a verificação se pode desativar a rota ou nao
    canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        console.log('guarda de desativação');
        return true;
    }
} 