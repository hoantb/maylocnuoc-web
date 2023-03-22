import React, { Component } from "react";
 
class Category extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <section id="categories">
            <div className="container">
            <div className="row">
            <div className="categories_1 clearfix">
                <div className="col-sm-12">
                <h2 className="mgt">Categories</h2>
                </div>
            </div>
            <div className="categories_2 clearfix">
                <div className="col-sm-2">
                <div className="categories_2i text-center clearfix">
                <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/6.jpg" className="iw" alt="abc"/></a>
                <h5><a href="#">Lorem Ipsum</a></h5>
                </div>
                </div>
                <div className="col-sm-2">
                <div className="categories_2i text-center clearfix">
                <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/7.jpg" className="iw" alt="abc"/></a>
                <h5><a href="#">Sed Augue</a></h5>
                </div>
                </div>
                <div className="col-sm-2">
                <div className="categories_2i text-center clearfix">
                <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/8.jpg" className="iw" alt="abc"/></a>
                <h5><a href="#">Nulla Quis</a></h5>
                </div>
                </div>
                <div className="col-sm-2">
                <div className="categories_2i text-center clearfix">
                <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/9.jpg" className="iw" alt="abc"/></a>
                <h5><a href="#">Ante Dapibus</a></h5>
                </div>
                </div>
                <div className="col-sm-2">
                <div className="categories_2i text-center clearfix">
                <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/10.jpg" className="iw" alt="abc"/></a>
                <h5><a href="#">Sed Cursus</a></h5>
                </div>
                </div>
                <div className="col-sm-2">
                <div className="categories_2i text-center clearfix">
                <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/maylocnuoc/frontend/img/11.jpg" className="iw" alt="abc"/></a>
                <h5><a href="#">Integer Nec</a></h5>
                </div>
                </div>
            </div>
            </div> 
            </div>
        </section>
    );
  }
}
 
export default Category;