import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Hero/>
<History/>
<Famous_Articles/>
<Parts/>
<Footer/>
    
    </>
  )
}

export default App
