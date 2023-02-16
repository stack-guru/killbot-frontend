import React, { useEffect } from 'react';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { Row, Card, Col } from 'react-bootstrap';
import * as SwitcherData from '../../../../Data/Pages/SwitcherData/SwitcherData';


// For Light Primary

function changePrimaryColor(input) {

  localStorage.setItem("sashprimaryColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-primary-light"
  );

  SwitcherData.dynamicTransparentPrimaryColor(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitch1");
  myonoffswitch.checked = true;
  let myonoffswitch1 = document.getElementById("myonoffswitch6");
  myonoffswitch1.checked = true;

  let myonoffswitch2 = document.getElementById("myonoffswitch3");
  myonoffswitch2.checked = true;
  // Adding
  document.querySelector("body").classList.add("light-mode");

  // Removing
  document.querySelector("body").classList.remove("dark-mode");
  document.querySelector("body").classList.remove("transparent-mode");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.remove("bg-img4");

  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");
  localStorage.removeItem("sashtransparentPrimaryColor");
  localStorage.removeItem("sashtransparentBgColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}


// For Dark Primary

function darkPrimaryColor(input) {

  localStorage.setItem("sashdarkPrimaryColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-primary-dark"
  );

  SwitcherData.dynamicTransparentPrimaryColor(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitch2");
  myonoffswitch.checked = true;
  let myonoffswitch1 = document.getElementById("myonoffswitch5");
  myonoffswitch1.checked = true;
  let myonoffswitch2 = document.getElementById("myonoffswitch8");
  myonoffswitch2.checked = true;

  // Adding
  document.querySelector("body").classList.add("dark-mode");

  // Removing
  document.querySelector(".app").classList.remove("transparent-mode");
  document.querySelector(".app").classList.remove("light-mode");
  document.querySelector("body").classList.remove("header-light");
  document.querySelector("body").classList.remove("color-header");
  document.querySelector("body").classList.remove("gradient-header");
  document.querySelector("body").classList.remove("light-menu");
  document.querySelector("body").classList.remove("color-menu");
  document.querySelector("body").classList.remove("gradient-menu");

  localStorage.removeItem("sashprimaryColor");
  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");
  localStorage.removeItem("sashtransparentPrimaryColor");
  localStorage.removeItem("sashtransparentBgColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}

// For Transparent Primary

function transparentPrimaryColor(input) {

  localStorage.setItem("sashtransparentPrimaryColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-primary-transparent"
  );

  SwitcherData.dynamicTransparentPrimaryColor(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitchTransparent");
  myonoffswitch.checked = true;
  let lightmenu = document.querySelector("#myonoffswitch3")
  lightmenu.checked = false;
  let lightheader = document.querySelector("#myonoffswitch6")
  lightheader.checked = false;
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
  localStorage.removeItem("sashtransparentPrimaryColor");
  localStorage.removeItem("sashtransparentBgColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}

// For Transparent Background

function TransparentBackground(input) {

  localStorage.setItem("sashtransparentBgColor", input);

  const dynamicBackgroundColor = document.querySelectorAll(
    "input.color-bg-transparent"
  );

  SwitcherData.dynamicBgTransparentBackground(
    dynamicBackgroundColor,
    input
  );

  let myonoffswitch = document.getElementById("myonoffswitchTransparent")
  myonoffswitch.checked = true;
  let lightmenu = document.querySelector("#myonoffswitch3")
  lightmenu.checked = false;
  let lightheader = document.querySelector("#myonoffswitch6")
  lightheader.checked = false;
  // Adding
  document.querySelector("body").classList.add("transparent-mode");

  // Removing
  document.querySelector("body").classList.remove("light-mode");
  document.querySelector("body").classList.remove("dark-mode");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.remove("bg-img4");
  document.querySelector("body").classList.remove("light-header");
  document.querySelector("body").classList.remove("color-header");
  document.querySelector("body").classList.remove("dark-header");
  document.querySelector("body").classList.remove("gradient-header");
  document.querySelector("body").classList.remove("light-menu");
  document.querySelector("body").classList.remove("color-menu");
  document.querySelector("body").classList.remove("dark-menu");
  document.querySelector("body").classList.remove("gradient-menu");

  localStorage.removeItem("sashprimaryColor");
  localStorage.removeItem("sashprimaryHoverColor");
  localStorage.removeItem("sashprimaryBorderColor");
  localStorage.removeItem("sashprimaryTransparent");
  localStorage.removeItem("sashdarkPrimaryColor");
  localStorage.removeItem("sashtransparent-bgImgPrimaryColor");
  localStorage.removeItem("sashBgImage");

  SwitcherData.OpacityValuePrimary();
}

// For Transparent Image Primary


function BgImgTransparentPrimaryColor(input) {


  localStorage.setItem("sashtransparent-bgImgPrimaryColor", input);

  const dynamicPrimaryImgTransparent = document.querySelectorAll(
    "input.color-primary-img-transparent"
  );

  SwitcherData.dynamicBgImgTransparentPrimaryColor(
    dynamicPrimaryImgTransparent,
    input
  );

  let myonoffswitchTransparent = document.getElementById("myonoffswitchTransparent")
  myonoffswitchTransparent.checked = true;
  let lightmenu = document.querySelector("#myonoffswitch3")
  lightmenu.checked = false;
  let lightheader = document.querySelector("#myonoffswitch6")
  lightheader.checked = false;
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
  SwitcherData.OpacityValuePrimary();
}


const SwitcherStyle1 = () => {

  useEffect(() => {
    SwitcherData.localStorageBackUp();

  })

  return (
    <div className=''>

      <PageHeader titles="Switcher Style-1" active="Switcher Style-1" items={['Switcher']} />

      {/* <!--Row--> */}
      <div className="container">
        <Row className="row-sm">
          <Col xl={6} className="m-auto">
            <Card className="sidebar-right1">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Navigation Style</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Vertical Menu</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch15" id="myonoffswitch34" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.VerticalMenu()} />
                      <label htmlFor="myonoffswitch34" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Horizontal Click Menu</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch15" id="myonoffswitch35" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Horizontal()} />
                      <label htmlFor="myonoffswitch35" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Horizontal Hover Menu</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch15" id="myonoffswitch111" className="onoffswitch2-checkbox" onClick={() => SwitcherData.HorizontalHoverMenu()} />
                      <label htmlFor="myonoffswitch111" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">LTR and RTL VERSIONS</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">LTR Version</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch7"
                      onClick={() => SwitcherData.RtltoLtr()}
                      id="myonoffswitch23" className="onoffswitch2-checkbox" defaultChecked />
                      <label htmlFor="myonoffswitch23" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">RTL Version</span>
                    <p className="onoffswitch2"><input type="radio" onClick={() => SwitcherData.LtrtoRtl()} name="onoffswitch7" id="myonoffswitch24" className="onoffswitch2-checkbox" />
                      <label htmlFor="myonoffswitch24" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Light Theme Style</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Light Theme</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch1" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.LightTheme()} />
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
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Dark Theme Style</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Dark Theme</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch2" className="onoffswitch2-checkbox" onClick={() => SwitcherData.dark()} />
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
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Transparent Theme Styles</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Transparent Theme</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch1" onClick={() => SwitcherData.Transparent()} id="myonoffswitchTransparent" className="onoffswitch2-checkbox" />
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
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Transparent Bg-Image Styles</h6>
                </div>
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
                    <Link className="bg-img1 me-2" to="#" onClick={() => SwitcherData.bgimage1()} ><img src={require("../../../../assets/images/media/bg-img1.jpg")} className='br-7' alt="Bg-1" id="bgimage1" /></Link>
                    <Link className="bg-img2 me-2" to="#" onClick={() => SwitcherData.bgimage2()}><img src={require("../../../../assets/images/media/bg-img2.jpg")} className='br-7' alt="Bg-2" id="bgimage2" /></Link>
                    <Link className="bg-img3 me-2" to="#" onClick={() => SwitcherData.bgimage3()}><img src={require("../../../../assets/images/media/bg-img3.jpg")} className='br-7' alt="Bg-3" id="bgimage3" /></Link>
                    <Link className="bg-img4 me-2" to="#" onClick={() => SwitcherData.bgimage4()}><img src={require("../../../../assets/images/media/bg-img4.jpg")} className='br-7' alt="Bg-4" id="bgimage4" /></Link>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Leftmenu Styles</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle lightMenu d-flex">
                    <span className="me-auto">Light Menu</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch3" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.LightMenu()} />
                      <label htmlFor="myonoffswitch3" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle colorMenu d-flex mt-2">
                    <span className="me-auto">Color Menu</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch4" className="onoffswitch2-checkbox" onClick={() => SwitcherData.ColorMenu()} />
                      <label htmlFor="myonoffswitch4" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle darkMenu d-flex mt-2">
                    <span className="me-auto">Dark Menu</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch5" className="onoffswitch2-checkbox" onClick={() => SwitcherData.DarkMenu()} />
                      <label htmlFor="myonoffswitch5" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle gradientMenu d-flex mt-2">
                    <span className="me-auto">Gradient Menu</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch2" id="myonoffswitch19" className="onoffswitch2-checkbox" onClick={() => SwitcherData.GradientMenu()} />
                      <label htmlFor="myonoffswitch19" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Header Styles</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle lightHeader d-flex">
                    <span className="me-auto">Light Header</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch6" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.Lightheader()} />
                      <label htmlFor="myonoffswitch6" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle  colorHeader d-flex mt-2">
                    <span className="me-auto">Color Header</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch7" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Colorheader()} />
                      <label htmlFor="myonoffswitch7" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle darkHeader d-flex mt-2">
                    <span className="me-auto">Dark Header</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch8" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Darkheader()} />
                      <label htmlFor="myonoffswitch8" className="onoffswitch2-label"></label>
                    </p>
                  </div>

                  <div className="switch-toggle darkHeader d-flex mt-2">
                    <span className="me-auto">Gradient Header</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch3" id="myonoffswitch20" className="onoffswitch2-checkbox" onClick={() => SwitcherData.gradientheader()} />
                      <label htmlFor="myonoffswitch20" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Layout Width Styles</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Full Width</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch4" id="myonoffswitch9" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.FullWidth()} />
                      <label htmlFor="myonoffswitch9" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Boxed</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch4" id="myonoffswitch10" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Boxed()} />
                      <label htmlFor="myonoffswitch10" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Layout Positions</h6>
                </div>
                <div className="switch_section">
                  <div className="switch-toggle d-flex">
                    <span className="me-auto">Fixed</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch5" id="myonoffswitch11" className="onoffswitch2-checkbox" defaultChecked onClick={() => SwitcherData.Fixed()} />
                      <label htmlFor="myonoffswitch11" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                  <div className="switch-toggle d-flex mt-2">
                    <span className="me-auto">Scrollable</span>
                    <p className="onoffswitch2"><input type="radio" name="onoffswitch5" id="myonoffswitch12" className="onoffswitch2-checkbox" onClick={() => SwitcherData.Scrollable()} />
                      <label htmlFor="myonoffswitch12" className="onoffswitch2-label"></label>
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <div className="switch_section text-center px-0">
                  <div className="btn-list">
                    <button className="btn btn-danger" type="button" onClick={() => {
                      localStorage.clear();
                      let html = document.querySelector('html')
                      html.style = '';
                      SwitcherData.OpacityValuePrimary();
                      SwitcherData.resetData();
                    }}>Reset All
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* <!--End Row--> */}

    </div>
  )
};
export default SwitcherStyle1;
