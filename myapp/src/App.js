// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import CardPage from './Pages/CardPage/CardPage';
import CardDetails from './Components/CardDetails/CardDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cardpage" element={<CardPage />} />
        <Route path="/carddetails" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
