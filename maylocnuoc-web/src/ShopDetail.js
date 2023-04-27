import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import withRouter from "./common/withRouter";
import "./ShopDetail.css"
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";

class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            relevant_products: null
        }
        this.fetchProduct = this.fetchProduct.bind(this);
        this.handleClickRelevantProduct = this.handleClickRelevantProduct.bind(this);
        this.openContact = this.openContact.bind(this);
    }

    openContact () {
        window.open("https://zalo.me/0976464994", '_blank').focus();
    }

    handleClickRelevantProduct (evt) {
        let texts = (evt.target.id).split("-")
        let id = Number(texts[texts.length - 1])
        this.fetchProduct(id)
    }

    componentDidMount() {
        this.fetchProduct(this.props.params.id)
    }
    fetchProduct (productId) {
        window.scrollTo(0, 0);
        fetch( ConstantsVar.API_URL + "/api/san-pham/" + productId)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({product: result});
                fetch( ConstantsVar.API_URL + "/api/san-pham/" +  productId + "/san-pham-lien-quan")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({relevant_products: result.data})
                    }
                )
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
                                <h1 className="mgt">Chi Tiết Sản Phẩm</h1>
                                <h5><Link to="/">Trang Chủ</Link> / <span className="col_1">Chi Tiết Sản Phẩm</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="shop_detail">
                    <div className="container">
                    <div className="row">
                    <div className="shop_detail_1 clearfix">
                        <div className="col-sm-5">
                        <div className="shop_detail_1l clearfix">
                        {
                            this.state.product &&
                            <img src={this.state.product.hinh_anh} alt="abc" className="iw"/>
                        }
                        
                        </div>
                        </div>
                        <div className="col-sm-7">
                        <div className="shop_detail_1r clearfix">
                        <div className="center_shop_1r clearfix">
                        <div className="center_shop_1ri clearfix">
                        <h5 className="mgt">Sản Phẩm</h5>
                        {
                            this.state.product &&
                            <h3>{this.state.product.ten}</h3>
                        }
                        </div>
                        <div className="center_shop_1ri1 clearfix">
                            {
                                this.state.product &&
                                <p>{this.state.product.mo_ta_ngan}</p>
                            }
                            {
                                this.state.product &&
                                <h4 className="col_2">
                                {this.state.product.gia.toLocaleString()}
                                </h4>
                            }
                            <div className="pd_n1 clearfix">
                                    <h4>
                                        <input onClick={this.openContact} className="button" value="Đặt Mua Sản Phẩm" type="submit"/>
                                    </h4>
                            </div>
                            <ul className="social-network social-circle">
                                <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="shop_detail_2 clearfix">
                        <div className="product_detail_1 clearfix">
                            <ul className="nav nav-tabs tab_1">
                                <li className="active"><a data-toggle="tab" href="#home"><i className="fa fa-globe"></i>Mô Tả</a></li>
                                <li className=""><a data-toggle="tab" href="#menu"><i className="fa fa-photo"></i> Thông Tin Thêm</a></li>
                            </ul>
                            <div className="tab-content clearfix">
                                <div id="home" className="tab-pane fade clearfix active in">
                                    <div className="click clearfix">
                                        <div className="col-sm-12">
                                        <div className="home_i">
                                        {
                                            this.state.product &&
                                            <div dangerouslySetInnerHTML={{ __html: this.state.product.mo_ta_dai }}>
                                            </div>
                                        }
                                        </div>
                                        </div>
                                </div>
                                </div>
                                <div id="menu" className="tab-pane fade clearfix">
                                    <div className="click clearfix">
                                            <div className="col-sm-12">
                                            <div className="menu_i clearfix">
                                                <table>
                                                <tbody>
                                                <tr>
                                                    <td>Giá</td>
                                                    {
                                                        this.state.product &&
                                                        <td>{this.state.product.gia.toLocaleString()}</td>
                                                    }
                                                    
                                                </tr>
                                                <tr>
                                                    <td>Tình Trạng</td>
                                                    <td>Còn Hàng</td>
                                                </tr>
                                                <tr>
                                                    <td>Đánh Giá</td>
                                                    <td>
                                                    <span>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                                </table>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="shop_detail_3 clearfix">
                        <div className="categories_1 clearfix">
                            <div className="col-sm-12 space_left">
                                <h2 className="mgt">Sản Phẩm Liên Quan</h2>
                            </div>
                        </div>
                        <div className="arrive_1 clearfix">
                            {
                                this.state.relevant_products &&
                                this.state.relevant_products.map(
                                    product => (
                                        <div key={"relevant-product-" + product.id} className="col-sm-3 space_left">
                                            <div className="arriv_2m clearfix">
                                                <div className="arriv_2m1 clearfix">
                                                    <Link ><img id={"img-relevant-product-" + product.id} onClick={this.handleClickRelevantProduct} src={product.hinh_anh} alt="abc" className="iw"/></Link>
                                                </div>
                                                <div className="arriv_2m3 clearfix">
                                                    <h6 className="bold mgt wrap-text">{product.ten}</h6>
                                                    <h6 className="normal">
                                                        <span className="span_3 col_1">{product.gia.toLocaleString()}</span> 
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
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
 
export default withRouter(ShopDetail);