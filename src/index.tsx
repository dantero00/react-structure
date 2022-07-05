import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './components/router/Routes';

declare var PRODUCTION: boolean;

const Root: React.FC = () => {
  const path = (!PRODUCTION ? "/" : "/sys4200/tiny_restaurant");
  console.log(path);
  return (
    <React.StrictMode>
      <Routes path={path} />
    </React.StrictMode>
  );
}


const container = document.getElementById("app");
const component = <Root />;
ReactDOM.render(component, container);

if (!PRODUCTION) {
}