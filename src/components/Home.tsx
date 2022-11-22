import React from 'react';
import { container } from '@styles/layout/containers.module.scss';
import { rotator, title } from '@styles/pages/home.module.scss';
import ReactIcon from '@assets/react.svg';

const Home = () => {
  return (
    <div className={container}>
      <ReactIcon className={rotator} />
      <h1 className={title}>Webpacked React starter</h1>
    </div>
  );
};

export { Home };
