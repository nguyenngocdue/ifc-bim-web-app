import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Viewer from './components/app/viewer'

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Viewer/>
    </>
  )
}

export default App
