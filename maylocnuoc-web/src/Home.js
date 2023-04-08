import React, { Component } from "react";
import Header from "./Header";
import Center from "./Center";
import Footer from "./Footer";
import Sell from "./Sell";
import Arrive from "./Arrive";

class Home extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
        <div>
              <Header />
              <section id="center" className="center_shop"> 
                  <div className="row">
                      <div className="center_shop_1 text-center clearfix">
                          <div className="col-sm-12">
                          <h1 className="mgt">Trang Chủ</h1>
                          </div>
                      </div>
                  </div>
              </section>
             <Sell />
             <Arrive />
             <Footer />
             
        </div>
    );
  }
}
 
export default Home;