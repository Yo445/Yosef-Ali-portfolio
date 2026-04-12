import GithubIcon from '@/assets/icons/GithubIcon';
import LinkedinIcon from '@/assets/icons/LinkedinIcon';
import './leftSidebar.scss';
import BehanceIcon from '@/assets/icons/BehanceIcon';

const LeftSideBar = () => (
  <div className='left'>
    <main className='left__main'>
      <ul className='left__social'>
        <li className='left__linkItems'>
          <a href='https://github.com/Yo445' className='left__links' target='_blank' rel='noreferrer'>
            <GithubIcon width={24} height={24} color='var(--light-slate)' />
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://linkedin.com/in/youssef-ali' target='_blank' rel='noreferrer' className='left__links'>
            <LinkedinIcon width={24} height={24} color='var(--light-slate)' />
          </a>
        </li>
        <li className='left__linkItems'>
          <a href='https://www.behance.net/yosefali15' target='_blank' rel='noreferrer' className='left__links'>
            <BehanceIcon width={24} height={24} color='var(--light-slate)' />
          </a>
        </li>
      </ul>
      <div className='left__line' />
    </main>
  </div>
);

export default LeftSideBar;
