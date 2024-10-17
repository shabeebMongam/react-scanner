import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './components/general/Layout'
import Welcome from './pages/Welcome'
import ScanPage from './pages/ScanPage'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Welcome/>} />
              <Route path="scan" element={<ScanPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App