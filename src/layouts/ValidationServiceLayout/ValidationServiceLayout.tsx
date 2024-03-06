import React from 'react';
import { Container, HeaderLayout } from 'components';
import OncologistIcon from './assets/icons/oncologist.svg';
import GynecologistIcon from './assets/icons/gynecologist.svg';
import PediatricianIcon from './assets/icons/pediatrician.svg';
import AllergistIcon from './assets/icons/allergist.svg';
import CardiologistIcon from './assets/icons/cardiologist.svg';
import SurgeonIcon from './assets/icons/surgeon.svg';
import OtherSpecialistsIcon from './assets/icons/other-specialists.svg';
import NeurologistIcon from './assets/icons/neurologist.svg';
import TherapistIcon from './assets/icons/therapist.svg';
import CylinderImg from './assets/img/cylinder.png';
import s from './ValidationServiceLayout.module.scss';

export const ValidationServiceLayout = () => {
  return (
    <section className={s.wrapper}>
      <Container>
        <HeaderLayout
          className={s.header}
          color={'#3C3C3C'}
          title={'Сервис валидации данных'}
          subtitle={
            'Актуальные данные о специалистах и организациях здравоохранения'
          }
          maxWidthSubTitle={565}
        />
        <div className={s.icons}>
          <div className={s.iconRow}>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={OncologistIcon} alt={'Oncologist Icon'} />
              </div>
              <div className={s.title}>Онкологи</div>
            </div>
          </div>

          <div className={s.iconRow}>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={GynecologistIcon} alt={'Gynecologist Icon'} />
              </div>
              <div className={s.title}>Акушеры-гинекологи</div>
            </div>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={PediatricianIcon} alt={'Pediatrician Icon'} />
              </div>
              <div className={s.title}>Педиатры</div>
            </div>
          </div>

          <div className={s.iconRow}>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={AllergistIcon} alt={'Allergist Icon'} />
              </div>
              <div className={s.title}>Аллергологи-иммунологи</div>
            </div>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={CardiologistIcon} alt={'Cardiologist Icon'} />
              </div>
              <div className={s.title}>Кардиологи</div>
            </div>
          </div>

          <div className={s.iconRow}>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={SurgeonIcon} alt={'Surgeon Icon'} />
              </div>
              <div className={s.title}>Хирурги</div>
            </div>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img
                  src={OtherSpecialistsIcon}
                  alt={'Other Specialists Icon'}
                />
              </div>
              <div className={s.title}>другие специалисты</div>
            </div>
          </div>

          <div className={s.iconRow}>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={NeurologistIcon} alt={'Neurologist Icon'} />
              </div>
              <div className={s.title}>Неврологи</div>
            </div>
            <div className={s.iconWrapper}>
              <div className={s.circle}>
                <img src={TherapistIcon} alt={'Therapist Icon'} />
              </div>
              <div className={s.title}>Терапевты</div>
            </div>
          </div>

          <div className={s.blockCenter}>
            <div className={s.statistic}>
              <div className={s.title}>&gt; 600 000</div>
              <div className={s.subtitle}>
                специалистов для вашей эффективной работы
              </div>
            </div>
            <div className={s.imgWrapper}>
              <img src={CylinderImg} alt={'Cylinder Image'} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
