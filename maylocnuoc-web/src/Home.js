import React, { Component } from "react";
import Header from "./Header";
import Center from "./Center";
import Collection from "./Collection";
import Category from "./Category";
import Footer from "./Footer";
import Sell from "./Sell";
import CollectionO from "./CollectionO";
import Arrive from "./Arrive";
import Offer from "./Offer";

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