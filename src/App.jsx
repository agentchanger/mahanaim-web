import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import components from './components'
import pages from "./pages"
import divisiLawatanSubPages from "./pages/MinistriesPage/DivisiLawatan/index"

const App = () => {
  const reactAppName = "/mahanaim-web/"
  return (
    <Router basename={reactAppName}>
      <components.Navbar/>
      <Routes>
        <Route path='/' element={<pages.MainPage/>}/>
        <Route path='/divisi-lawatan' element={<pages.DivisiLawatan/>}/>
        <Route path='divisi-lawatan/youth' element={<divisiLawatanSubPages.Youth/>}/>
        <Route path='*' element={<components.NoLink/>}/>
      </Routes>
      <components.Footer/>
    </Router>
  )
}

export default App