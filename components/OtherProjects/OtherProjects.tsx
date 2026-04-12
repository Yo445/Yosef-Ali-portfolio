'use client';
import { useState, useEffect } from 'react';
import './otherProjects.scss';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';

const OtherProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'Other Projects '];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });

  return (
    <div className='other'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <div className='other__container'>
        <h1 className='other__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
      </div>

      <ul className='other__list'>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
                <a href='https://github.com/Yo445/Angular_ecommerce_Lugar' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='/icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Lugar</div>
              <p className='other__cardBodyDescription'>
                An e-commerce web app built with Angular. Features include product listing, shopping cart, dynamic filtering, category navigation, and user interaction. A comprehensive platform demonstrating modern Angular development practices.
                {' '}

              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Angular &nbsp; TypeScript &nbsp; RxJS &nbsp; Bootstrap &nbsp; E-commerce</div>
            </div>
          </div>
        </li>
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default OtherProjects;
