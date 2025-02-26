import React, { useState } from 'react';
import Nav from "./navbar";
import { Link } from 'react-router-dom';

export default function Header() {

  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);  

  return (
    <main className="Header">
      <div className="Logo">
        <div>
          <Link to="/"><img src="./Malebo-Sambo-Logo-Transp.png" alt="malebo-sambo-logo" style={{ height: "60px" }} /></Link>
        </div>
        <div className="Mobile_Menu" style={{padding: "20px"}}>
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>  
      </div>
      <div className={ mobileMenu ? "Menu_Visible" : "Menu" }>
        <Nav />
      </div>
    </main>    
  )
}