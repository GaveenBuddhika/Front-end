
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
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    
      <div className='contactus'>

        <div id='header1'>
          <h1>Contact Us</h1>
        </div>


          <form id='formContact' ref={form} onSubmit={sendEmail}>
            <label className='label1'>Name</label>
            <input className='input1' type="text" name="user_name" />
            <label className='label1'>Email</label>
            <input className='input1' type="email" name="user_email" />
            <label className='label1'>Message</label>
            <textarea id='textarea1' name="message" />
            <input id='button1' type="submit" value="Send" />
          </form>

      </div>
  
    

    
  )
}
