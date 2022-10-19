import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { routerData } from './routing/routesData';

const App: React.FC = () => {
  const location = useLocation();

  return (
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
              <Route key={path} path={path} element={<Component />}>
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
  );
};

export default App;
