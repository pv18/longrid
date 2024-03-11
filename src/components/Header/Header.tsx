import React from 'react';
import { DesktopMenu, MobileMenu } from 'components';
import { useResize, useScroll } from 'hooks';
import LogoIcon from './icons/logo.svg';
import LogoWhiteIcon from './icons/logo-white.svg';
import s from './Header.module.scss';

export const Header = () => {
  const { isScreenXxx } = useResize();
  const { scrolled } = useScroll();

  return (
    <>
      {isScreenXxx ? (
        <MobileMenu />
      ) : (
        <header className={`${s.wrapper} ${scrolled ? s.wrapperActive : ''}`}>
          <div className={s.header}>
            <div className={s.logo}>
              <img
                src={scrolled ? LogoWhiteIcon : LogoIcon}
                alt={'Logo Icon'}
              />
            </div>
            <DesktopMenu />
          </div>
        </header>
      )}
    </>
  );
};
