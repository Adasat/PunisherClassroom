import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div id='notFound'>
      <h3>Página en Construcción</h3>
      <Link to={'/'}>
        <p className='link'>Volver a Home</p>
      </Link>
      <img src='/public/obra0023.gif' id='enConstruccion'/>
    </div>
  )
}

export default NotFound