
import React, {Component} from 'react';
import {connect} from 'proxyo';
import Home from '../../web/components/home'

//const ProxyoRouter = ({store:{router}}) => <div>{router.currentView && router.currentView.component}</div>;
const ProxyoRouter = (props)=>{
  var router = props.store.$raw.router
  console.log(router.currentView.component)
  return  <div>{router.currentView && router.currentView.component}</div>
};
export default connect(ProxyoRouter);



/*


const MobxRouter = ({store:{router}}) => <div>{router.currentView && router.currentView.component}</div>;
export default observer(['store'], MobxRouter);*/
