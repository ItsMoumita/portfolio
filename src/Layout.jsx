import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const Layout = () => {
    return (
        <div className="min-h-screen w-full relative">
            {/* Azure Depths */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
                }}
            />
            {/* Content/Components */}
            <Navbar></Navbar>
            <div className=' min-h-[calc(100vh-153px)]'>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;


