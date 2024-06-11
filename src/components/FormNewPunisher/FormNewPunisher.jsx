import React, { useContext, useRef, useState } from 'react'
import './FormNewPunisher.css'
import { PunisherContext } from '../../Context/PunisherContext'

function FormNewPunisher() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const {punishers, setPunishers} = useContext(PunisherContext)
    const dialogRef = useRef(null)

    // Comprobar si el punishers si existe, y si no almacenarlo
    // Limpiar el input cuando se envia
    function openDialog() {
        setIsDialogOpen(true)
    }
    function closeDialog() {
        setIsDialogOpen(false)
    }

    /* function handleDialog () {
        setIsDialogOpen(!isDialogOpen)
    } */

    function handleSubmit () {
        if (inputValue !== '' && !punishers.includes(function(punishers){
                punishers.title.toLowerCase() === inputValue.toLowerCase()
            })) {
                setPunishers([...punishers, {id: punishers.length + 1, title: inputValue}])
                setInputValue('')
                closeDialog()

        }else {
            console.log('No entra')
        }
    }

  return (
    <>
      <dialog ref={dialogRef} open={isDialogOpen}>
        <div id='dialog-header'>
          <label>
            <button id='closeBtn' onClick={closeDialog}>
              Twitter
            </button>
          </label>
        </div>
        <div id='dialog-content'>
          <p>Ahora tú tienes el poder</p>
          <blockquote>
            <i>"Un gran poder conlleva una gran responsabilidad"</i>
          </blockquote>
          <input 
            type='text'
            value={inputValue}
            placeholder='Añade tu castigo'
            onChange={function(event){
                setInputValue(event.target.value)
            }}
          />
          <button 
            type='submit' 
            onClick={handleSubmit}
          >
            Añadir Punisher
          </button>
        </div>
      </dialog>
      <button onClick={openDialog}>Add new Punisher</button>
    </>
  )
}

export default FormNewPunisher