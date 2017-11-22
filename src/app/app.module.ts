import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducer } from './reducer';
import { GameLevelComponent } from './game-level/game-level.component';

@NgModule({
  declarations: [
    AppComponent,
    GameLevelComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ wm: reducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
