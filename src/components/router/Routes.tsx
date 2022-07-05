import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { ifLogged } from '../utils/auth';

function RoutesPrincipal (path: any) {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>prueba</div>}>
        <Routes>
          <Route
            path={path.path}
            element={<Testing />}
          />
          <Route path="*" element={<NoMatch />} />
            
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function Testing() {
  function getTesting() {
    let t: JSX.Element = <div />;
    if (ifLogged()) {
      const Restaurant = lazy(() => import(
        /* webpackChunkName: "Restaurant" */
        /* webpackMode: "lazy" */

        '../Restaurant').then((restaurant) => {
        return restaurant;
      }));

      return <Restaurant />;
    } else {
      const Login = lazy(() => import(
        /* webpackChunkName: "Login" */
        /* webpackMode: "lazy" */
        '../Login').then((log) => {
        return log;
      }));

      return <Login />;
    }
  }
  
  return (
    <div>
      {getTesting()}
    </div>
  )
}

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}


export default RoutesPrincipal;
