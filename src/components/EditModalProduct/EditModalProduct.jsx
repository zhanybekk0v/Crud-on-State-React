import React, { useState } from 'react'
import './EditModalProduct.css'

const EditModalProduct = ({ handleClose, editTodo ,handleSaveProduct}) => {
  const [item, setItem] = useState(editTodo)
  function handleEditName(e) {
    let newObj = { ...item }
    newObj.name = e.target.value
     setItem(newObj); 
  }
  function handleEditNumber(e) {
    let newObj = { ...item }
    newObj.number = e.target.value
     setItem(newObj); 
  }
  function handleEditEmail(e) {
    let newObj = { ...item }
    newObj.email = e.target.value
     setItem(newObj); 
  }function handleEditImg(e) {
    let newObj = { ...item }
    newObj.img = e.target.value
     setItem(newObj); 
  }
  return (
    <div>
       <div className='main-modal'>
      <div className="inner-modal">
        <div className="close">
          <button className='btn btn-light mt-4' onClick={handleClose} >Close</button>
        </div>
        <div className='.edit-place '>
          <div className="edit-place-inp">
        <input value={item.name} onChange={handleEditName} type="text" className="inp-edit" /><br />
        <input value={item.number} onChange={handleEditNumber} type="text" className="inp-edit" /><br />
        <input value={item.email} onChange={handleEditEmail} type="text" className="inp-edit" /><br />
        <input value={item.img} onChange={handleEditImg} type="text" className="inp-edit" /><br />
        </div>
        </div>
        <button onClick={() => handleSaveProduct(item)} className="btn btn-light mt-5 ">Save chages</button>
      </div>
    </div >
    
    </div>
  )
}

export default EditModalProduct