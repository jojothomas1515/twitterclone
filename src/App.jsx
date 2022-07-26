import React, {useEffect} from 'react';
import './App.css';
import IndexPage from "./pages/IndexPage";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Twitter from "./pages/Twitter";
function App() {


    // @ts-ignore
    return (
    <>
        <Routes>

            <Route path={"whatshappening"} element={<IndexPage/>}/>
            <Route path={'/*'} element={<Twitter/>}/>

        </Routes>

    </>
  );
}

export default
App;
