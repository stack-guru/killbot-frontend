import React, { Fragment } from 'react';
import Footer from '../Layouts/Footer/Footer';
import Header2 from '../Layouts/Header/Header2';
import Rightside from '../Layouts/Rightside/Rightside';
import { Sidebar } from '../Layouts/Sidebar/Sidebar';
import SwitcherStyle1 from './pages/switcher/SwitcherStyle1/SwitcherStyle1';
import * as  SwitcherData from "../Data/Pages/SwitcherData/SwitcherData";

const Switcherapp = () => {

  return (
  <Fragment>
    <div className='horizontalMenucontainer'>
      <div className="page">
        <div className="page-main">
          <Header2 />
          <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
          <Sidebar />
          <div className="main-content app-content mt-0" onClick={() => SwitcherData.responsiveSidebarcloseHeader()}>
            <div className="side-app">
              <div className="main-container container-fluid">
                <SwitcherStyle1 />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
        <Rightside />
    </div>
  </Fragment>
)
  };

export default Switcherapp;
