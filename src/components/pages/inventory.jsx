import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RequestApiProduct } from '../Redux/action/fetchapi';

function InventoryPage(props) {

    const itemlist = useSelector(state => state.fetchapi)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(RequestApiProduct())
    }, [dispatch])

    return (
        <div className='container text-center'>
            <h1>List Stock</h1>
            <Table striped bordered hover size="sm" className='mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Type</th>
                        <th>Prize</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((item) => {
                            const { id, name, prize, stock } = item
                            return (
                                <tr key={item.id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{prize}</td>
                                    <td>{stock}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default InventoryPage;