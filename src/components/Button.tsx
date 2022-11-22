import React, { DOMAttributes } from 'react';
import { animatedButton } from '@styles/components/animatedButton.module.scss';

const Button = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & Partial<DOMAttributes<HTMLElement>>): React.ReactElement => {
  return (
    <button className={animatedButton} {...rest}>
      {children}
    </button>
  );
};

export { Button };
