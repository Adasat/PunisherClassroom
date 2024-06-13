import React from 'react'
import {useEffect, useState} from 'react'
import './RickNMorty.css'

import {Link} from 'react-router-dom'

import { getAllCharacters } from '../../services/characters.service'

import CharacterCard from '../../components/CharacterCard/CharacterCard'

function RickNMorty() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getCharacters() {
      const response = await getAllCharacters()
      setData(response)
      
    }
    getCharacters()
  }, [])

  function createReactProducts() {
    const cards = data?.map((character) => {
      return (
        <Link key={character.id} to={`/characters/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      )
    })
    return cards
  }

  return <div id='character-container'>{createReactProducts()}</div>
}

export default RickNMorty
