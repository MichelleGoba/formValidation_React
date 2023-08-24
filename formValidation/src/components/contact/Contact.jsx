import React, { useState } from 'react';


function Contact() {
    const initialValue = {name:"", email:'', subject:"", message:'',};
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState();

    const handleChange = (e) => {

        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    };

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email= "Email is required!";
        }
        if (!values.subject) {
            errors.subject = "Subject is required!";
        }
        if (!values.message) {
            errors.message = "Message is required!";
        }
        return errors;
    };

  return (
    <div className='contact-container'> 
    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
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