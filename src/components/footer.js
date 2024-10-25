import React from 'react';
import '../App.css';

export default function Footer() {

  return (
    <>
      <div className="Footer">
        <div className="Legal">
          <h3>Legal</h3><br />
          <p>Copyright © 2024. Malebo Sambo. All rights reserved.</p><br />
        </div>

        <div className="Contacts">
          <h3>Contacts</h3><br />
          <img src="Email.png" alt="Email Icon" className="Icon" />
          <a href="mailto:sambo.malebo96@gmail.com"><p>sambo.malebo96@gmail.com</p></a>
          <img src="./Telephone.png" alt="Telephone Icon" className="Icon" />
          <a href="tel:+27630013711"><p>+27630013711</p></a>
        </div>

        <div className="Socials">
          <h3>Socials</h3><br />
          <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn" className="Icon" /></a>
          <a href="www.github.com/sambomalebo"><img src="./GitHub.png" alt="GitHub" className="Icon" /></a>
          <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter" className="Icon" /></a>
        </div>
      </div>
    </>
  )
}