'use client';

import React, { useState, useEffect, useRef } from 'react';
import './projects.scss';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import { PROJECTS_DATA } from './porjectsData';


// ─── Custom hook: replaces react-lazyload ───────────────────────────────────
function useLazyLoad(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);

  // Initialise as `true` when IntersectionObserver is unavailable (SSR / very old browsers)
  // so we never call setState synchronously inside the effect.
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    // Already visible (no IntersectionObserver support) – nothing to do.
    if (isVisible) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // "once" behaviour – stop observing after first reveal
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return [ref, isVisible];
}

// ─── Wrapper component (drop-in replacement for <LazyLoad once>) ─────────────
interface LazyWrapperProps {
  children: React.ReactNode;
  minHeight?: number; // keeps layout stable before the content loads
  className?: string;
}

function LazyWrapper({ children, minHeight = 400, className }: LazyWrapperProps) {
  const [ref, isVisible] = useLazyLoad();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={!isVisible ? { minHeight } : undefined}
    >
      {isVisible ? children : null}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. My Projects'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
    return () => clearTimeout(timer); // clean up on unmount
  }, []); // ← dependency array added so it only runs once

  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>

      {/* ─── Desktop layout ─────────────────────────────────────────────── */}

      {PROJECTS_DATA.map((project) => (
        <LazyWrapper key={project.id} minHeight={400}>
          <section className={`project__section ${project.id === 2 ? 'project__section2' : project.id === 3 ? 'project__section3' : ''}`}>
            <div className={project.layout === 'right' ? 'project__left1' : 'project__left'}>
              {project.layout === 'right' ? (
                <>
                  <h3 className='project__headingTertiary'>{project.type}</h3>
                  <a
                    href={project.links[0].href}
                    target='_blank'
                    rel='noreferrer'
                    className='project__headingSecondary'
                  >
                    <h2>{project.title}</h2>
                  </a>
                  <div className={project.id === 2 ? 'project__descriptionContainer project__descriptionContainer1' : 'project__descriptionContainer'}>
                    <p className='project__description'>{project.description}</p>
                    <div className='project__tags'>
                      {project.tags?.join(' \u00A0 ')}
                    </div>
                    <div className={project.id === 2 ? 'project__icons project__icons1' : 'project__icons'}>
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target='_blank'
                          rel='noreferrer'
                          style={{ marginRight: index < project.links.length - 1 ? '1.6rem' : '0' }}
                        >
                          <svg className='project__icon'>
                            <use href={`icons/symbol-defs.svg#${link.icon}`} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <img
                  className='project__img'
                  src={project.image}
                  alt={project.title}
                />
              )}
            </div>
            <div className='project__right'>
              {project.layout === 'left' && (
                <>
                  <h3 className='project__headingTertiary'>{project.type}</h3>
                  <a
                    href={project.links[0].href}
                    target='_blank'
                    rel='noreferrer'
                    className='project__headingSecondary'
                  >
                    <h2>{project.title}</h2>
                  </a>
                  <div className='project__descriptionContainer'>
                    <p className='project__description'>{project.description}</p>
                    <div className='project__tags'>
                      {project.tags?.join(' \u00A0 ')}
                    </div>
                    <div className='project__icons'>
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target='_blank'
                          rel='noreferrer'
                          style={{ marginRight: index < project.links.length - 1 ? '1.6rem' : '0' }}
                        >
                          <svg className='project__icon'>
                            <use href={`icons/symbol-defs.svg#${link.icon}`} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {project.layout === 'right' && (
                <img
                  className='project__img'
                  src={project.image}
                  alt={project.title}
                />
              )}
            </div>
          </section>
        </LazyWrapper>
      ))}

      {/* ─── Mobile layout ──────────────────────────────────────────────── */}

      <ul className='projectResp__list'>
        {PROJECTS_DATA.map((project) => (
          <li key={project.id} className={`projectResp__items projectResp__items${project.id}`}>
            <div className='projectResp__card'>
              <div className='projectResp__cardTop'>
                <svg className='projectResp__cardFolder'>
                  <use href='icons/symbol-defs.svg#icon-folder' />
                </svg>
                <div className='projectResp__cardLink'>
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      style={{ marginRight: index < project.links.length - 1 ? '1.6rem' : '0' }}
                    >
                      <svg className='projectResp__icon'>
                        <use href={`icons/symbol-defs.svg#${link.icon}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div className='projectResp__cardBody'>
                <div className='projectResp__cardBodyHeading'>{project.title}</div>
                <p className='projectResp__cardBodyDescription'>
                  {project.description}
                </p>
              </div>
              <div className='projectResp__cardFooter'>
                <div className='projectResp__tags'>
                  {project.tags?.join(' \u00A0 ')}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <span className='sectiontag' style={{marginTop: '40px' }}>&lt;/section&gt;</span>
    </div>
  );
};

export default Project;