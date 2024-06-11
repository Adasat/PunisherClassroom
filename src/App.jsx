
import './App.css'
import Punisher from './pages/Punisher'

import { PunisherContext  } from './Context/PunisherContext'
import { useState } from 'react'
import { punishersData } from '../punisherData'

function App() {
  const [punishers, setPunishers] = useState(punishersData)
  

  return (
    <PunisherContext.Provider value={{punishers, setPunishers}}>
      <Punisher />
    </PunisherContext.Provider>
  )
}

export default App
