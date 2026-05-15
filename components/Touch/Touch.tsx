"use client";
import { useState, useEffect } from "react";
import AnimatedLettersFast from "../AnimatedLettersFast/AnimatedLettersFast";
import "./touch.scss";
import Link from "next/link";

const Touch = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = [..."Get In Touch"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 4000);
  });
  return (
    <section className="sec">
      <span className="sectiontag">&lt;section&gt;</span>
      <div className="touch">
        <label htmlFor="touchLabel" className="touch__label">
          04. Whats Next?
        </label>
        <h1 className="touch__headingPrimary">
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p className="touch__description">
          I am interested in freelance opportunities — especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don&rsquo;t hesitate to contact me using the form below.
        </p>
        <Link href="/contact" className="intro__button">
          Contact Me
        </Link>
      </div>
      <span className="sectiontag">&lt;/section&gt;</span>
    </section>
  );
};

export default Touch;
