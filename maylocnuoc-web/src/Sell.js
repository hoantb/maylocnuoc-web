import React, { Component } from "react";
import * as ConstantsVar from "./common/constants";


class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            special_products: []
        }
    }

    componentDidMount() {
        fetch( ConstantsVar.API_URL + "/api/san-pham-noi-bat/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({special_products: result})
            }
        )
    }
    render() {
        return (
            <section id="sell">
                <div className="container">
                <div className="row">
                    <div className="sell_1 clearfix">
                        <div className="col-sm-9 space_left">
                        <h2 className="mgt">Sản Phẩm Nổi Bật</h2>
                        </div>
                        <div className="col-sm-3 space_left">
                            <div className="controls pull-right hidden-xs">
                                <a className="left fa fa-chevron-left btn btn-success" href="#carousel-example" data-slide="prev"></a><a className="right fa fa-chevron-right btn btn-success" href="#carousel-example" data-slide="next"></a>
                            </div>
                        </div>
                    </div>
                <div id="carousel-example" className="carousel slide hidden-xs" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    {
                                        this.state.special_products &&
                                        this.state.special_products.map(
                                            (special_product, index) => (
                                                index < 4 &&
                                                <div key={"special_product_" + special_product.id} className="col-sm-3 space_left">
                                                    <div className="arriv_2m clearfix">
                                                    <div className="arriv_2m1 clearfix">
                                                        <a href="#"><img src={special_product.san_pham.hinh_anh} alt="abc" className="iw"/></a>
                                                    </div>
                                                    <div className="arriv_2m3 clearfix">
                                                    <h4 className="bold mgt">{special_product.san_pham.ten}</h4>
                                                    {/* <p><a href="#">Naminos elementum disus tincidunts cosmo de cosmopolis</a></p>
                                                    <span className="span_1">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span> */}
                                                    <h3 className="normal">
                                                    {/* <span className="span_2">{special_product.san_pham.gia}</span> */}
                                                        <span className="span_3 col_1">{special_product.san_pham.gia}</span> 
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
                                                <div key={"special_product_" + special_product.id} className="col-sm-3 space_left">
                                                    <div className="arriv_2m clearfix">
                                                    <div className="arriv_2m1 clearfix">
                                                        <a href="#"><img src={special_product.san_pham.hinh_anh} alt="abc" className="iw"/></a>
                                                    </div>
                                                    <div className="arriv_2m3 clearfix">
                                                    <h4 className="bold mgt">{special_product.san_pham.ten}</h4>
                                                    <h3 className="normal">
                                                    <span className="span_3 col_1"> {special_product.san_pham.gia}</span> 
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
                </div> 
                </div>
                </section>
        );
    }
}
 
export default Sell;