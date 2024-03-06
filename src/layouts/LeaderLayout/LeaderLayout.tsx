import React from 'react';
import { Container } from 'components';
import LeaderImg from './img/leader.png';
import LeaderSmallImg from './img/leader-small.png';
import s from './LeaderLayout.module.scss';

export const LeaderLayout = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <div className={s.info}>
          <p>
            <img src={LeaderSmallImg} alt='Ярослав Третьяков' />
            <span>
              Команда MEDGURU разрабатывает экосистемные решения, позволяющие
              фармацевтическому бизнесу достигать управленческого совершенства.
              Для того чтобы структурировать информацию о продуктах компании,
              нами был создан данный лонгрид, который является одним из
              инструментов омниканального маркетинга экосистемы MEDGURU».
            </span>
            <span className={s.respect}>
              С уважением,
              <br />
              Ярослав Третьяков <br />
              <span className={s.regular}>Основатель группы компаний</span>
            </span>
          </p>
        </div>
        <div className={s.imgWrapper}>
          <figure className={s.img}>
            <img src={LeaderImg} alt='Ярослав Третьяков' />
          </figure>
        </div>
      </Container>
    </section>
  );
};
