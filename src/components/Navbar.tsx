import React from 'react';
import { NavLink } from 'react-router-dom';
import { tab, tabContainer } from '@styles/layout/navbar.module.scss';

type Route = {
  path: string;
  name: string;
};

const routes: Array<Route> = [
  { path: '/', name: 'home' },
  { path: '/counter', name: 'counter' },
  { path: '/test', name: 'test' },
];

const Navbar = () => {
  return (
    <nav>
      <ul className={tabContainer}>
        {routes.map(({ path, name }) => (
          <li key={name} className={tab}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
