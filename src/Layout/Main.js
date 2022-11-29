import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import NavBar from '../Sheard/NavBar/NavBar';

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto bg-light">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;