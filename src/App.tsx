
import './App.css'
import Overview from './Overview/Overview';
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Test from './Overview/Test';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Overview />} >
     
    </Route>
    // <Route path='/' element={<Test />} >
     
    // </Route>
  ));
  return (<>
    <RouterProvider router={router} />
    </>
  )
}

export default App
