import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { YosefLogo } from "@/assets/icons/YosefLogo";
import Link from "next/link";
import "./navbar.scss"
import CvIcon from "@/assets/icons/CvIcon";

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
          href="https://drive.google.com/file/d/1VbPHY8pZBHqeZHcRoRGzcoJzjEh2CNc9/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="navbar__button"
        >
          <CvIcon width={20} height={20}  />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
