import React from 'react';

export default function ContactUs() {

  return (
    <main className="Get_In_Touch">
      <h1>Get In Touch</h1>
    
      <div>
        <address>
          <abbr title="Cellphone">Cell:</abbr> <a href="tel:+27630013711">+27630013711</a>
        </address>
          
        <address>
          <p>Email:</p> <a href="mailto:sambo.malebo96@gmail.com">sambo.malebo96@gmail.com</a>
        </address>     
      </div>
    
      <div>
        <form action={SubmitForm}>
          <input type="text" placeholder="First" />
          <input type="text" placeholder="Last" />
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Cell Number" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    
    </main>
  )
}
