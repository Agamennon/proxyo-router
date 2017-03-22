import React from 'react'
import {connect} from 'proxyo'

export default connect(class Home extends React.Component {

  constructor (){
    super()
    this.click = this.click.bind(this)
  }

  click(){
    //setTimeout(()=>{},1000)
    this.props.store.router.goTo('/app',{gui:'legal'})

  }
  render (){

    return <div>
      HOME {this.props.store.store1.name}
      <button onClick={this.click}> click</button>
    </div>
  }

})

/*

export default connect(class Home extends React.Component {

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
      HOME
      <button onClick={this.click}> click</button>
    </div>
  }

})



*/
