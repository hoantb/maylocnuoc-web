import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";


class Service extends Component {
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
                    <h1 className="mgt">Dịch Vụ</h1>
                    <h5><Link to="/">Trang Chủ</Link> / <span className="col_1">Dịch Vụ</span></h5>
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
 
export default Service;