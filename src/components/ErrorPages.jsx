import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import DataSwitcher from '../Data/Authenticatepage/DataSwitcher';

const ErrorPages = () => {

document.querySelector("body").classList.add( 'login-img' ,'ltr' ,'sidebar-mini');

    return (

    <Fragment>
        <div>
            <DataSwitcher/>
            <Outlet />
        </div>
    </Fragment>
) 
};

export default ErrorPages;