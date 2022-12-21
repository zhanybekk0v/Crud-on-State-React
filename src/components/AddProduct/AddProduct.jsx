import React, { useState } from 'react'
import './AddProduct.css'
import PhoneIcon from '../img/phone-icon.png'
import EmailIcon from '../img/email-icons.png'
import LocationIcon from '../img/location-icons.png'
import IntagramIcon from '../img/instagram-icon.png'
import TwitterIcon from '../img/twitter-icon.png'
import DisIcon from '../img/dis-icons.png'


const AddProduct = ({handleProduct}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email , setEmail] = useState('')
  const [img , setImg] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleNumber = (e) => {
    setNumber(e.target.value)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value)
  };
  const handleImg = (e) => {
    setImg(e.target.value)
  };

  const handleAdd = () => {
    //? формируем новый обьект
    const newTask = {
      name: name,
      number: number,
      email: email,
      img: img,
      id: Date.now(),
    }
    handleProduct(newTask);
    setName('');
    setNumber('');
    setEmail('');
    setImg('');

  }

  return (
    <div className='container'>
     <div className="info">
      <h1 className="info-title">
      Contact Information
      </h1>
      <p className="info-desc">
      Say something to start a live chat!
      </p>
      <div className="info-bracks">
        <img src={PhoneIcon} alt="" className="info-bracks-icons" />
        <span className="info-bracks-title">+996 707 617 550</span>
      </div>
      <div className="info-bracks">
        <img src={EmailIcon} alt="" className="info-bracks-icons" />
        <span className="info-bracks-title">zhanybekov@gmail.com</span>
      </div>
      <div className="info-bracks">
        <img src={LocationIcon} alt="" className="info-bracks-icons" />
        <span className="info-bracks-title">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
      </div>
      <div className="bottom-info">
        <img src={TwitterIcon} alt="" />
        <img src={IntagramIcon} alt="" />
        <img src={DisIcon} alt="" />
      </div>
     </div>
     <div className="add-place">
      <div className="add-place-inp">
        <input value={name} onChange={handleName} type="text" className="inp-place inp1"  placeholder='Name'/>
        <input value={number} onChange={handleNumber} type="number" className="inp-place inp2" placeholder='Yuor phone'/><br />
        <input value={email} onChange={handleEmail} type="email" className="inp-place inp3" placeholder='@email.com'/>
        <input value={img} onChange={handleImg} type="text" className="inp-place inp4" placeholder='URL image' />
      </div>
      <p className="add-place-desc">Any question or remarks? Just write us a message!</p>
      <div className="add-btn-place">
      <button onClick={handleAdd} className='addCard'>Add Contact</button>
      </div>
     </div>
    </div>
  )
}

export default AddProduct