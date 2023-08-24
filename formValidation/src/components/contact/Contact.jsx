import React, { useState } from 'react';


function Contact() {
    const initialValue = {name:"", email:'', subject:"", message:'',};
    const [formValues, setFrmValues] = useState(initialValue);

    const handleChange = (e) => {

        const {name, value} = e.target;
        setFrmValues({...formValues, [name]:value});
        console.log(formValues);
    };

  return (
    <div className='contact-container'> 
    <form onSubmit={handleSubmit}>
        <div className='contact-form'>
          
            <div className='group1'>
              <div className='input'>
              <input type='text' placeholder='Name' className='form-text' value={formValues.name} onChange={handleChange}></input>
              </div>
            </div>
            
            <div className='group1'>
              <div className='input'>
              <input type='text' placeholder='Email' className='form-text' value={formValues.email} onChange={handleChange}></input>
              </div>
            </div>
          </div>

          <div className='row'>
          <div className='group2'>
              <div className='input'>
              <input type='text' placeholder='Subject' className='form-text' value={formValues.subject} onChange={handleChange}></input>
              </div>
            </div>
          </div>

          <div className='row'>
          <div className='group2'>
              <div className='input'>
              <textarea name="" id="message" className='form-text'  placeholder="Message" value={formValues.message} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>

          <div className='group'>
            <div className='input'>
              <button className='btn'>Send Email</button>
            </div>
          </div>

          </form>  
        </div>

      
      
      

  )
}

export default Contact