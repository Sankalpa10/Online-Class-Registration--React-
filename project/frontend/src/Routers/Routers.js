import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'

import Home from '../Pages/Home'
import Aboutus from '../Pages/Aboutus'
import Admin from '../Pages/Admin/Admin'
import Class from '../Pages/Class'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import Payments from '../Pages/Payment'
import Register from '../Pages/Register'
import Video from '../Pages/Video'
import FaQ from '../Pages/FaQ'
import Forgotpass from '../Pages/Forgotpass'
import Paynow from '../Pages/Paynow'
import ViewteachersT from '../Pages/ViewteachersT'
import ViewteachersS from '../Pages/ViewteachersS'
import ViewteachersC from '../Pages/ViewteachersC'
import ViewteachersA from '../Pages/ViewteachersA'
import Joinclass from '../Pages/Joinclass'





function Routers() {
  return (
    <Routes>
         <Route path='/' element={<Navigate to ='/home'/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/class' element={<Class/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/logout' element={<Logout/>}/>
         <Route path='/payment' element={<Payments/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/admin' element={<Admin/>}/>
         <Route path='/aboutus' element={<Aboutus/>}/>
         <Route path='/video' element={<Video/>}/>
         <Route path='/faq' element={<FaQ/>}/>
         <Route path='/forgotpass' element={<Forgotpass/>}/>
         <Route path='/paynow' element ={<Paynow/>}/>
         <Route path='/viewteachersT' element ={<ViewteachersT/>}/>
         <Route path='/viewteachersS' element ={<ViewteachersS/>}/>
         <Route path='/viewteachersC' element ={<ViewteachersC/>}/>
         <Route path='/viewteachersA' element ={<ViewteachersA/>}/>
         <Route path='/joinclass' element ={<Joinclass/>}/>
        
        
        </Routes>
  )
  
}
export default Routers
