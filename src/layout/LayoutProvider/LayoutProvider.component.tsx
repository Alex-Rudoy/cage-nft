import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router';

import { SideBar } from '@features/SideBar';
import { NotificationProvider } from '@layout/NotificationProvider/NotificationProvider.component';
import { auth, awaitFirebaseInitialization } from '@config/firebase';
import { ModalProviderComponent } from '../ModalProvider/ModalProvider.component';

import { canduSDKCode } from '@utils/integrations/canduSDK';
import { heapTrackingCode } from '@utils/integrations/heapTracking';
import { intercomChatCode } from '@utils/integrations/intercomChat';
import { segmentTrackingCode } from '@utils/integrations/segmentTracking';
import { sessionStackCode } from '@utils/integrations/sessionStack';
import { trackEvent } from '@utils/tracking/heapTrack';
import { SessionStackIdentify } from '@utils/tracking/sessionStackTrack';
import { sessionStackGetSessionIdEvent } from '@utils/tracking/sessionStackTrack';
import { useUserSelector } from '@store/auth/user/useUserSelector';
import { LayoutContext } from '@hooks/useLayout';

import styles from './LayoutProvider.module.scss';

// import LogRocket from 'logrocket'; // TODO: Shubham Kumar Sahoo - Return when business give us confirmation

export const LayoutProviderComponent: React.FC = ({ children }) => {
  const location = useLocation();

  const [isNavigationVisible, setIsNavigationVisible] = useState(true);
  const [isBoot, setIsBoot] = useState(false);
  const [canduCode, setCanduCode] = useState('');

  const { data: userData } = useUserSelector();

  const pageContainerClass = classNames(styles.pageContainer, {
    [styles.no_menu]: !isNavigationVisible,
  });

  // TODO: Shubham Kumar Sahoo - Return when will be needed
  // useEffect(() => {
  //   if (!userData) return;
  //
  //   LogRocket.init(process.env.REACT_APP_LOG_ROCKET_INIT_ID);
  //
  //   LogRocket.identify(userData.user_id.toString(), {
  //     name: `${userData?.first_name || ''} ${userData.last_name || ''}`.trim(),
  //     email: userData.email || '',
  //   });
  // }, [userData]);

  useEffect(() => {
    if (!userData || !window.Intercom) {
      setIsBoot(false);

      return;
    }

    window.Intercom(isBoot ? 'update' : 'boot', {
      app_id: process.env.REACT_APP_INTERCOM_ID,
      hide_default_launcher: true,
      email: userData?.email || '',
      name: `${userData?.first_name || ''} ${userData.last_name || ''}`.trim(),
      user_id: (userData?.user_id || '').toString(),
      // created_at: Date.now(), // todo: Alex Rudenko - add reg date after it's implemented on BE
    });

    setIsBoot(true);
  }, [userData, window.Intercom, location.pathname]);

  useEffect(() => {
    if (!userData) return;

    const { email, first_name, last_name } = userData;

    SessionStackIdentify(email, email, `${first_name} ${last_name}`);
    sessionStackGetSessionIdEvent(() => {
      Intercom('update', {
        sessionStackId: `'${process.env.REACT_APP_SESSIONSTACK_ID}'`,
      });
    });

    sessionStackGetSessionIdEvent(() => {
      Intercom('trackEvent', 'SessionStack', {
        recording:
          'https://app.sessionstack.com/player/sessions/' +
          process.env.REACT_APP_SESSIONSTACK_ID,
      });
    });

    sessionStackGetSessionIdEvent(() => {
      trackEvent('SessionStack', {
        sessionURL:
          'https://app.sessionstack.com/player/#/sessions/' +
          process.env.REACT_APP_SESSIONSTACK_ID,
      });
    });
  }, [userData]);

  useEffect(() => {
    (async () => {
      await awaitFirebaseInitialization();

      if (auth.currentUser.email) {
        setCanduCode(
          canduSDKCode.replace('CURRENT_LOGGED_IN_USER', auth.currentUser.email)
        );

        return;
      }

      setCanduCode('');
    })();
  }, [userData]);

  return (
    <LayoutContext.Provider value={setIsNavigationVisible}>
      <Helmet>
        <script type="text/javascript">{intercomChatCode}</script>
        <script type="text/javascript">{segmentTrackingCode}</script>
        <script type="text/javascript">{sessionStackCode}</script>
        <script type="text/javascript">{heapTrackingCode}</script>
        {canduCode && canduCode.length > 0 && (
          <script type="text/javascript">{canduCode}</script>
        )}
      </Helmet>
      <main className={styles.main} id="main_portal_target">
        <SideBar isNavigationVisible={isNavigationVisible} />
        <div className={pageContainerClass}>{children}</div>
        <ModalProviderComponent />
        <NotificationProvider />
      </main>
    </LayoutContext.Provider>
  );
};
