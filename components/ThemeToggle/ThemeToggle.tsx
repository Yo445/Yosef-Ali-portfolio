'use client'
import { useTheme } from '../../context/ThemeContext';
import './themeToggle.scss';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className='theme-toggle'>
      <label className='container'>
        <input
          type='checkbox'
          checked={isDark} // unchecked = light/sun, checked = dark/moon
          onChange={toggleTheme}
        />
        <span className='sr-only'>Toggle theme</span>

        {/* Moon — shown when checked (dark mode) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="moon"
        >
          <path
            fill="#1d1d1d"
            d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
            opacity="0.7"
          />
        </svg>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 256 256'
          className='moon'
        >
          <g fill='#1d1d1d'>
            <path
              d='M216 120v96l-29.33-24l-29.34 24L128 192l-29.33 24l-29.34-24L40 216v-96a88 88 0 0 1 176 0'
              opacity='0.2'
            />
            <path d='M112 116a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 16v96a8 8 0 0 1-13.07 6.19l-24.26-19.85l-24.27 19.85a8 8 0 0 1-10.13 0L128 202.34l-24.27 19.85a8 8 0 0 1-10.13 0l-24.27-19.85l-24.26 19.85A8 8 0 0 1 32 216v-96a96 96 0 0 1 192 0m-16 0a80 80 0 0 0-160 0v79.12l16.27-13.31a8 8 0 0 1 10.13 0l24.27 19.85l24.26-19.85a8 8 0 0 1 10.14 0l24.26 19.85l24.27-19.85a8 8 0 0 1 10.13 0L208 199.12Z' />
          </g>
        </svg> */}

        {/* Sun — shown by default (light mode) */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 24 24'
          className='sun'
        >
          <path
            fill='white'
            d='M11.288 4.713Q11 4.425 11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5t-.712-.288M16.95 7.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275M20 13q-.425 0-.713-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8.712 9.713Q11 22.425 11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23t-.712-.288M5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275m12.7 12.725l-1.4-1.425q-.275-.3-.275-.712t.275-.688t.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3M7.75 16.25Q6 14.5 6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18t-4.25-1.75'
            opacity='0.7'
          />
        </svg>
      </label>
    </div>
  );
};

export default ThemeToggle;
