import React from 'react';
import WithCounter from './withCounter';

function HoverCounter(props) {
    const { mystate, evenplus, evenminus } = props
    return (
        <div>
            <h1>{mystate}</h1>
            <button onMouseEnter={evenplus} className='btn btn-primary me-4'>Hover Enter Counter</button>
            <button onMouseLeave={evenminus} className='btn btn-primary'>Hover Leave Counter</button>
        </div>
    );
}

export default WithCounter(HoverCounter);