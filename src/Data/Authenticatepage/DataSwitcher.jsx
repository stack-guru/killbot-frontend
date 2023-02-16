import React, { useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as ErrorSwitcherData from './ErrorSwitcherData';


// For Light Primary

function changePrimaryColor(input) {

    localStorage.setItem("sashPrimaryColor", input);

    const dynamicBackgroundColor = document.querySelectorAll(
        "input.color-primary-light"
    );

    ErrorSwitcherData.dynamicTransparentPrimaryColor(
        dynamicBackgroundColor,
        input
    );
    // let myonoffswitch = document.getElementById("myonoffswitch7");
    // myonoffswitch.checked = true;

    // Adding
    document.querySelector("body").classList.add("light-mode");

    // Removing
    document.querySelector("body").classList.remove("dark-mode");
    document.querySelector("body").classList.remove("transparent-mode");
    document.querySelector("body").classList.remove("bg-img1");
    document.querySelector("body").classList.remove("bg-img2");
    document.querySelector("body").classList.remove("bg-img3");
    document.querySelector("body").classList.remove("bg-img4");

    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashtransparentPrimaryColor");
    localStorage.removeItem("sashtransparentBgColor");
    localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
    localStorage.removeItem("sashBgImage");

    ErrorSwitcherData.OpacityValuePrimary();
}

// For Dark Primary

function darkPrimaryColor(input) {

    localStorage.setItem("sashdarkPrimaryColor", input);

    const dynamicBackgroundColor = document.querySelectorAll(
        "input.color-primary-dark"
    );

    ErrorSwitcherData.dynamicTransparentPrimaryColor(
        dynamicBackgroundColor,
        input
    );

    // let myonoffswitch = document.getElementById("myonoffswitch7");
    // myonoffswitch.checked = true;

    // Adding
    document.querySelector("body").classList.add("dark-mode");

    // Removing
    document.querySelector("body").classList.remove("light-mode");
    document.querySelector("body").classList.remove("transparent-mode");
    document.querySelector("body").classList.remove("bg-img1");
    document.querySelector("body").classList.remove("bg-img2");
    document.querySelector("body").classList.remove("bg-img3");
    document.querySelector("body").classList.remove("bg-img4");

    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashtransparentPrimaryColor");
    localStorage.removeItem("sashtransparentBgColor");
    localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
    localStorage.removeItem("sashBgImage");

    ErrorSwitcherData.OpacityValuePrimary();
}

// For Transparent Primary

function transparentPrimaryColor(input) {

    localStorage.setItem("sashtransparentPrimaryColor", input);

    const dynamicBackgroundColor = document.querySelectorAll(
        "input.color-primary-transparent"
    );


    ErrorSwitcherData.dynamicTransparentPrimaryColor(
        dynamicBackgroundColor,
        input
    );

    // let myonoffswitch = document.getElementById("myonoffswitchTransparent");
    // myonoffswitch.checked = true;

    // Adding
    document.querySelector("body").classList.add("transparent-mode");

    // Removing
    document.querySelector("body").classList.remove("light-mode");
    document.querySelector("body").classList.remove("dark-mode");
    document.querySelector("body").classList.remove("bg-img1");
    document.querySelector("body").classList.remove("bg-img2");
    document.querySelector("body").classList.remove("bg-img3");
    document.querySelector("body").classList.remove("bg-img4");

    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashtransparentBgColor");
    localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
    localStorage.removeItem("sashBgImage");

    ErrorSwitcherData.OpacityValuePrimary();
}

// For Transparent Background

function TransparentBackground(input) {

    localStorage.setItem("sashtransparentBgColor", input);

    const dynamicBackgroundColor = document.querySelectorAll(
        "input.color-bg-transparent"
    );

    ErrorSwitcherData.dynamicBgTransparentBackground(
        dynamicBackgroundColor,
        input
    );

    let myonoffswitch = document.getElementById("myonoffswitchTransparent")
    myonoffswitch.checked = true;

    // Adding
    document.querySelector("body").classList.add("transparent-mode");

    // Removing
    document.querySelector("body").classList.remove("light-mode");
    document.querySelector("body").classList.remove("dark-mode");
    document.querySelector("body").classList.remove("bg-img1");
    document.querySelector("body").classList.remove("bg-img2");
    document.querySelector("body").classList.remove("bg-img3");
    document.querySelector("body").classList.remove("bg-img4");

    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashdarkPrimaryColor");
    localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
    localStorage.removeItem("sashBgImage");

    ErrorSwitcherData.OpacityValuePrimary();
}

// For Transparent Image Primary


function BgImgTransparentPrimaryColor(input) {


    localStorage.setItem("sashtransparent-bgImgPrimaryColor", input);

    const dynamicPrimaryImgTransparent = document.querySelectorAll(
        "input.color-primary-img-transparent"
    );

    ErrorSwitcherData.dynamicBgImgTransparentPrimaryColor(
        dynamicPrimaryImgTransparent,
        input
    );

    let myonoffswitchTransparent = document.getElementById("myonoffswitchTransparent")
    myonoffswitchTransparent.checked = true;

    // Adding
    document.querySelector("body").classList.add("transparent-mode");

    // Removing
    document.querySelector("body").classList.remove("light-mode");
    document.querySelector("body").classList.remove("dark-mode");

    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashdarkPrimaryColor");
    localStorage.removeItem("sashtransparentPrimaryColor");
    localStorage.removeItem("sashtransparentBgColor");

    document.querySelector("html").style.removeProperty("--transparent-body");

    if (
        document.querySelector("body").classList.contains("bg-img1") === false &&
        document.querySelector("body").classList.contains("bg-img2") === false &&
        document.querySelector("body").classList.contains("bg-img3") === false &&
        document.querySelector("body").classList.contains("bg-img4") === false
    ) {
        document.querySelector("body").classList.add("bg-img1");
        localStorage.setItem("sashBgImage", "bg-img1");
    }
    ErrorSwitcherData.OpacityValuePrimary();
}
const DataSwitcher = () => {

    useEffect(() => {
        ErrorSwitcherData.localStorageBackUp();

    })


    return (
        
        <div className=''>

            {/* <!-- Switcher --> */}
            <div className="switcher-wrapper">
                <div className="demo_changer">
                    <div className="form_holder sidebar-right1">
                        <PerfectScrollbar>
                            <Row>
                                <div className="predefined_styles">
                                    <div className="swichermainleft text-center">
                                        <div className="p-3 d-grid gap-2">
                                            <Link to="../../index.html" className="btn ripple btn-primary mt-0">View Demo</Link>
                                            <Link to="https://themeforest.net/item/sash-bootstrap-5-admin-dashboard-template/35183671" className="btn ripple btn-secondary">Buy Now</Link>
                                            <Link to="https://themeforest.net/user/spruko/portfolio" className="btn ripple btn-pink">Our Portfolio</Link>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>LTR and RTL VERSIONS</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">LTR Version</span>
                                                    <p className="onoffswitch2"><input type="radio" name="onoffswitch7"
                                                        onClick={() => ErrorSwitcherData.RtltoLtr()}
                                                        id="myonoffswitch23" className="onoffswitch2-checkbox" defaultChecked />
                                                        <label htmlFor="myonoffswitch23" className="onoffswitch2-label"></label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">RTL Version</span>
                                                    <p className="onoffswitch2"><input type="radio" onClick={() => ErrorSwitcherData.LtrtoRtl()} name="onoffswitch7" id="myonoffswitch24" className="onoffswitch2-checkbox" />
                                                        <label htmlFor="myonoffswitch24" className="onoffswitch2-label"></label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Light Theme Style</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Light Theme</span>
                                                    <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch1" className="onoffswitch2-checkbox" defaultChecked onClick={() => ErrorSwitcherData.LightTheme()} />
                                                        <label htmlFor="myonoffswitch1" className="onoffswitch2-label"></label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Light Primary</span>
                                                    <div className="">
                                                        <input
                                                            className="w-30p h-30 input-color-picker color-primary-light" onChange={(ele) => { changePrimaryColor(ele.target.value) }} defaultValue="#6c5ffc" id="colorID"
                                                            type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" data-id7="transparentcolor" name="lightPrimary"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Dark Theme Style</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Dark Theme</span>
                                                    <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch2" className="onoffswitch2-checkbox" onClick={() => ErrorSwitcherData.dark()} />
                                                        <label htmlFor="myonoffswitch2" className="onoffswitch2-label"></label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Dark Primary</span>
                                                    <div className="">
                                                        <input
                                                            className="w-30p h-30 input-dark-color-picker color-primary-dark" id="darkPrimaryColorID"
                                                            defaultValue="#6c5ffc"
                                                            onChange={(ele) => { darkPrimaryColor(ele.target.value) }}
                                                            type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" data-id3="primary" data-id8="transparentcolor"
                                                            name="darkPrimary"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Transparent Theme Style</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Transparent Theme</span>
                                                    <p className="onoffswitch2"><input type="radio" name="onoffswitch1" onClick={() => ErrorSwitcherData.Transparent()} id="myonoffswitchTransparent" className="onoffswitch2-checkbox" />
                                                        <label htmlFor="myonoffswitchTransparent" className="onoffswitch2-label"></label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Transparent Primary</span>
                                                    <div className="">
                                                        <input
                                                            className="w-30p h-30 input-transparent-color-picker color-primary-transparent"
                                                            defaultValue="#6c5ffc"
                                                            id="transparentPrimaryColorID"
                                                            onChange={(ele) => { transparentPrimaryColor(ele.target.value) }}
                                                            type="color" data-id="bg-color"
                                                            data-id1="bg-hover" data-id2="bg-border" data-id3="primary"
                                                            data-id4="primary" data-id9="transparentcolor" name="tranparentPrimary"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Transparent Background</span>
                                                    <div className="">
                                                        <input
                                                            className="w-30p h-30 input-transparent-color-picker color-bg-transparent"
                                                            defaultValue="#6c5ffc"
                                                            id="transparentBgColorID"
                                                            onChange={(ele) => { TransparentBackground(ele.target.value) }}
                                                            type="color"
                                                            data-id5="body"
                                                            data-id6="theme"
                                                            data-id9="transparentcolor"
                                                            name="transparentBackground"
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Transparent Bg-Image Style</h4>
                                        <div className="skin-body switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Bg-Image Primary</span>
                                                <div className="">
                                                    <input
                                                        className="w-30p h-30 color-primary-img-transparent" defaultValue="#6c5ffc" id="transparentBgImgPrimaryColorID"
                                                        onChange={(ele) => { BgImgTransparentPrimaryColor(ele.target.value) }}
                                                        type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" data-id3="primary" data-id4="primary" data-id9="transparentcolor" name="tranparentPrimary"
                                                    />
                                                </div>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <Link className="bg-img1" to="#" onClick={() => ErrorSwitcherData.bgimage1()} ><img src={require("../../assets/images/media/bg-img1.jpg")} alt="Bg-1" id="bgimage1" /></Link>
                                                <Link className="bg-img2" to="#" onClick={() => ErrorSwitcherData.bgimage2()}><img src={require("../../assets/images/media/bg-img2.jpg")} alt="Bg-2" id="bgimage2" /></Link>
                                                <Link className="bg-img3" to="#" onClick={() => ErrorSwitcherData.bgimage3()}><img src={require("../../assets/images/media/bg-img3.jpg")} alt="Bg-3" id="bgimage3" /></Link>
                                                <Link className="bg-img4" to="#" onClick={() => ErrorSwitcherData.bgimage4()}><img src={require("../../assets/images/media/bg-img4.jpg")} alt="Bg-4" id="bgimage4" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Reset All Styles</h4>
                                        <div className="skin-body">
                                            <div className="switch_section my-4">
                                                <button className="btn btn-danger btn-block"
                                                    onClick={() => {
                                                        localStorage.clear();
                                                        let html = document.querySelector('html')
                                                        html.style = '';
                                                        ErrorSwitcherData.OpacityValuePrimary();
                                                        ErrorSwitcherData.resetData();
                                                    }}

                                                    type="button">Reset All
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div>

            {/* <!-- End Switcher --> */}


        </div >
    )
};

export default DataSwitcher;


