//import {observer} from '../../src/index'
import React from 'react'
import ReactDOM from 'react-dom'
import {observable ,observe, Provider,replaceState,state} from 'proxyo'
import views from './view/views'
import store1 from './stores/store1'
import store2 from './stores/store2'
import router from '../src/router/routerStore'
import ProxyoRouter from '../src/components/proxyoRouter'
import Home from './components/home'


var st = replaceState({
  store1:store1,
  store2:store2,
  router: new router(views)
})




/*
observe(()=>{
  console.log(store.router.currentView.component)
})

setTimeout(()=>{
  store.router.currentView = store.router.views['App']
},5000)*/


//import App from './components/app'

//import {store1} from './stores/store'



ReactDOM.render(
    <Provider proxyoStores={state}>
      <ProxyoRouter/>
    </Provider>,
    document.getElementById('app')
)


/*


ReactDOM.render(
    <Provider proxyoStores={store}>
       <ProxyoRouter/>
    </Provider>,
      document.getElementById('app')
  )
*/

