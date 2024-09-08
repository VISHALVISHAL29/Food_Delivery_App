import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div><div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary text-white">Home</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary text-white">Features</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary text-white">Pricing</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary text-white">FAQs</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary text-white">About</Link></li>
      </ul>
      <p className="text-center text-body-secondary text-white">© 2023 Company, Inc</p>
    </footer>
  </div></div>
  )
}
