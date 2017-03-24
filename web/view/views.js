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
    path: '/app',
    component: <App/>,
    onEnter: () => {
     //  console.log('entering App haihaia!');
    }
  }),
  App2: new Route({
    path: '/app2',
    component: <App2/>,
    onEnter: (route, params, store) => {
      console.log(`entering App2`, params);
    }
  }),
  NotFound: new Route({
    path:'/NotFound',
    component:<div>not foundeee</div>
  })
};
export default views;
