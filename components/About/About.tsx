"use client";
import { useEffect, useState } from "react";
import AnimatedLettersFast from "../AnimatedLettersFast/AnimatedLettersFast";
import "./about.scss";
import Image from "next/image";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = [..."01. About Me"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 4000);
  });
  return (
    <div className="about" id="about">
      <div className="about__left">
        <span className="sectiontag">&lt;section&gt;</span>
        <h1 className="about__headingPrimary">
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <div className="about__description">
          Hello! My name is <span className="about__link">Youssef Ali</span>{" "}
          Frontend & Mobile Developer with 2 years of experience building
          scalable digital products for web and mobile using React.js, Next.js,
          AngularJS, and React Native. Passionate about creating
          high-performance, user-centered experiences with strong expertise in
          UI/UX design using Figma and Adobe Illustrator, combining creativity,
          clean architecture, and modern product thinking to deliver polished
          and impactful solutions.
          <br />
          <ul className="about__skillsList">
            <li className="about__skillsItems">React.js & React Native</li>
            <li className="about__skillsItems">Next.js</li>
            <li className="about__skillsItems">Angular</li>
            <li className="about__skillsItems">Javascript(ES6+)</li>
            <li className="about__skillsItems">Python</li>
            <li className="about__skillsItems">Scss / Sass</li>
            <li className="about__skillsItems">Nodejs</li>
          </ul>
        </div>
        <span className="sectiontag">&lt;/section&gt;</span>
      </div>
      <div className="about__right">
        {/* <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-python' />
              </svg>
            </div>
            <div className='face2'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-css3' />
              </svg>
            </div>
            <div className='face3'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-javascript' />
              </svg>
            </div>
            <div className='face4'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-mongodb' />
              </svg>
            </div>
            <div className='face5'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-node-dot-js' />
              </svg>
            </div>
            <div className='face6'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-react' />
              </svg>
            </div>
          </div>
        </div> */}
        <Image
          src="/images/me.png"
          alt="about"
          width={400}
          height={400}
          className="about__image"
        />
      </div>
    </div>
  );
};

export default About;
