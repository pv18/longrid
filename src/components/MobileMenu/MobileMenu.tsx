import React, { CSSProperties, useState } from 'react';
import { Button, Drawer, Menu, MenuProps } from 'antd';
import { CloseOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { itemsMenu } from 'constans';
import s from './MobileMenu.module.scss';

const menuStyle: CSSProperties = {
  padding: 0,
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.4,
  color: 'blue',
  textTransform: 'uppercase',
  textAlign:'center'
};

const drawerTitleStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '15px 20px',
  columnGap: 20,
  fontSize: 18,
  backgroundColor: '#688ac5',
  color: '#fff',
};

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    onClose();
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <Button
        type='primary'
        icon={<MenuFoldOutlined />}
        onClick={showDrawer}
        size={'large'}
        shape='circle'
      />
      <Drawer
        className={s.drawer}
        title={
          <div style={drawerTitleStyle}>
            <CloseOutlined style={{ fontSize: 30 }} onClick={onClose} />
          </div>
        }
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Menu
          style={menuStyle}
          // defaultSelectedKeys={[location.pathname]}
          onClick={onClick}
          items={itemsMenu}
        />
      </Drawer>
    </div>
  );
};
