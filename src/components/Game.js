import React,{Component} from 'react';

import GameButtonList from './GameButtonList';
import OnOff from './OnOff';
import Mode from './Mode';
import Count from './Count';
class Game extends Component{
    constructor(){
        super();
        this.listTurns = [];
        this.state = {
            listTurns:[]
        };
        this.handleHumanTurn = this.handleHumanTurn.bind(this);
    }
    handleHumanTurn(buttonId){
        this.listTurns.push(buttonId);
        this.setState({listTurns:this.listTurns});
    }
    handleComputerTurn(){
        switch(Math.floor((Math.random() * 4))){
            case 0:
            this.listTurns.push('green');
            break;
            case 1:
            this.listTurns.push('pink');
            break;
            case 2:
            this.listTurns.push('orange');
            break;
            default:
            this.listTurns.push('blue');
            break;
        }
        this.setState({listTurns:this.listTurns}); 
        
    }

    render(){
        
        return(
            <div className="Game">
                <OnOff/>
                
                <GameButtonList onHumanTurnClick = {this.handleHumanTurn}/>
                <Mode/>
                <Count/>
            </div>
        );
    }
}

export default Game;