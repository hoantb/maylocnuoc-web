import React, { Component } from "react";
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";

class Arrive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null
        }
    }

    componentDidMount() {
        fetch( ConstantsVar.API_URL + "/api/danh-muc/danh-muc-trang-chu")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({categories: result.data})
            }
        )
    }
    render() {
        return (
            <section id="arrive">
                {
                    this.state.categories &&
                    this.state.categories.map(
                        category => (
                            <div key={"danh-muc-trang-chu-" + category.id} className="container">
                                <div className="row">
                                    <div className="categories_1 clearfix">
                                        <div className="col-sm-12 space_left">
                                            <h2 className="mgt">{category.ten}</h2>
                                        </div>
                                    </div>
                                    <div className="arrive_1 clearfix">
                                    {
                                        category.san_phams.map(
                                            san_pham => (
                                                <div className="col-sm-3 space_left">
                                                    <div className="arriv_2m clearfix">
                                                        <div className="arriv_2m1 clearfix">
                                                            <Link to={"/chi-tiet-san-pham/" + san_pham.id}><img src={san_pham.hinh_anh} alt="abc" className="iw"/></Link>
                                                        </div>
                                                        <div className="arriv_2m3 clearfix">
                                                            <h4 className="bold mgt">{san_pham.ten}</h4>
                                                            <h3 className="normal">
                                                                <span className="span_3 col_1">{san_pham.gia}</span> 
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }
                                    </div>
                                </div> 
                            </div>
                        )
                    )
                }
            </section>
        );
    }
}
 
export default Arrive;