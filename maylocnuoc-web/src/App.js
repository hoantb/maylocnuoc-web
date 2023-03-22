import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Home';

function App() {
    return (
        <Home/>
        // <BrowserRouter>
        //     <Routes>
        //         <Route exact path="/" element={<Home />} />
        //     </Routes>
        // </BrowserRouter>
    );
}

export default App;
