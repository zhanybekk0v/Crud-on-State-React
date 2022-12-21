import React from 'react'
import './ProductList.css'

const ProductList = ({ todos, handleDelete , handleEdit}) => {
  return (
    <div className='container cards'>
      <div className='wrap'>
        {todos.map((item, index) => (
          <div className='wrap-card' key={item.id}>
            <img className='wrap-card-img' src={item.img} alt="" />
            <h2 className='cards-title'>{item.name}</h2>
            <h4 className='cards-number'> {item.number}</h4>
            <p>{item.email}</p>
            <button onClick={() => handleDelete(item.id)} className='btn btn-dark text-light mt-5 mb-5'>Delete</button>
            <button onClick={() => handleEdit(index)} className='btn btn-success text-light mt-5 mb-5'>Edit</button>
          </div>
        ))}
      </div>
    </div>

  )
}

export default ProductList