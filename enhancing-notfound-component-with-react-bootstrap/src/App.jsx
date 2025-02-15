import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePageStyles.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

export default App;