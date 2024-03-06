import React, { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { itemsMenu } from 'constans';
import { useScroll } from 'hooks';
import s from './DesktopMenu.module.scss';

export const DesktopMenu = () => {
  const { scrolled } = useScroll();

  const onClick: MenuProps['onClick'] = (e) => {};

  return (
    <Menu
      className={s.menu}
      mode='horizontal'
      theme={scrolled ? 'dark' : 'light'}
      onClick={onClick}
      items={itemsMenu}
    />
  );
};
