import React from 'react';
import GameButton from './GameButton';
import FontAwesome from 'react-fontawesome';

const GameButtonList = (props) => {
    
    const buttonList = [
        {
            id:'green',
            symbol:<FontAwesome
            className="arrowUp Button"
            name="arrow-circle-up"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            defaultStyle: "Button-green-off"
        },
        {
            id:'red',
            symbol:<FontAwesome
            className="arrowRight Button"
            name="arrow-circle-right"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            defaultStyle: "Button-red-off"
        },
        {
            id:'blue',
            symbol:<FontAwesome
            className="arrowDown Button"
            name="arrow-circle-down"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            defaultStyle: "Button-blue-off"  
        },
        {
            id:'yellow',
            symbol:<FontAwesome
            className="arrowLeft Button"
            name="arrow-circle-left"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />,
            defaultStyle: "Button-yellow-off"
        },
      ];
    
    



    const GameButtons = buttonList.map(button =>{
        let cssClass = '';
        const buttonStyleOn = `Button-${props.turnButtonOn}-on`; 
        if(button.id===props.turnButtonOn){
            cssClass=buttonStyleOn;
        }else{
            cssClass = button.defaultStyle;
        }
        console.log(cssClass);

        return (
        <GameButtonEffects stretch='Button-stretch'> {/*Styling Manager*/}
        <GameButton id={button.id} symbol = {button.symbol}  onHumanTurn={props.onHumanTurn}  style = {`${cssClass}`}/>
        </GameButtonEffects>
        );

    });
    return(
        <div className="Buttons">
                {GameButtons}
        </div>
    );
};

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