import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';
export const Navigation = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='' />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            {/* Navigation default */}
            <Route
              path='/*'
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
