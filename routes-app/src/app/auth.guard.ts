import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route} from "@angular/router";
import {AuthService} from "./login/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService,
              private router:Router) {
  }

  private verificarAcesso():boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    return this.verificarAcesso();
  }

  canLoad(route:Route):boolean {
    return this.verificarAcesso();
  }

}
