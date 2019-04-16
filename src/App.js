import React, { Component, Suspense }   from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout    from './hoc/Layout/Layout';
import Spinner   from './components/UI/Spinner/Spinner';
import { icons } from './Icons/Icons';

import { users, userDetails, postDetails } from './constants/pagesRoutes';

const Users       = React.lazy(() => import('./pages/Users/Users'));
const UserDetails = React.lazy(() => import('./pages/UserDetails/UserDetails'));
const PostDetails = React.lazy(() => import('./pages/PostDetails/PostDetails'));

icons();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              path={users}
              exact
              render={props =>
                <Suspense fallback={<Spinner>Loading users...</Spinner>}>
                  <Users {...props}/>
                </Suspense>}
            />
            <Route
              path={userDetails}
              exact
              render={props =>
                <Suspense fallback={<Spinner>Loading posts...</Spinner>}>
                  <UserDetails {...props}/>
                </Suspense>}
            />
            <Route
              path={postDetails}
              exact
              render={props =>
                <Suspense fallback={<Spinner>Loading comments...</Spinner>}>
                  <PostDetails {...props}/>
                </Suspense>}
            />
            <Route render={() => <h2 style={{margin: '0 auto'}}>This route does not exist</h2>}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
