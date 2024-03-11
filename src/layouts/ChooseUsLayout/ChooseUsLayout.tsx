import React, { useRef } from 'react';
import { Container, HeaderLayout, Title } from 'components';
import PillIcon from './assets/icons/pill.svg';
import DoctorIcon from './assets/icons/doctor.svg';
import PatientIcon from './assets/icons/patient.svg';
import ArrowIcon from './assets/icons/arrow.svg';
import FlameIcon from './assets/icons/flame.svg';
import ArrowLeftIcon from './assets/icons/arrow-left.svg';
import ArrowRightIcon from './assets/icons/arrow-right.svg';
import { Carousel } from 'antd';
import { useResize } from 'hooks';
import s from './ChooseUsLayout.module.scss';

export const ChooseUsLayout = () => {
  const ref = useRef<any>();
  const { isScreenSm } = useResize();

  return (
    <section className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          hideDivider={true}
          title={'Почему партнеры выбирают нас?'}
        />
        <div className={s.steps}>
          <div className={s.step}>
            <div className={s.stepTitle}>
              <div className={s.circle}>1</div>
              <Title className={s.stepTitle}>
                Мы единственные на рынке, кто предлагает решение полного цикла в
                связке
              </Title>
            </div>
            <div className={s.workingPrinciple}>
              <div className={s.iconWrapper}>
                <img src={PillIcon} alt='Pill Icon' />
                <p className={s.iconTitle}>фармкомпания</p>
              </div>
              <div className={s.iconWrapper}>
                <img src={ArrowIcon} alt='Arrow Icon' />
              </div>
              <div className={s.iconWrapper}>
                <img src={DoctorIcon} alt='Doctor Icon' />
                <p className={s.iconTitle}>врач</p>
              </div>
              <div className={s.iconWrapper}>
                <img src={ArrowIcon} alt='Arrow Icon' />
              </div>
              <div className={s.iconWrapper}>
                <img src={PatientIcon} alt='Patient Icon' />
                <p className={s.iconTitle}>пациент</p>
              </div>
            </div>
          </div>

          <div className={s.step}>
            <div className={s.stepTitle}>
              <div className={s.circle}>2</div>
              <Title>
                В рамках взаимодействия с медсообществом мы предлагаем:
              </Title>
            </div>
            <ul className={s.proposals}>
              <li>
                Самую полную на рынке постоянно обновляемую базу врачей по ряду
                специальностей (гинекологов, аллергологов, неврологов,
                ревматологов, онкологов и др.). Собираемые данные могут в том
                числе использоваться для высокоточной сегментации и глубокого
                профайлинга врачей.
              </li>
              <li>
                Организацию очных и онлайн-медмероприятий любого уровня «под
                ключ» с подбором экспертов и лекторов, включая эксклюзивный
                статус проекта для партнеров в рамках выбранных направлений.
              </li>
              <li>
                Ежеквартальный мониторинг выбранной специальности по 10+
                персонализированным вопросам с репрезентативной географической
                выборкой.
              </li>
            </ul>
          </div>

          <div className={s.step}>
            <div className={s.stepTitle}>
              <div className={s.circle}>3</div>
              <Title className={s.stepTitle}>
                Наши технологические решения в области big data позволяют
                выполнить анализ любой сложности, кастомизированный под ваш
                запрос
              </Title>
            </div>
          </div>
        </div>
        <HeaderLayout
          className={s.header}
          hideDivider={true}
          title={'Наши омниканальные проекты приносят партнерам:'}
          maxWidthTitle={910}
        />
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.cardIcon}>
              <img src={FlameIcon} alt='Flame Icon' />
            </div>
            <span>До +5% к выписке за счет омниканального проекта.</span>
          </div>

          <div className={s.card}>
            <div className={s.cardIcon}>
              <img src={FlameIcon} alt='Flame Icon' />
            </div>
            <span>
              ROI от проекта &gt;104%. Ваши инвестиции будут работать
              максимально эффективно.
            </span>
          </div>

          <div className={s.card}>
            <div className={s.cardIcon}>
              <img src={FlameIcon} alt='Flame Icon' />
            </div>
            <span>
              От +4% SOV. Выгодно выделяем партнеров на фоне конкурентов.
            </span>
          </div>
        </div>

        <div className={s.carouselWrapper}>
          <div className={s.arrowCarousel} onClick={() => ref.current.prev()}>
            <img src={ArrowLeftIcon} alt={'Arrow Left'} />
          </div>
          <Carousel className={s.carousel} ref={ref} autoplay={isScreenSm}>
            <div className={s.cardWrapper}>
              <div className={s.card}>
                <div className={s.cardIcon}>
                  <img src={FlameIcon} alt='Flame Icon' />
                </div>
                <span>До +5% к выписке за счет омниканального проекта.</span>
              </div>
            </div>
            <div className={s.cardWrapper}>
              <div className={s.card}>
                <div className={s.cardIcon}>
                  <img src={FlameIcon} alt='Flame Icon' />
                </div>
                <span>
                  ROI от проекта &gt;104%. Ваши инвестиции будут работать
                  максимально эффективно.
                </span>
              </div>
            </div>
            <div className={s.cardWrapper}>
              <div className={s.card}>
                <div className={s.cardIcon}>
                  <img src={FlameIcon} alt='Flame Icon' />
                </div>
                <span>
                  От +4% SOV. Выгодно выделяем партнеров на фоне конкурентов.
                </span>
              </div>
            </div>
          </Carousel>
          <div className={s.arrowCarousel} onClick={() => ref.current.next()}>
            <img src={ArrowRightIcon} alt={'Arrow Right'} />
          </div>
        </div>
      </Container>
    </section>
  );
};
