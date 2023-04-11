import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CenterShop from "./CenterShop";
import './Shop.css'
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";
import withRouter from "./common/withRouter";

class ProductCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null,
            specialCategories: null,
            special_products: null,
        }
    }

    componentDidMount() {
        fetch( ConstantsVar.API_URL + "/api/danh-muc/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({categories: result})
            }
        )
        fetch( ConstantsVar.API_URL + "/api/danh-muc/danh-muc-trang-chu/")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({specialCategories: result.data})
            }
        )
        fetch( ConstantsVar.API_URL + "/api/san-pham-noi-bat/")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({special_products: result})
            }
        )
    }
    
    render() {
        return (
            <div>
                <section id="shop" className="clearfix"> 
                    <div className="container">
                    <div className="row">
                    <div className="shop_1 clearfix">
                        <div className="col-sm-3">
                            <div className="shop_1l clearfix">
                                <h2 className="mgt">Danh Mục</h2>
                                <h5> <span><Link to="/san-pham" >Xem Tất Cả Sản Phẩm</Link></span></h5>
                                {
                                    this.state.categories &&
                                    this.state.categories.map(
                                        (category, index) => (
                                            <h5 key={"category-" + index}> <span><Link to={"/san-pham/filter/" + category.id} >{category.ten}</Link></span></h5>
                                        )
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="sell_1 clearfix">
                                <div className="col-sm-9 space_left">
                                    <h2 className="mgt">Sản Phẩm Nổi Bật</h2>
                                </div>
                                <div className="col-sm-3 space_left">
                                    <div className="controls pull-right hidden-xs">
                                        <a className="left fa fa-chevron-left btn btn-success" href="#carousel-best-selling" data-slide="prev"></a>
                                        <a className="right fa fa-chevron-right btn btn-success" href="#carousel-best-selling" data-slide="next"></a>
                                    </div>
                                </div>
                            </div>
                            <div id="carousel-best-selling" className="carousel slide hidden-xs" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item active">
                                    {
                                        this.state.special_products &&
                                        this.state.special_products.map(
                                            (special_product, index) => (
                                                index < 4 &&
                                                <div className="col-sm-3 space_left">
                                                    <div className="arriv_2m clearfix">
                                                    <div className="arriv_2m1 clearfix">
                                                        <Link to={"/chi-tiet-san-pham/" + special_product.id}><img src={special_product.san_pham.hinh_anh} alt="abc" className="iw"/></Link>
                                                    </div>
                                                    <div className="arriv_2m3 clearfix">
                                                        <h6 className="bold mgt wrap-text">{special_product.san_pham.ten}</h6>
                                                        <h3 className="normal">
                                                            <span className="span_3 col_1">{special_product.san_pham.gia.toLocaleString()}</span> 
                                                        </h3>
                                                    </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }
                                    </div>
                                    <div className="item">
                                    {
                                        this.state.special_products &&
                                        this.state.special_products.map(
                                            (special_product, index) => (
                                                index > 3 &&
                                                index < 8 &&
                                                <div className="col-sm-3 space_left">
                                                    <div className="arriv_2m clearfix">
                                                    <div className="arriv_2m1 clearfix">
                                                        <Link href="#"><img src={special_product.san_pham.hinh_anh} alt="abc" className="iw"/></Link>
                                                    </div>
                                                    <div className="arriv_2m3 clearfix">
                                                        <h6 className="bold mgt wrap-text">{special_product.san_pham.ten}</h6>
                                                        <h3 className="normal">
                                                            <span className="span_3 col_1">{special_product.san_pham.gia.toLocaleString()}</span> 
                                                        </h3>
                                                    </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.specialCategories &&
                                this.state.specialCategories.map(
                                    specialCategory => (
                                        <React.Fragment>
                                            <div className="sell_1_custom clearfix">
                                                <div className="col-sm-9 space_left">
                                                    <h2 className="mgt">{specialCategory.ten}</h2>
                                                </div>
                                                <div className="col-sm-3 space_left">
                                                    <h6 style={{"marginTop": "0px"}}>
                                                        <Link to={"/san-pham/filter/" + specialCategory.id} className="btn_custom pull-right">Xem Thêm</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            {
                                                specialCategory.san_phams.map(
                                                    (sanPham, sIndex) => (
                                                        sIndex < 4 &&
                                                        <div className="col-sm-3 space_left">
                                                            <div className="arriv_2m clearfix">
                                                                <div className="arriv_2m1 clearfix">
                                                                    <Link to={"/chi-tiet-san-pham/" + sanPham.id}><img src={sanPham.hinh_anh} alt="abc" className="iw"/></Link>
                                                                </div>
                                                                <div className="arriv_2m3 clearfix">
                                                                    <h6 className="bold mgt wrap-text">{sanPham.ten}</h6>
                                                                    <h3 className="normal">
                                                                        <span className="span_3 col_1">{sanPham.gia.toLocaleString()}</span> 
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </React.Fragment>
                                    )
                                )
                            }
                            
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default withRouter(ProductCategories);