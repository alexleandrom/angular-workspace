import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AlunoComponent} from "./aluno.component";
import {AlunoFormComponent} from "./aluno-form/aluno-form.component";
import {AlunoTableComponent} from "./aluno-table/aluno-table.component";
import {AlunoRoutingModule} from "./aluno-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  declarations: [AlunoComponent, AlunoFormComponent, AlunoTableComponent]
})
export class AlunoModule {
}
