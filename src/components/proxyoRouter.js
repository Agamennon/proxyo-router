
import React, {Component} from 'react';
import {connect,observe} from 'proxyo';
import Home from '../../web/components/home'





export default connect(class ProxyoRouter extends React.Component {

  constructor (){
    super()

  }

  render (){
    console.log('render')
    //console.log(this.props.store.router.currentView)
    //console.log(this.props.store.router.currentView.component)

    //console.log({this.props.store.router.currentView.component})
    var Comp = this.props.store.router.currentView.component.$raw
    var Comp2 = this.props.store.router.currentView.component
    console.log(Comp2)
    //console.log (this.props.store.router.currentView.component)
   // console.log (<Home/>)
 //   console.log(this.props.store.router)
    return (<div>

        {Comp}
        search {this.props.store.router.location.query.gui}
        </div>
      )
  }

})




/*

//const ProxyoRouter = ({store:{router}}) => <div>{router.currentView && router.currentView.component}</div>;
const ProxyoRouter = (props)=>{
  var currentView = props.store.router.currentView
  console.log(JSON.stringify(props.store.router,null,2))
  console.log(currentView.component._store.validated)
  return <div>{currentView.component.toJSON()}</div>
};
export default connect(ProxyoRouter);

*/


/*


const MobxRouter = ({store:{router}}) => <div>{router.currentView && router.currentView.component}</div>;
export default observer(['store'], MobxRouter);*/
