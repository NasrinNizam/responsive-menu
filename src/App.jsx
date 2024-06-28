
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Navbar } from './Component/Navbar'

function App() {
  const route =createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Navbar/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
