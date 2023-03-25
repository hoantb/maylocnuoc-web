import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CenterShop from "./CenterShop";
import './Shop.css'
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            products_row: [],
            product_each_row: 3,
            categories: [],
            totalPages: 0,
            product_each_page: 9,
            pages: [],
            current_page: null,
            special_products: [],
            totalProducts: 0,
            sort_type: "default"
        }

        this.clickPage = this.clickPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.sortChange = this.sortChange.bind(this)
    }

    getPage(page, sort_type) {
        fetch( ConstantsVar.API_URL + "/api/san-pham" + "?page=" + page + "&sort-type=" + sort_type)
        .then(res => res.json())
        .then(
            (result) => {
                
                let allProduct = result.results;
                let num = this.state.product_each_row;
                let rows = Math.ceil(allProduct.length / num);
                let products_row = []
                for (let i = 0; i < rows; i++){
                    let products_column = []
                    for (let j = 0; j < num; j++)
                    {
                        if (i* num + j < allProduct.length) {
                            products_column.push(allProduct[i* num + j])
                        }
                    }
                    products_row.push(products_column);
                }
                //console.log(products_row)
                let product_each_page = this.state.product_each_page;
                let totalPages = Math.ceil(result.count / product_each_page);
                console.log(totalPages)
                let pages = []
                for (let i = 0; i < totalPages; i++){
                    pages.push( i + 1);
                }
                this.setState({products: result.results, products_row: products_row,
                    totalPages: totalPages, pages: pages, current_page: page,
                    totalProducts: result.count
                });
            }
        )
    }

    componentDidMount() {
        this.getPage(1, this.state.sort_type);
        fetch( ConstantsVar.API_URL + "/api/danh-muc" + "/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({categories: result})
            }
        )
        fetch( ConstantsVar.API_URL + "/api/san-pham-noi-bat/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({special_products: result})
            }
        )
    }
    clickPage(event) {
        
        this.getPage(Number(event.target.innerHTML), this.state.sort_type)
        this.setState({current_page: Number(event.target.innerHTML)})
    }

    previousPage(event) {
        this.getPage(this.state.current_page - 1, this.state.sort_type)
        this.setState({current_page: Number(this.state.current_page - 1)})
    }
    nextPage(event) {
        this.getPage(this.state.current_page + 1, this.state.sort_type)
        this.setState({current_page: Number(this.state.current_page + 1)})
    }
    sortChange(event) {
        console.log(event.target.value);
        let value = event.target.value;
        if (value === "Giá: thấp đến cao") 
        {
            this.getPage(this.state.current_page, "price_low_to_high")
            this.setState({sort_type: "price_low_to_high"})
        }
        else if(value === "Giá: cao đến thấp") {
            this.getPage(this.state.current_page, "price_high_to_low")
            this.setState({sort_type: "price_high_to_low"})
        }
        else if(value === "Phổ Biến") {
            this.getPage(this.state.current_page, "popular")
            this.setState({sort_type: "popular"})
        }
        else if(value === "Mới Nhất") {
            this.getPage(this.state.current_page, "latest")
            this.setState({sort_type: "latest"})
        }
        else {
            this.getPage(this.state.current_page, "default")
            this.setState({sort_type: "default"})
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <CenterShop/>
                <section id="shop" className="clearfix"> 
                    <div className="container">
                    <div className="row">
                    <div className="shop_1 clearfix">
                        <div className="col-sm-3">
                            <div className="shop_1l clearfix">
                                <h4 className="mgt">Danh Mục</h4>
                                {
                                    this.state.categories &&
                                    this.state.categories.map(
                                        category => (
                                            <h5 key={"category_" + category.id}><input type="checkbox"/> <span>{category.ten}</span></h5>
                                        )
                                    )
                                }
                            </div>
                            <div className="shop_1l2 clearfix">
                                <h4 className="mgt">SẢN PHẨM NỔI BẬT</h4>
                                {
                                    this.state.special_products &&
                                    this.state.special_products.map(
                                        special_product => (
                                                <div key={"san_pham_noi_bat" + special_product.id} className="shop_1l2i clearfix">
                                                    <img src={special_product.san_pham.hinh_anh} alt="abc"/>
                                                    <h5 className="mgt"><Link to={"/chi-tiet-san-pham/" + special_product.san_pham.id}>{special_product.san_pham.ten}</Link></h5>
                                                    <h6 className="col_1">{special_product.san_pham.gia}</h6>
                                                </div>
                                        )
                                    )
                                }
                                
                            </div>
                            
                        </div>
                        <div className="col-sm-9">
                        <div className="shop_1r clearfix">
                        <div className="col-sm-6 space_left">
                            <div className="shop_1rl clearfix">
                            <p className="mgt">Tìm Thấy {this.state.totalProducts} Sản Phẩm</p>
                            </div>
                        </div>
                        <div className="col-sm-6 space_left">
                            <div className="shop_1rr text-right clearfix">
                            <p className="mgt">Sắp Xếp:</p>
                            <select onChange={this.sortChange} className="form-control">
                                <option>Mặc Định</option>
                                <option>Phổ Biến</option>
                                <option>Mới Nhất</option>
                                <option>Giá: thấp đến cao</option>
                                <option>Giá: cao đến thấp</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        {
                            this.state.products_row && this.state.products_row.map(
                                (products_column, index) => (
                                    <div key={"product_row_" + index} className="shop_1r1 clearfix">
                                        {
                                            products_column.map(
                                                product => (
                                                        <div key={"product_" + product.id} className="col-sm-4 space_left">
                                                            <div className="arriv_2m clearfix">
                                                            <div className="arriv_2m1 clearfix">
                                                                <Link to={"/chi-tiet-san-pham/" + product.id}><img src={product.hinh_anh} alt="abc" className="iw"/></Link>
                                                            </div>
                                                            <div className="arriv_2m3 clearfix">
                                                            <h4 className="bold mgt">{product.ten}</h4>
                                                            {/* <p><Link to={"/chi-tiet-san-pham/" + product.id}>{product.mo_ta_ngan}</Link></p> */}
                                                            <h3 className="normal">
                                                            <span className="span_2">{product.gia}</span>
                                                            <span className="span_3 col_1"> {product.gia}</span> 
                                                            </h3>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    
                                                )
                                            )
                                        }
                                    </div>
                                )
                            )
                        }
                        <div className="center_product_1r4r text-center clearfix">
                            <ul className="pagination mgt">
                                {
                                    this.state.current_page &&
                                    this.state.current_page > 1 &&
                                    <li className=""><Link onClick={this.previousPage}>«</Link></li>
                                }
                                {
                                    this.state.current_page &&
                                    this.state.current_page <= 1 &&
                                    <li className="disabled"><Link >«</Link></li>
                                }
                                
                                {
                                    this.state.pages &&
                                    this.state.pages.map(
                                        page => (
                                            <React.Fragment key={"parent_pagination_" + page}>
                                            {
                                                this.state.current_page == page &&
                                                <li className="active" key={"pagination_" + page} ><Link onClick={this.clickPage}>{page}</Link></li>
                                            }
                                            {
                                                this.state.current_page != page &&
                                                <li className="" key={"pagination_" + page} ><Link onClick={this.clickPage}>{page}</Link></li>
                                            }
                                            </React.Fragment>
                                        )
                                    )
                                }
                                {
                                    this.state.current_page &&
                                    this.state.current_page < this.state.totalPages &&
                                    <li><Link onClick={this.nextPage}>»</Link></li>
                                }
                                {
                                    this.state.current_page &&
                                    this.state.current_page >= this.state.totalPages &&
                                    <li className="disabled"><Link>»</Link></li>
                                }
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </section>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Shop;