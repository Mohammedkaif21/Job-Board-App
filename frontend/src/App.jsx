import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Faq from './components/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
      <Faq />
      <Footer />
    </BrowserRouter>
  )
}

export default App





