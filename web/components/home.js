import React from 'react'
import {connect} from 'proxyo'
import Link from '../../src/components/link'

@connect(['router','store1'])
export default class Home extends React.Component {

  constructor (){
    super()
    this.click = this.click.bind(this)
  }

  click(){
    //setTimeout(()=>{},1000)
    this.props.router.goTo('/app',{gui:'legal'})

  }
  render (){
    console.log('rendering Home')
    return <div>
      HOME {this.props.store1.name}
      <Link path="/app2" search={{'a':10}}> app2 </Link>
      <button onClick={this.click}> click</button>
    </div>
  }

}

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
