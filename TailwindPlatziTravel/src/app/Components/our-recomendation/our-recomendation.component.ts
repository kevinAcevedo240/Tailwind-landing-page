import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Models/place/place.module';
import { DarkModeService } from 'src/app/Services/dark-mode.service';

@Component({
  selector: 'app-our-recomendation',
  templateUrl: './our-recomendation.component.html',
  styleUrls: ['./our-recomendation.component.scss']
})
export class OurRecomendationComponent implements OnInit {

  places: Place[] = [
    {
      Image: '../../assets/img/norway.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Norway',
      Description: 'Beautiful landscapes',
      DarkBackground: 'darkPrimary'
    },
    {
      Image: '../../assets/img/new_york.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'New York',
      Description: 'Concrete Jungle',
      DarkBackground: 'darkSecondary'
    },
    {
      Image: '../../assets/img/chicago.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Chicago',
      Description: 'Beautiful buildings',
      DarkBackground: 'darkPrimary'
    },
    {
      Image: '../../assets/img/seattle.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'Seattle',
      Description: 'A city to enjoy to the fullest',
      DarkBackground: 'darkSecondary'
    },
    {
      Image: '../../assets/img/switzerland.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Switzerland',
      Description: 'The best hot chocolate',
      DarkBackground: 'darkPrimary'
    },
    {
      Image: '../../assets/img/sydney.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'Sydney',
      Description: 'Get to know the famous Opera',
      DarkBackground: 'darkSecondary'
    },
    {
      Image: '../../assets/img/miami.jpg',
      Background: 'secondary',
      TextColor: 'white',
      Name: 'Miami',
      Description: 'Beautiful beaches',
      DarkBackground: 'darkPrimary'
    },
    {
      Image: '../../assets/img/iceland.jpg',
      Background: 'white',
      TextColor: 'terciary',
      Name: 'iceland',
      Description: 'For landscape lovers',
      DarkBackground: 'darkSecondary'
    }

  ];

  isDarkMode = false;

  constructor(
    private _darkModeService: DarkModeService
  ){}

  ngOnInit(): void {
    this._darkModeService.isDarkMode$.subscribe(darkMode =>{
      this.isDarkMode = darkMode;

    })
  }
}
