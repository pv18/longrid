import React from 'react';
import Logo from './assets/img/logo.png';
import LogoText from './assets/img/logo-text.png';
import LogoFull from './assets/img/logo-with-text.png';
import { Header } from 'components';
import s from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <section className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <div className={s.logo}>
          <img src={Logo} alt='logo' />
        </div>
        <div className={s.logoFull}>
          <img src={LogoFull} alt='logo' />
        </div>
        <div className={s.block}>
          <div className={s.title}>
            <img src={LogoText} alt='Med Guru' />
          </div>
          <div className={s.subtitle}>
            <p className={s.text}>
              <span>Медгуру</span> - прогрессивное диджитал-агентство,
              специализирующееся на создании облачной архитектуры для
              фармацевтического бизнеса.
            </p>
            <p className={s.text}>
              Наша цель — помочь нашим клиентам оптимизировать процессы и
              улучшить их маркетинговую стратегию, чтобы достичь максимальных
              показателей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
