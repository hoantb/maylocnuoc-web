import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";


class Blog extends Component {
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
                    <h1 className="mgt">Tin Tức</h1>
                    <h5><a href="#">Trang Chủ</a> / <span className="col_1">Tin Tức</span></h5>
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
 
export default Blog;