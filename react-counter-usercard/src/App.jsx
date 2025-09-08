import './App.css'
import user from './Data/User'
import Products from './Data/Products'
import Counter from './components/Counter/Counter'
import UserCard from './components/UserCard/UserCard'
import Product from './components/Product/Product'
import Todo from './components/Todo/Todo'

function App() {
  

  return (
    <>
      <Todo></Todo>
      <Counter />
      <UserCard user={user}/>
     <Product products={Products}></Product>
    </>
  )
}

export default App
