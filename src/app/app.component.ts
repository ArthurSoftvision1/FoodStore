import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe'

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBfyI0FPDAhO6GKgkgPZNdVfodZXknL_5w",
      authDomain: "ng-recipe-book-8e1db.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
}
