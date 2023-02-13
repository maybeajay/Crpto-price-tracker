import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyWatchList from './Components/MyWatchList'
import Data from "./Data";
import Header from "./Components/Header";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/about" element={<About />}/>
        <Route path='/watchlist' element={<MyWatchList />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
