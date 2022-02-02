import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home, Resources, Resource, Course, Evento } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recurso" element={<Resources />} />
      <Route path="/recurso/:id" element={<Resource />} />
      <Route path="/curso/:id" element={<Course />} />
      <Route path="/evento/:id" element={<Evento />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
