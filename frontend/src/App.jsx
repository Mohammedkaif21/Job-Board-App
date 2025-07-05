import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Faq from './components/Faq'
import JobDetails from './pages/JobDetails'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
      <Faq />
      <Footer />
    </BrowserRouter>
  )
}

export default App





