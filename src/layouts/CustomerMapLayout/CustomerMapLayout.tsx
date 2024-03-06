import React from 'react';
import { Container, HeaderLayout } from 'components';
import { Table } from 'antd';
import EyeIcon from './icons/eye.svg';
import BookIcon from './icons/book.svg';
import s from './CustomerMapLayout.module.scss';

const dataSource = [
  {
    key: '1',
    name: (
      <div className={s.name}>
        <span>Сегмент 1*</span>
        <span>5,8%</span>
      </div>
    ),
    event1: '',
    event2: (
      <div className={s.iconWrapper}>
        <img src={EyeIcon} alt={'Eye Icon'} />
        <span>Просмотр мероприятия</span>
      </div>
    ),
    event3: (
      <div className={s.iconWrapper}>
        <img src={BookIcon} alt={'Book Icon'} />
        <span>Прочтение лонгрида</span>
      </div>
    ),
    event4: '',
    event5: (
      <div className={s.iconWrapper}>
        <img src={BookIcon} alt={'Book Icon'} />
        <span>Прочтение лонгрида</span>
      </div>
    ),
  },

  {
    key: '2',
    name: (
      <div className={s.name}>
        <span>Сегмент 2*</span>
        <span>5,1%</span>
      </div>
    ),
    event1: (
      <div className={s.iconWrapper}>
        <img src={EyeIcon} alt={'Eye Icon'} />
        <span>Просмотр мероприятия</span>
      </div>
    ),
    event2: '',
    event3: '',
    event4: '',
    event5: (
      <div className={s.iconWrapper}>
        <img src={BookIcon} alt={'Book Icon'} />
        <span>Прочтение лонгрида</span>
      </div>
    ),
  },

  {
    key: '3',
    name: (
      <div className={s.name}>
        <span>Сегмент 3*</span>
        <span>4,6%</span>
      </div>
    ),
    event1: '',
    event2: '',
    event3: (
      <div className={s.iconWrapper}>
        <img src={BookIcon} alt={'Book Icon'} />
        <span>Прочтение лонгрида</span>
      </div>
    ),
    event4: '',
    event5: (
      <div className={s.iconWrapper}>
        <img src={BookIcon} alt={'Book Icon'} />
        <span>Прочтение лонгрида</span>
      </div>
    ),
  },

  {
    key: '4',
    name: (
      <div className={s.name}>
        <span>Сегмент 4*</span>
        <span>4,3%</span>
      </div>
    ),
    event1: '',
    event2: '',
    event3: '',
    event4: (
      <div className={s.iconWrapper}>
        <img src={EyeIcon} alt={'Eye Icon'} />
        <span>Просмотр мероприятия</span>
      </div>
    ),
    event5: (
      <div className={s.iconWrapper}>
        <img src={BookIcon} alt={'Book Icon'} />
        <span>Прочтение лонгрида</span>
      </div>
    ),
  },
];

const columns = [
  {
    title: <div className={s.column} />,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: (
      <div className={s.column}>
        <span className={s.columnTitle}>Апрель</span>
        <div className={s.columnSubtitle}>
          <span>Мероприятие №1</span>
        </div>
      </div>
    ),
    dataIndex: 'event1',
    key: 'event1',
  },
  {
    title: (
      <div className={s.column}>
        <span className={s.columnTitle}>Май</span>
        <div className={s.columnSubtitle}>
          <span>Мероприятие №2</span>
        </div>
      </div>
    ),
    dataIndex: 'event2',
    key: 'event2',
  },
  {
    title: (
      <div className={s.column}>
        <span className={s.columnTitle}>Август</span>
        <div className={s.columnSubtitle}>
          <span>Мероприятие №2</span>
        </div>
      </div>
    ),
    dataIndex: 'event3',
    key: 'event3',
  },
  {
    title: (
      <div className={s.column}>
        <span className={s.columnTitle}>Сентябрь</span>
        <div className={s.columnSubtitle}>
          <span>Мероприятие №2</span>
        </div>
      </div>
    ),
    dataIndex: 'event4',
    key: 'event4',
  },
  {
    title: (
      <div className={s.column}>
        <span className={s.columnTitle}>Октябрь</span>
        <div className={s.columnSubtitle}>
          <span>Мероприятие №2</span>
        </div>
      </div>
    ),
    dataIndex: 'event5',
    key: 'event5',
  },
];

export const CustomerMapLayout = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          title={'Customer Journey Map'}
          subtitle={
            'Планируем проекты, отталкиваясь от поведения пользователей, Строим Customer Journey Map для глубокой работы с разными сегментами целевой аудитории'
          }
          maxWidthSubTitle={756}
        />
        <div className={s.table}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
        <div className={s.info}>
          <span>
            * Были выбраны сегменты, которые получили более 3-х эффективных
            касаний
          </span>
          <span>(т.е. более среднего показателя по проекту)</span>
        </div>
      </Container>
    </section>
  );
};
