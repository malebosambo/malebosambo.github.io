import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
      <Link to="/"><h6>Home</h6></Link>
      <Link to="/cv-resume"><h6>CV</h6></Link>
      <Link to="/repos"><h6>Repos</h6></Link>
      <Link to="/contacts"><h6>Contacts</h6></Link>
    </>       
  )
}