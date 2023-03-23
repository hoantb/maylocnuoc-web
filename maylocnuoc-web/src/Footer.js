import React, { Component } from "react";
 
class Footer extends Component {
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
                    <p>Free shipping world wide</p>
                    </div>
                    </div>
                    <div className="col-sm-3 connect_1m">
                    <div className="connect_1l clearfix">
                        <span><i className="fa fa-headphones"></i></span>
                    </div>
                    <div className="connect_1r clearfix">
                    <h4>Support 24/7</h4>
                    <p>Contact us 24 hours a day</p>
                    </div>
                    </div>
                    <div className="col-sm-3 connect_1m">
                    <div className="connect_1l clearfix">
                        <span><i className="fa fa-credit-card"></i></span>
                    </div>
                    <div className="connect_1r clearfix">
                    <h4>Secure Payments</h4>
                    <p>100% payment protection</p>
                    </div>
                    </div>
                    <div className="col-sm-3 connect_1m border_none">
                    <div className="connect_1l clearfix">
                        <span><i className="fa fa-shopping-cart"></i></span>
                    </div>
                    <div className="connect_1r clearfix">
                    <h4>Easy Return</h4>
                    <p>Simple returns policy</p>
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
                    <a className="navbar-brand" href="index.html"><i className="fa fa-heartbeat"></i> Med <span>Shop</span> </a>
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
                    <h4 className="mgt">Thông Tin</h4>
                    <ul>
                    <li><a href="#">Giới Thiệu</a></li>
                    <li><a href="#">Liên Hệ</a></li>
                    <li><a href="#">Chính Sách</a></li>
                    <li><a href="#">Điều Khoản & Điều Kiện</a></li>
                    </ul>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="footer_1i1 clearfix">
                    <h4 className="mgt">Customer Care</h4>
                    <ul>
                    <li><a href="#">Tư Vấn</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="#">Wishlist</a></li>
                    </ul>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="footer_1i1 clearfix">
                    <h4 className="mgt">Bảng Tin</h4>
                    <p>Đăng ký danh sách gửi thư của chúng tôi để nhận các bản cập nhật và ưu đãi mới nhất.</p>
                    <input className="form-control" placeholder="Địa Chỉ Email" type="text"/>
                    <h5><a className="button" href="#"> Đăng Ký Ngay</a></h5>
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
                    <p className="mgt">© 2023 Lọc Nước Văn Lộc | Design by <a className="col_1" href="http://www.templateonweb.com">admin@locnuocvanloc.com</a></p>
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