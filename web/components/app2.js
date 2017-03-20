import React from 'react'
import {connect} from 'proxyo'

export default connect(class App2 extends React.Component {

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
      APP 2
      <button onClick={this.click}> click</button>
    </div>
  }

})

