import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error500.module.scss';

const Error500 = () => {
    const SwitcherIcons = () => {

        //leftsidemenu
        document.querySelector(".demo_changer").classList.add("active");
        let Rightside = document.querySelector(".demo_changer")
        Rightside.style.right = "0px";
    }
    
    const RemoveSwitcherIcon = () => {
    
        //leftsidemenu
        document.querySelector(".demo_changer").classList.remove("active");
        let Rightside = document.querySelector(".demo_changer")
        Rightside.style.right = "-270px";
    }
    
    return (

    <div className={styles.Error500}>
        {/* <!-- PAGE --> */}
        <div className=''>
            <div className="page">
                <div className="dropdown float-end custom-layout" onClick={() => SwitcherIcons()}>
                    <div className="demo-icon nav-link icon mt-4">
                        <i className="fe fe-settings fa-spin text_primary"></i>
                    </div>
                </div>
                {/* <!-- PAGE-CONTENT OPEN --> */}
                <div className="page-content error-page error2 text-white" onClick={() => RemoveSwitcherIcon()}>
                    <div className="container text-center">
                        <div className="error-template">
                            <h1 className="display-1 mb-2">5<span className="custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff" /><circle cx="15" cy="10" r="1" fill="#6563ff" /><circle cx="9" cy="10" r="1" fill="#6563ff" /><path fill="#6563ff" d="M11.499,17.05957a1,1,0,0,1-.87109-1.48926A5.02491,5.02491,0,0,1,15,13a1,1,0,0,1,0,2,3.02357,3.02357,0,0,0-2.62793,1.54883A.99968.99968,0,0,1,11.499,17.05957Z" /></svg></span>0</h1>
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
    </div>
)
};

export default Error500;
