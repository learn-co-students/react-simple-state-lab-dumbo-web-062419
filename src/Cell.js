import React, { Component } from 'react';




class Cell extends Component {

  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  handleClick = () => {
    console.log(`before setState: ${this.state.value}`)
    console.log("clicked")
    this.setState({
      color: '#333'
    })
    console.log(`after setState: ${this.state.value}`)
  }

  render(){
    return(
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: `${this.state.color}`}}>
        {this.state.color}
      </div>
    )
  }

}

export default Cell;
