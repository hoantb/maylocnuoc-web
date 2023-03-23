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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
