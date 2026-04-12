import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { YosefLogo } from "@/assets/icons/YosefLogo";
import Link from "next/link";
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link href="/" className="navbar__link">
          <div className="navbar__img">
          <YosefLogo width={50} height={50}/>
          </div>
        </Link>
      </div>
      <div className="navbar__right">
        <ul className="navbar__list">
          <li className="navbar__items">
            <Link href="/#about" className="navbar__itemsLink">
              <span className="navbar__itemsLinkNumeric">01.</span>
              About
            </Link>
          </li>

          <li className="navbar__items">
            <Link href="/#projects" className="navbar__itemsLink">
              <span className="navbar__itemsLinkNumeric">02.</span>
              Projects
            </Link>
          </li>

          <li className="navbar__items">
            <Link href="/#work" className="navbar__itemsLink">
              <span className="navbar__itemsLinkNumeric">03.</span>
              Work
            </Link>
          </li>
          <li className="navbar__items">
            <Link href="/contact" className="navbar__itemsLink">
              <span className="navbar__itemsLinkNumeric">04.</span>
              Contact
            </Link>
          </li>
        </ul>
        <ThemeToggle />
        <a
          href="https://drive.google.com/file/d/1SArkoqiFxn9qevyzhdjTVBb6oJnRb6F_/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="navbar__button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g fill="none">
              <path
                fill="currentColor"
                d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"
                clipRule="evenodd"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.5 2.1v4.7h4.7"
                strokeWidth="1"
              />
              <path
                fill="currentColor"
                d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
