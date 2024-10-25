import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import DashBoard from "./pages/DashBoard";
import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {


  useEffect(() => {

    const authCheck = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) { localStorage.setItem("auth-token", ""); token = ""; }
      const tokenResponse = await axios.post("http://localhost:8000/user/checkuservalidation", null, { headers: { "x-auth-token": token } });
      console.log(tokenResponse.data);
      if (tokenResponse.data) { localStorage.setItem("userValid", true); }
    }
    authCheck();
  }, []) 
  return (<> <BrowserRouter> <Routes> <Route path="/" element={<Layout />}> <Route index element={<Home />} /> <Route path="home" element={<Home />} /> <Route path="login" element={<Home />} /> <Route path="registration" element={<Registration />} /> <Route path="dashboard" element={<DashBoard />} /> </Route> </Routes> </BrowserRouter> </>)
} 
export default App;