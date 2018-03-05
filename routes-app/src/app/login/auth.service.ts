import {Injectable, EventEmitter} from "@angular/core";
import {UsuarioModel} from "./login.component";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  public authenticatedEventEmitter = new EventEmitter<boolean>();
  private authenticated:boolean = false;

  constructor(private route:Router) {
  }

  logar(usuario:UsuarioModel) {
    if (usuario.email == 'teste@teste.com' && usuario.password == '123456') {
      this.authenticatedEventEmitter.emit(true);
      this.authenticated = true;
      this.route.navigate(['/'])
    } else {
      this.authenticatedEventEmitter.emit(false);
      this.authenticated = false;
      this.route.navigate(['/'])
    }
  }

  isAuthenticated():boolean {
    return this.authenticated;
  }

}
