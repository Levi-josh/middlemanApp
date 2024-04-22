import { useState } from 'react'
import './App.css'
import Overview from './Overview';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Overview />}   >
    </Route>

  ));


  return (<>
    <RouterProvider router={router} />
    </>
  )
}

export default App
