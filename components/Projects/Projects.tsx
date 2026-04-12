'use client';

import React, { useState, useEffect, useRef } from 'react';
import './projects.scss';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';

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

      <LazyWrapper minHeight={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img
              className='project__img'
              src='http://wiz-jobs-employer.s3-website.eu-central-1.amazonaws.com/'
              alt='WizJobs Recruitment Platform'
            />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a
              href='http://wiz-jobs-employer.s3-website.eu-central-1.amazonaws.com/'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>WizJobs</h2>
            </a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                The region&apos;s first AI-powered HR solution. A recruitment platform designed
                using best-in-class AI practices and technologies, WizJobs aims to revolutionize
                recruitment and workforce management by offering smart, data-driven solutions
                tailored for the MENA market. Built with modern React and Next.js technologies.
              </p>
              <div className='project__tags'>
                React.js &nbsp; Next.js &nbsp; TypeScript &nbsp; Tailwind CSS &nbsp; Material UI
              </div>
              <div className='project__icons'>
                <a
                  href='http://wiz-jobs-employer.s3-website.eu-central-1.amazonaws.com/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyWrapper>

      <LazyWrapper minHeight={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a
              href='https://mongez.ae'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>Mongez</h2>
            </a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
                A professional digital platform for Chartered Accountants and Certified Tax Agents
                that streamlines financial transactions, accelerates processes, and simplifies tax
                management and compliance. Built with cutting-edge frontend technologies to provide
                a seamless user experience.
              </p>
              <div className='project__tags'>
                React.js &nbsp; TypeScript &nbsp; Next.js &nbsp; Tailwind CSS &nbsp; Material UI
                &nbsp; Jest
              </div>
              <div className='project__icons project__icons1'>
                <a
                  href='https://mongez.ae'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='project__right'>
            <img
              className='project__img'
              src='https://res.cloudinary.com/dhbiouaym/image/upload/q_auto:eco/v1663667984/Portfolio/project2_dazq0o.png'
              alt='Mongez Platform'
            />
          </div>
        </section>
      </LazyWrapper>

      <LazyWrapper minHeight={400}>
        <section className='project__section project__section3'>
          <div className='project__left'>
            <img
              className='project__img'
              src='https://res.cloudinary.com/dhbiouaym/image/upload/q_auto:eco/v1663667991/Portfolio/project3_rw9d06.jpg'
              alt='PlantSiri Smart Irrigation'
            />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Graduation Project</h3>
            <a
              href='https://github.com/Yo445/PlantSiri_-GP-'
              target='_blank'
              rel='noreferrer'
              className='project__headingSecondary'
            >
              <h2>PlantSiri</h2>
            </a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                Integrated agriculture water resource management system using React, Node.js, and
                Python to monitor soil moisture and optimize water usage in real time. An innovative
                IoT solution for smart irrigation and sustainable farming practices.
              </p>
              <div className='project__tags'>
                React.js &nbsp; Node.js &nbsp; Python &nbsp; IoT &nbsp; MongoDB &nbsp; Real-time
                Monitoring
              </div>
              <div className='project__icons'>
                <a
                  href='https://github.com/Yo445/PlantSiri_-GP-'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://linkedin.com/feed/update/urn:li:activity:7207044451272187904'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyWrapper>

      {/* ─── Mobile layout ──────────────────────────────────────────────── */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='http://wiz-jobs-employer.s3-website.eu-central-1.amazonaws.com/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>WizJobs</div>
              <p className='projectResp__cardBodyDescription'>
                The region&apos;s first AI-powered HR solution. A recruitment platform designed for
                the MENA market with smart, data-driven solutions tailored for modern workforce
                management.
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                React.js &nbsp; Next.js &nbsp; TypeScript &nbsp; Tailwind CSS &nbsp; Material UI
              </div>
            </div>
          </div>
        </li>

        <li className='projectResp__items projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='https://mongez.ae'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Mongez</div>
              <p className='projectResp__cardBodyDescription'>
                A professional digital platform for Chartered Accountants and Certified Tax Agents
                that streamlines financial transactions, accelerates processes, and simplifies tax
                management.
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                React.js &nbsp; TypeScript &nbsp; Next.js &nbsp; Tailwind CSS &nbsp; Material UI
                &nbsp; Jest
              </div>
            </div>
          </div>
        </li>

        <li className='projectResp__items projectResp__items3'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a
                  href='https://github.com/Yo445/PlantSiri_-GP-'
                  target='_blank'
                  rel='noreferrer'
                  style={{ marginRight: '1.6rem' }}
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a
                  href='https://linkedin.com/feed/update/urn:li:activity:7207044451272187904'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>PlantSiri</div>
              <p className='projectResp__cardBodyDescription'>
                Integrated agriculture water resource management system using React, Node.js, and
                Python to monitor soil moisture and optimize water usage in real time.
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                React.js &nbsp; Node.js &nbsp; Python &nbsp; IoT &nbsp; MongoDB &nbsp; Real-time
                Monitoring
              </div>
            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default Project;