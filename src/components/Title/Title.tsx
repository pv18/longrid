import React, { FC } from 'react';
import cn from 'classnames';
import s from './Title.module.scss';

interface ITitleProps {
  className?: string;
  children?: React.ReactNode;
}

export const Title: FC<ITitleProps> = (props) => {
  const { children, className } = props;

  return <h4 className={cn(s.title, className)}>{children}</h4>;
};
