import React from 'react';
import ToggleButton from 'react-toggle-button';


const OnOff = (props) =>{
    const borderRadiusStyle = { borderRadius: 2 };
    return(
        <ToggleButton
            value={ props.toggleOn }
            thumbStyle={borderRadiusStyle}
            trackStyle={borderRadiusStyle}
            onToggle={props.toggleOnOff}
        />
    );
};

export default OnOff;