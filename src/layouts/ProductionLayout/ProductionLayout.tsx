import React from 'react';
import { Container, HeaderLayout, ImageWrapper } from 'components';
import RepeatIcon from './assests/icons/repeat.svg';
import UsersIcon from './assests/icons/users.svg';
import StudioIcon from './assests/icons/studio.svg';
import CameraIcon from './assests/icons/camera.svg';
import ReactPlayer from 'react-player/lazy';
import CardImg1 from './assests/img/card1.png';
import CardImg2 from './assests/img/card2.png';
import CardImg3 from './assests/img/card3.png';
import CardImg4 from './assests/img/card4.png';
import CardImg5 from './assests/img/card5.png';
import CardImg6 from './assests/img/card6.png';
import s from './ProductionLayout.module.scss';

export const ProductionLayout = () => {
  return (
    <section id={'production'} className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          color={'#fff'}
          title={'Продакшн'}
          subtitle={
            'Продакшн включает в себя трансляции, лекции, short-видео, рекламы, отчетные видео'
          }
          maxWidthSubTitle={750}
        />
        <div className={s.list}>
          <div className={s.list__item}>
            <div className={s.iconWrapper}>
              <img src={RepeatIcon} alt={'Repeat Icon'} />
            </div>
            <div className={s.infoBlock}>
              <div className={s.title}>Полный цикл видеопроизводства</div>
              <div className={s.info}>
                Препродакшн, продакшн, постпродакшн (подключение на этапе
                разработки видео, написание сценариев разной степени сложности)
              </div>
            </div>
          </div>

          <div className={s.list__item}>
            <div className={s.iconWrapper}>
              <img src={UsersIcon} alt={'Users Icon'} />
            </div>
            <div className={s.infoBlock}>
              <div className={s.title}>Команда профессионалов</div>
              <div className={s.info}>
                Наша команда имеет большой опыт на ТВ-проектах, в рекламе и
                индустрии видеоклипов (93 минуты с окончания съемки до
                финального ролика)
              </div>
            </div>
          </div>

          <div className={s.list__item}>
            <div className={s.iconWrapper}>
              <img src={StudioIcon} alt={'Studio Icon'} />
            </div>
            <div className={s.infoBlock}>
              <div className={s.title}>Собственные мобильные студии</div>
              <div className={s.info}>
                Собственные мобильные студии под разные цели и задачи (567
                мероприятий провела наша команда за 2023 год)
              </div>
            </div>
          </div>

          <div className={s.list__item}>
            <div className={s.iconWrapper}>
              <img src={CameraIcon} alt={'Camera Icon'} />
            </div>
            <div className={s.infoBlock}>
              <div className={s.title}>современное оборудование</div>
              <div className={s.info}>
                Собственный парк современного оборудования, специально
                предназначенного для создания качественного контента
              </div>
            </div>
          </div>
        </div>
        <div className={s.portfolio}>
          <div className={s.title}>Портфолио Продакшн-студии</div>

          <div className={s.cards}>
            <div className={s.cardRow}>
              <div className={s.card}>
                <ImageWrapper imageUrl={CardImg1} />
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
              <div className={s.card}>
                <ImageWrapper imageUrl={CardImg2} />
                <div className={s.card__title}>
                  Отчетное видео проекта космецевтического бренда
                </div>
              </div>
            </div>

            <div className={s.cardRow}>
              <div className={s.card}>
                <ImageWrapper imageUrl={CardImg3} />
                <div className={s.card__title}>
                  Анимационное видео с дикторской озвучкой
                </div>
              </div>
              <div className={s.card}>
                <ImageWrapper imageUrl={CardImg4} />
                <div className={s.card__title}>Лекция с моушн-дизайном</div>
              </div>
            </div>

            <div className={s.cardRow}>
              <div className={s.card}>
                <ImageWrapper imageUrl={CardImg5} />
                <div className={s.card__title}>
                  Лекция в классическом формате
                </div>
              </div>
              <div className={s.card}>
                <ImageWrapper imageUrl={CardImg6} />
                <div className={s.card__title}>
                  Short-видео c моушн-дизайном
                </div>
              </div>
            </div>
          </div>

          <div className={s.videoResponsive}>
            <iframe
              width='auto'
              height='auto'
              src='https://facecast.net/w/rhke2w'
              allowFullScreen
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
