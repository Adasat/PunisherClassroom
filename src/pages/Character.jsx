import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCharacter } from '../services/characters.service'
import CharacterCard from '../components/CharacterCard/CharacterCard'

function Character() {
    const [character, setCharacter] = useState('')

    const { characterId } = useParams()

    console.log(characterId)

    useEffect(function() {

        async function getOneCharacter(){
            const response = await getCharacter(characterId)
            setCharacter(response)

        }

        getOneCharacter()

    }, [characterId])
    

  return (
    <div>
        <CharacterCard character={character} />

        <Link to={'/characters'}>
            <button>Volver a Characters</button>
        </Link>
    </div>
  )
}

export default Character