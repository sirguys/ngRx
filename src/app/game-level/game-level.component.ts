import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-game-level',
  templateUrl: './game-level.component.html',
  styleUrls: ['./game-level.component.css']
})
export class GameLevelComponent implements OnInit {
  level$: Observable<string>;

  constructor(private store: Store<any>) {
    this.level$ = store.select('wm')
      .map(state => state.expected > 5 ? 'Hard' : 'Easy');
  }

  ngOnInit() {
  }

}
