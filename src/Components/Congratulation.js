
import React, { Component } from 'react';

export default class Congratulation extends Component {
  render(){

    return(
      <div className="congratulation">
       <div className="congratulation-img"></div>
        <button className = "btn btn_game-start" onClick = {this.props.startClick}>Start Game</button>
      </div>
    )
  }
}
