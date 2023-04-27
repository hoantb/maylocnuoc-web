import React, { Component } from "react";

class Center extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: null
        }
    }

    componentDidMount() {
        let layout = JSON.parse(localStorage.getItem("layout"));
        this.setState({slides: layout.slides});
    }

    render() {
        return (
            <section id="center" className="center_home"> 
                <div className="container">
                <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
                    {/* <div className="overlay"></div> */}
                    <ol className=" col-sm-6 carousel-indicators">
                        {
                            this.state.slides &&
                            this.state.slides.map(
                                (slide, index) => (
                                    index == 0 ?
                                    <li key={"indicator-home-" + index.toString()} data-target="#bs-carousel" data-slide-to={index.toString()} className="active"></li>
                                    :
                                    <li key={"indicator-home-" + index.toString()} data-target="#bs-carousel" data-slide-to={index.toString()} className=""></li>
                                )
                            )
                        }
                    </ol>
                    <div className="carousel-inner">
                        {
                            this.state.slides &&
                            this.state.slides.map(
                                (slide, index) => (
                                    index == 0 ?
                                    <div key={"image-home-" + index.toString()} className="item slides active">
                                        <div className="slide-1"></div>
                                        <div className="hero clearfix">
                                            <img className="iw" src={slide.hinh_anh}  alt="abc"/>
                                        </div>
                                    </div>
                                    :
                                    <div key={"image-home-" + index.toString()} className="item slides">
                                        <div className="slide-1"></div>
                                        <div className="hero clearfix">
                                            <img className="iw" src={slide.hinh_anh}  alt="abc"/>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                </div>
            </section>
        );
    }
}
 
export default Center;