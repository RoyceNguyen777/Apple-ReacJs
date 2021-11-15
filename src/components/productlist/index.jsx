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
                                                        <h3>Màn hình</h3>
                                                        <strong>Công nghệ màn hình</strong>: IPS LCD<br />
                                                        <strong>Độ phân giải</strong>: Full HD (1080 x 1920 pixels)<br />
                                                        <strong>Màn hình rộng</strong>: 5.5"<br />
                                                        <strong>Mặt kính cảm ứng</strong>: Kính oleophobic (ion cường lực)<br />
                                                        <h3>Camera sau</h3>
                                                        <strong>Độ phân giải</strong>: 2 camera 12 MP<br />
                                                        <strong>Quay phim</strong>: Quay phim 4K 2160p@60fps<br />
                                                        <strong>Đèn Flash</strong>: 4 đèn LED (2 tông màu)<br />
                                                        <strong>Chụp ảnh nâng cao</strong>: Lấy nét dự đoán, Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chống rung quang học (OIS)<br />
                                                        <h3>Camera trước</h3>
                                                        <strong>Độ phân giải</strong>: 7 MP<br />
                                                        <strong>Videocall</strong>: Có<br />
                                                        <strong>Thông tin khác</strong>: Camera góc rộng, Selfie ngược sáng HDR, Nhận diện khuôn mặt, Quay video Full HD<br />
                                                        <strong>Hệ điều hành - CPU</strong><br />
                                                        <strong></strong>Hệ điều hành: iOS 11<br />
                                                        <strong>Chipset (hãng SX CPU)</strong>: Apple A11 Bionic<br />
                                                        <strong>Chip đồ họa (GPU)</strong>: Apple GPU (three-core graphics)<br />
                                                        <strong>Bộ nhớ - Lưu trữ</strong> <br />
                                                        <strong>RAM</strong>: 3 GB<br />
                                                        <strong>Bộ nhớ trong</strong>: 64 GB<br />
                                                        <strong>Bộ nhớ còn lại (khả dụng)</strong>: Đang cập nhật<br />
                                                        <strong>Thẻ nhớ ngoài</strong>: Không<br />
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
