import React, {Component} from 'react';

//  React Components
import OnOff from './OnOff';
import Counter from './Counter';
import Start from './Start';
import Strict from './Strict';
import GameButtonList from './GameButtonList';

class Game extends Component{
    constructor(){
        super();
        this.computerTurns = [];
        this.humanTurns = [];
        this.state = {
            //Settings
                counter: 9,
                strict:false,
                toggleOn:false,
            //GameState
                computerTurns:[],
                humanTurns:[],
        };
    
    this.toggleOnOff = this.toggleOnOff.bind(this);
    this.onHumanTurn = this.onHumanTurn.bind(this);
    }

    toggleOnOff(){
        this.setState({toggleOn:!this.state.toggleOn});
    }

//GAME STATE METHODS
    onHumanTurn(buttonId){
        //Human should go onClick
        this.humanTurns.push(buttonId);// keep a history of the turns
        this.setState({humanTurns:this.humanTurns});        
    }

  
    onComputerTurn(){
        switch(Math.floor((Math.random() * 4))){
            case 0:
            this.computerTurns.push('green');
            break;
            case 1:
            this.computerTurns.push('red');
            break;
            case 2:
            this.computerTurns.push('blue');
            break;
            default:
            this.computerTurns.push('yellow');
            break;
        }
        this.setState({computerTurns:this.computerTurns}); 
    }
  

    render(){
        const TurnOn = this.state.humanTurns.length;
        const TurnThisButtonOn = this.state.humanTurns[TurnOn-1];//  props for GameButtonList
        return(
            <div className="settings">
            <Counter counter = {this.state.counter}/>
            <Start/> {/*Starts Game + Reset Game */}
            <Strict/>
            <OnOff
                toggleOn = {this.state.toggleOn} 
                toggleOnOff = {this.toggleOnOff}/>

            <GameButtonList 
                onHumanTurn = {this.onHumanTurn}
                turnButtonOn = {TurnThisButtonOn}
            />
            </div>
        );
    }

    
}

export default Game;