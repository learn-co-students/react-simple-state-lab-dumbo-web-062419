import React, { Component } from 'react';

export default class Cell extends Component {
  state = {color: this.props.value}

  changeColor = () => {
    // console.log("change!")
    if (this.state.color == this.props.value) {
      this.setState({color: "#333"})
    } else {
      this.setState({color: this.props.value})
    }
  }

  render() {
    // console.log(this.color)

    return (
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: `${this.state.color}`}}></div>
    )
  }

}
