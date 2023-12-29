import React from 'react'

import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import GameDetail from './Pages/GameDetail/GameDetail';
import Error404 from './Pages/Error404/Error404';
import Layout from './Layout/Layout';

const routerDefinitions = createRoutesFromElements(
  <Route errorElement={<Error404/>}>
    <Route path='/' element={<Layout />} />
    <Route path='/:id' element={<GameDetail/>}/>
    <Route path='/Error404' element={<Error404/>}/>
  </Route>
)

const router = createBrowserRouter(routerDefinitions)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
