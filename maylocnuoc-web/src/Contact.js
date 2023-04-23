import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css"
import { Link } from "react-router-dom";
import * as ConstantsVar from "./common/constants";
import Popup from 'reactjs-popup';
// import { Modal, Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
//import TestModal from "./TestModal";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.formGopYHoTen = React.createRef();
        this.formGopYEmail = React.createRef();
        this.formGopYSoDientThoai = React.createRef();
        this.formGopYTieuDe = React.createRef();
        this.formGopYTinNhan = React.createRef();
        this.submitTinNhanGopY = this.submitTinNhanGopY.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }

    handleClose() {
        this.setState({
            show: !this.state.show
        });
      };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    clearForm() {
        this.formGopYHoTen.current.value = "";
        this.formGopYEmail.current.value = "";
        this.formGopYSoDientThoai.current.value = "";
        this.formGopYTieuDe.current.value = "";
        this.formGopYTinNhan.current.value = "";
    }

    submitTinNhanGopY(evt){
        let options = {
            method: "POST",
            body: JSON.stringify({
                ten: this.formGopYHoTen.current.value,
                email: this.formGopYEmail.current.value,
                so_dien_thoai: this.formGopYSoDientThoai.current.value,
                tieu_de: this.formGopYTieuDe.current.value,
                tin_nhan: this.formGopYTinNhan.current.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        fetch( ConstantsVar.API_URL + "/api/tin-nhan-gop-y", options)
        .then(res => res.json())
        .then(
            (result) => {
                this.clearForm();
                this.setState({show: true});
            }
        )
    }

    render() {
        return (
            <div>
                <Header />
                <section id="center" className="center_shop"> 
                    <div className="container">
                    <div className="row">
                    <div className="center_shop_1 text-center clearfix">
                        <div className="col-sm-12">
                        <h1 className="mgt">Liên Hệ</h1>
                        <h5><a >Trang Chủ</a> / <span className="col_1">Liên Hệ</span></h5>
                        </div>
                    </div>
                    </div>
                    </div>
                    </section>

                    <section id="contact">
                    <div className="container">
                    <div className="row">
                    <div className="contact_1 clearfix">
                        <div className="col-sm-3">
                        <div className="contact_1i text-center clearfix">
                        <span><i className="fa fa-map-marker col_1"></i></span>
                        <h4>Địa Chỉ</h4>
                        <p><Link >84 Phan Đình Phùng,</Link></p>
                        <p><Link >TP Bảo Lộc, Lâm Đồng</Link></p>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="contact_1i text-center clearfix">
                        <span><i className="fa fa-phone col_1"></i></span>
                        <h4>Điện Thoại</h4>
                        <p><Link>Hotline: 0976 464 994</Link></p>
                        <p><Link >Tư Vấn: 0937 087 900</Link></p>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="contact_1i text-center clearfix">
                        <span><i className="fa fa-envelope col_1"></i></span>
                        <h4>Email</h4>
                        <p><Link>locnuocvanloc@gmail.com</Link></p>
                        <p style={{"display": "None"}}><Link>locnuocvanloc@gmail.com</Link></p>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="contact_1i text-center clearfix">
                        <span><i className="fa fa-clock-o col_1"></i></span>
                        <h4>Giờ Làm Việc</h4>
                        <p>Thứ 2 - Thứ 6</p>
                        <p>8:00AM - 8:00PM</p>
                        </div>
                        </div>
                    </div>
                    <div className="contact_2 clearfix">
                        <div className="col-sm-8">
                            <div className="contact_2l clearfix">
                                <h3>Tin Nhắn Góp Ý</h3>
                            </div><br/>
                            <div className="contact_2l1 clearfix">
                                <div className="col-sm-6">
                                <h5>Họ Và Tên</h5>
                                <input id="test1" className="form-control" type="text" ref={this.formGopYHoTen}/>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Địa Chỉ Email</h5>
                                    <input id="test2" className="form-control" type="text" ref={this.formGopYEmail}/>
                                </div>
                            </div>
                            <div className="contact_2l1 clearfix">
                                <div className="col-sm-6">
                                    <h5>Số Điện Thoại</h5>
                                    <input id="test3" className="form-control" type="text" ref={this.formGopYSoDientThoai}/>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Tiêu Đề</h5>
                                    <input  id="test4" className="form-control" type="text" ref={this.formGopYTieuDe}/>
                                </div>
                            </div>
                            <div className="contact_2l1 clearfix">
                                <div className="col-sm-12">
                                    <h5>Tin Nhắn</h5>
                                    <textarea id="test5" className="form-control form_1" ref={this.formGopYTinNhan}></textarea>
                                    <h5><button onClick={this.submitTinNhanGopY} className="button" >Gửi Tin Nhắn</button></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 space_left">
                        <div className="contact_2l clearfix">
                        <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/48.jpg" className="iw" alt="abc"/>
                        </div>
                        </div>
                    </div>
                    <div className="contact_3 clearfix">
                    <div className="col-sm-12 clearfix">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.2293410919932!2d107.8027106111453!3d11.557781610553905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173f719c9852f1d%3A0xf0ef75ead54264be!2zR2nhuqNpIFBow6FwIEzhu41jIE7GsOG7m2MgVuG6oW4gTOG7mWM!5e0!3m2!1sen!2s!4v1682260728797!5m2!1sen!2s" width="100%" height="500px" style={{"border": "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                            <div className="header"> Gửi tin nhắn thành công </div>
                            <div className="content">
                                {' '}
                                Cảm ơn bạn đã góp ý
                            </div>
                            <div className="actions">
                                <button className="button" onClick={this.handleClose} >
                                    OK
                                </button>
                            </div>
                        </div>
                    </Popup>
                <Footer />
            </div>
        );
    }
}
 
export default Contact;