import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AlunoComponent} from "./aluno.component";
import {AlunoFormComponent} from "./aluno-form/aluno-form.component";
import {AlunoTableComponent} from "./aluno-table/aluno-table.component";
import {AlunoRoutingModule} from "./aluno-routing.module";
import {AlunoGuard} from "./aluno.guard";
import {AuthGuard} from "../auth.guard";

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  providers: [AuthGuard, AlunoGuard],
  declarations: [AlunoComponent, AlunoFormComponent, AlunoTableComponent]
})
export class AlunoModule {
}
