import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
