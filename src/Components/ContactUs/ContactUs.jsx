
import './ContactUs.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import logo from '../Assets/pngwing.com (13).png'
import contact from '../Assets/pngwing.com (14).png'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pbolle8', 'template_6b4p5ze', form.current, {
          publicKey: 'lYYXUWGmsNr-bV7rT',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className='contactus'>ContactUs pko
    
    
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    
    </div>

    
  )
}
