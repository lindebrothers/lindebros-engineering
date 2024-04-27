import React from 'react';
import './App.css';
import Main from './main';
import Acorda from './products/acorda/productPage'
import BeatyNeat from './products/beatyneat/productPage'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: '/acorda',
    element: (<Main><Acorda /></Main>),
  },
  {
    path: '/beatyneat',
    element: (<Main><BeatyNeat /></Main>),
  },
  {
    path: '/*',
    element: <Main><Acorda /></Main>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
