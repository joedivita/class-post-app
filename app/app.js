import './styles/app.css';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Main } from './components/Main';
import { Posts } from './components/Posts';
import { CreatePost } from './components/CreatePost';

const where = document.getElementById('app');

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='posts' component={Posts} />
      <Route path='posts/new' component={CreatePost} />
      <IndexRoute component={Posts} />
    </Route>
  </Router>
);

ReactDom.render(router, where);

