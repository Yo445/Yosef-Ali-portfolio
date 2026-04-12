import Link from 'next/link';
import './rightSidebar.scss';

const RightSideBar = () => (
  <div className='right'>
    <main className='right__main'>
      <div><Link href='/contact' className='right__email'>aliy94476@gmail.com</Link></div>
      <div className='right__line' />
    </main>
  </div>
);

export default RightSideBar;
