import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { RequestApiProduct } from '../Redux/action/fetchapi';

const Productdetail = (props) => {

    const params = useRouteMatch()
    const paramsUrl = Number(params.params.id)
    console.log(paramsUrl);

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
                (<div className='container text-center' style={{ fontSize: '25px', lineHeight: '40px' }}>
                    <h1 className='display-3 mt-4 mb-4 '>Product Detail</h1>
                    <img src={filterproduct.src} alt={filterproduct.src} className='mb-5' />
                    <h3><b>Product : </b>{filterproduct.name}</h3>
                    <h3><b>Prize : </b>{filterproduct.prize}</h3>
                    <h3><b>Stock : </b>{filterproduct.stock}</h3>
                    <h3><b>About Product :</b></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique saepe facilis cupiditate dignissimos tempora, deserunt id sit assumenda et. Cupiditate facere est quos earum libero amet, fugit dolor. Nesciunt nulla officiis totam tempora reprehenderit exercitationem corrupti error delectus dicta.
                        amet consectetur adipisicing elit. Dolorum similique saepe facilis cupiditate dignissimos tempora, deserunt id sit assumenda et. Cupiditate facere est quos earum libero amet, fugit dolor. Nesciunt nulla officiis totam tempora reprehenderit exercitationem corrupti error delectus dicta
                    </p>
                    <div className='d-flex justify-content-around'>
                        <a href={`/product/${paramsUrl - 1}`} className='btn btn-primary'>Back Item</a>
                        <a href={`/product/${paramsUrl + 1}`} className='btn btn-primary'>Next Item</a>
                    </div>

                </div>)
                : (<h1 className='text-center mt-5 mb-5'>
                    <button className='btn btn-primary' onClick={() => history.goBack()}>No Item To Back !!! Come Last Item</button>
                </h1>)}
        </React.Fragment>
    );
}

export default Productdetail;
