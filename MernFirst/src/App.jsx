import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AllStudent from './AllStudent'
import AddStundet from './AddStudent'
import EditStudent from './EditStudent'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header></Header>
      <Routes>
        <Route path="" element={<Home></Home>}>  </Route>
        <Route element={<ProtectedRoute></ProtectedRoute>}>
        <Route path="allstudent" element={<AllStudent></AllStudent>}></Route>
        <Route path="addstudent" element={<AddStundet></AddStundet>}></Route>
        <Route path="editstudent/:_id" element={<EditStudent></EditStudent>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}>  </Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      

      
      
    </>
  )
}

export default App
