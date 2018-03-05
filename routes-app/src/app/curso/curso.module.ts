import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CursoComponent} from "./curso.component";
import {CursoFormComponent} from "./curso-form/curso-form.component";
import {CursoTableComponent} from "./curso-table/curso-table.component";
import {CursoRoutingModule} from "./curso-routing.module";
import {CursoGuard} from "./curso.guard";
import {AuthGuard} from "../auth.guard";

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule
  ],
  providers: [AuthGuard, CursoGuard],
  declarations: [CursoComponent, CursoFormComponent, CursoTableComponent]
})
export class CursoModule {
}
