import React, { useState } from 'react';
import { container } from '@styles/layout/containers.module.scss';
import { button, text, success, hidden, advice } from '@styles/pages/test.module.scss';
import classNames from 'classnames';

const Test = () => {
  const [isImported, setImported] = useState(false);

  const testDynamicImport = async () => {
    const { default: dynamicImportTestFn } = await import(
      /* webpackChunkName: "testImport", webpackMode: "lazy" */ './someModuleForDynamicImportTest'
    );
    dynamicImportTestFn();
    setImported(true);
  };

  return (
    <article className={container}>
      <h1>Test</h1>
      <ul className={text}>
        <li>Open network tab</li>
        <li>Notice when you click the button, js chunk will be dynamically loaded</li>
      </ul>
      <button onClick={testDynamicImport} className={button}>
        test dynamic import
      </button>
      <span
        className={classNames({
          [text]: true,
          [success]: isImported,
          [hidden]: !isImported,
        })}
      >
        dynamic import is working, checkout console
      </span>
      <div className={classNames(text, advice)}>
        Use dynamic import() when the code you are importing has significant size and
        there is a low likelihood that you will need the code. This can be helpful in
        cases like importing modal windows.
      </div>
    </article>
  );
};

export { Test };
