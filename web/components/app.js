


import React from 'react'
import {connect} from 'proxyo'




export default connect(class App extends React.Component {

  constructor (){
    super()
    this.click = this.click.bind(this)
  }

  click(){
    this.props.store.router.goTo('/gui')
    console.log('click')
  }
  render (){
    //console.log(this.props)
    return <div>
      APP1
      <button onClick={this.click}> click</button>
    </div>
  }

})




/*
export default connect(class App extends React.Component {

  constructor (){
    super()
    this.click = this.click.bind(this)
  }

  click(){
    this.props.store.router.goTo('/gui')
    console.log(this.props.store.router)
    console.log('click')
  }
  render (){
    console.log(this.props)
    return <div>
      APP 1
      <button onClick={this.click}> click</button>
    </div>
  }

},State)
*/


/*

import React from 'react'
export default (props)=>(<div>fuck</div>)
*/
