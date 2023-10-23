import { useState } from 'react'
import Router from './components/router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router/>
  )
}

export default App
