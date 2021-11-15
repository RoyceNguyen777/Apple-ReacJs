import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RequestApiCategory } from '../Redux/action/fetchapiCate';

function SidebarComponent() {

    const category = useSelector(state => state.fetchapicategory)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RequestApiCategory())
    }, [dispatch])

    return (
        <div>
            <ul className="list-group">
   
                {
                    category.map((item) => {
                        return <li key={item.id} className="list-group-item">
                            <Link to={`/category/${item.id}`} style={{ color: '#000' }} >{item.name}</Link>
                        </li>
                    })
                }

            </ul>
        </div>
    );
}

export default SidebarComponent;