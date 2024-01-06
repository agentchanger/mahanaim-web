import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import components from './components'
import pages from "./pages"
import divisiLawatanSubPages from "./pages/MinistriesPage/DivisiLawatan/index"

const App = () => {
  return (
    <Router>
      <components.Navbar/>
      <Routes>
        <Route path='/' element={<pages.MainPage/>}/>
        <Route path='/divisi-lawatan' element={<pages.DivisiLawatan/>}/>
        <Route path='divisi-lawatan/youth' element={<divisiLawatanSubPages.Youth/>}/>
      </Routes>
      <components.Footer/>
    </Router>
  )
}

export default App