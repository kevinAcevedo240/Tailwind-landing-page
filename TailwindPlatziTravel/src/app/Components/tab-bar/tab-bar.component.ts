import { Component } from '@angular/core';
import { faHome, faMagnifyingGlass, faHeart, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from 'src/app/Services/dark-mode.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent {
  faHome = faHome;
  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faMoon = faMoon;
  faSun = faSun;
  faUser = faUser;


  isDarkMode = false;

  constructor(
    private _darkModeService: DarkModeService
  ){}

  // @Output() darkModeToggled = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this._darkModeService.changeDarkMode(this.isDarkMode);
    // this.darkModeToggled.emit(this.isDarkMode);
  }
}
