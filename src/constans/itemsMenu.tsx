import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const itemsMenu: MenuItem[] = [
  { key: 'ecosystem', label: <a href='#ecosystem'>Экосистема medguru</a> },
  { key: 'crm', label: <a href='#crm'>CRM-система</a> },
  { key: 'production', label: <a href='#production'>Продакшн</a> },
  { key: 'contacts', label: <a href='#contacts'>контакты</a> },
];
