import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                    <div className="col-sm-8">
                    <div className="top_1l clearfix">
                        <ul className="mgt">
                        <li><Link to="/lien-he"><i className="fa fa-phone col_1"></i> 028 62924598</Link></li>
                            <li><Link to="/lien-he"><i className="fa fa-map-marker col_1"></i> 638 Cộng Hòa, Phường 13, Quận Tân Bình, Tp. HCM</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="top_1r clearfix top_1i">
                            <ul className="navbar-right mgt social-network social-circle">
                                <li><a href="#" className="icoRss" title="Theo dõi trên Youtube"><i className="fa fa-rss"></i></a></li>
                                <li><a href="#" className="icoFacebook" title="Theo dõi trên Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="icoTwitter" title="Theo dõi trên Twitter"><i className="fa fa-twitter"></i></a></li>
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
                            <Link className="navbar-brand" to="/"><i className="fa fa-heartbeat"></i> Med <span>Shop</span> </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            <li><Link className="tag_m" to="/">Trang Chủ</Link></li>
                            <li><Link className="tag_m" to="/gioi-thieu">Giới Thiệu</Link></li>
                            <li><Link to="/san-pham" className="tag_m" >Sản Phẩm</Link></li>
                            <li><Link className="tag_m" to="/dich-vu">Dịch Vụ</Link></li>
                            <li><Link className="tag_m" to="/tin-tuc">Tin Tức</Link></li>
                            <li><Link className="tag_m" to="/lien-he">Liên Hệ</Link></li>
                        </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown" style={{"paddingTop": "7px", "width": "150px"}}> <input  type="text" className="form-control" placeholder="Tìm Kiếm..." /></li>
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