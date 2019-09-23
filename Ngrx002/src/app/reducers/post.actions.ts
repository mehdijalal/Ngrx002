import {Action} from '@ngrx/store';
import { type } from 'os';

export const EDIT_TEXT='[Post] Edit';
export const UP_VOTE = '[Post] up vote';
export const DOWN_VOTE ='[Post] Down vote';
export const RESET ='[Post] Reset';

export class EditText implements Action{
    readonly type =EDIT_TEXT;
    constructor (public payload:string){}
}
export class Upvote implements Action{
    readonly type = UP_VOTE;
}
export class Downvote implements Action{
    readonly type = DOWN_VOTE;
}
export class Reset implements Action{
    readonly type = RESET;
}
//--------we expor all as final action----//
export type All = EditText | Upvote | Downvote | Reset;