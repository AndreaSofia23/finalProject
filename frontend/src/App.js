/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import LayoutHome from './components/LayoutHome/LayoutHome';
import {Routes, Route} from 'react-router-dom'
import Users from './components/Users/Users';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<LayoutHome/>}/>
        <Route path={'/users'} element={<Users/>}/>
      </Routes>
    </div>
  );
}
export default App;

