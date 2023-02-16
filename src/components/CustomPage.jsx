import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const CustomPage = () => {

  return (

  <Fragment>
    <div className="">
      <Outlet />
    </div>
  </Fragment>
)
  };

export default CustomPage;
