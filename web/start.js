//import {observer} from '../../src/index'
import React from 'react'
import ReactDOM from 'react-dom'
import {observable , Provider} from 'proxyo'
import views from './view/views'
import store1 from './stores/store1'
import store2 from './stores/store2'
import router from '../src/router/routerStore'
import ProxyoRouter from '../src/components/proxyoRouter'
import Home from './components/home'



var store = observable({
  store1:store1,
  store2:store2,
  router: new router(views)
})

//import App from './components/app'

//import {store1} from './stores/store'



ReactDOM.render(
    <Provider proxyoStores={store}>
       <ProxyoRouter/>
    </Provider>,
      document.getElementById('app')
  )

