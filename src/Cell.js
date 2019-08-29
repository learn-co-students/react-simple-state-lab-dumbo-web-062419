import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    //  access this object with this.state.color
    this.state = {
      color: props.value
      // color: '#F00'
    }
  }

  // same as the below
  // state = {
  //   color: this.props.value
  // }

  changeCellColor = () => {
    console.log("What is this?", this);
    this.setState({
      color: "#333"
    })
  }

  render() {
    console.log("color:", this.state.color);
    // this.state.color changes the color of the cell, rather than this.props.value
    // <div className="cell" style={{backgroundColor: this.props.value}} onClick={this.changeCellColor} >
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeCellColor} >
        Cell Component
      </div>
    )
  }


}
