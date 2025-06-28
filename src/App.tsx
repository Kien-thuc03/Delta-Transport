import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import News from './views/News'
import NewsDetail from './views/NewsDetail'
import Market from './views/Market'
import Service from './views/Service'
import ContactPage from './views/ContactPage'
import Faq from './views/Faq'
import Recruitment from './views/Recruitment'
import OrderManagement from './views/OrderManagement'
import ChatButton from './components/button/ChatButton'
import BackToTopButton from './components/button/BackOnTop'

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
          <Route path="/dich-vu" element={<Service />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/hoi-dap" element={<Faq />} />
          <Route path="/tin-tuyen-dung" element={<Recruitment />} />
          <Route path="/ky-nang-dat-hang" element={<OrderManagement />} />
        </Routes>
        <ChatButton />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App
