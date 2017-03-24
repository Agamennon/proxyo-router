import React from 'react'
import {connect} from 'proxyo'

export default connect(['router'])(class App2 extends React.Component {

  constructor (){
    super()
    this.click = this.click.bind(this)
  }

  click(){
    this.props.router.goTo('/gui')
    console.log(this.props.router)
    console.log('click')
  }
  render (){
    console.log('rendering App2')
    return <div>
      APP 2
      <button onClick={this.click}> click</button>
    </div>
  }

})

