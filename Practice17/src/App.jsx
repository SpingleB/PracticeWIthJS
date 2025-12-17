import { useState } from 'react'
import Card from "./components/Card.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card className="card"/>
    </>
  )
}

export default App
