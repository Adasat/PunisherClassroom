import React, { useEffect, useState } from 'react'

function InputExample() {
  const [input, setInput] = useState('') // const [variable (papa), método para cambiar esa variable (setPapa)] = useState(valor primero)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (input.length > 5) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }

    console.log(isValid)
  }, [input])

  function handleInput(e) {
    setInput(e.target.value) 
  }

  return (
    <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>Running on state change: validating input field</h3>
      <form>
        <label htmlFor='input'>
          Write something (more than 5 characters is a valid input)
        </label>
        <br />
        <input
          type='text'
          id='input'
          onChange={handleInput}
          style={{height: '1.5rem', width: '20rem', marginTop: '1rem'}}
        />
      </form>
      <p>
        <span
          style={
            isValid
              ? {backgroundColor: 'lightgreen', padding: '.5rem'}
              : {backgroundColor: 'lightpink', padding: '.5rem'}
          }
        >
          {isValid ? 'Valid input' : 'Input not valid'}
        </span>
      </p>
    </>
  )
}


export default InputExample