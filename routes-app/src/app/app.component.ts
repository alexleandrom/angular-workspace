import {Component} from "@angular/core";
import {AuthService} from "./login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private authenticated:boolean = false;
  title = 'app';

  constructor(private authService:AuthService) {
    this.authService.authenticatedEventEmitter.subscribe(
      data => {this.authenticated = data}
    )
  }
}
