import './App.css'

import routes from '@constants/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FavoriteBar from '@/FavoriteBar/FavoriteBar'
import FavoritePlace from '@/FavoritePlace/FavoritePlace'
import Map from '@/Map/Map'
import SearchBar from '@/SearchBar/SearchBar'
import Sidebar from '@/SideBar/SideBar'
import SignIn from '@/SignIn/SignIn'
import SignUp from '@/SignUp/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Map />
      <Sidebar />
      <Routes>
        <Route path={routes.FAVORITES} element={<FavoriteBar />} />
        <Route path={routes.SEARCH} element={<SearchBar />} />
        <Route path={routes.FAVORITE_PLACE} element={<FavoritePlace />} />
        <Route path={routes.REGISTER} element={<SignUp />} />
        <Route path={routes.LOGIN} element={<SignIn />} />
        <Route path='/' element={<></>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
