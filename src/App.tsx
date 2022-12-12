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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='search/' element={<SearchWrap/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
