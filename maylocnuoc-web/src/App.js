import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route name="shop" path="shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
