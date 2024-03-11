import React from 'react';
import { Container, HeaderLayout, ImageWrapper } from 'components';
import SchemeImg from './img/scheme.png';
import SchemeIcon from 'layouts/ProgramForSuccess/img/scheme-small.svg';
import { useResize } from 'hooks';
import s from './ProgramForSuccess.module.scss';

export const ProgramForSuccess = () => {
  const { isScreenSm } = useResize();

  return (
    <section className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          title={'экосистема для успеха наших партнеров'}
          maxWidthTitle={600}
          subtitle={'MedGuru – полноценная двусторонняя коммуникация'}
          maxWidthSubTitle={610}
        />
        <ImageWrapper imageUrl={isScreenSm ? SchemeIcon : SchemeImg} />
      </Container>
    </section>
  );
};
