import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { OurRecomendationComponent } from './Components/our-recomendation/our-recomendation.component';
import { TrendingStaysComponent } from './Components/trending-stays/trending-stays.component';
import { FAQComponent } from './Components/faq/faq.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabBarComponent } from './Components/tab-bar/tab-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    OurRecomendationComponent,
    TrendingStaysComponent,
    FAQComponent,
    FooterComponent,
    TabBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
