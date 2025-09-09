import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom';
import PagenotFound from './pages/PagenotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={ <Home></Home> }></Route>
      <Route path='/home' element={ <Home></Home> }></Route>
      <Route path='/watchList' element={ <WatchList></WatchList> }></Route>
      <Route path='*' element={ <PagenotFound /> }></Route>
    </Routes>
   
    
    </>
  )
}

export default App
