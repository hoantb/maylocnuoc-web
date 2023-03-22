import React, { Component } from "react";
 
class Collection extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <section id="collection">
            <div className="container">
            <div className="row">
            <div className="collect_1 clearfix">
                <div className="col-sm-6">
                <div className="collect_1l clearfix">
                <div className="col-sm-6 space_left">
                <div className="collect_1ll clearfix">
                    <h5 className="mgt">Temperature</h5>
                    <h4>Ear Thermometers</h4>
                    <h5><a className="button" href="#"><i className="fa fa-shopping-cart"></i> Shop Now</a></h5>
                    <h5 className="col_1 normal">$49.00</h5>
                </div>
                </div>
                <div className="col-sm-6 space_left">
                <div className="collect_1lr clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/4.jpg" alt="abc" className="iw"/>
                </div>
                </div>
                </div>
                </div>
                <div className="col-sm-6">
                <div className="collect_1l collect_1lo clearfix">
                <div className="col-sm-6 space_left">
                <div className="collect_1ll clearfix">
                    <h5 className="mgt">Personal</h5>
                    <h4>Favorite Collection</h4>
                    <h5><a className="button" href="#"><i className="fa fa-shopping-cart"></i> Shop Now</a></h5>
                    <h5 className="col_1 normal">$59.00</h5>
                </div>
                </div>
                <div className="col-sm-6 space_left">
                <div className="collect_1lr clearfix">
                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/5.jpg" alt="abc" className="iw"/>
                </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            </section>
    );
  }
}
 
export default Collection;