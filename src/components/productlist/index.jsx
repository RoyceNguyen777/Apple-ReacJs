import { Component } from 'react';
import { Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import WithCounter from '../pages/auth/counter/withCounter';
import { RequestApiProduct } from '../Redux/action/fetchapi';
import Button from '@restart/ui/esm/Button';

class Productlist2 extends Component {
    constructor(props) {
        super()
        this.state = {
            show: false
        }
    }
    handleClose = () => {
        this.setState(pre => pre.show = false)
    }
    handleShow = () => {
        this.setState(pre => pre.show = true)
    }
    componentDidMount() {
        this.props.fetchapi();
    }
    render() {

        return (
            <div className='container'>
                <div className='row'>
                    {
                        this.props.myapi.map(item => {
                            const { id, name, prize, stock, src, } = item
                            return (
                                <div className='col-sm-12 col-lg-4 col-12' key={id}>
                                    <div className='card mt-4'>
                                        <Link to={`/product/${id}`}>
                                            <img src={src} alt={src} />
                                        </Link>
                                        <div className='card-body '>
                                            <h6>Stock: <strong style={{ color: this.props.color(stock), fontSize: '18px' }}>{stock}</strong></h6>
                                            <h2 className="card-title text-center"><strong>{name}</strong></h2>
                                            <h4 className='text-center'>From {prize}</h4>
                                        </div>
                                        <div className='mx-auto mb-3'>
                                            <Button type='submit' className='btn btn-primary' id='btn-sell' onClick={() => this.props.cart(item)}>Add To Cart</Button>
                                            <Button className='btn btn-success ms-4' id='btn-sell' onClick={this.handleShow}>View Detail</Button>

                                            <Modal show={this.state.show} onHide={this.handleClose}>
                                                <Modal.Body>
                                                    <div>
                                                        <h3>M??n h??nh</h3>
                                                        <strong>C??ng ngh??? m??n h??nh</strong>: IPS LCD<br />
                                                        <strong>????? ph??n gi???i</strong>: Full HD (1080 x 1920 pixels)<br />
                                                        <strong>M??n h??nh r???ng</strong>: 5.5"<br />
                                                        <strong>M???t k??nh c???m ???ng</strong>: K??nh oleophobic (ion c?????ng l???c)<br />
                                                        <h3>Camera sau</h3>
                                                        <strong>????? ph??n gi???i</strong>: 2 camera 12 MP<br />
                                                        <strong>Quay phim</strong>: Quay phim 4K 2160p@60fps<br />
                                                        <strong>????n Flash</strong>: 4 ????n LED (2 t??ng m??u)<br />
                                                        <strong>Ch???p ???nh n??ng cao</strong>: L???y n??t d??? ??o??n, Ch???p ???nh x??a ph??ng, T??? ?????ng l???y n??t, Ch???m l???y n??t, Nh???n di???n khu??n m???t, HDR, Panorama, Ch???ng rung quang h???c (OIS)<br />
                                                        <h3>Camera tr?????c</h3>
                                                        <strong>????? ph??n gi???i</strong>: 7 MP<br />
                                                        <strong>Videocall</strong>: C??<br />
                                                        <strong>Th??ng tin kh??c</strong>: Camera g??c r???ng, Selfie ng?????c s??ng HDR, Nh???n di???n khu??n m???t, Quay video Full HD<br />
                                                        <strong>H??? ??i???u h??nh - CPU</strong><br />
                                                        <strong></strong>H??? ??i???u h??nh: iOS 11<br />
                                                        <strong>Chipset (h??ng SX CPU)</strong>: Apple A11 Bionic<br />
                                                        <strong>Chip ????? h???a (GPU)</strong>: Apple GPU (three-core graphics)<br />
                                                        <strong>B??? nh??? - L??u tr???</strong> <br />
                                                        <strong>RAM</strong>: 3 GB<br />
                                                        <strong>B??? nh??? trong</strong>: 64 GB<br />
                                                        <strong>B??? nh??? c??n l???i (kh??? d???ng)</strong>: ??ang c???p nh???t<br />
                                                        <strong>Th??? nh??? ngo??i</strong>: Kh??ng<br />
                                                    </div>
                                                    <Modal.Footer>
                                                        <Button className='btn btn-primary' onClick={this.handleClose}>Close</Button>
                                                    </Modal.Footer>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        myapi: state.fetchapi
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        fetchapi: () => {
            dispatch(RequestApiProduct())
        }
    }
}
export default WithCounter(connect(mapStatetoProps, mapDispatchtoProps)(Productlist2))
