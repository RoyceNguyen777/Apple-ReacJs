import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RequestApiUser } from '../Redux/action/fetchapiUser';
import './style.scss'

const Userlist = (props) => {

    const userlist = useSelector(state => state.fetchapiuser)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(RequestApiUser())
    }, [dispatch])

    return (
        <>
            {
                userlist.map((item) => {
                    const { id, username, email, src } = item
                    return (
                        <div className='col-12 col-sm-4 mt-5' key={id}>
                            <div className='card card-user'>
                                <img src={src} alt={src} />
                                <div className='card-body'>
                                    <h4>ID: {id}</h4>
                                    <p>UserName: {username}</p>
                                    <p>Email: {email}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Userlist;
