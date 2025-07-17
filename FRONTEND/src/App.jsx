import { Outlet } from '@tanstack/react-router'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
