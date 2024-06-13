import React from 'react'
import './Layout.css'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className='headerFooter'>
        <h1>HEADER</h1>
        <Link to={'/'} ><span>Home</span></Link>
        {' '}
        <Link to={'/about'}><span>About US</span></Link>
      </div>
       <section>
          <Outlet  />
        
        </section> 

      <div className='headerFooter'>Footer</div>
    </>
  )
}

export default Layout