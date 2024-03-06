import React, { FC } from 'react';
import cn from 'classnames';
import s from './HeaderLayout.module.scss';

interface IHeaderLayoutProps {
  className?: string;
  color?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  maxWidthTitle?: number;
  maxWidthSubTitle?: number;
  hideDivider?: boolean;
}

export const HeaderLayout: FC<IHeaderLayoutProps> = (props) => {
  const {
    className,
    color,
    title,
    subtitle,
    maxWidthTitle,
    maxWidthSubTitle,
    hideDivider,
  } = props;

  return (
    <div className={cn(s.wrapper, className)} style={{ color: color }}>
      <h3 style={{ maxWidth: maxWidthTitle || '100%' }} className={s.title}>
        {title}
      </h3>
      {!hideDivider && (
        <div className={s.divider} style={{ backgroundColor: color }} />
      )}
      <h5
        style={{ maxWidth: maxWidthSubTitle || '100%' }}
        className={s.subtitle}
      >
        {subtitle}
      </h5>
    </div>
  );
};
