import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from "@angular/router";
import {AuthService} from "../login/auth.service";

@Injectable()
export class AlunoGuard implements CanActivateChild {

  constructor(private authService:AuthService,
              private router:Router) {
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {

    console.log('AlunoGuard', route, state, this.authService.isAuthenticated());
    if (state.url.includes('novo')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
