import React,{Component} from 'react';

import OnOff from './OnOff';
import Mode from './Mode';
import Count from './Count';
import GameButtonList from './GameButtonList';


class Game extends Component{
    constructor(){
        super();
        this.computerTurns = [];
        this.humanTurns = [];
        this.state = {
            computerTurns:[],
            humanTurns:[],
            counter: 0,
            strict:false,
        };
        this.handleHumanTurn = this.handleHumanTurn.bind(this);
    }

    Turn(){
        this.handleComputerTurn();
    }
    
    
    handleHumanTurn(buttonId){
        //Human should go onClick
        this.humanTurns.push(buttonId);// keep a history of the turns
        this.setState({humanTurns:this.humanTurns});
    }

  
    handleComputerTurn(){
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
            const humanClickId = this.state.humanTurns[TurnOn-1];//   Going tell us what button to light up on human turn
            const computerPseudoClicksIds = this.state.computerTurns;
        return(
            <div className="Game">
                <OnOff/>
                <GameButtonList 
                    onHumanTurnClick = {this.handleHumanTurn} 
                    humanClickId = {humanClickId}
                    computerTurnOn = {computerPseudoClicksIds}
                />
                <Mode/>
                <Count/>
            </div>
        );
    }
}

export default Game;