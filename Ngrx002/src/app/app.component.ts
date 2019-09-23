import { Component } from '@angular/core';



//---------ngrx-----------------//
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
//---------002--------------//
import * as PostActions from './reducers/post.actions';
import {Mypost} from './reducers/post.model';

interface appState{
  message:string;
  post:Mypost;
  text:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'NgRx001';
  message$:Observable<string>
  post:Observable<Mypost>

  text: string; // form input val

  constructor(private store:Store<appState>){
    this.message$ = this.store.select('mymessage');
    //--------002----------------//
    this.post = this.store.select('mypost');
  }

  torontoMessage(){
    this.store.dispatch({type:'Toronto'});
  }
  ottawaMessage(){
    this.store.dispatch({type:'Ottawa'});
  }
  //------------002----------------//
  edittext(){
    this.store.dispatch(new PostActions.EditText(this.text));
  }
  upvote(){
    this.store.dispatch(new PostActions.Upvote());
  }
  downvote(){
    this.store.dispatch(new PostActions.Downvote());
  }
  resetpost(){
    this.store.dispatch(new PostActions.Reset());
  }


}
