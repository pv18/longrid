import React from 'react';
import { Container } from 'components';
import BarcodeImg from './img/barcode.png';
import s from './ContactsLayout.module.scss';

export const ContactsLayout = () => {
  return (
    <section id={'contacts'} className={s.wrapper}>
      <Container>
        <div className={s.contacts}>
          <div className={s.title}>Контакты</div>

          <div className={s.contact}>
            <div className={s.contact__title}>
              Ведущий менеджер по развитию бизнеса
            </div>
            <div className={s.contact__phone}>
              <a href='tel:+79995006454' target={'_blank'}>
                +7 999 500-64-54
              </a>
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.contact__title}>Руководитель ИТ-отдела</div>
            <div className={s.contact__phone}>
              <a href='tel:+79998699276' target={'_blank'}>
                +7 999 869-92-76
              </a>
            </div>
          </div>

          <div className={s.contact}>
            <div className={s.contact__title}>
              Почта:{' '}
              <a href='mailto:mail@medguru.studio' target={'_blank'}>
                mail@medguru.studio
              </a>
            </div>
          </div>
        </div>
        <div className={s.telegramChanel}>
          <p className={s.text}>
            Если вы хотите первыми узнавать о трендах и событиях, которые
            определяют развитие медицинской и фармацевтической отрасли,
            то подписывайтесь на наш{' '}
            <a href='https://t.me/marketing_pharma' target={'_blank'}>
              телеграм-канал
            </a>
            !
          </p>
          <div className={s.imgWrapper}>
            <img src={BarcodeImg} alt={'Barcode Image'} />
          </div>
        </div>
      </Container>
    </section>
  );
};
