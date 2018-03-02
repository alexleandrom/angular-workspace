import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app.routing.module";
import {AlunoModule} from "./aluno/aluno.module";
import {CursoModule} from "./curso/curso.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    AlunoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
