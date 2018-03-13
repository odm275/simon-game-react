import React from 'react';
import FontAwesome from 'react-fontawesome';

const Strict = () =>{
    return(
        <div>
        <FontAwesome
                className="Warning Button"
                name="exclamation-circle"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color:'#FFD300' }}
                />
            <p>Strict</p>
        </div>
    )
}
export default Strict;