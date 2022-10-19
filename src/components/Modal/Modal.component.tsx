import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { Portal } from '@components/Portal';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { ModalProps } from './Modal.types';

import styles from './Modal.module.scss';

export const ModalComponent: React.FC<ModalProps> = ({
  isVisible,
  backdrop = true,
  children,
  customStyles,
  className,
  flowBackdrop = false,
  renderCustomCross,
  onClose,
}) => {
  const backdropRef = useRef(null);

  const backdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const trackEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose();
      }
    };

    window.addEventListener('keydown', trackEsc);

    return () => {
      window.removeEventListener('keydown', trackEsc);
    };
  }, []);

  const modalClass = classNames(styles.modal, className);
  const backdropClass = classNames(styles.backdrop, {
    [styles.backdrop_enabled]: backdrop,
    [styles.flow_backdrop_enabled]: flowBackdrop,
  });

  const cross = renderCustomCross ? (
    renderCustomCross(onClose)
  ) : (
    <div className={styles.cross} onClick={onClose}>
      <SvgIcon src={IconsEnum.cross} color="gray-40" size={16} />
    </div>
  );

  return (
    <Portal>
      <CSSTransition
        in={isVisible}
        classNames="pageTransition"
        timeout={300}
        unmountOnExit
      >
        <div
          className={backdropClass}
          onClick={backdropClick}
          ref={backdropRef}
        >
          <div className={modalClass} style={customStyles}>
            {cross}
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

ModalComponent.displayName = 'Modal';
