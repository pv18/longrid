import React, { FC } from 'react';
import s from './Container.module.scss';

interface IContainerProps {
  children?: React.ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
