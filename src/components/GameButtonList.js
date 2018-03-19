import React from 'react';
import GameButton from './GameButton';
import FontAwesome from 'react-fontawesome';

const GameButtonList = (props) => {
    console.log(props.currentTurn);
    
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


    const GameButtonsPlayer = buttonList.map((button) =>{
            return (
                <GameButtonEffectsperClick id = {button.id} default = {button.defaultStyle} turnOn = {props.turnButtonOn} mouseDown = {props.mouseDown}> {/*Styling Manager*/}
                <GameButton id={button.id} symbol = {button.symbol}  onHumanTurn={props.onHumanTurn} onEndTurn = {props.onEndTurn} />
                </GameButtonEffectsperClick>
                ); 
    });

    const GameButtonsComputer = buttonList.map((button) =>{
            return(
                <GameButtonEffectsperClick id = {button.id} default = {button.defaultStyle}> {/*Styling Manager*/}
                        <GameButton id={button.id} symbol = {button.symbol}/>
                </GameButtonEffectsperClick>

            );
       
    });

    
    return(
        <div className="Buttons">
                {(props.currentTurn==='Player') ? GameButtonsPlayer:
                 <GameButtonEffectsperArray on={props.turnArrayofButtonsOn}>
                     {GameButtonsComputer}
                </GameButtonEffectsperArray>
                }
        </div>
    );
};

//Handle the dynamic aspects of styling/clickable/effects/etc ...
//Distribute the state from Game to the correct UI.
function GameButtonEffectsperClick(trait){
    //Use find here
    let cssClass = '';
    const buttonStyleOn = `Button-${trait.turnOn}-on`; 
    if(trait.mouseDown && (trait.id===trait.turnOn)){
            cssClass=buttonStyleOn;
    }else{
        cssClass = trait.default;
    }
    //console.log(cssClass);

    return(
        <div className = {`${cssClass}`}>
            {trait.children}
        </div>
    );
}
function GameButtonEffectsperArray(style){
    
            
    return(
        <div className='red'>
            {style.children}
        </div>
    )
    
}


export default GameButtonList;