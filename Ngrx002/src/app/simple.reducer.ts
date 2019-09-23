import {Action} from '@ngrx/store';

export function simpleReducer(state:string='Hello world',action:Action){
    console.log(action.type,state);

    switch(action.type){
        case 'Toronto':
            return state = 'Hi from city of Toronto'
        case 'Ottawa':
            return state = 'Hello Ottawa'
        default:
            return state;
    }
}