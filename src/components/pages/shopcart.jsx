import Button from '@restart/ui/esm/Button';
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import WithCounter from './auth/counter/withCounter';

function Shopcart(props) {

    const jsondata = localStorage.getItem('CartShop');
    const cartItem = JSON.parse(jsondata)

    const removeLocal = () => {
        localStorage.removeItem('CartShop')
        window.location.reload(false);
    }
    const [showModal, setShow] = useState(false)
    const handbleShow = () => {
        setShow(true)
        
        localStorage.removeItem('CartShop')
        setTimeout(() => {
            window.location.reload(false)
        }, 3000);;
    }
    const handbleClose = () => setShow(false)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="jumbotron bg-secondary text-white mt-5">
                        <h2 className='text-center mb-5' >Cart Item</h2>
                        {cartItem ? (
                            cartItem.map((item, idx) => {
                                return (
                                    <div key={idx} className='row '>
                                        <hr />
                                        <br />
                                        <ul className="nav d-flex justify-content-between align-items-center text-center">
                                            <li className="nav-item m-3 text-white">
                                                <img src={item.src} alt={item.src} style={{ width: '150px', height: '150px' }} />
                                            </li>
                                            <li className="nav-item m-3 text-white">
                                                <h3>{item.name}</h3>
                                            </li>
                                            <li className="nav-item ms-5 text-white">
                                                <h3>{item.prize} VND</h3>
                                            </li>
                                            <li className="nav-item m-3 text-white">
                                                <h4><strong style={{ color: props.color(item.stock) }}>{item.stock}</strong> in store</h4>
                                            </li>
                                            <li className='me-5'>
                                                <Button className='btn btn-primary btn-lg' >Buy</Button>
                                            </li>
                                        </ul>
                                        <br />
                                        <hr />
                                    </div>
                                )
                            })) :
                            <div className='pb-4 text-center'>
                                <h3>... Empty List ...</h3>
                            </div>
                        }
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Button className='btn btn-success mt-4 me-4' onClick={handbleShow} >Purchase All</Button>

                        <Modal show={showModal} centered size='lg' onHide={handbleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Bạn đã thanh toán</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ textAlign: 'center', padding: '40px' }}><h4>Cảm ơn đã mua sản phảm của chúng tôi.</h4></Modal.Body>
                            <Modal.Footer>
                                <Button className='btn btn-primary m-auto ' onClick={handbleClose} >
                                    Done
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Button className='btn btn-success mt-4' onClick={removeLocal}>Remove All</Button>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default WithCounter(Shopcart);