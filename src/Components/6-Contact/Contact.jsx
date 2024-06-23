import React from 'react'
import './Contact.css'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaDribbble,
  FaPhoneAlt
} from 'react-icons/fa'

import { IoMailOpenOutline } from "react-icons/io5";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';

const Contact = () => {

  const [state, handleSubmit] = useForm("xzzppgdo");
  if (state.succeeded) {
    return <h1 className='section-title text-center'>Thanks for Sending!
      </h1>;
  }


  return (
    <section className='Contact' id='Contact'>
      <h2 className='section-title'>
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container d-grid">
        <div className="contact-data">
          <h3 className="contact-title">
            Contact Me
          </h3>
          <p className="contact-desc">I am always open to discussing new projects, collaboration opportunities or work or partnership opportunities.</p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className='info-icon' />
              <div>
                <span className="info-title">Mail Me</span>
                <h4 className="info-desc">NaderMamdouh68@gmail.com</h4>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneAlt className='info-icon' />
              <div>
                <span className="info-title">Call Me</span>
                <h4 className="info-desc">+201125257350</h4>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-input-group">
            <div className="form-controll">
              <input type="text" id="name" placeholder='Enter your name' name='name' />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-controll">
              <input type="email" id="email" placeholder='Enter your email' name='email'/>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-controll">
              <input type="text" id="subject" placeholder='Enter subject'  name='subject'/>
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="form-controll">
            <textarea name="message" id="message" placeholder='Enter your message'></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="icon-cv">
            <button className='cv-btn' type="submit" disabled={state.submitting}>
              Send Message
              <span className='icon-send cv-icon'></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
