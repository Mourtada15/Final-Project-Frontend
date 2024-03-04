// import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import CardPage from './Pages/CardPage/CardPage';
import CardDetails from './Components/CardDetails/CardDetails';
import NotFound from './Components/NotFound/NotFound';
import CardEdit from './Components/CardEdit/CardEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cardpage" element={<CardPage />} />
        <Route path="/carddetails" element={<CardDetails />} />
        <Route path="/cardedit" element={<CardEdit />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

