import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RANDOM, START } from './reducer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  expected$: Observable<number>;

  constructor(private store: Store<any>) {
    this.expected$ = store.select('wm')
      .map(state => state.expected);
  }

  start() {
    this.store.dispatch({ type: START });
  }

  random() {
    this.store.dispatch({ type: RANDOM });
  }
}
