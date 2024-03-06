import React, { FC } from 'react';
import s from './ImageWrapper.module.scss';

interface ImageWrapperProps {
  imageUrl: string;
}

export const ImageWrapper: FC<ImageWrapperProps> = ({ imageUrl }) => {
  return (
    <div className={s.wrapper}>
      <img src={imageUrl} alt='Image' />
    </div>
  );
};
