import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import News from './views/News'
import NewsDetail from './views/NewsDetail'
import Market from './views/Market'
import ChatButton from './components/ChatButton'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
          <Route path="/thi-truong" element={<Market />} />
        </Routes>
        <ChatButton />
      </div>
    </Router>
  )
}

export default App
