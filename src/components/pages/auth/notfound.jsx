import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='container m-5 p-5'>
            <h1>Opps !!! 404 Not Found Pages</h1>
            <h2 className='mt-4'>
                <Link to="/" style={{ fontSize: '2rem' }} class="link-primary">Click </Link>
                to come back Home Page.
            </h2>
        </div>
    );
}

export default Notfound;
