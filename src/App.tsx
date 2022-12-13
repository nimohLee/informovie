import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SearchWrap from './components/search/SearchWrap';

const App = () => {
  return (
    <div className='bg-black '>
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
