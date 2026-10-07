import React from 'react'
import {Router,Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Roomdetails from './components/roomdetails'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/home'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/room/:id',
    element:<Roomdetails/>,
  },

]);



function App() {

  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  )
}

export default App
