import React, { useRef } from 'react';
import { Container, HeaderLayout } from 'components';
import LogoIcon from './assets/icons/logo.svg';
import NetworkConnectionIcon from './assets/icons/network-connection.svg';
import LaptopIcon from './assets/icons/laptop.svg';
import EyeIcon from './assets/icons/eye.svg';
import RepeatIcon from './assets/icons/repeat.svg';
import Screen1Icon from './assets/img/screen1.png';
import Screen2Icon from './assets/img/screen2.png';
import Screen3Icon from './assets/img/screen3.png';
import { Carousel, Collapse, CollapseProps } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';
import ArrowLeftIcon from './assets/icons/arrow-left.svg';
import ArrowRightIcon from './assets/icons/arrow-right.svg';
import { useResize } from 'hooks';
import s from './CrmLayout.module.scss';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'продуманный функционал для каждой роли и должности в фармкомпании',
    children: (
      <p className={s.collapse__content}>
        <span>Одновременно в системе могут работать:</span>
        <ul>
          <li>Медицинские представители, фармпредставители</li>
          <li>Менеджеры по работе с ключевыми клиентами</li>
          <li>Медицинские советники</li>
          <li>Отдел маркетинга</li>
          <li>Коммерческий департамент</li>
          <li>Менеджмент и руководители различного уровня</li>
        </ul>
      </p>
    ),
  },
  {
    key: '2',
    label: 'ПОМОЩЬ руководству в оперативном принятии решений',
    children: (
      <p className={s.collapse__content}>
        <span>
          Ясная и прозрачная деятельность каждого сотрудника, подробная и
          детальная отчётность позволяют оперативно принимать решения
          руководством.
        </span>
        <ul>
          <li>
            Кросс-платформенность – установка на любое устройство: Android, iOS,
            Windows
          </li>
          <li>
            Возможность использования собственной базы данных специалистов
          </li>
          <li>
            Нативная интеграция с валидируемой базой врачей MEDGURU (&gt; 600
            000 специалистов){' '}
          </li>
          <li>Быстрая передача данных по API</li>
          <li>GPS-трекинг</li>
          <li>
            Удобное планирование и выполнение визитов к врачу, в ЛПУ, аптеку
          </li>
          <li>
            Создание и выполнение циклового плана под задачи любой кампании
          </li>
          <li>Гибкая настройка опросников для сбора данных при визите </li>
          <li>CLM-модуль</li>
          <li>Автосинхронизация</li>
          <li>Организация и проведение мероприятий</li>
          <li>Отчётность любой сложности и глубины детализации</li>
          <li>Широкие права администрирования на стороне клиента</li>
          <li>Бесшовная интеграция с омниканальной платформой OMNITouch</li>
          <li>Интеграция с другими порталами и источниками информации</li>
        </ul>
      </p>
    ),
  },
];

export const CrmLayout = () => {
  const ref = useRef<any>();
  const { isScreenSm } = useResize();

  return (
    <section id={'crm'} className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          color={'#3C3C3C'}
          title={
            <div className={s.headerTitle}>
              <span>CRM-система Oragen</span>
              <div className={s.imgWrapper}>
                <img src={LogoIcon} alt='Oragen' />
              </div>
            </div>
          }
          subtitle={
            'Интуитивно понятная и гибкая в настройках CRM-система для планирования и выполнения цикловых и внецикловых задач подразделениями Sales & Marketing фармкомпаний'
          }
          maxWidthSubTitle={778}
        />
        <Collapse
          bordered={false}
          className={s.collapse}
          expandIconPosition={'end'}
          items={items}
          expandIcon={({ isActive }) => (
            <RightCircleFilled
              style={{ fontSize: 30, color: '#fff' }}
              rotate={isActive ? 90 : 0}
            />
          )}
        />
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.iconWrapper}>
              <img
                src={NetworkConnectionIcon}
                alt={'Network Connection Icon'}
              />
            </div>
            <div className={s.title}>Big Data</div>
            <div className={s.text}>
              Накопленная база знаний о враче и провизоре, которая позволяет
              выстроить маркетинговую стратегию, исходя из предпочтений
              врача/провизора, и повысить конверсию выписки
            </div>
          </div>

          <div className={s.card}>
            <div className={s.iconWrapper}>
              <img src={LaptopIcon} alt={'Laptop Icon'} />
            </div>
            <div className={s.title}>Автоматизация</div>
            <div className={s.text}>
              Исходя из Big Data, происходит настройка инструментов
              маркетинговых коммуникаций для отправки информации, формирование
              участников таргет-листа в автоматическом режиме
            </div>
          </div>

          <div className={s.card}>
            <div className={s.iconWrapper}>
              <img src={EyeIcon} alt={'Eye Icon'} />
            </div>
            <div className={s.title}>CLM и аналитика</div>
            <div className={s.text}>
              Позволяет отслеживать эффективность маркетинговых
              коммуникаций/инвестиций и выполнение KPI
            </div>
          </div>

          <div className={s.card}>
            <div className={s.iconWrapper}>
              <img src={RepeatIcon} alt={'Repeat Icon'} />
            </div>
            <div className={s.title}>Автосинхронизация</div>
            <div className={s.text}>
              Позволяет оценить эффективность каждого медицинского представителя
              в формате in real-time
            </div>
          </div>
        </div>

        <div className={s.screenshots}>
          <div className={s.imgWrapper}>
            <img src={Screen1Icon} alt='Screen CRM Oragen' />
          </div>
          <div className={s.imgWrapper}>
            <img src={Screen2Icon} alt='Screen CRM Oragen' />
          </div>
          <div className={s.imgWrapper}>
            <img src={Screen3Icon} alt='Screen CRM Oragen' />
          </div>
        </div>

        <div className={s.carouselWrapper}>
          <div className={s.arrowCarousel} onClick={() => ref.current.prev()}>
            <img src={ArrowLeftIcon} alt={'Arrow Left'} />
          </div>
          <Carousel className={s.carousel} ref={ref} autoplay={isScreenSm}>
            <div className={s.card}>
              <img src={Screen1Icon} alt='CRM Image' />
            </div>

            <div className={s.card}>
              <img src={Screen2Icon} alt='CRM Image' />
            </div>

            <div className={s.card}>
              <img src={Screen3Icon} alt='CRM Image' />
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
