import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Overview from './Overview/Overview';
import Overview2 from './Overview/Overview2';
import Chatitems from './Overview/Chat/Chatitems';
import Laptopfirstpg from './Overview/Firstpage/Laptopfirstpg';
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
import { ChatProvider } from './Overview/Chat/ChatContext';

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
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
};

const MotionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
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
        <Route path='/' element={<Overview2 />} >
          <Route index element={<Laptopfirstpg />} />
          <Route path='chat' element={<Chatitems />} />
        </Route>
        <Route path='pchat' element={<MotionWrapper><Chatitems /></MotionWrapper>} />
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


