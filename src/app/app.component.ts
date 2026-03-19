import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'Segers Logopedie';

  constructor(private route: Router) {
  }

  isRouteActive(routeText: string)
  {
    const routeSplit = this.route.url.split('#');
    let isActive = false;
    routeSplit.forEach(x => {
      if(x === routeText){
        isActive = true;
      }
    })
    return isActive;
  }
  goTo(link:string)
  {
    this.route.navigate([link]);
  }
}
