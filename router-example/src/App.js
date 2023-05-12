
import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
// In react-router-dom v6, "Switch" is replaced by routes "Routes".
import HomePage from './pages/HomePage'

export default function App() {
  return(
    <Routes>
      {/* In V6, you can't use the component prop anymore. It was replaced in favor of element: */}
      {/* <Route path='/:id' component={UserPage}/> */}
      <Route exact path="/" element={<HomePage />}/>
    </Routes>
  )
}