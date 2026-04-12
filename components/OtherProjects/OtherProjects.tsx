'use client';
import { useState, useEffect } from 'react';
import './otherProjects.scss';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import { OTHER_PROJECTS_DATA } from './otherProjectsData';

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
        {OTHER_PROJECTS_DATA.map((project) => (
          <li key={project.id} className='other__items'>
            <div className='other__card'>
              <div className='other__cardTop'>
                <svg className='other__cardFolder'>
                  <use href='icons/symbol-defs.svg#icon-folder' />
                </svg>
                <div className='other__cardLink'>
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      style={{ marginRight: index < project.links.length - 1 ? '1.6rem' : '0' }}
                    >
                      <svg className='other__icon'>
                        <use href={`/icons/symbol-defs.svg#${link.icon}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div className='other__cardBody'>
                <div className='other__cardBodyHeading'>{project.title}</div>
                <p className='other__cardBodyDescription'>
                  {project.description}
                </p>
              </div>
              <div className='other__cardFooter'>
                <div className='other__tags'>
                  {project.tags.join(' \u00A0 ')}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default OtherProjects;
