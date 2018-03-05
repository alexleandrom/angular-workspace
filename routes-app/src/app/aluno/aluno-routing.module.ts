import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AlunoComponent} from "./aluno.component";
import {AlunoFormComponent} from "./aluno-form/aluno-form.component";
import {AlunoGuard} from "./aluno.guard";

const routes:Routes = [
  {
    path: '', component: AlunoComponent, canActivateChild: [AlunoGuard],
    children: [
      {path: 'novo', component: AlunoFormComponent},
      {path: 'editar/:id', component: AlunoFormComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule {
}
