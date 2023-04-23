import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ConstantsVar from "./common/constants";
import Popup from 'reactjs-popup';
import "./Contact.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.formSubscribeEmail = React.createRef();
        this.state = {
            show: false
        }
        this.handleClosePopUp = this.handleClosePopUp.bind(this);
        this.submitEmailSubscribe = this.submitEmailSubscribe.bind(this);
    }

    handleClosePopUp() {
        this.setState({
            show: !this.state.show
        });
    };

    submitEmailSubscribe(evt) {
        let options = {
            method: "POST",
            body: JSON.stringify({
                email: this.formSubscribeEmail.current.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        fetch( ConstantsVar.API_URL + "/api/dang-ky-subscribe", options)
        .then(res => res.json())
        .then(
            (result) => {
                this.formSubscribeEmail.current.value = "";
                this.setState({show: true});
            }
        )
    }

    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section id="connect" className="clearfix">
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-12 space_all">
                        <div className="connect_1 clearfix">
                        <div className="col-sm-3 connect_1m">
                        <div className="connect_1l clearfix">
                            <span><i className="fa fa-truck"></i></span>
                        </div>
                        <div className="connect_1r clearfix">
                        <h4>Free Shipping</h4>
                        <p>Miễn Phí Vận Chuyển</p>
                        </div>
                        </div>
                        <div className="col-sm-3 connect_1m">
                        <div className="connect_1l clearfix">
                            <span><i className="fa fa-headphones"></i></span>
                        </div>
                        <div className="connect_1r clearfix">
                        <h4>Support 24/7</h4>
                        <p>Hỗ Trợ 24/7</p>
                        </div>
                        </div>
                        <div className="col-sm-3 connect_1m">
                        <div className="connect_1l clearfix">
                            <span><i className="fa fa-credit-card"></i></span>
                        </div>
                        <div className="connect_1r clearfix">
                        <h4>Secure Payments</h4>
                        <p>100% Thanh Toán An Toàn</p>
                        </div>
                        </div>
                        <div className="col-sm-3 connect_1m border_none">
                        <div className="connect_1l clearfix">
                            <span><i className="fa fa-shopping-cart"></i></span>
                        </div>
                        <div className="connect_1r clearfix">
                        <h4>Easy Return</h4>
                        <p>Dễ Dàng Đổi Trả</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </section>
                <section id="footer">
                    <div className="container">
                    <div className="row">
                    <div className="footer_1 clearfix">
                        <div className="col-sm-3">
                        <div className="footer_1i clearfix">
                        <Link className="navbar-brand" to="/">
                            <img style={{maxWidth: "100%", height: "100%"}} src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/vl1.PNG" alt="abc"/>
                        </Link>
                        <h5><span className="bold">Điện Thoại:</span> <Link to="/lien-he">0976 464 994</Link></h5>
                        <h5><span className="bold">Email:</span> <Link to="/lien-he">locnuocvanloc@gmail.com</Link></h5>
                        <h5><span className="bold">Địa Chỉ:</span> <Link to="/lien-he">84 Phan Đình Phùng, P2, TP Bảo Lộc, Lâm Đồng</Link></h5>
                        <ul className="social-network social-circle">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" ></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="footer_1i1 clearfix">
                        <h4 className="mgt">Thông Tin</h4>
                        <ul>
                        <li><Link to="/gioi-thieu">Giới Thiệu</Link></li>
                        <li><Link to="/lien-he">Liên Hệ</Link></li>
                        <li><Link to="/gioi-thieu">Chính Sách</Link></li>
                        <li><Link to="/gioi-thieu">Điều Khoản</Link></li>
                        </ul>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="footer_1i1 clearfix">
                        <h4 className="mgt">Hỗ Trợ Khách Hàng</h4>
                        <ul>
                        <li><Link href="#">Tư Vấn</Link></li>
                        <li><Link to="/lien-he">Hướng Dẫn Thanh Toán</Link></li>
                        <li><Link to="/gioi-thieu">Vận chuyển và Giao nhận</Link></li>
                        <li><Link to="/gioi-thieu">Lịch Sử Đặt Hàng</Link></li>
                        </ul>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="footer_1i1 clearfix">
                        <h4 className="mgt">Bảng Tin</h4>
                        <p>Đăng ký danh sách gửi thư của chúng tôi để nhận các bản cập nhật và ưu đãi mới nhất.</p>
                        <input className="form-control" placeholder="Địa Chỉ Email" type="text" ref={this.formSubscribeEmail}/>
                        <h5><button className="button" onClick={this.submitEmailSubscribe}> Đăng Ký Ngay</button></h5>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </section>

                    <section id="footer_bottom">
                    <div className="container">
                    <div className="row">
                    <div className="footer_2 text-center clearfix">
                        <div className="col-sm-12">
                        <p className="mgt">© 2023 Lọc Nước Vạn Lộc | Design by <Link className="col_1" to="/lien-he">locnuocvanloc@gmail.com</Link></p>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                <Popup modal open={this.state.show}>
                    <div className="modalGopY">
                        <button className="close" onClick={this.handleClose}>
                        &times;
                        </button>
                        <div className="header"> Subscibe thành công </div>
                        <div className="content">
                            {' '}
                            Cảm ơn bạn đã subscribe
                        </div>
                        <div className="actions">
                            <button className="button" onClick={this.handleClosePopUp} >
                                OK
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }
}
 
export default Footer;