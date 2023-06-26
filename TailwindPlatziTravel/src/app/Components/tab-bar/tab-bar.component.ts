import { Component } from '@angular/core';
import { faHome, faMagnifyingGlass, faHeart, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';

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
}
