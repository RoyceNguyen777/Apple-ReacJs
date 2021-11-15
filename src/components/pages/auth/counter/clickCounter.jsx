import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import WithCounter from './withCounter';

function ClickCounter(props) {
    console.log(props);
    // const baselist = [
    //     {
    //         name: 'Thu',
    //         lname: 'Nguyen'
    //     },
    //     {
    //         name: 'Roy',
    //         lname: 'Nguyen'
    //     },
    // ]
    const car = [
        {
            name: 'Mercedes',
            pize: 100000
        },
        {
            name: 'Honda',
            pize: 5000
        },
    ]
    const { mystate, evenplus, evenminus, mylist, evenlist } = props

    const [newlist, setnewlist] = useState(() => car)
    useEffect(() => {
        setnewlist(item => item)
        evenlist(newlist)
    }, [evenlist, newlist])

    return (
        <div>
            <h1>{mystate}</h1>
            <br />
            <button onClick={evenplus} className='btn btn-success me-3'>Plus Counter</button>
            <button onClick={evenminus} className='btn btn-success'>Minus Counter</button>
            <ol className='m-5'>
                {mylist}
            </ol>
        </div>
    );
}

export default WithCounter(ClickCounter);