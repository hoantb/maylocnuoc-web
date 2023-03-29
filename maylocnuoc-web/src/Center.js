import React, { Component } from "react";
 
class Center extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <section id="center" className="center_home"> 
            <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
                <div className="overlay"></div>
                <ol className="carousel-indicators">
                    <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#bs-carousel" data-slide-to="1" className=""></li>
                    <li data-target="#bs-carousel" data-slide-to="2" className=""></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item slides active">
                    <div className="slide-1"></div>
                    <div className="hero clearfix">
                        <div className="col-sm-6">
                            <h5 className="mgt col_1">New Arrivals</h5>
                            <h1>Nulla Quis Libero <br/>   <span>Sem</span></h1>
                            <p>Nulla quis sem at nibh elementum imperdiet Fusce nec tellus sed augue  semper porta Vestibulum lacinia arcu eget nulla!</p>
                            <h4><a className="button" href="#"><i className="fa fa-shopping-cart"></i> Shop Now</a></h4>
                            <h4 className="col_1normal">$66.00</h4>
                        </div>
                        <div className="col-sm-6">
                        <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/1.jpg" className="iw" alt="abc"/>
                        </div>
                    </div>
                    </div>
                    <div className="item slides">
                    <div className="slide-2"></div>
                    <div className="hero clearfix">
                        <div className="col-sm-6">
                            <h5 className="mgt col_1">New Arrivals</h5>
                            <h1>Dolore Magna Cursus <br/>  <span>Aliquyam</span></h1>
                            <p>Nulla quis sem at nibh elementum imperdiet Fusce nec tellus sed augue  semper porta Vestibulum lacinia arcu eget nulla!</p>
                            <h4><a className="button" href="#"><i className="fa fa-shopping-cart"></i> Shop Now</a></h4>
                            <h4 className="col_1 normal">$69.00</h4>
                        </div>
                        <div className="col-sm-6">
                        <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/2.jpg" className="iw" alt="abc"/>
                        </div>
                    </div>
                    </div>
                    <div className="item slides">
                        <div className="slide-3"></div>
                        <div className="hero clearfix">
                            <div className="hero clearfix">
                                <div className="col-sm-6">
                                    <h5 className="mgt col_1">New Arrivals</h5>
                                    <h1>Fusce Nec Dapibus  <br/>  <span>Tellus</span> </h1>
                                    <p>Nulla quis sem at nibh elementum imperdiet Fusce nec tellus sed augue  semper porta Vestibulum lacinia arcu eget nulla!</p>
                                    <h4><a className="button" href="#"><i className="fa fa-shopping-cart"></i> Shop Now</a></h4>
                                    <h4 className="col_1 normal">$49.00</h4>
                                </div>
                                <div className="col-sm-6">
                                    <img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/3.jpg" className="iw" alt="abc"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
  }
}
 
export default Center;