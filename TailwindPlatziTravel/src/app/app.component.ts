import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './Services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tailwind Platzi Travel';
  isDarkMode = false;

  constructor(
    private _darkModeService: DarkModeService
  ){}

  ngOnInit(): void {
    this._darkModeService.isDarkMode$.subscribe(darkMode =>{
      this.isDarkMode = darkMode;

    })
  }

  toggleDarkMode(DarkMode:boolean) {
    this.isDarkMode = DarkMode;
  }
}
