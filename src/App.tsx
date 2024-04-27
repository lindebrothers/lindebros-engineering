import React from 'react';
import './App.css';
import Main from './main';
import Acorda from './products/acorda/productPage'
import BeatyNeat from './products/beatyneat/productPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const setRouterUrl = (url:string):string => {
  const baseUrl:string = process.env.ROUTER_BASE_URL ? process.env.ROUTER_BASE_URL : '';
  return `${baseUrl}${url}`;
}

const router = createBrowserRouter([
  {
    path: setRouterUrl('/acorda'),
    element: (<Main><Acorda /></Main>),
  },
  {
    path: setRouterUrl('/beatyneat'),
    element: (<Main><BeatyNeat /></Main>),
  },
  {
    path: setRouterUrl('/*'),
    element: <Main><Acorda /></Main>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
