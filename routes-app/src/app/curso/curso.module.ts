import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoTableComponent } from './curso-table/curso-table.component';
import {CursoRoutingModule} from "./curso-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule
  ],
  declarations: [CursoComponent, CursoFormComponent, CursoTableComponent]
})
export class CursoModule { }
