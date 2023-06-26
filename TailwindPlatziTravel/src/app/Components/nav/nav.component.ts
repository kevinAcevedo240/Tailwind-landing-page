import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from 'src/app/Services/dark-mode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faMoon = faMoon;
  faSun = faSun;
  faUser = faUser;
  isDarkMode = false;

  constructor(
    private _darkModeService: DarkModeService
  ){}


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this._darkModeService.changeDarkMode(this.isDarkMode);
  }


  ngOnInit(): void {
    this._darkModeService.isDarkMode$.subscribe(darkMode =>{
      this.isDarkMode = darkMode;
    })
  }
}
