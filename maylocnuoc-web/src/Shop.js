import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CenterShop from "./CenterShop";
import './Shop.css'
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            products_row: [],
            product_each_row: 3,
            categories: []
        }
    }

    componentDidMount() {
        
        fetch( ConstantsVar.API_URL + "/api/san-pham" + "/")
        .then(res => res.json())
        .then(
            (result) => {
                
                let allProduct = result;
                let num = this.state.product_each_row;
                let rows = Math.ceil(allProduct.length / num);
                let products_row = []
                for (let i = 0; i < rows; i++){
                    let products_column = []
                    for (let j = 0; j < num; j++)
                    {
                        if (i* num + j < allProduct.length) {
                            products_column.push(allProduct[i* num + j])
                        }
                    }
                    products_row.push(products_column);
                }
                console.log(products_row)
                this.setState({products: result, products_row: products_row});
            }
        )
        fetch( ConstantsVar.API_URL + "/api/danh-muc" + "/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({categories: result})
            }
        )
    }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <CenterShop/>
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
                        <h4 className="mgt">Danh Mục</h4>
                            {
                                this.state.categories &&
                                this.state.categories.map(
                                    category => (
                                        <h5 key={"category_" + category.id}><Link ><input type="checkbox"/> <span>{category.ten}</span></Link></h5>
                                    )
                                )
                            }
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
                            <p className="mgt">Tìm Thấy 9 Sản Phẩm</p>
                            </div>
                        </div>
                        <div className="col-sm-6 space_left">
                            <div className="shop_1rr text-right clearfix">
                            <p className="mgt">Sắp Xếp:</p>
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
                        {
                            this.state.products_row && this.state.products_row.map(
                                (products_column, index) => (
                                    <div key={"product_row_" + index} className="shop_1r1 clearfix">
                                        {
                                            products_column.map(
                                                product => (
                                                        <div key={"product_" + product.id} className="col-sm-4 space_left">
                                                            <div className="arriv_2m clearfix">
                                                            <div className="arriv_2m1 clearfix">
                                                                <Link to={"/chi-tiet-san-pham/" + product.id}><img src={product.hinh_anh} alt="abc" className="iw"/></Link>
                                                            </div>
                                                            <div className="arriv_2m3 clearfix">
                                                            <h4 className="bold mgt">{product.ten}</h4>
                                                            <p><Link to={"/chi-tiet-san-pham/" + product.id}>{product.mo_ta_ngan}</Link></p>
                                                            <h3 className="normal">
                                                            <span className="span_2">{product.gia}</span>
                                                            <span className="span_3 col_1"> {product.gia}</span> 
                                                            </h3>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    
                                                )
                                            )
                                        }
                                    </div>
                                )
                            )
                        }
                        
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
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Shop;