import React from 'react';
import GameButton from './GameButton';
import FontAwesome from 'react-fontawesome';

const GameButtonList = (props) => {
    const buttonId = {
    buttons:[
        {
            id:'green',
            symbol:<FontAwesome
            className="arrowUp Button"
            name="arrow-circle-up"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            style: "Button-green-off"
        },
        {
            id:'red',
            symbol:<FontAwesome
            className="arrowRight Button"
            name="arrow-circle-right"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            style: "Button-red-off"
        },
        {
            id:'blue',
            symbol:<FontAwesome
            className="arrowDown Button"
            name="arrow-circle-down"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            style: "Button-blue-off"  
        },
        {
            id:'yellow',
            symbol:<FontAwesome
            className="arrowLeft Button"
            name="arrow-circle-left"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            style: "Button-yellow-off"
        },
      ],
    };

    //How can humanClick and computerPseudoClick both use this effectively to render the right effects from the data in Game State?
    
    const GameButtons = buttonId.buttons.map(button =>{
        console.log(props.humanClickId);
        if(button.id===props.humanClickId){
            const buttonStyleOn = `Button-${props.humanClickId}-on`;
         button.style = buttonStyleOn; 
        }
        return (
            
        <GameButtonEffects id = {button.id}  style = {button.style} stretch='Button-stretch'>
        <GameButton id={button.id} symbol = {button.symbol} onHumanTurnClick={props.onHumanTurnClick}/>
        </GameButtonEffects>
        );

    });
    return(
        <div className="GameButtonList">
                {GameButtons}
        </div>
    );
};

function clickDatatoUI(id,clickid){
    
}
function arrayDatatoUI(){

}


//Handle the dynamic aspects of styling/clickable/effects/etc ...
//Distribute the state from Game to the correct UI.
function GameButtonEffects(props){
    return(
        <div className = {`${props.stretch} ${props.style}`}>
            {props.children}
        </div>
    );
}

export default GameButtonList;