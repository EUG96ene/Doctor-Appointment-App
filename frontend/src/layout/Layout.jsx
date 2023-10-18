

import React from "react";

import Header from "../components/Header/Header";
import AppRoutes from "../routes/AppRoutes";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";



const Layout =()=>{
    return (
    <>
    <Header/>
    <main>
        <AppRoutes/>
    </main>
 
 <About/>
    <Footer/>
    
    </>
    );
};

export default Layout;