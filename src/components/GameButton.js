import React from 'react';

const GameButton = (props) => {
   const handleHumanTurn = () =>{
        props.onHumanTurn(props.id);
    };
    const handleEndofTurn = () =>{
        props.onEndTurn(props.id)
    };
    return(
        <div id={props.id} onMouseDown={handleHumanTurn} onMouseUp = {handleEndofTurn}>
            {props.symbol}
        </div>
    );
}

export default GameButton;

