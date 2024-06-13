import React from 'react'
import './CharacterCard.css'

function CharacterCard({character}) {
  return (
    <div className='card'>
      <h2>{character?.name}</h2>
      <p>{character?.status}</p>
      <img src={character?.image} />
    </div>
  )
}

export default CharacterCard