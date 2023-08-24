import React, { useState } from 'react';


function Contact() {
    const initialValue = {name:"", email:'', subject:"", message:'',};
    const [formValues, setFrmValues] = useState(initialValue);
  return (
    <div className='contact-container'>   
        <div className='contact-form'>
          <div className='row'>
            <div className='group1'>
              <div className='input'>
              <input type='text' placeholder='Name' className='form-text' value={formValues.name}></input>
              </div>
            </div>
            
            <div className='group1'>
              <div className='input'>
              <input type='text' placeholder='Email' className='form-text' value={formValues.email}></input>
              </div>
            </div>
          </div>

          <div className='row'>
          <div className='group2'>
              <div className='input'>
              <input type='text' placeholder='Subject' className='form-text' value={formValues.subject}></input>
              </div>
            </div>
          </div>

          <div className='row'>
          <div className='group2'>
              <div className='input'>
              <textarea name="" id="message" className='form-text'  placeholder="Message" value={formValues.message}></textarea>
              </div>
            </div>
          </div>

          <div className='group'>
            <div className='input'>
              <button className='btn'>Send Email</button>
            </div>
          </div>


        </div>

      
      
      </div>

  )
}

export default Contact