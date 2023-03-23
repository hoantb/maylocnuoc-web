import React, { Component } from "react";


class CenterShop extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <section id="center" className="center_shop"> 
            <div className="row">
                <div className="center_shop_1 text-center clearfix">
                    <div className="col-sm-12">
                    <h1 className="mgt">Products Listing</h1>
                    <h5><a href="shop_detail.html">Home</a> / <span className="col_1">Products Listing</span></h5>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
 
export default CenterShop;