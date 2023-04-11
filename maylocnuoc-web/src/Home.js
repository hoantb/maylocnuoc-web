import React, { Component } from "react";
import Header from "./Header";
import Center from "./Center";
import Footer from "./Footer";
import ProductCategories from "./ProductCategories";
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: null,
        }
    }

  componentDidMount() {
    window.scrollTo(0, 0);
      fetch( ConstantsVar.API_URL + "/api/danh-muc/")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({categories: result})
          }
      )
  }
  render() {
    return (
        <div>
              <Header />
              <Center />
              <ProductCategories/>
              <Footer />
        </div>
    );
  }
}
 
export default Home;