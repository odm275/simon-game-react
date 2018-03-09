import React from 'react';

const GameButton = (props) => {
   const handleHumanTurn = () =>{
        props.onHumanTurnClick(props.id);
    };
    return(
        <div id={props.id} onClick={handleHumanTurn}>
            {props.symbol}
        </div>
    );
}

export default GameButton;