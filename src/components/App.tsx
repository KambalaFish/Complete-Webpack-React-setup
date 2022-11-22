import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@styles/global.scss';
import { spinner } from '@styles/components/spinner.module.scss';
import { mainContainer } from '@styles/layout/containers.module.scss';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Test } from './Test';
const Counter = lazy(
  () =>
    import(
      /* webpackChunkName: "counter", webpackMode: "lazy", webpackPrefetch: true */ './Counter'
    )
);

const App = () => {
  return (
    <BrowserRouter>
      <div className={mainContainer}>
        <Navbar />
        <Suspense fallback={<div className={spinner} />}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/counter'} element={<Counter />} />
            <Route path={'/test'} element={<Test />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
