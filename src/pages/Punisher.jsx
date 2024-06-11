import React, { useState } from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import Header from '../components/Header/Header'
import PunishersAccordion from '../components/PunishersAccordion/PunishersAccordion'

function Punisher() {
  const [person, setPerson] = useState('')

  function handleInputChange(inputValue) {
    setPerson(inputValue)
  }

  return (
    <div id='punisherContainer'>
      {/* Communication from parent to child --> PROPS */}
      <Header title='Reboot Academy' />
      <CustomInput title='Form of Punisher' inputChange={handleInputChange} />
      <p>La persona castigada es... {person}</p>
      <PunishersAccordion/>
    </div>
  )
}

export default Punisher