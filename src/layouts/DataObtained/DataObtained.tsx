import React from 'react';
import { Container } from 'components';
import DataIcon from './icons/data.png';
import s from './DataObtained.module.scss';

export const DataObtained = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.content}>
          <div className={s.iconWrapper}>
            <img src={DataIcon} alt={'Data Icon'} />
          </div>
          <p>
            Данные получены, основываясь на более чем 10 кейсах по гинекологии,
            маммологи, аллергологии, неврологии и кардиологии.
          </p>
        </div>
      </Container>
    </section>
  );
};
