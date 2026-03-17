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
    console.log(route.url);
  }

  isRouteActive(routeText: string)
  {
    return this.route.url === routeText;
  }
  goTo(link:string)
  {
    this.route.navigate([link]);
  }
}
