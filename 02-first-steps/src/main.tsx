import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { FirstSteepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstSteepsApp/> */}
    <MyAwesomeApp/>
  </StrictMode>,
)
