import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CustomInput.css'

function CustomInput({title, inputChange}) {
    const [value, setValue] = useState('')

    function handleClick () {
        inputChange(value)
        setValue('')
    }

  return (
    <div className='formContainer'>
      <h2>{title}</h2>
      
      <div>
        <input
          placeholder='Introduce el nombre de la persona a castigar...'
          value={value}
          onChange={function(event) {setValue(event.target.value)}}
        />

        <button onClick={handleClick}>Enviar</button>

      </div>
    </div>
  )
}

CustomInput.propTypes = {
  title: PropTypes.string,
  inputChange: PropTypes.func
}

export default CustomInput