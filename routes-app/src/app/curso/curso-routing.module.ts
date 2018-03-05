import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CursoComponent} from "./curso.component";
import {CursoFormComponent} from "./curso-form/curso-form.component";
import {CursoGuard} from "./curso.guard";

const routes:Routes = [
  {
    path: '', component: CursoComponent, canActivateChild: [CursoGuard],
    children: [
      {path: 'novo', component: CursoFormComponent},
      {path: 'editar/:id', component: CursoFormComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {
}
