import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThereProvider } from './Components/ThereProvider';
import CreateAccount from "./pages/PageCreateAccount/CreateAccount.jsx"
import Home from "./pages/PageHome/Home.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThereProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='Create' element={<CreateAccount />} />
          <Route path='Home' element={<Home />} />
        </Routes>
      </ThereProvider>
    </BrowserRouter>
  </React.StrictMode>
);
