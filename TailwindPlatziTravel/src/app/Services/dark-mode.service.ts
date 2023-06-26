import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {


  private isDarkMode =  new BehaviorSubject<boolean>(false);

  isDarkMode$ = this.isDarkMode.asObservable();

changeDarkMode(darkModeToggle: boolean){
  this.isDarkMode.next(darkModeToggle);
}

}
