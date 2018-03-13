import React from 'react';
import FontAwesome from 'react-fontawesome';

const Start = (props) =>{
    return(
       <FontAwesome
            className="start Button"
            name="play-circle"
            size="2x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'red' }}
            onClick={props.clickStart}
            />
    );
}

export default Start;