import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import appstore from './utils/appstore'

function App() {
 

  return (
 <Provider store={appstore}>
  <Body/>
 </Provider>
  )
}

export default App
