import React, {Component} from 'react';

//  React Components
import OnOff from './OnOff'; //Doesn't need redux
import Counter from './Counter'; //Doesn't need redux
import Start from './Start';
import Strict from './Strict';
import GameButtonList from './GameButtonList';
import { Provider, connect } from 'react-redux';

class Game extends Component{
    constructor(){
        super();
        this.currentTurn = 'Computer';
        this.currentHumanClick = '';
        this.state = {
            //Settings
                counter: 15,
                strict:false,
                toggleOn:false,
                mouseDown: false,
            //GameState
                computerTurns:[],
                humanTurns:[],
        };
    
    this.toggleOnOff = this.toggleOnOff.bind(this);
    this.onHumanTurn = this.onHumanTurn.bind(this);
    this.onComputerTurn = this.onComputerTurn.bind(this);
    this.startGame = this.startGame.bind(this);
    this.onEndTurn = this.onEndTurn.bind(this);
    
    
    }

    toggleOnOff(){
        this.setState({toggleOn:!this.state.toggleOn});
    }

//GAME STATE METHODS
    onHumanTurn(buttonId){
        //Human should go onClick
        this.currentHumanClick = buttonId;
        const Turns = [...this.state.humanTurns, this.currentHumanClick];
        this.setState({humanTurns:Turns,mouseDown:true}, ()=>{
            this.startGame(); 
        });        
        this.currentTurn='Computer';            
        
    }
    onEndTurn(buttonId){
        this.setState({mouseDown:false});
    }

    onComputerTurn(){
        let Turn;
        switch(Math.floor((Math.random() * 4))){

            case 0:
            Turn = 'green';
            break;
            case 1:
            Turn = 'red';
            break;
            case 2:
            Turn = 'blue'
            break;
            default:
            Turn = 'yellow'
            break;
        }
        const Turns = [...this.state.computerTurns, Turn];
        this.currentTurn = 'Player';
        this.setState({computerTurns:Turns}, ()=>{  
        }); 
    }

    startGame(){
        this.Turn();       
    }

    Turn(){
        if(this.state.computerTurns.length === this.state.humanTurns.length){
            this.onComputerTurn();
        }
    }
  

    render(){
        console.log('Turn: '+ this.currentTurn);
        console.log('Computer Plays: ' + this.state.computerTurns);
        console.log('Human Plays: ' + this.state.humanTurns);      
        //Human Case
        const TurnThisButtonOn = this.currentHumanClick;
        //Computer Case
        const turnArrayofButtonsOn = this.state.computerTurns;

        return(
            <div className="settings">
            <Counter counter = {this.state.counter}/>
            <Start startGame = {this.startGame}/> {/*Starts Game + Reset Game */}
            <Strict/>
            <OnOff
                toggleOn = {this.state.toggleOn} 
                toggleOnOff = {this.toggleOnOff}/>

            <GameButtonList 
                onHumanTurn = {this.onHumanTurn} //onMouseDown future click event-> GameButton
                mouseDown = {this.state.mouseDown} //onMouseDown click State ->GameButton
                onEndTurn = {this.onEndTurn}// onMouseUp click event ->GameButton

                turnButtonOn = {TurnThisButtonOn} // ->GameButtonList
                turnArrayofButtonsOn = {turnArrayofButtonsOn} // ->GameButtonList
                currentTurn = {this.currentTurn} // ->GameButtonList
            />
            </div>
        );
    }

    
}

export default Game;