import React, { FC, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useResize } from 'hooks';
import s from './ModalVideo.module.scss';

interface ModalVideoProps {
  isModalOpen: boolean;
  handleModalOpen: (value: boolean) => void;
  urlVideo: string;
}

export const ModalVideo: FC<ModalVideoProps> = (props) => {
  const { isModalOpen, handleModalOpen, urlVideo } = props;
  const [maxModalSize, setMaxModalSize] = useState(1200);
  const [height, setHeight] = useState(549);
  const { isScreenXl, isScreenLg, isScreenMd, isScreenSm } = useResize();

  // Адаптивный подбор ширины модального окна и видео
  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  const resize = () => {
    const maxSize = Math.min(1200, window.innerWidth - 40);
    setMaxModalSize(maxSize);
  };

  // Адаптивный подбор высоты видео
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

  const handleCancel = () => {
    handleModalOpen(false);
  };

  return (
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
        src={urlVideo}
        width={'100%'}
        height={height}
        allowFullScreen
        style={{ border: 'none' }}
      />
    </Modal>
  );
};
