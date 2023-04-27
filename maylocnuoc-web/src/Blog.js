import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import * as ConstantsVar from "./common/constants";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: null
        }
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      fetch( ConstantsVar.API_URL + "/api/tin-tuc")
        .then(res => res.json())
        .then(
            (result) => {
                if (result.data && result.data[0]) {
                    this.setState({blogs: result.data})
                }
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
                                <h1 className="mgt">Tin Tức</h1>
                                <h5><Link to="/">Trang Chủ</Link> / <span className="col_1">Tin Tức</span></h5>
                              </div>
                          </div>
                        </div>
                      </div>
                  </section>
                  <section id="about">
                        <div className="container">
                            <div className="row">
                                <div className="about_3 clearfix">
                                {
                                      this.state.blogs &&
                                      this.state.blogs.map(
                                          blog => (
                                                <div key={"blog-" + blog.id} style={{"marginBottom": "60px"}}>
                                                    <div className="categories_1 clearfix">
                                                        <div className="col-sm-12">
                                                            <h2 className="mgt">{blog.tieu_de}</h2>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img style={{"width": "250px", "height": "100%", "paddingTop": "10px"}} src={blog.hinh_anh}/>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <div style={{"paddingTop": "10px", "fontSize": "1.5em"}}>
                                                                {blog.mo_ta_ngan}
                                                            </div>
                                                            <div style={{"paddingTop": "30px"}}>
                                                                <Link className="btn_custom">Chi Tiết</Link>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    
                                              </div>
                                          )
                                      )
                                }
                              </div>
                          </div>
                      </div>
                  </section>
                <Footer />
            </div>
        );
    }
}
 
export default Blog;