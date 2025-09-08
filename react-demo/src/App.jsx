import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import DisplayData from './components/DisplayData'
import Counter from './components/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)
  const fruits = ['apple', 'banana', 'orange'];
  const person = {
    name: "xxx",
    age: 25
  }
  return (
    <>
      
      <h1>Vite + React</h1>
      <MyComponent message = "1" />
      <MyComponent message = "2"></MyComponent>
      <MyComponent>3</MyComponent>
      <MyComponent>4</MyComponent>
      <DisplayData fr={fruits} pr = {person}/>
      <Counter />
    </>
  )
}

export default App
