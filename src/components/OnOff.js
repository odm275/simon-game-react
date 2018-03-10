import React, {Component} from 'react';
import ToggleButton from 'react-toggle-button';
class OnOff extends Component{
    constructor(props){
        super(props);
        this.state = {value:false}
    }
    render(){
        const borderRadiusStyle = { borderRadius: 2 };
        return(
            <ToggleButton
            value={ this.state.value || false }
            thumbStyle={borderRadiusStyle}
            trackStyle={borderRadiusStyle}
            onToggle={(value) => {
                this.setState({
                value: !value,
                })
            }} />
        );
    }

}

export default OnOff;