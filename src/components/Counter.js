import React from 'react';

const Counter = (props) =>{
    const format = counter  => {
        const arr =  counter.toString().split('');
        return   <div><span>{(counter<10)?0:arr[0]}</span><span>{(arr[1]?arr[1]:arr[0])}</span></div>
        

    };
    return(
        <div className='Count'>
            {format(props.counter)}
        </div>
    );
};

export default Counter;