import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';


const AuthenticationPage = () => {
  return (
<Fragment>
<div className='login-img'>
  <div className="page">
    <Outlet />
  </div>
  </div>
  

</Fragment>
)
  };
export default AuthenticationPage;