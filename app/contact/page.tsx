'use client';

import AnimatedLetters from '@/components/AnimatedLetters/AnimatedLetters';
import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import dynamic from 'next/dynamic';
import emailjs from '@emailjs/browser';
import type { MapProps, MarkerProps } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = dynamic<MapProps>(
  () => import('@vis.gl/react-maplibre').then((m) => m.Map),
  { ssr: false }
);
const Marker = dynamic<MarkerProps>(
  () => import('@vis.gl/react-maplibre').then((m) => m.Marker),
  { ssr: false }
);

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
      <div className='contact__left'>
        <span className='tag' style={{ padding: '0rem' }}>&lt;body&gt;</span>

        <h1 className='about__headingPrimary'>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>

        <p className='contact__description'>
          I am interested in freelance opportunities - especially on ambitious or large projects.
          However, if you have any other requests or questions, don&apos;t hesitate to contact me
          using below form either.
        </p>

        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__group'>
              <input name='user_name' ref={inputRef1} type='text'
                className='form__input' id='name' placeholder='Full Name' required />
              <label htmlFor='name' className='form__label'>Full Name</label>
            </div>

            <div className='form__group'>
              <input type='email' ref={inputRef2} name='user_email'
                className='form__input' id='email' placeholder='Enter Your Email Address' required />
              <label htmlFor='email' className='form__label'>Email Address</label>
            </div>

            <div className='form__group'>
              <textarea name='message' ref={inputRef3}
                className='form__input' id='message' placeholder='Message' required />
              <label htmlFor='message' className='form__label'>Message</label>
            </div>

            <button type='submit' className='intro__button'>Send Mail</button>
          </form>
        </div>

        <span className='tag' style={{ padding: '0rem' }}>&lt;/body&gt;</span>
      </div>

      <div className='contact__right'>
        <Map
          initialViewState={{
            longitude: 72.8777,
            latitude: 19.076,
            zoom: 9.5,
          }}
          // 100% free OpenStreetMap-based style, no token needed
          mapStyle='https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
          style={{ width: '100%', height: '100%' }}
        >
          <Marker latitude={19.0908} longitude={72.9077}>
            <button type='button' className='map__button'>📍</button>
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default Contact;