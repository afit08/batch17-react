// rfc ini adalah cara yang terbaru
// import React from 'react'

// export default function counter() {
//   return (
//     <div>counter</div>
//   )
// }

// rcc ini adalah cara yang lama 
import React, { Component } from 'react'

export default class counter extends Component {
    constructor(){
        super();
        this.state = {counter : 3}
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        this.setState({counter : this.state.counter + 1})
    }
    decrement(){
        this.setState({counter : this.state.counter - 1})
    }
  render() {
    return (
      <div>
          <h1>
              Counter : {this.state.counter}
          </h1>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}


