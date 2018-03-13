import React from 'react';

const GameButton = (props) => {
   const handleHumanTurn = () =>{
       
        props.onHumanTurn(props.id);
    };
    return(
        <div id={props.id} onClick={handleHumanTurn} className={props.style}>
            {props.symbol}
        </div>
    );
}

export default GameButton;