import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //CursosModule,
    //AlunosModule retirado porque qdo fazemos lazyloading o modulo não pode ser chamado
    // de nenhum outro lugar da aplicação
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
