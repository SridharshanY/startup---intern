import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import View from './pages/View'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    )
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <Login />
      </>
    )
  },
  {
    path: '/register',
    element: (
      <>
        <Navbar />
        <Register />
      </>
    )
  },
  {
    path: '/view',
    element: (
      <>
        <Navbar />
        <View />
      </>
    )
  }

])

const App = () => {

  return <RouterProvider router={router} />
  
}

export default App