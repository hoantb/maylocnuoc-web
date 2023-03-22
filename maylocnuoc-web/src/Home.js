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
             <Center />
             <Collection />
             <Category />
             <Sell />
             <CollectionO />
             <Arrive />
             <Offer />
             <Footer />
             
        </div>
    );
  }
}
 
export default Home;