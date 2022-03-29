/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import LayoutHome from './components/LayoutHome/LayoutHome';
import {Routes, Route} from 'react-router-dom'
import Users from './components/Users/Users';
import FunkosPage from './components/FunkosPage/FunkosPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<LayoutHome/>}/>
        <Route path={'/users'} element={<Users/>}/>
        <Route path='/funkos' element={<FunkosPage/>}/>
      </Routes>
    </div>
  );
}
export default App;

