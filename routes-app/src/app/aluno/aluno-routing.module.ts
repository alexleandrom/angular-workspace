import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AlunoComponent} from "./aluno.component";
import {AlunoFormComponent} from "./aluno-form/aluno-form.component";

const routes:Routes = [
  {path: 'aluno', component: AlunoComponent},
  {path: 'aluno/novo', component: AlunoFormComponent},
  {path: 'aluno/editar/:id', component: AlunoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
