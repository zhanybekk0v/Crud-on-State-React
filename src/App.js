import React, { useState } from 'react'
import AddProduct from './components/AddProduct/AddProduct'
import Header from './components/Navbar/Header'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import EditModalProduct from './components/EditModalProduct/EditModalProduct'

const App = () => {
  const [todos , setTodos] = useState([])
  const [modal, setModal] = useState(false)
  const [editTodo, setEditTodo] = useState({})
//TODO функция добавление
  function handleProduct (newObj){
    const newTodos =[...todos]
    newTodos.push(newObj)
    setTodos(newTodos)
  }
  //TODO функция удаление

  function handleDelete(id) {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos) 
  }
//TODO функция вызова модального окна
function handleEdit(index) {
  setModal(true)
  setEditTodo(todos[index])

}

function handleClose() {
  setModal(false);
}

function handleSaveProduct(newTodos){
  const newContacts = todos.map((item) => {
    if(item.id === newTodos.id){
      return newTodos
    }
    return item
  })
  setTodos(newContacts)
  handleClose()
}
  return (
    <div className='wrapper'>
      <Header />

      <AddProduct handleProduct={handleProduct} />
      <ProductList handleDelete={handleDelete} handleEdit={handleEdit} todos={todos} />
      {modal ? (<EditModalProduct handleSaveProduct={handleSaveProduct}  editTodo={editTodo} handleClose={handleClose} />) : (null)}
    </div>
  )
}

export default App
