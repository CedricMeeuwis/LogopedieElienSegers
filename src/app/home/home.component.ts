import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  competences: string[] = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
    "Quis autem vel eum iure reprehenderit qui",
    "At vero eos et accusamus et iusto odio dignissimos ducimus",
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo"
  ];
}
