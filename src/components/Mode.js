import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';

class Mode extends Component{
    
    render(){
        return(
            <div className='Mode'>
            <FontAwesome
                className="Warning Button"
                name="exclamation-circle"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            <p>Warning</p>
            </div>
        )
    }
}
export default Mode;