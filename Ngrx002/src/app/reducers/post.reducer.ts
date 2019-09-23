import * as PostActions from '../reducers/post.actions';
import {Mypost} from '../reducers/post.model';

export type Action = PostActions.All;

const defaultState:Mypost={
    text : 'Hello Mehdi Jalal, I am the default state',
    likes:0
}
//------helper function to create new state object---//
const newState = (state, newData)=>{
    //--Object.assign will build new object from left to right---
    return Object.assign({},state,newData);
}
//---------------
export function postReducerfunc(state:Mypost=defaultState, action:Action){
    console.log(action.type,state);
    switch(action.type){
        case PostActions.EDIT_TEXT:
            return newState(state, {text:action.payload});
        case PostActions.UP_VOTE:
            return newState(state,{likes:state.likes+1});
        case PostActions.DOWN_VOTE:
            return newState(state, {likes:state.likes-1});
        case PostActions.RESET:
            return defaultState;
        default:
            return state;

    }
}
