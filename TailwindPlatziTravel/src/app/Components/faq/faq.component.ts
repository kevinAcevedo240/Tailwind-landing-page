import { Component, OnInit } from '@angular/core';
import { faq } from 'src/app/Models/faq/faq.module';
import { DarkModeService } from 'src/app/Services/dark-mode.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  faqs: faq[] = [
    {
      Tittle: 'Cancellation Policy',
      Description: 'For stays of less than a week it is important to notify 3 days in advance, otherwise it will be penalized'
    },
    {
      Tittle: 'Payment methods',
      Description: 'We accept different payment methods: VISA, MasterCard, American Express, Paypal and Binance'
    },
    {
      Tittle: 'Pets',
      Description: 'The subject of pets will depend directly on the host.'
    },
    {
      Tittle: 'Safety information',
      Description: 'All our rooms have insurance in case of accidents'
    },
    {
      Tittle: 'Long stays',
      Description: 'We have stays of up to 3 months, in this case an advance payment of 50% of the rental value is required'
    },

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
