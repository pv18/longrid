import React, { useState } from 'react';
import { Container, HeaderLayout, VideoModal } from 'components';
import LongridIcon from './assets/icons/longrid.svg';
import EmailIcon from './assets/icons/email.svg';
import VideoIcon from './assets/icons/video.svg';
import EventsIcon from './assets/icons/events.svg';
import MessageIcon from './assets/icons/message.svg';
import DisplayIcon from './assets/img/display.png';
import LogoIcon from './assets/img/logo.png';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import s from './ProjectsLayout.module.scss';

export const ProjectsLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id={'projects'} className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          title={'Омниканальные маркетинговые проекты'}
          maxWidthTitle={540}
          subtitle={
            'Medtouch — технологический и маркетинговый ПРОВОДНИК для фармы среди всех образовательных порталов'
          }
          maxWidthSubTitle={650}
        />
        <div className={s.projects}>
          <div className={s.column}>
            <div className={s.card}>
              <img src={LongridIcon} alt={'Longrid Icon'} />
              <span>Лонгриды</span>
            </div>

            <div className={s.card}>
              <img src={EmailIcon} alt={'Email Icon'} />
              <span>E-mail</span>
            </div>
          </div>

          <div className={`${s.column} ${s.columnCenter}`}>
            <div className={s.card}>
              <img src={VideoIcon} alt={'Video Icon'} />
              <span>Видеовизиты</span>
            </div>

            <div className={s.mainIconWrapper}>
              <img
                src={DisplayIcon}
                alt={'Display Icon'}
                className={s.mainImg}
              />
              <div className={s.content}>
                <div className={s.logo}>
                  <img
                    src={LogoIcon}
                    alt={'Medtouch Logo'}
                    className={s.logoIcon}
                  />
                </div>
                <div className={s.info}>&gt;200 000 врачей</div>
              </div>
            </div>
          </div>

          <div className={s.column}>
            <div className={s.card}>
              <img src={EventsIcon} alt={'Events Icon'} />
              <span>Мероприятия</span>
            </div>

            <div className={s.card}>
              <img src={MessageIcon} alt={'Message Icon'} />
              <span>Мессенджеры</span>
            </div>
          </div>
        </div>
        <div className={s.button}>
          <Button
            type={'primary'}
            icon={<PlayCircleOutlined />}
            size={'large'}
            onClick={() => setIsModalOpen(true)}
          >
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>
        <VideoModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          url={'https://facecast.net/w/mm6ik5'}
        />
      </Container>
    </section>
  );
};
