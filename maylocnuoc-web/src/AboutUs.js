import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AboutUs.css"
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortAboutUS: null,
            longAboutUS: null
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        fetch( ConstantsVar.API_URL + "/api/gioi-thieu")
        .then(res => res.json())
        .then(
            (result) => {
                if (result.data && result.data[0]) {
                    console.log(result.data[0].mo_ta_ngan)
                    this.setState({shortAboutUS: result.data[0].mo_ta_ngan, longAboutUS: result.data[0].mo_ta_dai})
                }
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
                                    {
                                        !this.state.shortAboutUS &&
                                        <div>
                                            <h5 className="col_1 mgt">Chúng Tôi Tin Rằng Chất Lượng Tốt Hơn Số Lượng</h5>
                                            <h3>Chào Mừng Đến Với Lọc Nước Văn Lộc! Mục đích của chúng tôi là cung cấp sản phẩm sạch và an toàn cho bạn.....</h3>
                                            <p>VANLOC jsc,. là công ty chuyên doanh thiết bị xử lý nước công nghiệp và dân dụng, với nhiều năm kinh nghiệm hoạt động chuyên sâu trong ngành xử lý nước. Xác định nguồn nước sạch luôn quan trọng và cần thiết trong mọi hoạt động của cuộc sống và sản xuất. Sứ mệnh hoạt động của VANLOC là tạo ra giá trị tiêu dùng cho các khách hàng bằng sản phẩm chất lượng và dịch vụ sau bán hàng hài lòng.</p>
                                            <p>Slogan Của Công Ty Chúng Tôi</p><br/>
                                            <blockquote><p className="mgt">Công nghệ tạo sự khác biệt.</p></blockquote>
                                        </div>
                                    }
                                    {
                                        this.state.shortAboutUS &&
                                        <div dangerouslySetInnerHTML={{ __html: this.state.shortAboutUS }}>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6">
                            <div className="about_1r clearfix">
                            <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/49.jpg" className="iw" alt="abc"/>
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
                                {
                                    this.state.longAboutUS &&
                                    <div dangerouslySetInnerHTML={{ __html: this.state.longAboutUS }}>
                                    </div>
                                }
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