import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div className=''>
   
      <Nav  className="justify-content-center mt-5 text-light"  >
       <h4 className=''>Janybekov Nurbol Nurlanovich Makers Bootcamp!</h4>
      </Nav>
      <h1 className="text-center mt-4 mb-4 fs-1 text-light">Contact Book</h1>
    </div>
  );
}

export default Header;