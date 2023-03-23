import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CenterShop from "./CenterShop";
import './Shop.css'

class Shop extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <React.Fragment>
            <Header/>
            <CenterShop/>
            <section id="shop" class="clearfix"> 
                <div class="container">
                <div class="row">
                <div class="shop_1 clearfix">
                    <div class="col-sm-3">
                    <div class="shop_1l mgt clearfix">
                    <h4 class="mgt">Color</h4>
                    <ul>
                    <li class="bg_1"></li>
                    <li class="bg_2"></li>
                    <li class="bg_3"></li>
                    <li class="bg_4"></li>
                    <li class="bg_5"></li>
                    <li class="bg_6"></li>
                    <li class="bg_7"></li>
                    <li class="bg_8"></li>
                    <li class="bg_9"></li>
                    <li class="bg_10"></li>
                    <li class="bg_11"></li>
                    <li class="bg_12"></li>
                    <li class="bg_13"></li>
                    </ul>
                    </div>
                    <div class="shop_1l clearfix">
                    <h4 class="mgt">Category</h4>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Medical Equipment</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Jewelry</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Electronics</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Furniture</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Fashion</span></a></h5>
                    <h5><a href="shop_detail.html"><input type="checkbox"/> <span>Grocery</span></a></h5>
                    </div>
                    <div class="shop_1l1 text-center clearfix">
                    <h5 class="mgt col_1">New Arrivals</h5>
                    <h4>Modern Electronic Thermometer</h4>
                    <h5><a class="button" href="shop_detail.html"><i class="fa fa-shopping-cart"></i> Shop Now</a></h5>
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/4.jpg" class="iw" alt="abc"/>
                    </div>
                    <div class="shop_1l2 clearfix">
                    <h4 class="mgt">Best Seller</h4>
                    <div class="shop_1l2i clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/20.jpg" alt="abc"/>
                    <h5 class="mgt"><a href="shop_detail.html">Thermometer Gun</a></h5>
                    <h6 class="col_1">$90.00</h6>
                    <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    </span>
                    </div>
                    <div class="shop_1l2i clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/21.jpg" alt="abc"/>
                    <h5 class="mgt"><a href="shop_detail.html">Cosmetic Contain</a></h5>
                    <h6 class="col_1">$80.00</h6>
                    <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    </span>
                    </div>
                    <div class="shop_1l2i clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/22.jpg" alt="abc"/>
                    <h5 class="mgt"><a href="shop_detail.html">Protective Gloves</a></h5>
                    <h6 class="col_1">$60.00</h6>
                    <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    </span>
                    </div>
                    </div>
                    </div>
                    <div class="col-sm-9">
                    <div class="shop_1r clearfix">
                    <div class="col-sm-6 space_left">
                        <div class="shop_1rl clearfix">
                        <p class="mgt">We found 9 products available for you</p>
                        </div>
                    </div>
                    <div class="col-sm-6 space_left">
                        <div class="shop_1rr text-right clearfix">
                        <p class="mgt">Sort By:</p>
                        <select class="form-control">
                            <option>Default</option>
                            <option>Popularity</option>
                            <option>Latest</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                        </select>
                        </div>
                    </div>
                    </div>
                    <div class="shop_1r1 clearfix">
                        <div class="col-sm-4 space_left">
                                            <div class="arriv_2m clearfix">
                                            <div class="arriv_2m1 clearfix">
                                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/12.jpg" alt="abc" class="iw"/></a>
                                            </div>
                                            <div class="arriv_2m2 clearfix">
                                            <h5 class="text-center mgt">New</h5>
                                            </div>
                                            <div class="arriv_2m2n clearfix">
                                            <h5 class="text-center mgt">Sale</h5>
                                            </div>
                                            <div class="arriv_2m3 clearfix">
                                            <h4 class="bold mgt">PRODUCT</h4>
                                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                                            <span class="span_1">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>
                                            <h3 class="normal">
                                            <span class="span_2">$45.00</span>
                                            <span class="span_3 col_1"> $34.00</span> 
                                            </h3>
                                            </div>
                                            </div>
                                        </div>
                        <div class="col-sm-4 space_left">
                            <div class="arriv_2m clearfix">
                            <div class="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/13.jpg" alt="abc" class="iw"/></a>
                            </div>
                            <div class="arriv_2m2 clearfix">
                            <h5 class="text-center mgt">New</h5>
                            </div>
                            <div class="arriv_2m2n clearfix">
                            <h5 class="text-center mgt">Sale</h5>
                            </div>
                            <div class="arriv_2m3 clearfix">
                            <h4 class="bold mgt">OTHER</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span class="span_1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <h3 class="normal">
                            <span class="span_2">$55.00</span>
                            <span class="span_3 col_1"> $44.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-4 space_left">
                            <div class="arriv_2m clearfix">
                            <div class="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/14.jpg" alt="abc" class="iw"/></a>
                            </div>
                            <div class="arriv_2m2 clearfix">
                            <h5 class="text-center mgt">New</h5>
                            </div>
                            <div class="arriv_2m2n clearfix">
                            <h5 class="text-center mgt">Sale</h5>
                            </div>
                            <div class="arriv_2m3 clearfix">
                            <h4 class="bold mgt">TRENDING</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span class="span_1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <h3 class="normal">
                            <span class="span_2">$65.00</span>
                            <span class="span_3 col_1"> $54.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop_1r1 clearfix">
                        <div class="col-sm-4 space_left">
                                            <div class="arriv_2m clearfix">
                                            <div class="arriv_2m1 clearfix">
                                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/15.jpg" alt="abc" class="iw"/></a>
                                            </div>
                                            <div class="arriv_2m2 clearfix">
                                            <h5 class="text-center mgt">New</h5>
                                            </div>
                                            <div class="arriv_2m2n clearfix">
                                            <h5 class="text-center mgt">Sale</h5>
                                            </div>
                                            <div class="arriv_2m3 clearfix">
                                            <h4 class="bold mgt">PRODUCT</h4>
                                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                                            <span class="span_1">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>
                                            <h3 class="normal">
                                            <span class="span_2">$45.00</span>
                                            <span class="span_3 col_1"> $34.00</span> 
                                            </h3>
                                            </div>
                                            </div>
                                        </div>
                        <div class="col-sm-4 space_left">
                            <div class="arriv_2m clearfix">
                            <div class="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/16.jpg" alt="abc" class="iw"/></a>
                            </div>
                            <div class="arriv_2m2 clearfix">
                            <h5 class="text-center mgt">New</h5>
                            </div>
                            <div class="arriv_2m2n clearfix">
                            <h5 class="text-center mgt">Sale</h5>
                            </div>
                            <div class="arriv_2m3 clearfix">
                            <h4 class="bold mgt">OTHER</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span class="span_1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <h3 class="normal">
                            <span class="span_2">$55.00</span>
                            <span class="span_3 col_1"> $44.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-4 space_left">
                            <div class="arriv_2m clearfix">
                            <div class="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/17.jpg" alt="abc" class="iw"/></a>
                            </div>
                            <div class="arriv_2m2 clearfix">
                            <h5 class="text-center mgt">New</h5>
                            </div>
                            <div class="arriv_2m2n clearfix">
                            <h5 class="text-center mgt">Sale</h5>
                            </div>
                            <div class="arriv_2m3 clearfix">
                            <h4 class="bold mgt">TRENDING</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span class="span_1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <h3 class="normal">
                            <span class="span_2">$65.00</span>
                            <span class="span_3 col_1"> $54.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop_1r1 clearfix">
                        <div class="col-sm-4 space_left">
                                            <div class="arriv_2m clearfix">
                                            <div class="arriv_2m1 clearfix">
                                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/24.jpg" alt="abc" class="iw"/></a>
                                            </div>
                                            <div class="arriv_2m2 clearfix">
                                            <h5 class="text-center mgt">New</h5>
                                            </div>
                                            <div class="arriv_2m2n clearfix">
                                            <h5 class="text-center mgt">Sale</h5>
                                            </div>
                                            <div class="arriv_2m3 clearfix">
                                            <h4 class="bold mgt">PRODUCT</h4>
                                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                                            <span class="span_1">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>
                                            <h3 class="normal">
                                            <span class="span_2">$45.00</span>
                                            <span class="span_3 col_1"> $34.00</span> 
                                            </h3>
                                            </div>
                                            </div>
                                        </div>
                        <div class="col-sm-4 space_left">
                            <div class="arriv_2m clearfix">
                            <div class="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/25.jpg" alt="abc" class="iw"/></a>
                            </div>
                            <div class="arriv_2m2 clearfix">
                            <h5 class="text-center mgt">New</h5>
                            </div>
                            <div class="arriv_2m2n clearfix">
                            <h5 class="text-center mgt">Sale</h5>
                            </div>
                            <div class="arriv_2m3 clearfix">
                            <h4 class="bold mgt">OTHER</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span class="span_1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <h3 class="normal">
                            <span class="span_2">$55.00</span>
                            <span class="span_3 col_1"> $44.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-4 space_left">
                            <div class="arriv_2m clearfix">
                            <div class="arriv_2m1 clearfix">
                                <a href="shop_detail.html"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/26.jpg" alt="abc" class="iw"/></a>
                            </div>
                            <div class="arriv_2m2 clearfix">
                            <h5 class="text-center mgt">New</h5>
                            </div>
                            <div class="arriv_2m2n clearfix">
                            <h5 class="text-center mgt">Sale</h5>
                            </div>
                            <div class="arriv_2m3 clearfix">
                            <h4 class="bold mgt">TRENDING</h4>
                            <p><a href="shop_detail.html">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                            <span class="span_1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </span>
                            <h3 class="normal">
                            <span class="span_2">$65.00</span>
                            <span class="span_3 col_1"> $54.00</span> 
                            </h3>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="center_product_1r4r text-center clearfix">
                        <ul class="pagination mgt">
                            <li class="disabled"><a href="shop_detail.html">«</a></li>
                            <li class="active"><a href="shop_detail.html">1 <span class="sr-only">(current)</span></a></li>
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

                <section id="connect" class="clearfix">
                <div class="container">
                <div class="row">
                <div class="col-sm-12 space_all">
                    <div class="connect_1 clearfix">
                    <div class="col-sm-3 connect_1m">
                    <div class="connect_1l clearfix">
                        <span><i class="fa fa-truck"></i></span>
                    </div>
                    <div class="connect_1r clearfix">
                    <h4>Free Shipping</h4>
                    <p>Free shipping world wide</p>
                    </div>
                    </div>
                    <div class="col-sm-3 connect_1m">
                    <div class="connect_1l clearfix">
                        <span><i class="fa fa-headphones"></i></span>
                    </div>
                    <div class="connect_1r clearfix">
                    <h4>Support 24/7</h4>
                    <p>Contact us 24 hours a day</p>
                    </div>
                    </div>
                    <div class="col-sm-3 connect_1m">
                    <div class="connect_1l clearfix">
                        <span><i class="fa fa-credit-card"></i></span>
                    </div>
                    <div class="connect_1r clearfix">
                    <h4>Secure Payments</h4>
                    <p>100% payment protection</p>
                    </div>
                    </div>
                    <div class="col-sm-3 connect_1m border_none">
                    <div class="connect_1l clearfix">
                        <span><i class="fa fa-shopping-cart"></i></span>
                    </div>
                    <div class="connect_1r clearfix">
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
        </React.Fragment>
    );
  }
}
 
export default Shop;