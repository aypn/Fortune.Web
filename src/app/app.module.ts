import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TileComponent} from './common/tile.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
