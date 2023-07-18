import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';

import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router}/>
    </ReduxProvider>
  </React.StrictMode>
);


//вынеси повторяющиеся и общие стили такие как ease-in duration-300 в отдельный файл
// почистить код 
// заполнить карточки нормальной инфой
// раскидать компоненты по папкам
// добавить анимацию при переходах !!! Обьедени общие свойства в обьекты, убери дублирование кода !!! 
