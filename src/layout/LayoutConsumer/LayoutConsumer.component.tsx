import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { Scrolling } from '@components/Scrolling';
import { PostSignUpOnboarding } from '@features/PostSignUpOnboarding';
import { awaitFirebaseInitialization, auth } from '@config/firebase';

import { useUserActions } from '@store/auth/user/useUserActions';
import { useUserSelector } from '@store/auth/user/useUserSelector';
import { useLayout } from '@hooks/useLayout';

import { routes } from '@routing/routes';

import { LayoutConsumerProps } from './LayoutConsumer.types';

export const LayoutConsumerComponent: React.FC<LayoutConsumerProps> = ({
  isPrivate,
  navigationMenu = false,
  path,
  children,
}) => {
  useLayout(navigationMenu);
  const { t: translate } = useTranslation('common');
  const location = useLocation();

  const navigate = useNavigate();

  const { data: userData } = useUserSelector();
  const { actionFetchUserData } = useUserActions();

  useEffect(() => {
    document.title = translate(`appTitle.${path.replace(':', '')}`);
  }, [path]);

  useEffect(() => {
    (async () => {
      await awaitFirebaseInitialization();

      const path = location?.pathname;
      const search = location?.search;

      const redirectionState = {
        redirection: `${path}${search}`,
      };

      if (
        !auth.currentUser &&
        isPrivate &&
        redirectionState?.redirection !== routes().accountProfile
      )
        navigate(routes().login, { state: { ...redirectionState } });

      if (auth.currentUser && isPrivate && !userData) {
        actionFetchUserData();
      }
    })();
  }, [userData]);

  return (
    <Scrolling vertical className="page">
      {children}
      {isPrivate && <PostSignUpOnboarding />}
    </Scrolling>
  );
};

LayoutConsumerComponent.displayName = 'LayoutConsumer';
