import { useState } from 'react'
import ListIngredient from './components/ingredient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Liste des ingrédients</h1>
        <ListIngredient />
      </div>
    </>
  )
}

export default App
