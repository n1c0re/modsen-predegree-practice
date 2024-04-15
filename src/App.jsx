import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FavoriteBar from '@/FavoriteBar/FavoriteBar'
import Map from '@/Map/Map'
import SearchBar from '@/SearchBar/SearchBar'
import Sidebar from '@/SideBar/SideBar'

function App() {
  return (
    <BrowserRouter>
      <Map />
      <Sidebar />
      <Routes>
        <Route path='/favorites' element={<FavoriteBar />} />
        <Route path='/search' element={<SearchBar />} />
        <Route path='/' element={<></>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
