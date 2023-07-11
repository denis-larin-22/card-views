import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './store/store';

import Root from './Root';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ReduxProvider store={store}> */}
      <Root />
    {/* </ReduxProvider> */}
  </React.StrictMode>
);

