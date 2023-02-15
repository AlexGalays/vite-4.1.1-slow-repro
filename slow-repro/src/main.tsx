import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Button } from './slowStuff/Button'
import { Button2 } from './slowStuff/Button2'
import {ButtonGroup} from "./slowStuff/ButtonGroup"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
      <Button />
      <ButtonGroup>
      <Button />
      <Button />
      </ButtonGroup>

      <Button2/>
  </React.StrictMode>,
)
