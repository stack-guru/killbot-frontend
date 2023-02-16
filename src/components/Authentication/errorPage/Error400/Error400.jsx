import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error400.module.scss';

const SwitcherIcons = () => {

    //leftsidemenu
    document.querySelector(".demo_changer").classList.add("active");
    document.querySelector(".demo_changer").style.right = "0px";
    
}

const RemoveSwitcherIcon= () => {

    //leftsidemenu
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
}
const Error400 = () => {


    return (
        
    <div className={styles.Error400}>
        {/* <!-- PAGE --> */}
        <>
        <div className="page">
            
            {/* <!-- PAGE-CONTENT OPEN --> */}
            <div className="page-content error-page error2 text-white" onClick={() => RemoveSwitcherIcon()}>
                <div className="container text-center">
                    <div className="error-template">
                        <h1 className="display-1 mb-2">4<span className="text-center custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#c4bffd" d="M9,21.48047c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052V10c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v10.48047c0.00014,0.55214-0.44734,0.99986-0.99948,1C9.00035,21.48047,9.00017,21.48047,9,21.48047z M15,21.48047c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052V10c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v10.48047c0.00014,0.55214-0.44734,0.99986-0.99948,1C15.00035,21.48047,15.00017,21.48047,15,21.48047z" /><path fill="#a69ffd" d="M15.40137,21.39392C19.24707,20.00067,22,16.32666,22,12c0-5.52283-4.47717-10-10-10S2,6.47717,2,12c0,4.32678,2.75323,8.00085,6.59912,9.39404C8.24725,21.23926,8.00006,20.89001,8,20.48102c0-0.00018,0-0.00037,0-0.00055V10c0-0.55231,0.44769-1,1-1s1,0.44769,1,1v10.48047c0.00012,0.55212-0.44733,0.99988-0.99945,1c-0.00018,0-0.00037,0-0.00055,0c-0.13025,0-0.25305-0.02875-0.36719-0.07404C9.6864,21.78375,10.81665,22,12,22c1.18353,0,2.3139-0.21631,3.36761-0.59375c-0.11407,0.04535-0.23688,0.07422-0.36707,0.07422c-0.00018,0-0.00037,0-0.00055,0c-0.55212,0.00012-0.99988-0.44733-1-0.99945c0-0.00018,0-0.00037,0-0.00055V10c0-0.55231,0.44769-1,1-1s1,0.44769,1,1v10.48047C16.00006,20.88947,15.75311,21.23901,15.40137,21.39392z" /><rect width="4" height="2" x="10" y="14" fill="#6c5ffc" /><path fill="#6c5ffc" d="M16,11h-2c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h2c0.55228,0,1,0.44771,1,1S16.55228,11,16,11z M10,11H8c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1S10.55229,11,10,11z" /></svg></span>0</h1>
                        <div className="m-5">
                            <span className="fs-20">
                                OOPS! Page not found
                            </span>
                            <p>Sorry, an error has occured, Requested page not found!</p>
                        </div>
                        <div className="text-center">
                            <Link className="btn btn-secondary mt-5 mb-5" to={`${process.env.PUBLIC_URL}/dashboard`}> <i className="fa fa-long-arrow-left"></i> Back to Home </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- PAGE-CONTENT OPEN CLOSED --> */}
        </div>
        {/* <!-- End PAGE --> */}
        <div className="dropdown float-end custom-layout" onClick={() => SwitcherIcons()}>
    <div className="demo-icon nav-link icon mt-4">
        <i className="fe fe-settings fa-spin text_primary" ></i>
    </div>
</div>
</>
    </div>
    
)
};

export default Error400;
