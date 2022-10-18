import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { LayoutConsumer } from './layout/LayoutConsumer';
import { LayoutProvider } from './layout/LayoutProvider';

import { routerData } from './routing/routesData';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <LayoutProvider>
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="pageTransition"
          timeout={300}
        >
          <Routes location={location}>
            {routerData.map((route) => {
              const { path, Component, children, ...rest } = route;

              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <LayoutConsumer {...rest} path={path}>
                      <Component />
                    </LayoutConsumer>
                  }
                >
                  {children &&
                    children.map(({ path, Component }) => (
                      <Route path={path} element={<Component />} key={path} />
                    ))}
                </Route>
              );
            })}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </LayoutProvider>
  );
};

export default App;
