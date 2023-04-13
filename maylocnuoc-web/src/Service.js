import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import * as ConstantsVar from "./common/constants";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortDescription: null,
            longDescription: null
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        fetch( ConstantsVar.API_URL + "/api/dich-vu")
        .then(res => res.json())
        .then(
            (result) => {
                if (result.data && result.data[0]) {
                    this.setState({shortDescription: result.data[0].mo_ta_ngan, longDescription: result.data[0].mo_ta_dai})
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
                      <h1 className="mgt">Dịch Vụ</h1>
                      <h5><Link to="/">Trang Chủ</Link> / <span className="col_1">Dịch Vụ</span></h5>
                      </div>
                  </div>
                  </div>
                  </div>
              </section>
              <section id="about">
                    <div className="container">
                    <div className="row">
                        <div className="about_3 clearfix">
                            <div className="categories_1 clearfix">
                                <div className="col-sm-12">
                                <h2 className="mgt">Dịch Vụ</h2>
                                </div>
                            </div>
                            <div className="about_3i clearfix clearfix">
                                {
                                    this.state.shortDescription &&
                                    <div dangerouslySetInnerHTML={{ __html: this.state.shortDescription }}>
                                    </div>
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
 
export default Service;