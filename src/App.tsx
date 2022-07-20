import React, {useEffect} from 'react';
import './App.css';
import {GoogleOAuthProvider} from "@react-oauth/google";
import IndexPage from "./pages/IndexPage";

function App() {


  return (
    <>
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
        <IndexPage/>
        </GoogleOAuthProvider>
    </>
  );
}

export default App;
