import React from 'react'
import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
