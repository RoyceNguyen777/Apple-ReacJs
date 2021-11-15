import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import WithCounter from '../../pages/auth/counter/withCounter';
import { RequestApiProduct } from '../../Redux/action/fetchapi';


function FilterProduct(props) {
    const paramsURL = useParams()

    const filterproduct = useSelector(state => state.fetchapi)
    const dispatch = useDispatch()

    const filteritem = filterproduct.filter(item => {
        return item.categoryId === Number(paramsURL.id) || paramsURL.id === 'all'
    })

    useEffect(() => {
        dispatch(RequestApiProduct())
    }, [dispatch])

    return (
        <div className='container'>
            <div className='row'>
                {
                    filteritem.map(item => {
                        const { id, name, prize, stock, src, } = item;
                        return (
                            <div className='col-sm-4 col-12' key={id}>
                                <div className='card mt-4'>
                                    <img src={src} alt={src} />
                                    <div className='card-body '>
                                        <h6>Stock: <strong style={{ color: props.color(stock), fontSize: '18px' }}>{stock}</strong></h6>
                                        <h2 className="card-title text-center"><strong>{name}</strong></h2>
                                        <h4 className='text-center'>From {prize}</h4>
                                    </div>
                                    <div className='card-footer mx-auto'>
                                        <button className='btn btn-primary' onClick={() => props.cart(item)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default WithCounter(FilterProduct);