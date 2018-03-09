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
            color: 'green'
        },
        {
            id:'red',
            symbol:<FontAwesome
            className="arrowRight Button"
            name="arrow-circle-right"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            color:'red'
        },
        {
            id:'blue',
            symbol:<FontAwesome
            className="arrowDown Button"
            name="arrow-circle-down"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            color:'blue'  
        },
        {
            id:'yellow',
            symbol:<FontAwesome
            className="arrowLeft Button"
            name="arrow-circle-left"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            color:'yellow'
        },
      ],
    };
    const GameButtons = buttonId.buttons.map(button =>{
        return (
        <GameButtonEffects stretch='stretch' color = {button.color}>
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
function GameButtonEffects(props){
    return(
        <div className = {`Button-${props.stretch} Button-${props.color}`}>
            {props.children}
        </div>
    );
}

export default GameButtonList;