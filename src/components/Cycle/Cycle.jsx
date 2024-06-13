import React, { useState } from 'react'

function Cycle() {
    const [inputValue, setInputValue] = useState('Primer valor al montarse')
  return (
    <>
        <div>Cycle</div>
        <h1>{inputValue}</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam sit accusantium quod aspernatur necessitatibus laborum consectetur fugit quibusdam quia expedita, fugiat, delectus totam ullam nisi sapiente, culpa obcaecati officiis.</h4>
        <input placeholder='Update the component' onChange={(e) => setInputValue(e.target.value)}/>
 
    </>
  )
}

export default Cycle