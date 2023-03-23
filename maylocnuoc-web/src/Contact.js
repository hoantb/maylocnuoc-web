import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css"

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
                    <p><a href="#">1720 Clud, The Kronx,</a></p>
                    <p><a href="#">MZ 1269, USA</a></p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="contact_1i text-center clearfix">
                    <span><i className="fa fa-phone col_1"></i></span>
                    <h4>Phone</h4>
                    <p><a href="#">Hotline: 12345</a></p>
                    <p><a href="#">Tech: (+123) 456-7898</a></p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="contact_1i text-center clearfix">
                    <span><i className="fa fa-envelope col_1"></i></span>
                    <h4>Email</h4>
                    <p><a href="#">info@gmail.com</a></p>
                    <p><a href="#">info1@gmail.com</a></p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="contact_1i text-center clearfix">
                    <span><i className="fa fa-clock-o col_1"></i></span>
                    <h4>Working Hours</h4>
                    <p>Sunday - Friday</p>
                    <p>8:00AM - 8:00PM</p>
                    </div>
                    </div>
                </div>
                <div className="contact_2 clearfix">
                    <div className="col-sm-8">
                    <div className="contact_2l clearfix">
                    <h5 className="mgt col_1">Get In Touch</h5>
                    <h3>We want to provide you with a great experience</h3>
                    </div><br/>
                    <div className="contact_2l1 clearfix">
                    <div className="col-sm-6">
                    <h5>Full Name</h5>
                    <input className="form-control" type="text"/>
                    </div>
                    <div className="col-sm-6">
                    <h5>Email Address</h5>
                    <input className="form-control" type="text"/>
                    </div>
                    </div>
                    <div className="contact_2l1 clearfix">
                    <div className="col-sm-6">
                    <h5>Mobile No.</h5>
                    <input className="form-control" type="text"/>
                    </div>
                    <div className="col-sm-6">
                    <h5>Subject</h5>
                    <input className="form-control" type="text"/>
                    </div>
                    </div>
                    <div className="contact_2l1 clearfix">
                    <div className="col-sm-12">
                    <h5>Message</h5>
                    <textarea className="form-control form_1"></textarea>
                    <h5><a className="button" href="#">Send Message</a></h5>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sin!4v1530774403788" width="100%" height="500px" frameborder="0" style={{"border": "0"}} allowfullscreen=""></iframe>
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