import React, { useEffect, useState } from 'react';
import { Container, HeaderLayout } from 'components';
import LongridIcon from './assets/icons/longrid.svg';
import EmailIcon from './assets/icons/email.svg';
import VideoIcon from './assets/icons/video.svg';
import EventsIcon from './assets/icons/events.svg';
import MessageIcon from './assets/icons/message.svg';
import ArrowBottomLeftIcon from './assets/icons/arrow-bottom-left.svg';
import ArrowBottomRightIcon from './assets/icons/arrow-bottom-right.svg';
import ArrowTopLeftIcon from './assets/icons/arrow-top-left.svg';
import ArrowTopRightIcon from './assets/icons/arrow-top-right.svg';
import ArrowTopIcon from './assets/icons/arrow-top.svg';
import DisplayIcon from './assets/img/display.png';
import LogoIcon from './assets/img/logo.png';
import { Button, Modal } from 'antd';
import { CloseOutlined, PlayCircleOutlined } from '@ant-design/icons';
import s from './ProjectsLayout.module.scss';
import { useResize } from 'hooks';

export const ProjectsLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [maxModalSize, setMaxModalSize] = useState(1200);
  const [height, setHeight] = useState(549);
  const { isScreenXl, isScreenLg, isScreenMd, isScreenSm } = useResize();

  useEffect(() => {
    if (isScreenXl) {
      setHeight(450);
    }
    if (isScreenLg) {
      setHeight(350);
    }
    if (isScreenMd) {
      setHeight(300);
    }
    if (isScreenSm) {
      setHeight(250);
    }
  }, [isScreenXl, isScreenLg, isScreenMd, isScreenSm]);

  const resize = () => {
    const maxSize = Math.min(1200, window.innerWidth - 40);
    setMaxModalSize(maxSize);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          title={'Омниканальные маркетинговые проекты'}
          maxWidthTitle={500}
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
              <img
                src={ArrowBottomLeftIcon}
                alt={'Arrow Bottom Left Icon'}
                className={s.arrowBottomLeftIcon}
              />
              <img
                src={ArrowTopLeftIcon}
                alt={'Arrow Top Left Icon'}
                className={s.arrowTopLeftIcon}
              />
              <img
                src={ArrowTopIcon}
                alt={'Arrow Top Icon'}
                className={s.arrowTopIcon}
              />
              <img
                src={ArrowTopRightIcon}
                alt={'Arrow Top Right Icon'}
                className={s.arrowTopRightIcon}
              />
              <img
                src={ArrowBottomRightIcon}
                alt={'Arrow Bottom Right Icon'}
                className={s.arrowBottomRightIcon}
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
            onClick={showModal}
          >
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>
        <Modal
          title={<div style={{ marginBottom: 30 }} />}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
          width={maxModalSize}
          closeIcon={
            <CloseOutlined style={{ fontSize: 30 }} onClick={handleCancel} />
          }
        >
          <iframe
            src={'https://facecast.net/w/mm6ik5'}
            id='mm6ik5'
            width={'100%'}
            height={height}
            allowFullScreen
            style={{ border: 'none' }}
          />
        </Modal>
      </Container>
    </section>
  );
};
