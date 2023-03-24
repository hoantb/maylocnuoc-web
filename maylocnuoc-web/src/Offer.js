import React, { Component } from "react";


class Offer extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <div>
            <section id="offer">
                <div className="offer_m clearfix">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6">
                    <div className="offer_r clearfix"></div>
                    </div>
                    <div className="col-sm-6">
                    <div className="offer_l text-center clearfix">
                    <h5 className="col_1 mgt">Deal of the Month</h5>
                    <h1>Up to <span className="col_1">80%</span> OFF. All Sales Are Final!</h1>
                    <ul>
                        <li>553 <br/><span>Days</span></li>
                        <li>24 <br/><span>Hours</span></li>
                        <li>40 <br/><span>Minutes</span></li>
                        <li>15 <br/><span>Seconds</span></li>
                    </ul>
                    <h5><a className="button" href="#"><i className="fa fa-shopping-cart"></i> Shop Now</a></h5>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </section>

                <section id="blog_home">
                <div className="container">
                <div className="row">
                <div className="categories_1 clearfix">
                    <div className="col-sm-12 space_left">
                    <h2 className="mgt">Our Blog</h2>
                    </div>
                </div>
                <div className="blog_home_1 clearfix">
                    <div className="col-sm-4 space_left">
                    <div className="blog_home_1i clearfix">
                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/28.jpg" className="iw" alt="abc"/></a>
                    <p className="bold"><a href="#">A researcher is conducting research on coronavirus in the lab</a></p>
                    <h6><img className="img-circle" src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/31.jpg" alt="abc"/> <a href="#">Dapibus Diam</a> | 04-03-2020</h6>
                    </div>
                    </div>
                    <div className="col-sm-4 space_left">
                    <div className="blog_home_1i clearfix">
                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/29.jpg" className="iw" alt="abc"/></a>
                    <p className="bold"><a href="#">A researcher is conducting research on coronavirus in the lab</a></p>
                    <h6><img className="img-circle" src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/32.jpg" alt="abc"/> <a href="#">Sit Amet</a> | 04-03-2020</h6>
                    </div>
                    </div>
                    <div className="col-sm-4 space_left">
                    <div className="blog_home_1i clearfix">
                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/30.jpg" className="iw" alt="abc"/></a>
                    <p className="bold"><a href="#">A researcher is conducting research on coronavirus in the lab</a></p>
                    <h6><img className="img-circle" src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/33.jpg" alt="abc"/> <a href="#">Sed Cursus</a> | 04-03-2020</h6>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </section>
        </div>
    );
  }
}
 
export default Offer;