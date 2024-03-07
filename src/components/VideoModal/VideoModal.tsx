import React, { FC, useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import s from './VideoModal.module.scss';

interface VideoModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  url: string;
}

export const VideoModal: FC<VideoModalProps> = (props) => {
  const { isOpen, setIsOpen, url } = props;
  const [maxModalSize, setMaxModalSize] = useState(1200);

  // Адаптивный подбор ширины модального окна и видео
  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  const resize = () => {
    const maxSize = Math.min(1200, window.innerWidth - 40);
    setMaxModalSize(maxSize);
  };

  return (
    <div className={s.container} style={{ width: maxModalSize }}>
      <ModalVideo
        isOpen={isOpen}
        url={url}
        channel='custom'
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
