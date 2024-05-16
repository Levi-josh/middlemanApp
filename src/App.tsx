
import './App.css'
import Overview from './Overview/Overview';
import Chatitems from './Overview/Chat/Chatitems';
import Laptopfirstpg from './Overview/Firstpage/Laptopfirstpg';
// import Firstpage from './Overview/Firstpage/Firstpage';
// import Chatlist from './Overview/Chat/Chatlist';
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Test from './Overview/Test';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Overview />} >
     <Route index element={<Laptopfirstpg/>}/>
     <Route path='/chat' element={<Chatitems/>}/>
     {/* <Route path='/first' element={<Firstpage/>}/>
      <Route path='/chatlist' element={<Chatlist/>}/> */}
    </Route>
    <Route path='/pchat' element={<Chatitems/>}/>
    </>
    // <Route path='/' element={<Test />} >
     
    // </Route>
  ));
  return (<>
    <RouterProvider router={router} />
    </>
  )
}

export default App
