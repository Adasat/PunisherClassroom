import {createBrowserRouter} from 'react-router-dom'

import App from '../App.jsx'
import Layout from '../layouts/index.jsx'
import Punisher from '../pages/Punisher.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
import RickNMorty from '../pages/RickNMorty/RickNMorty.jsx'
import Character from '../pages/Character.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/characters',
        element: <RickNMorty/>
      },
      {
        path: '/characters/:characterId',
        element: <Character/>
      }
    ]
  }
])

export default router
