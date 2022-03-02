import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Redirect
} from "react-router-dom";
import App from './App';
import NoMatch from './pages/NoMatch'
export default function Rota() {
    return (
        <BrowserRouter>
            {/* <Loading /> */}
            <Routes>
                <Route path="/" element={<App /> } /> 
                {/* <Route exact path="/singin"><Navbar /> <LognIn /></Route>
                    <Route exact path="/addClient"><Navbar /> <AddClient /></Route>
                    <Route exact path="/recovery"><Navbar /> <Recovery /></Route> */}
                <Route  path="*" element={<NoMatch />} /> 
            </Routes>
        </BrowserRouter>
    )
}