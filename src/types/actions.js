import type {CommentProps, UserPostProps, UserProps} from './components';

export type Action =
  | {type: 'FETCH_COMMENTS_START'}
  | {type: 'FETCH_COMMENTS_SUCCESS', comments: Array<CommentProps>}
  | {type: 'FETCH_COMMENTS_FAIL'}
  | {type: 'CLEAR_COMMENTS_LOADED'}
  | {type: 'ADD_COMMENT_START'}
  | {type: 'ADD_COMMENT_SUCCESS', comment: CommentProps}
  | {type: 'ADD_COMMENT_FAIL'}

  | {type: 'FETCH_USER_POSTS_START'}
  | {type: 'FETCH_USER_POSTS_SUCCESS', posts: Array<UserPostProps>}
  | {type: 'FETCH_USER_POSTS_FAIL'}
  | {type: 'DELETE_USER_POST_START',   postId: number}
  | {type: 'DELETE_USER_POST_SUCCESS', postId: number}
  | {type: 'DELETE_USER_POST_FAIL'}
  | {type: 'ADD_USER_POST_START'}
  | {type: 'ADD_USER_POST_SUCCESS', post: UserPostProps}
  | {type: 'ADD_USER_POST_FAIL'}

  | {type: 'FETCH_USERS_START'}
  | {type: 'FETCH_USERS_SUCCESS', users: Array<UserProps>}
  | {type: 'FETCH_USERS_FAIL'}

type PromiseAction = Promise<Action>;
type Dispatch = (action: Action | PromiseAction | Array<Action>) => any;
export type ThunkAction = (dispatch: Dispatch) => any;