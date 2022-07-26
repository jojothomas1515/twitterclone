import React from 'react';
import Nav from "../components/navComponents/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import "../css/pages/twitterpage.css"

function Twitter(props) {
    return (
        <div>

            <section className={"twitter-page dark"}>
                <Nav/>
                <main>
                    <Routes>
                        <Route path={"home"} element={<Home/>}/>
                    </Routes>
                </main>

            </section>
        </div>
    );
}

export default Twitter;
