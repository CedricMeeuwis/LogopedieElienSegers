import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'Segers Logopedie';

  constructor(private route: Router, private meta: Meta){
    this.meta.addTags([
      { name: 'description', content: 'Logopedie Elien Segers biedt logopedische steun aan voor stotteren, spraakontwikkeling, taalontwikkeling en leerproblemen, met behandelingen zowel thuis als via hippotherapie.' },
      { name: 'author', content: 'Elien Segers' },
      { name: 'keywords', content: 'Logopedie, Elien, Segers, Hippotherapie, Arendonk' }
    ]);
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
