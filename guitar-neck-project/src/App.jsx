import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import HomePage from './HomePage'
import About from './About'
import Footer from './Footer'
import GuitarNeckNotes from './GuitarNeckNotes'  
import GuitarNeckIntervals from './GuitarNeckIntervals'


function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/GuitarNeckNotes" element={<GuitarNeckNotes />} />
          <Route path="/GuitarNeckIntervals" element={<GuitarNeckIntervals />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
