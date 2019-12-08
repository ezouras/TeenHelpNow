import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teenHelpNow';

  prepareRoute(outlet: RouterOutlet){
    //pass in dynamic data

    return outlet && outlet.activatedRouteData; //&& outlet.activatedRouteData["animation"];

}
}
