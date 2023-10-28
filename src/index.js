import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./index.css";
import Home from './Home';
import Faculty from './Faculty';
import Gallery from "./Gallery";
import Labs from './Labs';
import Vision from './Vision';
import Library from './Library';
import Procedure from './Procedure';
import Sports from './Sports';
import Contact from './Contact';
import Registration from './Registration';
ReactDOM.render(
  <>
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Faculty" element={<Faculty/>}></Route>
    <Route path="/Gallery" element={<Gallery/>}></Route>
    <Route path="/Labs" element={<Labs/>}></Route>
    <Route path="/Library" element={<Library/>}></Route>
    <Route path="/Vision" element={<Vision/>}></Route>
    <Route path="/Procedure" element={<Procedure/>}></Route>
    <Route path="/Registration" element={<Registration/>}></Route>
   <Route path="/Contact" element={<Contact/>}></Route> 
    <Route path="/Sports" element={<Sports/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>,document.getElementById("root")
);