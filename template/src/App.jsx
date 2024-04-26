import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import HomePage from './HomePage'
import About from './About'
import Footer from './Footer'
import GuitarNeck from './GuitarNeck'



function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/guitar-neck" element={<GuitarNeck />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
