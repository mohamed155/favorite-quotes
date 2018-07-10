import {Component} from "@angular/core";
import {FavoritePage} from "../favorite/favorite";
import {LiberaryPage} from "../liberary/liberary";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favoritePage" tabTitle="Favorite" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favoritePage = FavoritePage;
  libraryPage = LiberaryPage;
}
