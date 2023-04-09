import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sticky: 0,
            navbar_height: 0,
            search_name: ""
        }
        this.navbar_sticky_ref = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.setSearchName = this.setSearchName.bind(this);
    }

    setSearchName (evt) {
        console.log(evt.target.value);
        this.setState({search_name: evt.target.value});
    }

    handleScroll () {
        console.log("ok")
        if (this.navbar_sticky_ref != null) {
            if (window.pageYOffset >= this.state.sticky + this.state.navbar_height) 
            {
                if (this.navbar_sticky_ref.current) {
                    this.navbar_sticky_ref.current.classList.add("sticky")
                    document.body.style.paddingTop = this.state.navbar_height + 'px';
                }
                
            } 
            else 
            {
                if (this.navbar_sticky_ref.current) {
                    this.navbar_sticky_ref.current.classList.remove("sticky");
                    document.body.style.paddingTop = '0'
                }
            }
        }
    }

    componentDidMount() {
        window.onscroll = this.handleScroll;
        this.setState({sticky: this.navbar_sticky_ref.current.offsetTop})
        this.setState({navbar_height: document.querySelector('.navbar').offsetHeight})
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
                    <nav className="navbar nav_t" ref={this.navbar_sticky_ref}>
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
                                    {/* <li><Link className="tag_m" to="/tin-tuc">Tin Tức</Link></li> */}
                                    <li><Link className="tag_m" to="/lien-he">Liên Hệ</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown" style={{"paddingTop": "7px", "width": "200px"}}> <input onChange={this.setSearchName} type="text" className="form-control" placeholder="Tìm Kiếm..." /></li>
                                    <li className="dropdown"><Link to={"/san-pham/tim-kiem/" + this.state.search_name } className="tag_m1" data-toggle="dropdown"><span className="fa fa-search"></span></Link>
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