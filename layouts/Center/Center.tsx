import './center.scss';

import Introduction from '@/components/Introduction/Introduction';
import About from '@/components/About/About';
import Project from '@/components/Projects/Projects';
import OtherProjects from '@/components/OtherProjects/OtherProjects';
import Touch from '@/components/Touch/Touch';
import LazyWrapper from '../LazyWrapper';

const Center = () => (
  <div>
    <span className='tag'>&lt;body&gt;</span>
    <Introduction />
    <LazyWrapper minHeight={566}>
      <About />
    </LazyWrapper>
    <LazyWrapper minHeight={566}>
      <Project />
    </LazyWrapper>
    <LazyWrapper minHeight={566}>
      <OtherProjects />
    </LazyWrapper>
    <LazyWrapper minHeight={566}>
      <Touch />
    </LazyWrapper>
    <span className='tag'>&lt;/body&gt;</span>
  </div>
);

export default Center;