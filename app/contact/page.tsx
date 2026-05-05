'use client';

import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';
import AnimatedLettersFast from '@/components/AnimatedLettersFast/AnimatedLettersFast';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Contact me'];

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    return () => clearTimeout(timer);
  }, []);

  const form = useRef<HTMLFormElement>(null);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => alert('Mail Sent Successfully!!!'),
        () => alert('Mail Not Sent!!!'),
      );

    if (inputRef1.current) inputRef1.current.value = '';
    if (inputRef2.current) inputRef2.current.value = '';
    if (inputRef3.current) inputRef3.current.value = '';
  };

  return (
    <div className='contact'>
      <div className='contact__container'>
        <span className='tag'>&lt;body&gt;</span>

        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>

        <p className='contact__description'>
          I am interested in freelance opportunities — especially on ambitious or large projects.
          However, if you have any other requests or questions, don&apos;t hesitate to contact me
          using the form below.
        </p>

        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__group'>
              <input
                name='user_name'
                ref={inputRef1}
                type='text'
                className='form__input'
                id='name'
                placeholder='Full Name'
                required
              />
              <label htmlFor='name' className='form__label'>Full Name</label>
            </div>

            <div className='form__group'>
              <input
                type='email'
                ref={inputRef2}
                name='user_email'
                className='form__input'
                id='email'
                placeholder='Email Address'
                required
              />
              <label htmlFor='email' className='form__label'>Email Address</label>
            </div>

            <div className='form__group'>
              <textarea
                name='message'
                ref={inputRef3}
                className='form__input'
                id='message'
                placeholder='Message'
                required
              />
              <label htmlFor='message' className='form__label'>Message</label>
            </div>

            <button type='submit' className='intro__button'>Send Mail</button>
          </form>
        </div>

        <span className='tag'>&lt;/body&gt;</span>
      </div>
    </div>
  );
};

export default Contact;