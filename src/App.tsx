
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
import Pending from './Overview/Transaction/Pending';
import Pending2 from './Overview/Transaction/Pending2';
import SthirdParty from './Overview/Transaction/SthirdParty';
import BthirdParty from './Overview/Transaction/BthirdParty';
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
    <Route path='/market/pending' element={<Pending/>}/>
    <Route path='/market/pending2' element={<Pending2/>}/>
    <Route path='/market/sthirdParty' element={<SthirdParty/>}/>
    <Route path='/market/BthirdParty' element={<BthirdParty/>}/>
    </Route>
    </>
  ));
  return (<>
    <RouterProvider router={router} />
    </>
  )
}

export default App
