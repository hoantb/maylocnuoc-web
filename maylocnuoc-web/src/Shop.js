import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CenterShop from "./CenterShop";
import './Shop.css'
import * as ConstantsVar from "./common/constants";
import { Link } from "react-router-dom";
import withRouter from "./common/withRouter";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            products_row: [],
            product_each_row: 4,
            categories: [],
            categoriesCheckbox: [],
            totalPages: 0,
            product_each_page: 12,
            pages: [],
            current_page: null,
            special_products: [],
            totalProducts: 0,
            sort_type: "default",
            searchName: props.params.ten,
            categoryInput: props.params.category
        }
        this.clickPage = this.clickPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.filter = this.filter.bind(this);
        this.convertCheckBoxToId = this.convertCheckBoxToId.bind(this);
        this.setCheckBoxValue = this.setCheckBoxValue.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    clearFilter () {
        let categoriesCheckbox = this.state.categoriesCheckbox;
        for (let i = 0; i < categoriesCheckbox.length; i++) {
            categoriesCheckbox[i] = false;
        }
        this.setState({categoriesCheckbox: categoriesCheckbox})
        this.getPage(1, this.state.sort_type, categoriesCheckbox);
    }

    getPage(page, sort_type, categoriesCheckbox) {
        let searchName = "";
        if (this.props.params.ten) {
            searchName = this.props.params.ten;
        }
        let filterType = this.convertCheckBoxToId(categoriesCheckbox);
        fetch( ConstantsVar.API_URL + "/api/san-pham" + "?page=" + page + "&sort-type=" + sort_type + "&search-name=" + searchName + "&categories-filter=" + filterType.toString())
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

                let product_each_page = this.state.product_each_page;
                let totalPages = Math.ceil(result.count / product_each_page);
                let pages = []
                for (let i = 0; i < totalPages; i++){
                    pages.push( i + 1);
                }
                this.setState({products: result.results, products_row: products_row,
                    totalPages: totalPages, pages: pages, current_page: page,
                    totalProducts: result.count,
                    searchName: this.props.params.ten
                });
            }
        )
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getPage(1, this.state.sort_type, this.state.categoriesCheckbox);
        fetch( ConstantsVar.API_URL + "/api/danh-muc/")
        .then(res => res.json())
        .then(
            (result) => {
                let categoriesCheckbox = [];
                for (let i = 0; i < result.length; i++) {
                    categoriesCheckbox.push(false);
                }
                
                this.setState({categories: result, categoriesCheckbox: categoriesCheckbox})
                
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
        
        this.getPage(Number(event.target.innerHTML), this.state.sort_type, this.state.categoriesCheckbox)
        this.setState({current_page: Number(event.target.innerHTML)})
    }

    previousPage(event) {
        this.getPage(this.state.current_page - 1, this.state.sort_type, this.state.categoriesCheckbox)
        this.setState({current_page: Number(this.state.current_page - 1)})
    }
    nextPage(event) {
        this.getPage(this.state.current_page + 1, this.state.sort_type, this.state.categoriesCheckbox)
        this.setState({current_page: Number(this.state.current_page + 1)})
    }
    sortChange(event) {
        console.log(event.target.value);
        let value = event.target.value;
        if (value === "Giá: thấp đến cao") 
        {
            this.getPage(this.state.current_page, "price_low_to_high", this.state.categoriesCheckbox)
            this.setState({sort_type: "price_low_to_high"})
        }
        else if(value === "Giá: cao đến thấp") {
            this.getPage(this.state.current_page, "price_high_to_low", this.state.categoriesCheckbox)
            this.setState({sort_type: "price_high_to_low"})
        }
        else if(value === "Phổ Biến") {
            this.getPage(this.state.current_page, "popular", this.state.categoriesCheckbox)
            this.setState({sort_type: "popular"})
        }
        else if(value === "Mới Nhất") {
            this.getPage(this.state.current_page, "latest", this.state.categoriesCheckbox)
            this.setState({sort_type: "latest"})
        }
        else {
            this.getPage(this.state.current_page, "default", this.state.categoriesCheckbox)
            this.setState({sort_type: "default"})
        }
    }

    convertCheckBoxToId(categoriesCheckbox) {
        let ids = []
        for (let i = 0; i < categoriesCheckbox.length; i++) {
            if (categoriesCheckbox[i] == true) {
                ids.push(this.state.categories[i].id)
            }
        }
        return ids;
    }

    setCheckBoxValue(id) {
        let categoriesCheckbox = this.state.categoriesCheckbox;
        for (let i = 0; i < this.state.categories.length; i++)
        {
            if (this.state.categories[i].id == id) {
                categoriesCheckbox[i] = true;
                this.setState({categoriesCheckbox: categoriesCheckbox, categoryInput: null});
                this.getPage(1, this.state.sort_type, categoriesCheckbox);
                return
            }
        }
    }

    filter(evt) {
        console.log(evt.target.id)
        let texts = (evt.target.id).split("-")
        let id = Number(texts[texts.length - 1])
        let categoriesCheckbox = this.state.categoriesCheckbox;
        categoriesCheckbox[id] = !categoriesCheckbox[id]
        this.setState({categoriesCheckbox: categoriesCheckbox});
        this.getPage(1, this.state.sort_type, categoriesCheckbox);
    }

    render() {
        return (
            <div>
                {   this.state.searchName != this.props.params.ten &&
                    this.getPage(1, this.state.sort_type, this.state.categoriesCheckbox)
                }
                {   
                    this.state.current_page &&
                    this.state.categoriesCheckbox &&
                    this.state.categoryInput &&
                    this.state.categoryInput != "san-pham-noi-bat" &&
                    this.setCheckBoxValue(this.state.categoryInput)
                }
                <Header/>
                <CenterShop/>
                <section id="shop" className="clearfix"> 
                    <div className="container">
                    <div className="row">
                    <div className="shop_1 clearfix">
                        <div className="col-sm-3">
                            <div className="shop_1l clearfix">
                                <h4 className="mgt">Danh Mục</h4>
                                <h5> <span><Link onClick={this.clearFilter} >Tất Cả Sản Phẩm</Link></span></h5>
                                {
                                    this.state.categories &&
                                    this.state.categories.map(
                                        (category, index) => (
                                            <h5 key={"category_" + index}><input checked={this.state.categoriesCheckbox[index]} id={"category-cb-" + index} onChange={this.filter} type="checkbox"/> <span><Link id={"category-txt-" + index} onClick={this.filter} >{category.ten}</Link></span></h5>
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
                                                    <div key={"product_" + product.id} className="col-sm-3 space_left">
                                                        <div className="arriv_2m clearfix">
                                                        <div className="arriv_2m1 clearfix">
                                                            <Link to={"/chi-tiet-san-pham/" + product.id}><img src={product.hinh_anh} alt="abc" className="iw"/></Link>
                                                        </div>
                                                        <div className="arriv_2m3 clearfix">
                                                            <h6 className="bold mgt wrap-text">{product.ten}</h6>
                                                                <h6 className="normal">
                                                                    <span className="span_3 col_1"> {product.gia.toLocaleString()}</span> 
                                                                </h6>
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
                                    this.state.pages &&
                                    <li className=""><Link onClick={this.previousPage}>«</Link></li>
                                }
                                {
                                    this.state.totalProducts > 0 &&
                                    this.state.current_page &&
                                    this.state.current_page <= 1 &&
                                    this.state.pages &&
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
                                    this.state.totalProducts > 0 &&
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
            </div>
        );
    }
}
 
export default withRouter(Shop);