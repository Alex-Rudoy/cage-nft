import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Button, ButtonProps, ButtonVariantEnum } from '@components/Button';
import { IconsEnum } from '@components/SvgIcon';
import { Text, TextVariantsEnum } from '@components/Text';

import { PageHeaderProps } from './PageHeader.types';

import styles from './PageHeader.module.scss';

export const PageHeaderComponent: React.FC<PageHeaderProps> = ({
  buttonGroup,
  buttonText,
  buttonId,
  className,
  children,
  icon,
  onClick,
  title,
  titleLink,
  helpStripId,
}) => {
  const titleJSX = (
    <Text variant={TextVariantsEnum.Display_xs} color="gray-900">
      {title}
    </Text>
  );

  return (
    <>
      <div className={classNames(styles.pageHeader, className)}>
        {titleLink ? <Link to={titleLink}>{titleJSX}</Link> : titleJSX}

        {children}

        <div className={styles.whitespace} />

        {buttonGroup && (
          <div className={styles.buttonGroup}>
            {buttonGroup.map((button: ButtonProps) => (
              <Button
                icon={button.icon || IconsEnum.plus}
                key={button.text}
                id={button.id}
                size="md"
                text={button.text}
                variant={button.variant || ButtonVariantEnum.primary}
                onClick={button.onClick}
              />
            ))}
          </div>
        )}
        {buttonText && (
          <Button
            icon={icon || IconsEnum.plus}
            text={buttonText}
            id={buttonId}
            size="md"
            onClick={onClick}
          />
        )}
      </div>
      {helpStripId?.length > 0 && (
        <div id={`${helpStripId}_help_strip`} className={styles.emptyDiv}></div>
      )}
    </>
  );
};

PageHeaderComponent.displayName = 'PageHeader';
