import React, { useRef } from 'react';
import { Container, HeaderLayout } from 'components';
import LogoImg from './assets/img/logo.png';
import DoctorImg from './assets/img/doctor.png';
import ReviewsImg from './assets/img/reviews.png';
import DisplayNewsImg from 'layouts/YourBrandsLayout/assets/img/display-news.png';
import DisplayGraphicsImg from 'layouts/YourBrandsLayout/assets/img/display-graphics.png';
import DisplayNewsSmallImg from 'layouts/YourBrandsLayout/assets/img/display-news-small.png';
import DisplayGraphicsSmallImg from 'layouts/YourBrandsLayout/assets/img/display-graphics-small.png';
import ReviewsSmallImg from 'layouts/YourBrandsLayout/assets/img/reviews-small.png';
import LongridIcon from './assets/icons/longrid.svg';
import TreeIcon from './assets/icons/tree.svg';
import EventsIcon from './assets/icons/events.svg';
import VideoVisitIcon from './assets/icons/video-visit.svg';
import SmsIcon from './assets/icons/sms.svg';
import EmailIcon from './assets/icons/email.svg';
import MessengerIcon from './assets/icons/messenger.svg';
import VideoIcon from './assets/icons/video.svg';
import ArrowLeftIcon from 'layouts/ChooseUsLayout/assets/icons/arrow-left.svg';
import ArrowRightIcon from 'layouts/ChooseUsLayout/assets/icons/arrow-right.svg';
import { Carousel } from 'antd';
import { useResize } from 'hooks';
import s from './YourBrandsLayout.module.scss';

export const YourBrandsLayout = () => {
  const ref = useRef<any>();
  const { isScreenSm } = useResize();

  return (
    <section className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          title={'Омниканальная платформа для продвижения ваших брендов'}
          maxWidthTitle={700}
          subtitle={'Визуализация всех каналов вокруг пользователя'}
        />
        <div className={s.cards}>
          <div className={s.cardsRow}>
            <div className={s.cardCircle}>
              <div className={s.circle}>
                <img src={ReviewsImg} alt={'Reviews Image'} />
              </div>
              <div className={s.info}>
                Контролируйте триггерные коммуникации в рамках маркетинговой
                кампании
              </div>
            </div>

            <div className={s.cardBox}>
              <div className={s.cardBoxTitle}>Какие каналы объединяет</div>
              <div className={s.cardBoxLogo}>
                <img src={LogoImg} alt='Logo Image' />
              </div>
              <div className={s.icons}>
                <div className={s.iconsRow}>
                  <div className={s.iconWrapper}>
                    <img src={LongridIcon} alt={'Longrid Icon'} />
                    <span className={s.iconTitle}>Лонгриды</span>
                  </div>
                  <div className={s.iconWrapper}>
                    <img src={TreeIcon} alt={'Tree Icon'} />
                    <span className={s.iconTitle}>Digital-Quiz</span>
                  </div>
                </div>

                <div className={s.iconsRow}>
                  <div className={s.iconWrapper}>
                    <img src={EventsIcon} alt={'Events Icon'} />
                    <span className={s.iconTitle}>
                      Меро-
                      <br />
                      приятия
                    </span>
                  </div>
                  <div className={s.iconWrapper}>
                    <img src={VideoVisitIcon} alt={'VideoVisit Icon'} />
                    <span className={s.iconTitle}>
                      Видео-
                      <br />
                      визиты
                    </span>
                  </div>
                </div>

                <div className={s.iconsRow}>
                  <div className={s.iconWrapper}>
                    <img src={SmsIcon} alt={'SMS Icon'} />
                    <span className={s.iconTitle}>SMS</span>
                  </div>
                  <div className={s.iconWrapper}>
                    <img src={EmailIcon} alt={'Email Icon'} />
                    <span className={s.iconTitle}>E-mail</span>
                  </div>
                </div>

                <div className={s.iconsRow}>
                  <div className={s.iconWrapper}>
                    <img src={MessengerIcon} alt={'Messenger Icon'} />
                    <span className={s.iconTitle}>
                      Мессенд-
                      <br />
                      жеры
                    </span>
                  </div>
                  <div className={s.iconWrapper}>
                    <img src={VideoIcon} alt={'Video Icon'} />
                    <span className={s.iconTitle}>
                      Short-видео
                      <br />с KOL
                    </span>
                  </div>
                </div>

                <div className={s.mainIcon}>
                  <div className={s.circle} />
                  <div className={s.imgWrapper}>
                    <img src={DoctorImg} alt={'Doctor Image'} />
                  </div>
                </div>
              </div>
            </div>

            <div className={s.cardCircle}>
              <div className={s.circle}>
                <img src={DisplayNewsImg} alt={'Display Image'} />
              </div>
              <div className={s.info}>
                Проводите видеовизиты, лонгриды, мероприятия на платформе
                Medtouch и получайте прозрачные результаты
              </div>
            </div>
          </div>
          <div className={s.cardCircleBig}>
            <div className={s.circle}>
              <img src={DisplayGraphicsImg} alt={'DisplayLarge Image'} />
            </div>
            <div className={s.info}>
              Контролируйте результат коммуникаций в омниканальном сервисе{' '}
              <span>Omnitouch</span>
            </div>
          </div>
          <div className={s.carouselWrapper}>
            <div className={s.arrowCarousel} onClick={() => ref.current.prev()}>
              <img src={ArrowLeftIcon} alt={'Arrow Left'} />
            </div>
            <Carousel className={s.carousel} ref={ref} autoplay={isScreenSm}>
              <div className={s.cardWrapper}>
                <div className={s.card}>
                  <img src={ReviewsSmallImg} alt='Reviews Small Image' />
                </div>
                <span className={s.text}>
                  Контролируйте триггерные коммуникации в рамках маркетинговой
                  кампании
                </span>
              </div>

              <div className={s.cardWrapper}>
                <div className={s.card}>
                  <img
                    src={DisplayNewsSmallImg}
                    alt='Display News Small Image'
                  />
                </div>
                <span className={s.text}>
                  Проводите мероприятия на платформе и получайте прозрачные
                  результаты
                </span>
              </div>

              <div className={s.cardWrapper}>
                <div className={s.card}>
                  <img
                    src={DisplayGraphicsSmallImg}
                    alt='Display Graphics Small Image'
                  />
                </div>
                <span className={s.text}>
                  Контролируйте результат в омниканальном сервисе Omnitouch
                </span>
              </div>
            </Carousel>
            <div className={s.arrowCarousel} onClick={() => ref.current.next()}>
              <img src={ArrowRightIcon} alt={'Arrow Right'} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
