import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error401.module.scss';

const SwitcherIcons = () => {

    //leftsidemenu
    document.querySelector(".demo_changer").classList.add("active");
    document.querySelector(".demo_changer").style.right = "0px";
}

const RemoveSwitcherIcon = () => {

    //leftsidemenu
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
}
const Error401 = () => {

    return (

  <div className={styles.Error401}>
            {/* <!-- PAGE --> */}
        <div className="page">
            <div className="dropdown float-end custom-layout" onClick={() => SwitcherIcons()}>
                <div className="demo-icon nav-link icon mt-4">
                    <i className="fe fe-settings fa-spin text_primary"></i>
                </div>
            </div>
            {/* <!-- PAGE-CONTENT OPEN --> */}
            <div className="page-content error-page error2  text-white" onClick={() => RemoveSwitcherIcon()}>
                <div className="container text-center">
                    <div className="error-template">
                        <h1 className="display-1 mb-2">4<span className="custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff"/><path fill="#6563ff" d="M14.99951,17.0918a.99473.99473,0,0,1-.64209-.23438,3.766,3.766,0,0,0-4.71484,0,.99955.99955,0,1,1-1.28516-1.53125,5.81162,5.81162,0,0,1,7.28516,0,.99974.99974,0,0,1-.64307,1.76563Z"/><circle cx="15" cy="10" r="1" fill="#6563ff"/><circle cx="9" cy="10" r="1" fill="#6563ff"/></svg></span>1</h1>
                        <h5 className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </h5>
                        <div className="text-center">
                            <Link className="btn btn-secondary mt-5 mb-5" to={`${process.env.PUBLIC_URL}/dashboard`}> <i className="fa fa-long-arrow-left"></i> Back to Home </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- PAGE-CONTENT OPEN CLOSED --> */}
        </div>
        {/* <!-- End PAGE --> */}
  </div>
)
};

export default Error401;
