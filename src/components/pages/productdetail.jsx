import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { RequestApiProduct } from '../Redux/action/fetchapi';

const Productdetail = (props) => {

    const params = useRouteMatch()
    const paramsUrl = Number(params.params.id)


    const productdetail = useSelector(state => state.fetchapi)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(RequestApiProduct())
    }, [dispatch])


    const filterproduct = productdetail.filter((item) => item.id === paramsUrl)[0]
    // // hoặc
    // // const filterproduct = productlist.filter((item) => item.id === paramsUrl)[0]

    const history = useHistory()
    
    return (
        <React.Fragment>
            {filterproduct ?
                (<div className='container text-center'>
                    <h1>Product Detail</h1>
                    <img src={filterproduct.src} alt={filterproduct.src} />
                    <h3><i>Product : </i>{filterproduct.name}</h3>
                    <h3><i>Prize : </i>{filterproduct.prize}</h3>
                    <h3><i>Stock : </i>{filterproduct.stock}</h3>
                    <button className='btn btn-primary' onClick={() => history.goBack()}>COME BACK</button>
                </div>)
                : (<h1 className='text-center'>Loading ...</h1>)}
        </React.Fragment>
    );
}

export default Productdetail;
