import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Error } from './components/Error'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import ScrollToTop from './components/ScrollToTop'



function App() {

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />}/>
        <Route path='about' element={<About />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
