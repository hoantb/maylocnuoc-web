import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Shop extends Component {
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
                                <h1 className="mgt">Danh sách máy lọc nước</h1>
                                <h5><Link to="/">Trang chủ</Link> / <span className="col_1">Danh sách máy lọc nước</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="shop" className="clearfix"> 
                <div className="container">
                <div className="row">
                <div className="shop_1 clearfix">
                    <div className="col-sm-3">
                    <div className="shop_1l mgt clearfix">
                    <h4 className="mgt">Color</h4>
                    <ul>
                    <li className="bg_1"></li>
                    <li className="bg_2"></li>
                    <li className="bg_3"></li>
                    <li className="bg_4"></li>
                    <li className="bg_5"></li>
                    <li className="bg_6"></li>
                    <li className="bg_7"></li>
                    <li className="bg_8"></li>
                    <li className="bg_9"></li>
                    <li className="bg_10"></li>
                    <li className="bg_11"></li>
                    <li className="bg_12"></li>
                    <li className="bg_13"></li>
                    </ul>
                    </div>
                    <div className="shop_1l clearfix">
                    <h4 className="mgt">Category</h4>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Medical Equipment</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Jewelry</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Electronics</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Furniture</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Fashion</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Grocery</span></a></h5>
                    </div>
                    <div className="shop_1l1 text-center clearfix">
                    <h5 className="mgt col_1">New Arrivals</h5>
                    <h4>Modern Electronic Thermometer</h4>
                    <h5><a className="button" href="shop_detail.html"><i className="fa fa-shopping-cart"></i> Shop Now</a></h5>
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/4.jpg" className="iw" alt="abc"/>
                    </div>
                    <div className="shop_1l2 clearfix">
                    <h4 className="mgt">Best Seller</h4>
                    <div className="shop_1l2i clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/20.jpg" alt="abc"/>
                    <h5 className="mgt"><a href="shop_detail.html">Thermometer Gun</a></h5>
                    <h6 className="col_1">$90.00</h6>
                    <span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </span>
                    </div>
                    <div className="shop_1l2i clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/21.jpg" alt="abc"/>
                    <h5 className="mgt"><a href="shop_detail.html">Cosmetic Contain</a></h5>
                    <h6 className="col_1">$80.00</h6>
                    <span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    </span>
                    </div>
                    <div className="shop_1l2i clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/22.jpg" alt="abc"/>
                    <h5 className="mgt"><a href="shop_detail.html">Protective Gloves</a></h5>
                    <h6 className="col_1">$60.00</h6>
                    <span>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    </span>
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-9">
                    <div className="shop_1r clearfix">
                    <div className="col-sm-6 space_left">
                        <div className="shop_1rl clearfix">
                        <p className="mgt">We found 9 products available for you</p>
                        </div>
                    </div>
                    <div className="col-sm-6 space_left">
                        <div className="shop_1rr text-right clearfix">
                        <p className="mgt">Sort By:</p>
                        <select className="form-control">
                            <option>Default</option>
                            <option>Popularity</option>
                            <option>Latest</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                        </select>
                        </div>
                    </div>
                    </div>
                    <div className="shop_1r1 clearfix">
                        <div className="col-sm-4 space_left">
                                            <div className="arriv_2m clearfix">
                                            <div className="arriv_2m1 clearfix">
                                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/12.jpg" alt="abc" className="iw"/></a>
                                            </div>
                                            <div className="arriv_2m2 clearfix">
                                            <h5 className="text-center mgt">New</h5>
                                            </div>
                                            <div className="arriv_2m2n clearfix">
                                            <h5 className="text-center mgt">Sale</h5>
                                            </div>
                                            <div className="arriv_2m3 clearfix">
                                            <h4 className="bold mgt">PRODUCT</h4>
                                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                                            <span className="span_1">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            <h3 className="normal">
                                            <span className="span_2">$45.00</span>
                                            <span className="span_3 col_1"> $34.00</span> 
                                            </h3>
                                            </div>
                                            </div>
                                        </div>
                        <div className="col-sm-4 space_left">
                            <div className="arriv_2m clearfix">
                            <div className="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/13.jpg" alt="abc" className="iw"/></a>
                            </div>
                            <div className="arriv_2m2 clearfix">
                            <h5 className="text-center mgt">New</h5>
                            </div>
                            <div className="arriv_2m2n clearfix">
                            <h5 className="text-center mgt">Sale</h5>
                            </div>
                            <div className="arriv_2m3 clearfix">
                            <h4 className="bold mgt">OTHER</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span className="span_1">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h3 className="normal">
                            <span className="span_2">$55.00</span>
                            <span className="span_3 col_1"> $44.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 space_left">
                            <div className="arriv_2m clearfix">
                            <div className="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/14.jpg" alt="abc" className="iw"/></a>
                            </div>
                            <div className="arriv_2m2 clearfix">
                            <h5 className="text-center mgt">New</h5>
                            </div>
                            <div className="arriv_2m2n clearfix">
                            <h5 className="text-center mgt">Sale</h5>
                            </div>
                            <div className="arriv_2m3 clearfix">
                            <h4 className="bold mgt">TRENDING</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span className="span_1">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h3 className="normal">
                            <span className="span_2">$65.00</span>
                            <span className="span_3 col_1"> $54.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop_1r1 clearfix">
                        <div className="col-sm-4 space_left">
                                            <div className="arriv_2m clearfix">
                                            <div className="arriv_2m1 clearfix">
                                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/15.jpg" alt="abc" className="iw"/></a>
                                            </div>
                                            <div className="arriv_2m2 clearfix">
                                            <h5 className="text-center mgt">New</h5>
                                            </div>
                                            <div className="arriv_2m2n clearfix">
                                            <h5 className="text-center mgt">Sale</h5>
                                            </div>
                                            <div className="arriv_2m3 clearfix">
                                            <h4 className="bold mgt">PRODUCT</h4>
                                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                                            <span className="span_1">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            <h3 className="normal">
                                            <span className="span_2">$45.00</span>
                                            <span className="span_3 col_1"> $34.00</span> 
                                            </h3>
                                            </div>
                                            </div>
                                        </div>
                        <div className="col-sm-4 space_left">
                            <div className="arriv_2m clearfix">
                            <div className="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/16.jpg" alt="abc" className="iw"/></a>
                            </div>
                            <div className="arriv_2m2 clearfix">
                            <h5 className="text-center mgt">New</h5>
                            </div>
                            <div className="arriv_2m2n clearfix">
                            <h5 className="text-center mgt">Sale</h5>
                            </div>
                            <div className="arriv_2m3 clearfix">
                            <h4 className="bold mgt">OTHER</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span className="span_1">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h3 className="normal">
                            <span className="span_2">$55.00</span>
                            <span className="span_3 col_1"> $44.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 space_left">
                            <div className="arriv_2m clearfix">
                            <div className="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/17.jpg" alt="abc" className="iw"/></a>
                            </div>
                            <div className="arriv_2m2 clearfix">
                            <h5 className="text-center mgt">New</h5>
                            </div>
                            <div className="arriv_2m2n clearfix">
                            <h5 className="text-center mgt">Sale</h5>
                            </div>
                            <div className="arriv_2m3 clearfix">
                            <h4 className="bold mgt">TRENDING</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span className="span_1">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h3 className="normal">
                            <span className="span_2">$65.00</span>
                            <span className="span_3 col_1"> $54.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop_1r1 clearfix">
                        <div className="col-sm-4 space_left">
                                            <div className="arriv_2m clearfix">
                                            <div className="arriv_2m1 clearfix">
                                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/24.jpg" alt="abc" className="iw"/></a>
                                            </div>
                                            <div className="arriv_2m2 clearfix">
                                            <h5 className="text-center mgt">New</h5>
                                            </div>
                                            <div className="arriv_2m2n clearfix">
                                            <h5 className="text-center mgt">Sale</h5>
                                            </div>
                                            <div className="arriv_2m3 clearfix">
                                            <h4 className="bold mgt">PRODUCT</h4>
                                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                                            <span className="span_1">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            <h3 className="normal">
                                            <span className="span_2">$45.00</span>
                                            <span className="span_3 col_1"> $34.00</span> 
                                            </h3>
                                            </div>
                                            </div>
                                        </div>
                        <div className="col-sm-4 space_left">
                            <div className="arriv_2m clearfix">
                            <div className="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/25.jpg" alt="abc" className="iw"/></a>
                            </div>
                            <div className="arriv_2m2 clearfix">
                            <h5 className="text-center mgt">New</h5>
                            </div>
                            <div className="arriv_2m2n clearfix">
                            <h5 className="text-center mgt">Sale</h5>
                            </div>
                            <div className="arriv_2m3 clearfix">
                            <h4 className="bold mgt">OTHER</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span className="span_1">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h3 className="normal">
                            <span className="span_2">$55.00</span>
                            <span className="span_3 col_1"> $44.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 space_left">
                            <div className="arriv_2m clearfix">
                            <div className="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/26.jpg" alt="abc" className="iw"/></a>
                            </div>
                            <div className="arriv_2m2 clearfix">
                            <h5 className="text-center mgt">New</h5>
                            </div>
                            <div className="arriv_2m2n clearfix">
                            <h5 className="text-center mgt">Sale</h5>
                            </div>
                            <div className="arriv_2m3 clearfix">
                            <h4 className="bold mgt">TRENDING</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span className="span_1">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <h3 className="normal">
                            <span className="span_2">$65.00</span>
                            <span className="span_3 col_1"> $54.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="center_product_1r4r text-center clearfix">
                        <ul className="pagination mgt">
                            <li className="disabled"><a href="shop_detail.html">«</a></li>
                            <li className="active"><a href="shop_detail.html">1 <span className="sr-only">(current)</span></a></li>
                            <li><a href="shop_detail.html">2</a></li>
                            <li><a href="shop_detail.html">3</a></li>
                            <li><a href="shop_detail.html">4</a></li>
                            <li><a href="shop_detail.html">5</a></li>
                            <li><a href="shop_detail.html">»</a></li>
                            </ul>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </section>
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
            <Footer />
        </div>
    );
  }
}
 
export default Shop;