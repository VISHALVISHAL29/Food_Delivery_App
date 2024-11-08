import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screen/Cart';

export default function Navbar() {
  const [CartView , setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">Foodie</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem('authToken')) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
                </li>
                : ""}
            </ul>
            {!(localStorage.getItem('authToken')) ?

              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>

                <Link className="btn bg-white text-success mx-1" to="/creatuser">Signup</Link>
              </div>
              : <div>
                <div className="btn bg-white text-success mx-1" onClick={()=>{setCartView(true)}} >
                  My Cart{" "}
                  <Badge pill bg="danger">2</Badge>
                  </div>
                  {CartView?<Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:null}
                <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>Log Out</div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
