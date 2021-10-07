import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Pendaftaran from './components/pages/Pendaftaran';

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Header />

       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Details" component={Details} />
          <Route path="/Pendaftaran" component={Pendaftaran} />
       </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
