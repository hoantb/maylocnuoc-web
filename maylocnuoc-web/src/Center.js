import React, { Component } from "react";
 
class Center extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <section id="center" className="center_home"> 
            <div className="container">
            <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
                {/* <div className="overlay"></div> */}
                <ol className=" col-sm-6 carousel-indicators">
                    <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#bs-carousel" data-slide-to="1" className=""></li>
                    <li data-target="#bs-carousel" data-slide-to="2" className=""></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item slides active">
                    <div className="slide-1"></div>
                        <div className="hero clearfix">
                            <img className="iw" src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/1.jpg"  alt="abc"/>
                        </div>
                    </div>
                    <div className="item slides">
                    <div className="slide-2"></div>
                    <div className="hero clearfix">
                        <img className="iw" src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/2.jpg"  alt="abc"/>
                    </div>
                    </div>
                    <div className="item slides">
                        <div className="slide-3"></div>
                        <div className="hero clearfix">
                            <div className="hero clearfix">
                                <img className="iw" src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/3.jpg"  alt="abc"/>
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
 
export default Center;