import { Component } from '@angular/core';
import { Place } from 'src/app/Models/place/place.module';

@Component({
  selector: 'app-our-recomendation',
  templateUrl: './our-recomendation.component.html',
  styleUrls: ['./our-recomendation.component.scss']
})
export class OurRecomendationComponent {

  places: Place[] = [
    {
      Image: '../../assets/img/norway.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Norway',
      Description: 'Beautiful landscapes'
    },
    {
      Image: '../../assets/img/new_york.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'New York',
      Description: 'Concrete Jungle'
    },
    {
      Image: '../../assets/img/chicago.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Chicago',
      Description: 'Beautiful buildings'
    },
    {
      Image: '../../assets/img/seattle.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'Seattle',
      Description: 'A city to enjoy to the fullest'
    },
    {
      Image: '../../assets/img/switzerland.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Switzerland',
      Description: 'The best hot chocolate'
    },
    {
      Image: '../../assets/img/sydney.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'Sydney',
      Description: 'Get to know the famous Opera'
    },
    {
      Image: '../../assets/img/miami.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Miami',
      Description: 'Beautiful beaches'
    },
    {
      Image: '../../assets/img/iceland.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'iceland',
      Description: 'For landscape lovers'
    },

  ];
}
