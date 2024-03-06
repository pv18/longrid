import React from 'react';
import { Container, HeaderLayout } from 'components';
import RepeatIcon from './assests/icons/repeat.svg';
import UsersIcon from './assests/icons/users.svg';
import StudioIcon from './assests/icons/studio.svg';
import CameraIcon from './assests/icons/camera.svg';
import ReactPlayer from 'react-player/lazy';
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
                <div className={s.card__video}>
                  <ReactPlayer
                    className={s.player}
                    url='https://www.youtube.com/watch?v=GU_eBbhwrgo'
                    width='100%'
                    height='100%'
                    controls={true}
                  />
                </div>
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
              <div className={s.card}>
                <div className={s.card__video}>
                  <ReactPlayer
                    className={s.player}
                    url='https://www.youtube.com/watch?v=GU_eBbhwrgo'
                    width='100%'
                    height='100%'
                    controls={true}
                  />
                </div>
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
            </div>

            <div className={s.cardRow}>
              <div className={s.card}>
                <div className={s.card__video}>
                  <ReactPlayer
                    className={s.player}
                    url='https://www.youtube.com/watch?v=GU_eBbhwrgo'
                    width='100%'
                    height='100%'
                    controls={true}
                  />
                </div>
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
              <div className={s.card}>
                <div className={s.card__video}>
                  <ReactPlayer
                    className={s.player}
                    url='https://www.youtube.com/watch?v=GU_eBbhwrgo'
                    width='100%'
                    height='100%'
                    controls={true}
                  />
                </div>
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
            </div>

            <div className={s.cardRow}>
              <div className={s.card}>
                <div className={s.card__video}>
                  <ReactPlayer
                    className={s.player}
                    url='https://www.youtube.com/watch?v=GU_eBbhwrgo'
                    width='100%'
                    height='100%'
                    controls={true}
                  />
                </div>
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
              <div className={s.card}>
                <div className={s.card__video}>
                  <ReactPlayer
                    className={s.player}
                    url='https://www.youtube.com/watch?v=GU_eBbhwrgo'
                    width='100%'
                    height='100%'
                    controls={true}
                  />
                </div>
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
            </div>

            <div className={s.cardRow}>
              <div className={s.card}>
                <div className={s.card__video}>
                  <ReactPlayer
                    className={s.player}
                    url='https://www.youtube.com/watch?v=GU_eBbhwrgo'
                    width='100%'
                    height='100%'
                    controls={true}
                  />
                </div>
                <div className={s.card__title}>Отчетное видео конгресса</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
