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
                            <div className="shop_1 clearfix">
                                <div className="col-sm-9 space_left">
                                    <h2 className="mgt">Sản Phẩm Nổi Bật</h2>
                                </div>
                                {/* <div className="col-sm-3 space_left">
                                    <h6><Link to={"/san-pham/filter/san-pham-noi-bat"} className="button">Xem Thêm</Link></h6>
                                </div> */}
                            </div>
                            <div className="shop_1r1 clearfix">
                                {
                                    this.state.special_products &&
                                    this.state.special_products.map(
                                        (special_product, index) => (
                                            index < 3 &&
                                            <div className="col-sm-4 space_left">
                                                <div className="arriv_2m clearfix">
                                                    <div className="arriv_2m1 clearfix">
                                                        <Link to={"/chi-tiet-san-pham/" + special_product.san_pham.id}><img src={special_product.san_pham.hinh_anh} alt="abc" className="iw"/></Link>
                                                    </div>
                                                    <div className="arriv_2m3 clearfix">
                                                        <h4 className="bold mgt">{special_product.san_pham.ten}</h4>
                                                        <h3 className="normal">
                                                            <span className="span_3 col_1">{special_product.san_pham.gia}</span> 
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            {
                                this.state.specialCategories &&
                                this.state.specialCategories.map(
                                    specialCategory => (
                                        <React.Fragment>
                                            <div className="shop_1r1 clearfix">
                                                <div className="col-sm-9 space_left">
                                                    <h2 className="mgt">{specialCategory.ten}</h2>
                                                </div>
                                                <div className="col-sm-3 space_left">
                                                    <h6><Link to={"/san-pham/filter/" + specialCategory.id} className="button">Xem Thêm</Link></h6>
                                                </div>
                                            </div>
                                            {
                                                specialCategory.san_phams.map(
                                                    (sanPham, sIndex) => (
                                                        sIndex < 3 &&
                                                        <div className="col-sm-4 space_left">
                                                            <div className="arriv_2m clearfix">
                                                                <div className="arriv_2m1 clearfix">
                                                                    <Link to={"/chi-tiet-san-pham/" + sanPham.id}><img src={sanPham.hinh_anh} alt="abc" className="iw"/></Link>
                                                                </div>
                                                                <div className="arriv_2m3 clearfix">
                                                                    <h4 className="bold mgt">{sanPham.ten}</h4>
                                                                    <h3 className="normal">
                                                                        <span className="span_3 col_1">{sanPham.gia}</span> 
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
                <Footer />
            </div>
        );
    }
}
 
export default withRouter(ProductCategories);