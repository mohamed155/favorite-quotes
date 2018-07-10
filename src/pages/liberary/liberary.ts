import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";
import quotes from "../../data/quotes";
import { QuotesPage } from "../quotes/quotes";

@Component({
  selector: 'page-liberary',
  templateUrl: 'liberary.html',
})
export class LiberaryPage implements OnInit {

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiberaryPage');
  }

  ngOnInit () {
    this.quoteCollection = quotes;
  }

  onGoToQuotes() {
    this.navCtrl.push(QuotesPage, this.quoteCollection);
  }

}
