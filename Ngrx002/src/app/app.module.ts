import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//-------*--Ngrx--*---------------//
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './simple.reducer';
import {postReducerfunc} from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      mymessage:simpleReducer,
      mypost:postReducerfunc
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
