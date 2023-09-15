import React from 'react'
import Navibar from '../Navibar'
import Footer from '../Footer'
import Routers from '../../Routers/Routers.js'


function Layout() {
    return (
        <div>
        
        <Navibar/>
        <Routers/>
        <Footer/>
        </div>
    )
}
export default Layout