import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Crad'



function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-yellow-300 text-black p-4 rounded-2xl'>Tailwind css</h1>
      <Card username="what" btnText="click me" />
      <Card username="you" />
    </>
  )
}

export default App
