import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import logo from "./assets/Inform_logo_small.png";
import SearchWrap from './components/search/SearchWrap';

const App = () => {
  return (
    <div>
    <a href="/">
    <img src={logo} alt="로고" className='absolute w-48 mt-4 ml-10 top-1 left-1'/>
    </a>
    
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='search/' element={<SearchWrap/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
