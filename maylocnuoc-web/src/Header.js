import React, { Component } from "react";


class Header extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <div>
            <section id="top">
                <div className="container">
                <div className="row">
                <div className="top_1 clearfix">
                    <div className="col-sm-7">
                    <div className="top_1l clearfix">
                        <ul className="mgt">
                        <li><a href="#"><i className="fa fa-phone col_1"></i> (+123) 456-7898</a></li>
                            <li><a href="#"><i className="fa fa-map-marker col_1"></i> 1370 Clvd, The Bronx, OZ 2169, NZ</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="top_1r clearfix top_1i">
                            <ul className="navbar-right mgt social-network social-circle">
                                <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </section>
            <section id="header" className="clearfix">
                <nav className="navbar nav_t">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><i className="fa fa-heartbeat"></i> Med <span>Shop</span> </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            <li><a className="tag_m active_tab" href="index.html">Home</a></li>
                            <li><a className="tag_m" href="about.html">About</a></li>
                            <li><a to="/shop" className="tag_m" href="shop.html">Product</a></li>
                            <li><a className="tag_m" href="shop_detail.html">Detail</a></li>
                            <li className="dropdown">
                                <a className="tag_m" href="#" data-toggle="dropdown" role="button" aria-expanded="false">Blog<span className="caret"></span></a>
                                <ul className="dropdown-menu drop_1" role="menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a className="border_none" href="blog_details.html">Blog Detail</a></li>
                                </ul>
                                </li>
                            <li><a className="tag_m" href="contact.html">Contact</a></li>
                            
                            
                        </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown" style={{"paddingTop": "7px", "width": "270px"}}> <input  type="text" className="form-control" placeholder="Search" /></li>
                                <li className="dropdown"><a className="tag_m1" href="#" data-toggle="dropdown"><span className="fa fa-search"></span></a>
                                    {/* <ul className="dropdown-menu drop_2" style={{"minWidth": "300px"}}>
                                        <li>
                                            <div className="row_1">
                                                <div className="col-sm-12">
                                                    <form className="navbar-form navbar-left" role="search">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search" />
                                                        <span className="input-group-btn">
                                                            <button className="btn btn-primary" type="button">
                                                                Search</button>
                                                        </span>
                                                    </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
  }
}
 
export default Header;