import React, { useContext } from 'react'
import {PunisherContext} from '../../Context/PunisherContext'
import './PunishersAccordion.css'
import FormNewPunisher from '../FormNewPunisher/FormNewPunisher'

function PunishersAccordion() {
    const {punishers} = useContext(PunisherContext)
    console.log(punishers)
  return (
   
    <details>
        <summary>Ver todos los punishers</summary>
        <ol>
            {
                punishers.map(function(castigo, i){
                    return (
                        <li key={i}>{castigo.title}</li>
                    )
                })
            }
        </ol>
        <FormNewPunisher/>
    </details>
  )
}

export default PunishersAccordion