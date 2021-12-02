

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../presentation/pages/Home';
import { makeRemoteGetItem } from '../factories/usecases/get_item';

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home getItenShop={makeRemoteGetItem(1)}/>}  />
        </Routes>
          
      </BrowserRouter>
  )
}
export default Router