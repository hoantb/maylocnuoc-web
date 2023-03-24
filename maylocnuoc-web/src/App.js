import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Service from './Service';
import Blog from './Blog';
import ShopDetail from './ShopDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/gioi-thieu" element={<AboutUs />} />
                <Route exact path="/san-pham" element={<Shop />} />
                <Route exact path="/dich-vu" element={<Service />} />
                <Route exact path="/tin-tuc" element={<Blog />} />
                <Route exact path="/lien-he" element={<Contact />} />
                <Route path="/chi-tiet-san-pham/:id" element={<ShopDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
