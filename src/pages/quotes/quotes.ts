import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";
import {QuotesService} from "../../Services/quotes";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private quotesService: QuotesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure ?',
      message: 'Are you sure you want to add the quote ?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          handler: () => {

          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
