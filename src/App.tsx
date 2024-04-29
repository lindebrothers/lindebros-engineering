import React from 'react';
import './App.css';
import Main from './main';
import Acorda from './products/acorda/productPage'
import AcordaTermsOfUse from './products/acorda/TermsOfUse'
import BeatyNeat from './products/beatyneat/productPage'
import ProductLists from './products/index'

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
    path: '/acorda/terms-of-use',
    element: (<Main><AcordaTermsOfUse /></Main>),
  },
  {
    path: '/beatyneat',
    element: (<Main><BeatyNeat /></Main>),
  },
  {
    path: '/*',
    element: <Main><ProductLists /></Main>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
