// @flow

import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import thunk        from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import './index.scss';
import App                from './App';
import * as serviceWorker from './serviceWorker';
import usersReducer       from './store/reducers/users';
import postsReducer       from './store/reducers/posts';
import commentsReducer    from './store/reducers/comments';

const rootReducer = combineReducers({
  users:    usersReducer,
  posts:    postsReducer,
  comments: commentsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const root : any = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
