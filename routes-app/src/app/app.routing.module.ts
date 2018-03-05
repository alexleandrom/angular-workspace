import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {CursoGuard} from "./curso/curso.guard";
import {AlunoGuard} from "./aluno/aluno.guard";

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'curso',
    loadChildren: 'app/curso/curso.module#CursoModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'aluno',
    loadChildren: 'app/aluno/aluno.module#AlunoModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
