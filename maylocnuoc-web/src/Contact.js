import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css"
import { Link } from "react-router-dom";
class Contact extends Component {
  componentDidMount() {
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
                    <h5><a href="#">Trang Chủ</a> / <span className="col_1">Liên Hệ</span></h5>
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
                    <h4>Address</h4>
                    <p><Link href="#">638 Cộng Hòa, P. 13,</Link></p>
                    <p><Link href="#">Q. Tân Bình, Tp. HCM</Link></p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="contact_1i text-center clearfix">
                    <span><i className="fa fa-phone col_1"></i></span>
                    <h4>Điện Thoại</h4>
                    <p><Link href="#">Hotline: 090 44 54 090</Link></p>
                    <p><Link href="#">Tư Vấn:  028 62924598</Link></p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="contact_1i text-center clearfix">
                    <span><i className="fa fa-envelope col_1"></i></span>
                    <h4>Email</h4>
                    <p><Link href="#">admin@locnuocvanloc.com</Link></p>
                    <p><Link href="#">vanloc@gmail.com</Link></p>
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
                    <input className="form-control" type="text"/>
                    </div>
                    <div className="col-sm-6">
                    <h5>Địa Chỉ Email</h5>
                    <input className="form-control" type="text"/>
                    </div>
                    </div>
                    <div className="contact_2l1 clearfix">
                    <div className="col-sm-6">
                    <h5>Số Điện Thoại</h5>
                    <input className="form-control" type="text"/>
                    </div>
                    <div className="col-sm-6">
                    <h5>Tiêu Đề</h5>
                    <input className="form-control" type="text"/>
                    </div>
                    </div>
                    <div className="contact_2l1 clearfix">
                    <div className="col-sm-12">
                    <h5>Tin Nhắn</h5>
                    <textarea className="form-control form_1"></textarea>
                    <h5><Link className="button" href="#">Gửi Tin Nhắn</Link></h5>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.075549209809!2d106.63470605034894!3d10.80552569226403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295a4f6bb5d3%3A0xa159854d96f8ac30!2zNjM4IMSQLiBD4buZbmcgSMOyYSwgUGjGsOG7nW5nIDE1LCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1679650432121!5m2!1sen!2s" width="100%" height="500px" style={{"border": "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                </div>
                </div>
                </section>
             <Footer />
        </div>
    );
  }
}
 
export default Contact;