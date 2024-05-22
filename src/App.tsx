
import './App.css'
import Overview from './Overview/Overview';
import Chatitems from './Overview/Chat/Chatitems';
import Laptopfirstpg from './Overview/Firstpage/Laptopfirstpg';
import Verify from './Overview/Transaction/Verify';
// import Firstpage from './Overview/Firstpage/Firstpage';
// import Chatlist from './Overview/Chat/Chatlist';
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Market from './Overview/Transaction/Market';
import BuyOrSell from './Overview/Transaction/BuyOrSell';
import Comfirmed from './Overview/Transaction/Comfirmed';
import Buyer from './Overview/Transaction/Buyer';
import Seller from './Overview/Transaction/Seller';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Overview />} >
     <Route index element={<Laptopfirstpg/>}/>
     <Route path='/chat' element={<Chatitems/>}/>
    </Route>
    <Route path='/pchat' element={<Chatitems/>}/>
    <Route path='/market' element={<Market/>}>
    <Route index element={<BuyOrSell/>}/>
    <Route path='/market/verify' element={<Verify/>}/>
    <Route path='/market/comfirmed' element={<Comfirmed/>}/>
    <Route path='/market/buyer' element={<Buyer/>}/>
    <Route path='/market/seller' element={<Seller/>}/>
    </Route>
    </>
  ));
  return (<>
    <RouterProvider router={router} />
    </>
  )
}

export default App
