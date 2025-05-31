import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashbord from './pages/Dashbord'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Creators from './pages/Creators'
import { useAuth } from './context/AuthContext'

const App = () => {
  const location = useLocation();
  const hideLayoutPaths = [ '/dashbord'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname.toLowerCase());
  const {blog} = useAuth();
  console.log(blog);
  return (
    <div>
      {!shouldHideLayout && <Navbar />}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/creators' element={<Creators/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashbord' element={<Dashbord/>}/>

    </Routes>
    {!shouldHideLayout && <Footer/> }
    </div>
  )
}

export default App
