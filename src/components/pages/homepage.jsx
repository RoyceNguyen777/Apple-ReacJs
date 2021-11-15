import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import FilterProduct from '../productlist/filterproduct';
import Productlist2 from '../productlist/index';
import SidebarComponent from '../sidebar';
import './style.scss';



class Homepage extends Component {

    add_ward = () => {
        return this.props.add_ward()
    }
    add_district = () => {
        return this.props.add_district()
    }

    render() {

        // const { name_detail, prize_detail, src_detail } = this.state.detail
        return (
            <div className='container-fluid p-0'>
                <div className='productpage_background' >
                </div>
                <ul className="nav m-4 justify-content-center">
                    <li>
                        <Link to='/' className='btn btn-dark me-3'>All Product</Link>
                    </li>
                    <li>
                        <Dropdown >
                            <Dropdown.Toggle variant="dark" id="dropdown-basic"> Category </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <SidebarComponent />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <Route path='/category/:id' component={FilterProduct} exact />
                <Route path='/' component={Productlist2} exact />
            </div>

        );
    }
}
const mapStatetoProps = (state) => {
    return {
        reduxProps: state.redux1,
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        add_ward() {
            dispatch({ type: 'Add_Ward' })
        },
        add_district() {
            dispatch({ type: 'Add_District' })
        }

    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Homepage);
