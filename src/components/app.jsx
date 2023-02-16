import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';
import Rightside from '../Layouts/Rightside/Rightside';
import Switcher from '../Layouts/Switcher/Switcher';
import * as  SwitcherData from "../Data/Pages/SwitcherData/SwitcherData"
import BacktoTop from '../Layouts/Backtotop/Backtotop';
import { Sidebar }  from '../Layouts/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from './../Redux/store';


const App = () => {

  document.querySelector("body").classList.add( 'app', 'sidebar-mini', 'ltr','light-mode');
  document.querySelector("body").classList.remove('login-img', 'landing-page', 'horizontal');

  return(

  <Fragment>
    <Provider store={store}>
    <div className='horizontalMenucontainer' >
      <Switcher />
      <div className="page">
        <div className="page-main">
          <Header />
          <div className="sticky" style={{ paddingTop: "-74px" }}>
            <Sidebar />
          </div>
          <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
          <div className="main-content app-content mt-0" onClick={() => SwitcherData.responsiveSidebarclose()}>
            <div className="side-app">
              <div className="main-container container-fluid">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Rightside />
      <BacktoTop />
    </div>
    </Provider>
  </Fragment>
)
};

export default App;
