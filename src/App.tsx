import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import ChatButton from './components/ChatButton'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
        </Routes>
        <ChatButton />
      </div>
    </Router>
  )
}

export default App
