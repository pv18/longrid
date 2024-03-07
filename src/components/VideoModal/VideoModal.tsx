import React, {FC} from 'react';
import ModalVideo from 'react-modal-video';
import s from './VideoModal.module.scss';

interface VideoModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  url: string;
}

export const VideoModal: FC<VideoModalProps> = (props) => {
  const { isOpen, setIsOpen, url } = props;

  return (
    <div className={s.container} style={{ width: '80%' }}>
      <ModalVideo
        isOpen={isOpen}
        url={url}
        channel='custom'
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
