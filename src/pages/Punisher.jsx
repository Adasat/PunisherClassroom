import React, { useState } from 'react'
import CustomInput from '../components/CustomInput/CustomInput'
import Header from '../components/Header/Header'
import PunishersAccordion from '../components/PunishersAccordion/PunishersAccordion'
import Cycle from '../components/Cycle/Cycle'
import ComponentGET from '../components/ComponentGET/ComponentGET'
import InputExample from '../components/InputExample/InputExample'

function Punisher() {
  const [person, setPerson] = useState('')

  function handleInputChange(inputValue) {
    setPerson(inputValue)
  }

  return (
    <div id='punisherContainer'>
      {/* Communication from parent to child --> PROPS */}
      {/*  <Header title='Reboot Academy' />
      <CustomInput title='Form of Punisher' inputChange={handleInputChange} />
      <p>La persona castigada es... {person}</p>
      <PunishersAccordion/> */}
      <ComponentGET />
    
    </div>
  )
}

export default Punisher