import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AboutUs.css"
import { Link } from "react-router-dom";

class AboutUs extends Component {
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
                    <h1 className="mgt">Giới Thiệu</h1>
                    <h5><Link to="/">Trang Chủ</Link> / <span className="col_1">Giới Thiệu</span></h5>
                    </div>
                </div>
                </div>
                </div>
                </section>

                <section id="about">
                <div className="container">
                <div className="row">
                    <div className="about_1 clearfix">
                    <div className="col-sm-6">
                    <div className="about_1l clearfix">
                    <h5 className="col_1 mgt">We believe in less but better</h5>
                    <h3>Welcome to MedQ! The purpose of your service is to create our MedQ. So we always want to be by your side....</h3>
                    <p>Our company has been working honestly for 25 years. To make a positive impact in the markets where we operate, to empower partners and the community. we focusing on growth and adding value to customers.</p>
                    <p>A message from our founders</p><br/>
                    <blockquote><p className="mgt">We’ve been able to create a platform that customers can get their hands on whenever they want. It is always our intention to serve you.</p></blockquote>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="about_1r clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/49.jpg" className="iw" alt="abc"/>
                    </div>
                    </div>
                    </div>
                    <div className="about_2 clearfix">
                    <div className="col-sm-3">
                    <div className="about_2i text-center clearfix">
                    <h2 className="col_1 mgt">12M</h2>
                    <h5>Happy Clients</h5>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="about_2i text-center clearfix">
                    <h2 className="col_1 mgt">22M</h2>
                    <h5>Global Customers</h5>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="about_2i text-center clearfix">
                    <h2 className="col_1 mgt">79+</h2>
                    <h5>Experts Employee</h5>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="about_2i text-center clearfix">
                    <h2 className="col_1 mgt">29+</h2>
                    <h5>Awards Win</h5>
                    </div>
                    </div>
                    </div>
                    <div className="about_3 clearfix">
                    <div className="categories_1 clearfix">
                        <div className="col-sm-12">
                        <h2 className="mgt">Why Choose Us</h2>
                        </div>
                </div>
                    <div className="about_3i clearfix clearfix">
                        <div className="col-sm-4">
                        <div className="about_3ii text-center clearfix">
                        <span><i className="fa fa-building-o col_1"></i></span>
                        <h4>High Production</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="about_3ii text-center clearfix">
                        <span><i className="fa fa-chain col_1"></i></span>
                        <h4>Reliable Supplying</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="about_3ii text-center clearfix">
                        <span><i className="fa fa-truck col_1"></i></span>
                        <h4>Quick Delivery</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        </div>
                </div>
                    </div>
                </div>
                </div>
                </section>

                <section id="team_home">
                <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="categories_1 clearfix">
                        <h2 className="mgt">Meet Our Dedicated Doctors</h2>
                </div>
                </div>
                <div className="col-sm-12 space_all">
                    <div className="team_home">
                    <div className="col-sm-3">
                    <div className="team_homei text-center">
                        <div className="grid clearfix">
                        <figure className="effect-jazz">
                            <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/50.jpg" className="iw mgt" height="300" alt="img25"/></a>
                        </figure>
                    </div>
                        <div className="team_homeii">
                        <h4><a href="#">Dapibus Diam</a></h4>
                        <h5>Director</h5>
                        <ul className="social-network social-circle">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="team_homei text-center">
                        <div className="grid clearfix">
                        <figure className="effect-jazz">
                            <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/51.jpg" className="iw mgt" height="300" alt="img25"/></a>
                        </figure>
                    </div>
                        <div className="team_homeii">
                        <h4><a href="#">Nibh Elementum </a></h4>
                        <h5>CEO & Founder</h5>
                        <ul className="social-network social-circle">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="team_homei text-center">
                        <div className="grid clearfix">
                        <figure className="effect-jazz">
                            <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/52.jpg" className="iw mgt" height="300" alt="img25"/></a>
                        </figure>
                    </div>
                        <div className="team_homeii">
                        <h4><a href="#">Sagittis Ipsum</a></h4>
                        <h5>Administrator</h5>
                        <ul className="social-network social-circle">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="team_homei text-center">
                        <div className="grid clearfix">
                        <figure className="effect-jazz">
                            <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/53.jpg" className="iw mgt" height="300" alt="img25"/></a>
                        </figure>
                    </div>
                        <div className="team_homeii">
                        <h4><a href="#">Augue Semper</a></h4>
                        <h5>Chief Officer</h5>
                        <ul className="social-network social-circle">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
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
 
export default AboutUs;