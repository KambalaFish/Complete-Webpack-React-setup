import React, { useState } from 'react';
import { container, rowFlexContainer } from '@styles/layout/containers.module.scss';
import { counter } from '@styles/pages/counter.module.css';
import { Button } from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={container}>
      <h1>Counter</h1>
      <div className={rowFlexContainer}>
        <Button onClick={() => setCount((c) => c - 1)}>decrease😳</Button>
        <div className={counter}>{count}</div>
        <Button onClick={() => setCount((c) => c + 1)}>increase😋</Button>
      </div>
    </div>
  );
};

export default Counter;
