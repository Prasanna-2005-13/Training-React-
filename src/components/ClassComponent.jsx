import React, { Component } from 'react'
import './Style.css';
export default class ClassComponent extends Component {

  constructor(props) {
    super(props)

    this.state ={
      clicked: false,
      message: 'I am attending react class!!!'
    }
  }
  changemessage = () =>{
    this.setState({
      clicked: true,
      message: 'Thanks For Coming!!!'

    })
  }

  
  render() 
  {
    let applyStyle = this.state.clicked ? 'heading2' : 'heading1'
    return (
        <div>
          <h1 className={applyStyle}>{this.state.message}</h1>
          <button onClick={this.changemessage}>Click</button>
        </div>

      
    )
  }
}

