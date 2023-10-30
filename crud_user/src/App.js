
import './App.css';
// import Main from './Components/Main';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';



function App() {
  return (
    <>

    <Router>
   <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
    </Router>
    
    </>
  );
}

export default App;
