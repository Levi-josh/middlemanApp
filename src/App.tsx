import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Overview from './Overview/Overview';
import Chatitems from './Overview/Chat/Chatitems';
import Verify from './Overview/Transaction/Verify';
import Market from './Overview/Transaction/Market';
import BuyOrSell from './Overview/Transaction/BuyOrSell';
import Comfirmed from './Overview/Transaction/Comfirmed';
import Buyer from './Overview/Transaction/Buyer';
import Seller from './Overview/Transaction/Seller';
import Pending from './Overview/Transaction/Pending';
import Pending2 from './Overview/Transaction/Pending2';
import SthirdParty from './Overview/Transaction/SthirdParty';
import BthirdParty from './Overview/Transaction/BthirdParty';
import Chattest from './Overview/Chat/Chattest';
import Otp from './Auth/Otp';
import Login from './Auth/Login';
import PhoneLogin from './Auth/PhoneLogin';
import LoginOutlet from './Auth/LoginOutlet';
import { ChatProvider } from './Overview/Chat/ChatContext';
import Invites from './Overview/Invites/Invites';
import Details from './Auth/Details';
import Verified from './Auth/Verified';
import Signup from './Auth/Signup';
import History from './Overview/History/History';
import Customers from './Overview/Customers/Customers';
import Deposit from './Overview/Deposit/Deposit';
import Withdraw from './Overview/Withdraw/Withdraw';
import Transfer from './Overview/Transfer/Transfer';
import Notification from './Overview/Notification/Notification';


const pageVariants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: '100%',
    opacity: 1,
  },
  out2: {
    opacity: 0,
  },
  in2:{
    opacity: 1,
  },
  initial2:{
    opacity: 0,
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
};

const MotionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={window.matchMedia('(max-width: 600px)').matches?"initial":'initial2'}
    animate={window.matchMedia('(max-width: 600px)').matches?"in":'in2'}
    exit={window.matchMedia('(max-width: 600px)').matches?"out":'out2'}
    variants={pageVariants}
    transition={pageTransition}
    // Ensure the element covers the whole page
  >
    {children}
  </motion.div>
);


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        {/* <Route path='/' element={<Overview2 />} >
          <Route index element={<Laptopfirstpg />} />
          <Route path='chat' element={<Chatitems />} />
          <Route path='desktopchat/:id' element={<Chatitems />} />
        </Route> */}
        <Route path='pchat/:id' element={<MotionWrapper><Chatitems /></MotionWrapper>} />
        <Route path='chattest' element={<MotionWrapper><Chattest /></MotionWrapper>} />
        <Route path='invite' element={<MotionWrapper><Invites /></MotionWrapper>} />
        <Route path='notification' element={<MotionWrapper><Notification /></MotionWrapper>} />
        <Route path='deposit' element={<MotionWrapper><Deposit /></MotionWrapper>} />
        <Route path='withdraw' element={<MotionWrapper><Withdraw /></MotionWrapper>} />
        <Route path='transfer' element={<MotionWrapper><Transfer /></MotionWrapper>} />
        <Route path='history' element={<MotionWrapper><History /></MotionWrapper>} />
        <Route path='customers' element={<MotionWrapper><Customers /></MotionWrapper>} />
        <Route path='verified' element={<MotionWrapper><Verified /></MotionWrapper>} />
        <Route path='details' element={<MotionWrapper><Details /></MotionWrapper>} />
        <Route path='landingPage' element={<><LoginOutlet/></>} >
          <Route index element={<><Login/></>}/>
          <Route path='phoneSignin' element={<><PhoneLogin/></>}/>
          <Route path='phoneSignup' element={<><Signup /></>}/>
          <Route path='otp' element={<><Otp/></>}/>
        </Route>
        <Route path='market' element={<MotionWrapper><Market /></MotionWrapper>}>
          <Route index element={<MotionWrapper><BuyOrSell /></MotionWrapper>} />
          <Route path='verify' element={<MotionWrapper><Verify /></MotionWrapper>} />
          <Route path='comfirmed' element={<MotionWrapper><Comfirmed /></MotionWrapper>} />
          <Route path='buyer' element={<MotionWrapper><Buyer /></MotionWrapper>} />
          <Route path='seller' element={<MotionWrapper><Seller /></MotionWrapper>} />
          <Route path='pending' element={<MotionWrapper><Pending /></MotionWrapper>} />
          <Route path='pending2' element={<MotionWrapper><Pending2 /></MotionWrapper>} />
          <Route path='SthirdParty' element={<MotionWrapper><SthirdParty /></MotionWrapper>} />
          <Route path='BthirdParty' element={<MotionWrapper><BthirdParty /></MotionWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [fromChat, setFromChat] = useState(false);

  const isfromChat = () => {
    setFromChat(true);
  };

  return (
    <ChatProvider isfromChat={isfromChat} fromChat={fromChat}>
      <Router>
      <Overview />
      <AnimatedRoutes />
      </Router>
    </ChatProvider>
  );
}

export default App;


