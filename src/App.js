import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Users from './pages/Users/Users';
import UserDetails from './pages/UserDetails/UserDetails';
import Layout from './hoc/Layout/Layout';
import { icons } from './Icons/Icons';
import PostDetails from "./pages/PostDetails/PostDetails";

icons();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path='/' exact component={Users} />
          <Route path='/user/:id' exact component={UserDetails} />
          <Route path='/user/:id/:postId' exact component={PostDetails} />
          <Route render={() => <h2 style={{margin: '0 auto'}}>This route does not exist</h2>}/>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
