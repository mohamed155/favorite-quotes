import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {QuotesService} from "../../Services/quotes";
import {Quote} from "../../data/quotes.interface";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  quotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private quotesService: QuotesService, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

}
