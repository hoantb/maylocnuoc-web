import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AboutUs.css"
import { Link } from "react-router-dom";

class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
                    <h5 className="col_1 mgt">Chúng Tôi Tin Rằng Chất Lượng Tốt Hơn Số Lượng</h5>
                    <h3>Chào Mừng Đến Với Lọc Nước Văn Lộc! Mục đích của chúng tôi là cung cấp sản phẩm sạch và an toàn cho bạn.....</h3>
                    <p>VANLOC jsc,. là công ty chuyên doanh thiết bị xử lý nước công nghiệp và dân dụng, với nhiều năm kinh nghiệm hoạt động chuyên sâu trong ngành xử lý nước. Xác định nguồn nước sạch luôn quan trọng và cần thiết trong mọi hoạt động của cuộc sống và sản xuất. Sứ mệnh hoạt động của VANLOC là tạo ra giá trị tiêu dùng cho các khách hàng bằng sản phẩm chất lượng và dịch vụ sau bán hàng hài lòng.</p>
                    <p>Slogan Của Công Ty Chúng Tôi</p><br/>
                    <blockquote><p className="mgt">Công nghệ tạo sự khác biệt.</p></blockquote>
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
                        <h2 className="mgt">Tại Sao Nên Chọn Chúng Tôi</h2>
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
             <Footer />
        </div>
    );
  }
}
 
export default AboutUs;