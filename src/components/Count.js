import React from 'react';

const Count = (props) =>{
    return(
        <div className='Count'>
            {props.count || '0:00'}
        </div>
    );
};

export default Count;