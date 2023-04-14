import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show";




export default function App(){
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Create/>}/>
              <Route path="/Show" element={<Show/>}/>
              <Route path="/Edit/:id" element={<Edit/>}/>
          </Routes>
        </BrowserRouter>
    )
}