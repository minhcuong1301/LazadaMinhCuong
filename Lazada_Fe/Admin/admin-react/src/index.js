import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/scss/index.scss";
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
