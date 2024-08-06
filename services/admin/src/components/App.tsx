import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { deepMerge } from '@packages/shared/src/utils/deepMerge';

export const App = () => {

  return (
    <div>
      <h1>Admin Module</h1>
      <div>{deepMerge('Какая-то строка переданная в deepMerge')}</div>
      <Outlet />
    </div>
  );
};
