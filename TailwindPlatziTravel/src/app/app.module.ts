import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { OurRecomendationComponent } from './Components/our-recomendation/our-recomendation.component';
import { TrendingStaysComponent } from './Components/trending-stays/trending-stays.component';
import { FAQComponent } from './Components/faq/faq.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    OurRecomendationComponent,
    TrendingStaysComponent,
    FAQComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
