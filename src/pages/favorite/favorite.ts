import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QuotesService} from "../../Services/quotes";
import {Quote} from "../../data/quotes.interface";

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  quotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private quotesService: QuotesService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

}
