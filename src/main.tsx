
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authSlice from './Feature/Redux';

// Create Redux store and pass in your reducer
const store = configureStore({
  reducer: {
    mode: authSlice,  // Use the correct reducer name ('mode')
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
  <App />
</Provider>
)
