import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type TreatmentInfo = {
  title: string,
  content: string
  image: string
}

@Component({
  selector: 'app-treatment-info',
  standalone: false,
  templateUrl: './treatment-info.component.html',
  styleUrl: './treatment-info.component.scss',
})
export class TreatmentInfoComponent {
  treatments: TreatmentInfo[] = [
    {
      title: 'Stotteren',
      content: `<p>Hello</p>`,
      image: 'assets/images/IMG_1576_1080.jpg'
    },
    {
      title: 'Preverbale logopedie',
      content: `<p>Hello</p>`,
      image: 'assets/images/IMG_1617_1080.jpg'
    },
    {
      title: 'Spraakontwikkeling en afwijkende mondgewoonten',
      content: `<p>Hello</p>`,
      image: 'assets/images/IMG_1436_1080.jpg'
    },
    {
      title: 'Taalontwikkeling en taalstoornis',
      content: `<p>Hello</p>`,
      image: 'assets/images/IMG_1600_1080.jpg'
    },
    {
      title: 'Leerstoornissen en leerproblemen',
      content: `<p>Hello</p>`,
      image: 'assets/images/IMG_1448_1080.jpg'
    },
    {
      title: 'IMPACT-training',
      content: `<p>Hello</p>`,
      image: 'assets/images/IMG_1470_1080.jpg'
    }
  ];

  treatment!: TreatmentInfo;

  constructor(private route: ActivatedRoute, private router: Router){
    let id = -1;
    route.paramMap.subscribe(paramMap => {
      let paramId = paramMap.get('id');
      id = parseInt(paramId == null ? '-1' : paramId);
      if(isNaN(id) || id < 1 || id > 6)
      {
        this.router.navigate(['behandelingen']);
      }
    });
    this.treatment = this.treatments[id - 1];
  }
}
