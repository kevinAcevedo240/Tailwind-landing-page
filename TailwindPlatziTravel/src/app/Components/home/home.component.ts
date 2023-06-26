import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  texts: string[] = ['Find more locations like this', 'Explore amazing destinations']; // Agrega los textos que deseas rotar
  currentTextIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
    }, 3000); // Cambiar el texto cada 5 segundos (ajusta según tus necesidades)
  }
}
