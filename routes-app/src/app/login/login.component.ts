import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";

export class UsuarioModel {
  email:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private usuario:UsuarioModel = new UsuarioModel();

  constructor(private auth:AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.logar(this.usuario);
  }

}
