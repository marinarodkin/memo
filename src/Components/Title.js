import React, { Component } from 'react';

export default class Title extends Component {
  render(){

    return(
      <div className="title">
        <div className = "title_img">MEMORY</div>
        <button className = "btn btn_game-start" onClick = {this.props.startClick}>Start Game</button>
      </div>
    )
  }
}
