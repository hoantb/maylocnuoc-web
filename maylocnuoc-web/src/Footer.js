import React, { Component } from "react";
 
class Footer extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <div>
            <section id="footer">
                <div className="container">
                <div className="row">
                <div className="footer_1 clearfix">
                    <div className="col-sm-3">
                    <div className="footer_1i clearfix">
                    <a className="navbar-brand" href="index.html"><i className="fa fa-heartbeat"></i> Med <span>Shop</span> </a>
                    <h5><span className="bold">Hotline:</span> <a href="#">01234</a></h5>
                    <h5><span className="bold">Phone:</span> <a href="#">(+123) 456-7898</a></h5>
                    <h5><span className="bold">Email:</span> <a href="#">info@gmail.com</a></h5>
                    <h5><span className="bold">Address:</span> <a href="#">2190 Clue, The Xronz, OZ 0038, USA</a></h5>
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
                    <h4 className="mgt">Information</h4>
                    <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Delivery Information</a></li>
                    <li><a href="#">Orders and Returns</a></li>
                    </ul>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="footer_1i1 clearfix">
                    <h4 className="mgt">Customer Care</h4>
                    <ul>
                    <li><a href="#">Help & FAQs</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">Newsletter</a></li>
                    </ul>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="footer_1i1 clearfix">
                    <h4 className="mgt">Newsletter</h4>
                    <p>Sign up for our mailing list to get the latest updates & offers.</p>
                    <input className="form-control" placeholder="Email address" type="text"/>
                    <h5><a className="button" href="#"> Subscribe Now</a></h5>
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
                    <p className="mgt">© 2013 Your Website Name. All Rights Reserved | Design by <a className="col_1" href="http://www.templateonweb.com">TemplateOnWeb</a></p>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </div>
    );
  }
}
 
export default Footer;