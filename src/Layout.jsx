import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Components/Navbar';


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' min-h-[calc(100vh-153px)]'>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Layout;