import { Input } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Nav, Row, Spinner, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Route, useRouteMatch } from 'react-router';
import InventoryPage from './inventory';

function Storepage(props) {
    const match = useRouteMatch()
    const { register, handleSubmit } = useForm()
    const [myform, setmyform] = useState()

    const onSubmit = (data) => {
        const newform = {
            ...data,
            categoryId: Number(data.categoryId)
        }
        setmyform(newform)
    }

    useEffect(() => {
        console.log('newlist', myform);
    }, [myform, setmyform]);

    const addApi = () => {
        const url = 'https://json-server-app-demo.herokuapp.com/product-list'
        if (myform) {
            return axios.post(url, myform)
                .then(res => {
                    window.location.reload()
                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    const removeApi = (data) => {
        console.log(data.delect);
        const url = `https://json-server-app-demo.herokuapp.com/product-list/${data.delect}`
        axios.delete(url, myform)
            .then(res => {
                window.location.reload()
            })
            .catch(err => {
                console.error(err);
            })
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
    return (
        <div className='container'>
            <h1 className='text-center mt-4'>Store Manager</h1>
            <div className='row m-5'>
                <div className='col-12 col-sm-5'>
                    <Nav className="flex-column">
                        <Nav.Link href={`${match.path}/inventory`} className='mb-3'>Inventory</Nav.Link>
                        <Nav.Link onClick={addApi} eventKey="link-1" className='mb-3'>Add Item</Nav.Link>

                        <Form onSubmit={handleSubmit(removeApi)}>
                            <Button className='btn btn-primary' type='submit'>
                                Remove Item
                            </Button>
                            <Input
                                label="Delect Item"
                                className="mb-3 w-25 ms-3"
                                placeholder='Delect Item'
                                {...register('delect')}
                            />

                        </Form>
                    </Nav>
                </div>
                <div className='col-12 col-sm-7'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel
                            label="Item"
                            className="mb-3"
                        >
                            <Form.Control type="text" {...register('name')} />
                        </FloatingLabel>
                        <Row>
                            <Col className='col-12'>
                                <FloatingLabel label="Prize" className="mb-3">
                                    <Form.Control type="text"  {...register('prize')} />
                                </FloatingLabel>
                            </Col>
                            <Col className='col-12'>
                                <FloatingLabel label="Img" className="mb-3">
                                    <Form.Control type="text"  {...register('src')} />
                                </FloatingLabel>
                            </Col>
                            <Col className='col-12'>
                                <FloatingLabel label="stock" className="mb-3">
                                    <Form.Control type="number"  {...register('stock')} />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <FloatingLabel label="Category">
                            <Form.Select aria-label="Floating label select example" {...register('categoryId')}>
                                <option>Open this select menu</option>
                                <option value='1'>IPhone</option>
                                <option value='2'>IPad</option>
                                <option value='3'>MacBook</option>
                            </Form.Select>
                        </FloatingLabel>
                        <Button type='submit' className='btn btn-primary mt-3 d-flex m-auto'>Submit</Button>
                    </Form>
                </div>
            </div>
            <div className='container'>
                {myform ? (
                    <Table striped bordered hover size="sm" className='mt-4'>
                        <thead>
                            <tr>
                                <th>CategoryID</th>
                                <th>Product Type</th>
                                <th>Prize</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{myform.categoryId}</td>
                                <td>{myform.name}</td>
                                <td>{myform.prize}</td>
                                <td>{myform.stock}</td>
                            </tr>
                        </tbody>

                    </Table>
                ) : (
                    <div className='mb-4 d-flex justify-content-center align-content-center'>
                        <Spinner animation="grow" />
                        <h4 className='ms-2'> Empty Submit List</h4>
                    </div>
                )
                }
            </div>

            <Route path={`${match.path}/inventory`} component={InventoryPage} exact />

        </div>
    );
}

export default Storepage;