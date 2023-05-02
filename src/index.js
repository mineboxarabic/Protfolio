import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import { Helmet }  from 'react-helmet';
import './index.scss';
import Portfolio from "./Pages/Portfolio";
import Designs from "./Pages/Designs";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {HashRouter as Router, Route , Routes, HashRouter} from 'react-router-dom';
library.add(fab, faCheckSquare, faCoffee, faCircle)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Designs" element={<Designs />} />
    </Routes>
  </Router>
  </React.StrictMode>
);

