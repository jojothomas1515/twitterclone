import React from 'react';
import Nav from "../components/navComponents/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";

function Twitter(props) {
    return (
        <div>

            <section className={"twitter-page dark"}>
                <Nav/>
               <Routes>
                   <Route path={"home"} element={<Home/>}/>
               </Routes>
            </section>
        </div>
    );
}

export default Twitter;
