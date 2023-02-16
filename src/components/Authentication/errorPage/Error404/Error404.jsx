import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error404.module.scss';


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
const Error404 = () => {
    

    return (
  <div className={styles.Error404}>
           {/* <!-- PAGE --> */}
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
                        <h1 className="display-1 mb-2">4<span className="custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff"/><path fill="#6563ff" d="M15.999,17a.99764.99764,0,0,1-.59912-.2002l-.7334-.5498-.73291.5498a.99755.99755,0,0,1-1.20019,0L12,16.25l-.7334.5498a.9999.9999,0,0,1-1.20019-1.5996l1.33349-1a.99757.99757,0,0,1,1.2002,0l.7334.5498.73291-.5498a.99755.99755,0,0,1,1.20019,0l1.3335,1A1.00013,1.00013,0,0,1,15.999,17Z"/><path fill="#6563ff" d="M13.33252 17a.9976.9976 0 0 1-.59912-.2002L12 16.25l-.7334.5498a.99755.99755 0 0 1-1.20019 0L9.3335 16.25l-.7334.5498a.9999.9999 0 0 1-1.2002-1.5996l1.3335-1a.99755.99755 0 0 1 1.20019 0l.73291.5498.7334-.5498a.99757.99757 0 0 1 1.2002 0l1.33349 1A1.00013 1.00013 0 0 1 13.33252 17zM8.37109 12.5a1 1 0 0 1-.707-1.707L8.457 10l-.793-.793A.99989.99989 0 0 1 9.07812 7.793l1.5 1.5a.99962.99962 0 0 1 0 1.41406l-1.5 1.5A.99676.99676 0 0 1 8.37109 12.5zM15.87109 12.5a.99678.99678 0 0 1-.707-.293l-1.5-1.5a.99964.99964 0 0 1 0-1.41406l1.5-1.5A.99989.99989 0 0 1 16.57812 9.207l-.793.793.793.793a1 1 0 0 1-.707 1.707z"/></svg></span>4</h1>
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

export default Error404;
