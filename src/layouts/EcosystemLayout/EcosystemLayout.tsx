import React, { useEffect, useRef, useState } from 'react';
import { Container, HeaderLayout, Title } from 'components';
import HandIcon from './assets/icons/hand.svg';
import GearIcon from './assets/icons/gear.svg';
import HandshakeIcon from './assets/icons/handshake.svg';
import EcosystemImg from './assets/img/ecosystem.png';
import { Button, Modal } from 'antd';
import { CloseOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useResize } from 'hooks';
import s from './EcosystemLayout.module.scss';

export const EcosystemLayout = () => {
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
    <section id={'ecosystem'} className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          title={
            'ЭКОСИСТЕМА — ОСНОВА СТРАТЕГИИ РОСТА ФАРМАЦЕВТИЧЕСКОГО БИЗНЕСА'
          }
          maxWidthTitle={730}
          subtitle={
            'В международной фармацевтической бизнес-среде системный подход уверенно входит в практику организационного менеджмента.'
          }
          maxWidthSubTitle={790}
        />
        <p className={`${s.infoText} ${s.text}`}>
          «Законы управления сложными системами с помощью решений, основанных на
          объективных данных, стали трендом организационного развития (big data
          driven). Организация является сложной открытой социотехнической
          структурой, действующей в многомерной и многофакторной среде,
          подчиняющейся всем законам системного подхода. Успешно реализованная
          цифровая трансформация позволяет добиться выдающихся управленческих
          результатов и является, по сути, основой для систематизации управления
          бизнесом.
        </p>
        <div className={s.blockCards}>
          <Title>
            Для достижения лидерства бизнес может двигаться в трех направлениях:
          </Title>
          <div className={s.cards}>
            <div className={s.card}>
              <div className={s.cardIcon}>
                <img src={HandIcon} alt='Hand Icon' />
              </div>
              <div className={s.cardTitle}>совершенство продукта</div>
            </div>
            <div className={s.card}>
              <div className={s.cardIcon}>
                <img src={GearIcon} alt='Gear Icon' />
              </div>
              <div className={s.cardTitle}>операционное совершенство</div>
            </div>
            <div className={s.card}>
              <div className={s.cardIcon}>
                <img src={HandshakeIcon} alt='Handshake Icon' />
              </div>
              <div className={s.cardTitle}>близость к клиенту</div>
            </div>
          </div>
        </div>
        <div className={s.blockInfo}>
          <div className={s.info}>
            <p className={s.text}>
              Основой цифровой трансформации является экосистема, которая
              позволяет значительно улучшить операционное совершенство и
              близость к клиенту.
            </p>
            <p className={s.text}>
              Роль экосистемы в операционном совершенстве заключается в более
              эффективном, по сравнению с конкурентами, использовании
              маркетинговых ресурсов за счет прозрачности маркетинговых
              инвестиций и автоматизированной оценки эффективности каналов
              коммуникаций.
            </p>
            <p className={s.text}>
              При использовании экосистемы достижение близости с клиентом
              позволяет глубоко анализировать цифровые приоритеты пользователя и
              полностью отвечает современным трендам омниканального маркетинга,
              которые, в свою очередь, опубликовала компания{' '}
              <strong>IPSOS</strong>. Прежде всего возможность экосистемы
              анализировать приоритеты клиента позволяет предоставлять нужный
              контент в удобное для пользователя время.
            </p>
            <div className={s.button}>
              <Button
                type={'primary'}
                icon={<PlayCircleOutlined />}
                size={'large'}
                onClick={showModal}
              >
                ПОСМОТРЕТЬ ВИДЕО
              </Button>
            </div>
            <Modal
              title={<div style={{ marginBottom: 30 }} />}
              open={isModalOpen}
              onCancel={handleCancel}
              footer={false}
              width={maxModalSize}
              closeIcon={
                <CloseOutlined
                  style={{ fontSize: 30 }}
                  onClick={handleCancel}
                />
              }
            >
              <iframe
                src={'https://facecast.net/w/yxnrpk'}
                id='yxnrpk'
                width={'100%'}
                height={height}
                allowFullScreen
                style={{ border: 'none' }}
              />
            </Modal>
          </div>
          <div className={s.imgWrapper}>
            <figure className={s.img}>
              <img src={EcosystemImg} alt='Ecosystem' />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};
