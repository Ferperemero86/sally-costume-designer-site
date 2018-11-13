import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import App from './components/app';
import Contact from './components/contact';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <div>
       <Header />
       <BrowserRouter>
        <App />
       </BrowserRouter>
       <Footer />
  </div>
  , document.querySelector('.container'));
