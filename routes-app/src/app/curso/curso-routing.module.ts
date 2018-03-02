import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CursoComponent} from "./curso.component";
import {CursoFormComponent} from "./curso-form/curso-form.component";

const routes:Routes = [
  {path: 'curso', component: CursoComponent},
  {path: 'curso/novo', component: CursoFormComponent},
  {path: 'curso/editar/:id', component: CursoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {
}
