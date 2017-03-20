import React from 'react';

//models
import {Route} from '../../src/index';

//components
import App from '../components/app';
import App2 from '../components/app2';
import Home from '../components/home';

//const views =  {};
const views = {
  home: new Route({
    path: '/',
    component: <Home/>
  }),
  App: new Route({
    path: '/App',
    component: <App/>,
    onEnter: () => {
      console.log('entering App!');
    }
  }),
  App2: new Route({
    path: '/App2',
    component: <App2/>,
    onEnter: (route, params, store) => {
      console.log(`entering App2`, params);
    }
  }),
  NotFound: new Route({
    path:'',
    component:<div>not found</div>
  })
};
export default views;
