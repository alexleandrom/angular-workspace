import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CursosComponent} from "./cursos/cursos.component";
import {ModuleWithProviders} from "@angular/core";
import {CursosDetalheComponent} from "./cursos/cursos-detalhe/cursos-detalhe.component";
import {CursoNaoEncontradoComponent} from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:id', component: CursosDetalheComponent},
  {path: 'nao-encontrado', component: CursoNaoEncontradoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
