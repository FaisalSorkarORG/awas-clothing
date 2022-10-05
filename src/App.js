import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// )

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element= {<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
