import React, { Component } from 'react';
import cn from 'classnames'
import './App.css';
import MemoField  from "./Components/Memofield";
import Title  from "./Components/Title";
import Congratulation  from "./Components/Congratulation";

class App extends Component {

  state = {status: "start"};

  startClick = () => {
    this.setState ({status: "game"});
  }

  gameOver =()=>{
    this.setState ({status: "end"});
  }

  render(){

    if (this.state.status === "start") {
      return (
        <div className="memo-field">
          <Title startClick = {this.startClick} />
        </div>
      )
    } else if (this.state.status === "game") {
        return (
         <div>
          <MemoField  gameOver = {this.gameOver} />
        </div>
      )
    } else if (this.state.status === "end") {
        return (
          <div className="memo-field">
            <Congratulation startClick = {this.startClick}/>
          </div>
        )
      }
  }
}

export default App;

//export default App;
/*
const values = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7',
                'card8', 'card1', 'card2', 'card3', 'card4', 'card5', 'card6',
                'card7', 'card8' ];

// random mixing
for (let i = values.length-1; i> 0; i-- ) {
  let num = Math.floor(Math.random() * (i + 1));
  let d = values[num];
  values[num] = values[i];
  values[i] = d;
}

// creating cards array
let counter = 0;
const cardValues = values.reduce((acc,elem) => {
const card = {cardValue: elem, closed: true, finished: false, id: counter };
counter++
return [...acc, card]
}, []);

let cardRange = 1; // waiting  the first card to open, cardRange = 2  waiting the second card to open
let first;  // first  opened card
let second;
let firstIndex;  // id of first opened card
let secondIndex;
let twoOpenedCards;




class MemoField extends Component {

  state = {cards: cardValues};

  onClick = (e) => {

    const currentCard = e.currentTarget.id;

    // if user clicks card which was already opened, card which was already sold or try to open third card -- return nothing
    if (this.state.cards[currentCard].opened === true || this.state.cards[currentCard].finished === true || twoOpenedCards === true){
        return
      }

    // if other cards are closed and this is the first to be opened
    if (cardRange == 1){
        firstIndex = currentCard;
        first = this.state.cards[currentCard];
        const newCard = { ...this.state.cards[currentCard], closed: false };
        const newCards = [...this.state.cards.slice(0, currentCard), newCard, ...this.state.cards.slice(currentCard * 1 + 1, 16)];
        this.setState({cards: newCards});
        cardRange = 2;
        return
      }
      //else if one card was already opened and this is the second
      second = this.state.cards[currentCard];
      secondIndex = currentCard;
      const newCard5 = { ...this.state.cards[currentCard], closed: false };
      const newCards5 = [...this.state.cards.slice(0, currentCard), newCard5, ...this.state.cards.slice(currentCard * 1 + 1, 16)];
      this.setState({cards: newCards5});
      cardRange = 1;
      twoOpenedCards = true; // this var prevents user to open third card during pause
      // 1.5s pause to remember opened cards
      setTimeout(() =>
      this.compareCards(firstIndex, secondIndex), 1500);
      return;
  }

  compareCards = (index1, index2) => {

    if (first.cardValue == second.cardValue ){
      //rewriting statuses in statte
      const newCard1 = { ...this.state.cards[index1], finished: 'true' };
      const newCards1 = [...this.state.cards.slice(0, index1), newCard1, ...this.state.cards.slice(index1 * 1 + 1, 16)];
      const newCard2 = { ...this.state.cards[index2], finished: 'true' };
      const newCards2 = [...newCards1.slice(0, index2), newCard2, ...newCards1.slice(index2 * 1 + 1, 16)];
      this.setState({cards: newCards2});
    } else {
      const newCard1 = { ...this.state.cards[index1], closed: true };
      const newCards1 = [...this.state.cards.slice(0, index1), newCard1, ...this.state.cards.slice(index1 * 1 + 1, 16)];
      const newCard2 = { ...this.state.cards[index2], closed: true };
      const newCards2 = [...newCards1.slice(0, index2), newCard2, ...newCards1.slice(index2 * 1 + 1, 16)];
      this.setState({cards: newCards2});
      }
    twoOpenedCards = false; //now user can open cards again
       return
  }

  render() {

    const checkArr = this.state.cards;
    const gameOverCounter = this.state.cards.filter(card => card.finished === "true").length;
    if (gameOverCounter === 16) {
      this.props.gameOver()
    }

    return (
      <div className="memo-field">
        <div className="memo-cards">
          {this.state.cards.map(card => {
              const divClass = cn({
              card: true,
              closed: card.closed,
              finished: card.finished,
              [`card-${card.cardValue}`]: !card.closed
            })
            return (
              <div className = {divClass} onClick = {this.onClick} id = {card.id}  key = {card.id} > </div>)}
            )}
        </div>
      </div>
    );
  }
}

export default App;

class Title extends Component {
    render(){

      return(
        <div className="title">
          <div className = "title"></div>

          <button className = "btn btn_game-start" onClick = {this.props.startClick}>Start Game</button>
        </div>
      )
    }
  }

class Congratulation extends Component {
  render(){

    return(
      <div className="congratulation">
        <div className="congratulation-img"></div>
        <button className = "btn btn_game-start" onClick = {this.props.startClick}>Start Game</button>
      </div>
    )
  }
}
*/
