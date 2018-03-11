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
      ],
    };
    const GameButtons = buttonId.buttons.map(button =>{
    let cssClasses = '';  
        
        const buttonStyleOn = `Button-${props.humanClickId}-on`; 
        //const buttonStyleOff =  `Button-${props.humanClickId}-off`;        
        if(button.id===props.humanClickId){
            cssClasses=buttonStyleOn;
        }else{
            cssClasses = button.defaultStyle;
        }
        console.log(cssClasses);
        
        return (
        <GameButtonEffects id = {button.id}  style = {`${cssClasses}`} stretch='Button-stretch'>
        <GameButton id={button.id} symbol = {button.symbol}  onHumanTurnClick={props.onHumanTurnClick}/>
        </GameButtonEffects>
        );

    });
    return(
        <div className="">
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