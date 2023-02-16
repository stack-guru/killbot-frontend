 //LTR TO RTL
 export const LtrtoRtl = () => {
    document.querySelector(".app")?.classList.add("rtl");
    document.querySelector("html[lang=en]").setAttribute("dir", "rtl");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${process.env.PUBLIC_URL === 'production' ? "/" : "/sash-js/preview/assets"}/plugins/bootstrap/css/bootstrap.rtl.min.css`)
    document.querySelector(".app").classList.remove("ltr");

    localStorage.setItem("sashrtl", 'true');
    localStorage.removeItem("sashltr");
};
//RTL TO LTR
export const RtltoLtr = () => {
    document.querySelector(".app").classList.add("ltr");
    document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${process.env.PUBLIC_URL === 'production' ? "/" : "/sash-js/preview/assets"}/plugins/bootstrap/css/bootstrap.min.css`)
    document.querySelector(".app").classList.remove("rtl");

    localStorage.setItem("sashltr", 'true');
    localStorage.removeItem("sashrtl");
};
//LIGHTHEADER
export const Lightheader = () => {
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.add("header-light");
};
//COLORHEADER
export const Colorheader = () => {
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.remove("header-light");
    document.querySelector(".app").classList.add("color-header");
};
//DARKHEADER
export const Darkheader = () => {
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.remove("header-light");
    document.querySelector(".app").classList.add("dark-header");
};

// GRADIENTHEADER
export const gradientheader = () => {
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.remove("header-light");
    document.querySelector(".app").classList.add("gradient-header");
};

//LIGHTMENU
export const LightMenu = () => {
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.add("light-menu");
};
//COLORMENU
export const ColorMenu = () => {
    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.add("color-menu");
};
//DARKMENU
export const DarkMenu = () => {
    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.add("dark-menu");
};
//GRADIENTMENU
export const GradientMenu = () => {
    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.add("gradient-menu");
};
//FULLWIDTH
export const FullWidth = () => {
    document.querySelector(".app").classList.remove("layout-boxed");
    document.querySelector(".app").classList.add("layout-fullwidth");
};
//BOXED
export const Boxed = () => {
    document.querySelector(".app").classList.remove("layout-fullwidth");
    document.querySelector(".app").classList.add("layout-boxed");
};
//FIXED
export const Fixed = () => {
    document.querySelector(".app")?.classList.remove("scrollable-layout");
    document.querySelector(".app")?.classList.add("fixed-layout");
};
//SCROLLABLE
export const Scrollable = () => {
    document.querySelector(".app")?.classList.remove("fixed-layout");
    document.querySelector(".app")?.classList.add("scrollable-layout");
};

//VERTICALMENU
export const VerticalMenu = () => {

    document.querySelector(".app")?.classList.add("sidebar-mini");
    document.querySelector(".header")?.classList.add("app-header");
    document.querySelector(".main-content")?.classList.add("app-content");
    document.querySelector(".main-container")?.classList.add("container-fluid");

    document.querySelector(".app")?.classList.remove("horizontal");
    document.querySelector(".app")?.classList.remove("horizontal-hover");
    document.querySelector(".app-sidebar")?.classList.remove("horizontal-main");
    document.querySelector(".header")?.classList.remove("hor-header");
    document.querySelector(".main-sidemenu")?.classList.remove("container");
    document.querySelector(".main-container")?.classList.remove("container");
    document.querySelector(".main-content")?.classList.remove("hor-content");
    document.querySelector(".side-app")?.classList.remove("container");

    localStorage.removeItem("sashhorizontal");
    localStorage.setItem("sashvertical", 'true');
    localStorage.removeItem("sashhorizontalHover");
    OpacityValuePrimary();
};
//HORIZONTALMENU
export const Horizontal = () => {
    document.querySelector(".sideboot")?.classList.add("mega-slide-menu");
    document.querySelector(".app")?.classList.add("horizontal");
    document.querySelector(".main-container").classList.add("container");
    document.querySelector(".main-sidemenu").classList.add("container");
    document.querySelector(".main-content").classList.add("hor-content");
    document.querySelector(".app-sidebar").classList.add("horizontal-main");
    document.querySelector(".header").classList.add("hor-header");
    document.querySelector(".side-app").classList.add("container");

    document.querySelector(".app")?.classList.remove("sidebar-mini");
    document.querySelector(".header").classList.remove("app-header");
    document.querySelector(".main-content").classList.remove("app-content");
    document.querySelector(".main-container").classList.remove("container-fluid");
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
    document.querySelector(".app")?.classList.remove("horizontal-hover");

    document.querySelector(".horizontal .side-menu")?.classList.add('flex-nowrap');

    checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();

    localStorage.removeItem("sashvertical");
    localStorage.setItem("sashhorizontal", 'true');
    localStorage.removeItem("sashhorizontalHover");
};
//HORIZONTALHOVERMENU
export const HorizontalHoverMenu = () => {

    document.querySelector(".app")?.classList.add("horizontal-hover");

    document.querySelector(".app")?.classList.add("horizontal");
    document.querySelector(".main-content")?.classList.add("hor-content");
    document.querySelector(".main-container")?.classList.add("container");
    document.querySelector(".header")?.classList.add("hor-header");
    document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
    document.querySelector(".main-sidemenu")?.classList.add("container");
    document.querySelector(".side-app")?.classList.add("container");

    document.querySelector("#slide-left")?.classList.remove("d-none");
    document.querySelector("#slide-right")?.classList.remove("d-none");
    document.querySelector(".header")?.classList.remove("app-header");
    document.querySelector(".main-content")?.classList.remove("app-content");
    document.querySelector(".main-container")?.classList.remove("container-fluid");
    document.querySelector(".app")?.classList.remove("sidebar-mini");
    document.querySelector(".app")?.classList.remove("sidenav-toggled");

    document.querySelector(".horizontal-hover .side-menu").classList.add("flex-nowrap");
    let li = document.querySelectorAll(".side-menu li");

    li.forEach((e, i) => {

        if (e?.classList.contains("is-expaned")) {
            let ele = [...e.children];
            ele.forEach((el, i) => {
                el.classList.remove("active");
                if (el?.classList.contains("slide-menu")) {
                    el.style = "";
                    el.style.display = "none";
                }
            });
            e.classList.remove("is-expaned");
        }
    });

    checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();

    localStorage.removeItem("sashvertical");
    localStorage.setItem("sashhorizontalHover", 'true');
    localStorage.removeItem("sashhorizontal");
};

// Color theme
export const LightTheme = () => {

    let verticalMenu = document.querySelector("#myonoffswitch3")
    verticalMenu.checked = true;
    let lightHeader = document.querySelector("#myonoffswitch6")
    lightHeader.checked = true;
    let lightHeader1 = document.querySelector("#myonoffswitch1")
    lightHeader1.checked = true;

    document.querySelector(".app")?.classList.add("light-mode");
    document.querySelector(".app")?.classList.remove("transparent-mode");
    document.querySelector(".app")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");

    let html = document.querySelector("html")
    html.style = "";
    localStorage.removeItem('Sashdarktheme');
    
    OpacityValuePrimary();

    localStorage.setItem("sashlighttheme", 'true')
    localStorage.removeItem("sashtransperenttheme")
};

export const dark = () => {

    let DarkHeader = document.querySelector("#myonoffswitch8")
    DarkHeader.checked = true;
    let DarkMenu = document.querySelector("#myonoffswitch5")
    DarkMenu.checked = true;
    let DarkMenu1 = document.querySelector("#myonoffswitch2")
    DarkMenu1.checked = true;
    document.querySelector(".app").classList.add("dark-mode");

    document.querySelector(".app").classList.remove("transparent-mode");
    document.querySelector(".app").classList.remove("light-mode");
    document.querySelector("body").classList.remove("header-light");
    document.querySelector("body").classList.remove("color-header");
    document.querySelector("body").classList.remove("gradient-header");
    document.querySelector("body").classList.remove("light-menu");
    document.querySelector("body").classList.remove("color-menu");
    document.querySelector("body").classList.remove("gradient-menu");

    let html = document.querySelector("html")
    html.style = "";
    localStorage.removeItem("sashlighttheme");
    localStorage.removeItem("sashtransperenttheme");
    OpacityValuePrimary();

    localStorage.setItem("Sashdarktheme", 'true')
    
};

export const Transparent = () => {
    document.querySelector(".app").classList.add("transparent-mode");

    document.querySelector(".app").classList.remove("light-mode");
    document.querySelector(".app").classList.remove("dark-mode");
    document.querySelector(".app").classList.remove("bg-img1");
    document.querySelector(".app").classList.remove("bg-img2");
    document.querySelector(".app").classList.remove("bg-img3");
    document.querySelector(".app").classList.remove("bg-img4");

    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.remove("gradient-menu");

    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.remove("header-light");
    document.querySelector(".app").classList.remove("dark-header");
     let lightmenu = document.querySelector("#myonoffswitch3")
     lightmenu.checked = false;
    // let LightHeader = document.querySelector("#myonoffswitch6")
    // LightHeader.checked = false;
    // let DarkHeader = document.querySelector("#myonoffswitch8")
    // DarkHeader.checked = false;
    // let DarkMenu = document.querySelector("#myonoffswitch5")
    // DarkMenu.checked = false;
    let htmls = document.querySelector("html")
    htmls.style = "";
    localStorage.removeItem("sashlighttheme");
    localStorage.removeItem("Sashdarktheme");
    OpacityValuePrimary();
    localStorage.setItem('sashtransperenttheme', 'true')
};

export function checkHoriMenu() {
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");

    let menuContainerWidth =
        menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(
        Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
    );
    let marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
    );
    let check =
        menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (document.querySelector(".app")?.classList.contains("ltr")) {
        menuItems.style.marginRight = 0;
    } else {
        menuItems.style.marginLeft = 0;
    }

    if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-right")?.classList.add("d-none");
        document.querySelector(".slide-leftRTL")?.classList.add("d-none");
        document.querySelector(".slide-rightRTL")?.classList.add("d-none");
    } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
        document.querySelector(".slide-right")?.classList.remove("d-none");
        document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    } else if (marginLeftValue !== -check || marginRightValue !== -check) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
        document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
    if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
        document.querySelector(".slide-right")?.classList.remove("d-none");
        document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
        document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    }
    if (marginLeftValue === 0 || marginRightValue === 0) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    }
    if (marginLeftValue !== 0 || marginRightValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
        document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
}

export function handleThemeUpdate(cssVars) {

    const root = document.querySelector(":root");
    const keys = Object.keys(cssVars);

    keys.forEach((key) => {
        root.style.setProperty(key, cssVars[key]);
    });
}
// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st, chunkSize) =>
    st.match(new RegExp(`.{${chunkSize}}`, "g"));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") {
        return a / 255;
    }
    if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
        return 1;
    }
    return alpha;
};

// convertion of hex code to rgba code

export function hexToRgba(hexValue, alpha = 1) {
    if (!isValidHex(hexValue)) {
        return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

// LIGHT PRIMARY

export function dynamicLightPrimaryColor(primaryColor, color) {
    primaryColor.forEach((item) => {
        const cssPropName = `--primary-${item.getAttribute("data-id")}`;
        const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
        const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
        handleThemeUpdate({
            [cssPropName]: color,
            [cssPropName1]: hexToRgba(color, 0.9),
            [cssPropName2]: color,
        });
    });
}
// DARK PRIMARY

export function dynamicDarkPrimaryColor(events, color) {

    events.forEach((item) => {
        const cssPropName = `--primary-bg-color`;
        const cssPropName1 = `--primary-bg-hover`;
        const cssPropName2 = `--primary-bg-border`;
        handleThemeUpdate({
            [cssPropName]: color,
            [cssPropName1]: color,
            [cssPropName2]: color,
        });
    });
};
// TRANSPERENT PRIMARY

export function dynamicTransparentPrimaryColor(events, color) {
    events.forEach((item) => {
        const cssPropName = `--primary-bg-color`;
        const cssPropName1 = `--primary-bg-hover`;
        const cssPropName2 = `--primary-bg-border`;
        handleThemeUpdate({
            [cssPropName]: hexToRgba(color),
            [cssPropName1]: hexToRgba(color),
            [cssPropName2]: hexToRgba(color),
        });
    });

}

// TRANSPERENT BG PRIMARY

export function dynamicBgTransparentBackground(primaryColor, color) {
    primaryColor.forEach((item) => {
        const cssPropName1 = `--transparent-${item.getAttribute("data-id5")}`;
        handleThemeUpdate({
            [cssPropName1]: hexToRgba(color),
        });
    });
}

export function dynamicBgImgTransparentPrimaryColor(primaryColor, color) {
    primaryColor.forEach((item) => {
        const cssPropName = `--primary-${item.getAttribute("data-id")}`;
        const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
        const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;

        handleThemeUpdate({
            [cssPropName]: hexToRgba(color),
            [cssPropName1]: hexToRgba(color),
            [cssPropName2]: hexToRgba(color),
        });
    });
    OpacityValuePrimary();
}

// TRANSPERENT STYLE

function transparentStyle() {
    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.remove("header-light");
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.remove("gradient-header");
}

// TRANSPERENT BG IMAGE PRIMARY

// BG IMAGE-1

export function bgimage1() {
    document.querySelector(".app").classList.add("bg-img1");
    document.querySelector(".app").classList.remove("bg-img2");
    document.querySelector(".app").classList.remove("bg-img3");
    document.querySelector(".app").classList.remove("bg-img4");
    let TransparentTheme = document.getElementById("myonoffswitchTransparent")
    TransparentTheme.checked = true;
    let lightmenu = document.querySelector("#myonoffswitch3")
    lightmenu.checked = false;
    let lightheader = document.querySelector("#myonoffswitch6")
    lightheader.checked = false;
    localStorage.setItem("sashBgImage", "bg-img1");
    transparentStyle();

    document.querySelector(".app").classList.add("transparent-mode");
    document.querySelector(".app").classList.remove("light-mode");
    document.querySelector(".app").classList.remove("dark-mode");
    document.querySelector("body").classList.remove("header-light");
    document.querySelector("body").classList.remove("dark-header");
    document.querySelector("body").classList.remove("color-header");
    document.querySelector("body").classList.remove("gradient-header");
    document.querySelector("body").classList.remove("dark-menu");
    document.querySelector("body").classList.remove("color-menu");
    document.querySelector("body").classList.remove("gradient-menu");
    document.querySelector("body").classList.remove("light-menu");
    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashdarkPrimaryColor");
    localStorage.removeItem("sashtransparentPrimaryColor");
    localStorage.removeItem("sashtransparentBgColor");

    let GradientHeader = document.querySelector("#myonoffswitch2")
    GradientHeader.checked = false;
    let LightTheme = document.querySelector("#myonoffswitch1")
    LightTheme.checked = false;
    let switchTransparent = document.querySelector("#myonoffswitchTransparent")
    switchTransparent.checked = true;

    document.querySelector("html").style.removeProperty("--transparent-body");
}

// BG IMAGE-2

export function bgimage2() {
    transparentStyle();
    document.querySelector(".app").classList.add("bg-img2");
    document.querySelector(".app").classList.remove("bg-img1");
    document.querySelector(".app").classList.remove("bg-img3");
    document.querySelector(".app").classList.remove("bg-img4");
    let ThemeStyle = document.getElementById("myonoffswitchTransparent")
    ThemeStyle.checked = true;
    localStorage.setItem("sashBgImage", "bg-img2");
    document.querySelector("html").style.removeProperty("--transparent-body");

    document.querySelector(".app").classList.add("transparent-mode");
    document.querySelector(".app").classList.remove("light-mode");
    document.querySelector(".app").classList.remove("dark-mode");
    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashdarkPrimaryColor");
    localStorage.removeItem("sashtransparentPrimaryColor");
    localStorage.removeItem("sashtransparentBgColor");

    let DarkTheme = document.querySelector("#myonoffswitch2")
    DarkTheme.checked = false;
    let LightTheme = document.querySelector("#myonoffswitch1")
    LightTheme.checked = false;
    let TransparentTheme = document.querySelector("#myonoffswitchTransparent")
    TransparentTheme.checked = true;
}

// BG IMAGE-3

export function bgimage3() {
    document.querySelector(".app").classList.add("bg-img3");
    document.querySelector(".app").classList.remove("bg-img1");
    document.querySelector(".app").classList.remove("bg-img2");
    document.querySelector(".app").classList.remove("bg-img4");
    let switchTransparent = document.getElementById("myonoffswitchTransparent")
    switchTransparent.checked = true;
    localStorage.setItem("sashBgImage", "bg-img3");
    document.querySelector("html").style.removeProperty("--transparent-body");
    transparentStyle();

    document.querySelector(".app").classList.add("transparent-mode");
    document.querySelector(".app").classList.remove("light-mode");
    document.querySelector(".app").classList.remove("dark-mode");

    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashdarkPrimaryColor");
    localStorage.removeItem("sashtransparentPrimaryColor");
    localStorage.removeItem("sashtransparentBgColor");

    let DarkTheme = document.querySelector("#myonoffswitch2")
    DarkTheme.checked = false;
    let offswitch = document.querySelector("#myonoffswitch1")
    offswitch.checked = false;
    let offswitchTransparent = document.querySelector("#myonoffswitchTransparent")
    offswitchTransparent.checked = true;
}

// BG IMAGE-4
export function bgimage4() {
    document.querySelector(".app").classList.add("bg-img4");
    document.querySelector(".app").classList.remove("bg-img1");
    document.querySelector(".app").classList.remove("bg-img2");
    document.querySelector(".app").classList.remove("bg-img3");
    let bgimage4s = document.getElementById("myonoffswitchTransparent")
    bgimage4s.checked = true;
    localStorage.setItem("sashBgImage", "bg-img4");
    document.querySelector("html").style.removeProperty("--transparent-body");
    transparentStyle();

    document.querySelector(".app").classList.add("transparent-mode");
    document.querySelector(".app").classList.remove("light-mode");
    document.querySelector(".app").classList.remove("dark-mode");
    localStorage.removeItem("sashprimaryColor");
    localStorage.removeItem("sashprimaryHoverColor");
    localStorage.removeItem("sashprimaryBorderColor");
    localStorage.removeItem("sashprimaryTransparent");
    localStorage.removeItem("sashdarkPrimaryColor");
    localStorage.removeItem("sashtransparentPrimaryColor");
    localStorage.removeItem("sashtransparentBgColor");

    let GradientHeader = document.querySelector("#myonoffswitch2")
    GradientHeader.checked = false;
    let myonoffswitch = document.querySelector("#myonoffswitch1")
    myonoffswitch.checked = false;
    let myonoffswitchTransparent = document.querySelector("#myonoffswitchTransparent")
    myonoffswitchTransparent.checked = true;
}

// RESET DATA

export function resetData() {
    let lighttheme = document.querySelector("#myonoffswitch1")
    lighttheme.checked = true;   //lighttheme
    let fixed = document.querySelector("#myonoffswitch11")
    fixed.checked = true;   //fixed
    let lightmenu = document.querySelector("#myonoffswitch3")
    lightmenu.checked = true;    //lightmenu
    let lightheader = document.querySelector("#myonoffswitch6")
    lightheader.checked = true;    //lightheader
    let fullwidth = document.querySelector("#myonoffswitch9")
    fullwidth.checked = true;    //fullwidth
    let ltr = document.querySelector("#myonoffswitch23")
    ltr.checked = true;  //Ltr
    let Vertail = document.querySelector("#myonoffswitch34")
    Vertail.checked = true;  //Vertail
    let HorizontalHoverMenu = document.querySelector("#myonoffswitch111")
    HorizontalHoverMenu.checked = false;
    document.querySelector(".app").classList.remove("bg-img4");
    document.querySelector(".app").classList.remove("bg-img1");
    document.querySelector(".app").classList.remove("bg-img2");
    document.querySelector(".app").classList.remove("bg-img3");
    document.querySelector(".app").classList.remove("transparent-mode");
    document.querySelector(".app").classList.remove("dark-mode");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.remove("layout-boxed");
    document.querySelector(".app").classList.remove("icontext-menu");
    document.querySelector(".app").classList.remove("icon-overlay");
    document.querySelector(".app").classList.remove("closed-leftmenu");
    document.querySelector(".app").classList.remove("hover-submenu");
    document.querySelector(".app").classList.remove("hover-submenu1");
    document.querySelector(".app").classList.remove("sidenav-toggled");
    document.querySelector(".app").classList.remove("scrollable-layout");

    document.querySelector(".app").classList.remove("horizontal");
    document.querySelector(".app").classList.remove("horizontal-hover");
    document.querySelector(".app-sidebar").classList.remove("horizontal-main");
    document.querySelector(".header").classList.remove("hor-header");
    document.querySelector(".main-sidemenu").classList.remove("container");
    document.querySelector(".main-container").classList.remove("container");
    document.querySelector(".side-app").classList.remove("container");

    document.querySelector(".app").classList.add("sidebar-mini");
    document.querySelector(".header").classList.add("app-header");
    document.querySelector(".main-content").classList.add("app-content");
    document.querySelector(".main-container").classList.add("container-fluid");


    document
        .querySelector(".main-content")
        .classList.remove("horizontal-content");

    document.querySelector(".app").classList.add("ltr");
    document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${process.env.PUBLIC_URL === 'production' ? "/" : "/sash-js/preview/assets"}/plugins/bootstrap/css/bootstrap.min.css`)
    document.querySelector(".app").classList.remove("rtl");
    OpacityValuePrimary();
}

// COLOUR VARIABLE

export function OpacityValuePrimary() {
    let primaryColorVal = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-bg-color")
        .trim();


    //get variable
    let myVarVal =
        localStorage.getItem("sashprimaryColor") ||
        localStorage.getItem("sashdarkPrimaryColor") ||
        localStorage.getItem("sashtransparentPrimaryColor") ||
        localStorage.getItem("sashtransparent-bgImgPrimaryColor") ||
        localStorage.getItem("sashtransparentBgImgPrimary") ||
        primaryColorVal;

    // var value = myVarVal;

    // if (!myVarVal.match('#')) {
    //     var rgbColor = myVarVal;
    //     value = rgbColor.substring(5, rgbColor.length-1).replace(/ /g, '').split(',');
    // }

    
    let colorData = hexToRgba(myVarVal, 0.1);
    document.querySelector("html").style.setProperty("--primary01", colorData);
    
    
    let colorData1 = hexToRgba(myVarVal, 0.2);
    document.querySelector("html").style.setProperty("--primary02", colorData1);
    
    let colorData2 = hexToRgba(myVarVal, 0.3);
    document.querySelector("html").style.setProperty("--primary03", colorData2);

    let colorData3 = hexToRgba(myVarVal, 0.6);
    document.querySelector("html").style.setProperty("--primary06", colorData3);

    let colorData4 = hexToRgba(myVarVal, 0.9);
    document.querySelector("html").style.setProperty("--primary09", colorData4);

    let colorID = hexToRgba(myVarVal, 1);
    document.querySelector("html").style.setProperty("--primary1", colorID);
}
OpacityValuePrimary();

//   LOCAL STORAGE BACK-UP

export function localStorageBackUp() {
    let html = document.querySelector("html").style;
    let body = document.querySelector("body");
    if (localStorage.getItem("Sashdarktheme")) {
        dark();
    }
    if (localStorage.getItem("sashtransperenttheme")) {
        Transparent();
    }
    if (localStorage.getItem("sashprimaryColor") !== null) {
        body.classList.add("light-mode");

        let ltr = document.getElementById("myonoffswitch6")
        ltr.checked = true;

        body.classList.remove("dark-mode");
        body.classList.remove("transparent-mode");
        html.setProperty(
            "--primary-bg-color",
            localStorage.getItem("sashprimaryColor")
        );
        html.setProperty(
            "--primary-bg-hover",
            localStorage.getItem("sashprimaryHoverColor")
        );
        html.setProperty(
            "--primary-bg-border",
            localStorage.getItem("sashprimaryBorderColor")
        );
    }
    if (localStorage.getItem("sashdarkPrimaryColor") !== null) {
        body.classList.add("dark-mode");

        let ltr = document.getElementById("myonoffswitch2")
        ltr.checked = true;

        body.classList.remove("light-mode");
        body.classList.remove("transparent-mode");

        html.setProperty(
            "--primary-bg-color",
            localStorage.getItem("sashdarkPrimaryColor")
        );
        html.setProperty(
            "--primary-bg-hover",
            localStorage.getItem("sashdarkPrimaryColor")
        );
        html.setProperty(
            "--primary-bg-border",
            localStorage.getItem("sashdarkPrimaryColor")
        );
    }
    if (localStorage.getItem("sashtransparentPrimaryColor") !== null) {
        body.classList.add("transparent-mode");
        document.getElementById("myonoffswitchTransparent");

        body.classList.remove("light-mode");
        body.classList.remove("dark-mode");
        html.setProperty(
            "--primary-bg-color",
            localStorage.getItem("sashtransparentPrimaryColor")
        );
    }
    if (localStorage.getItem("sashtransparentBgColor") !== null) {
        body.classList.add("transparent-mode");
        document.getElementById("myonoffswitchTransparent");

        body.classList.remove("light-mode");
        body.classList.remove("dark-mode");
        html.setProperty(
            "--transparent-body",
            localStorage.getItem("sashtransparentBgColor")
        );
    }
    if (
        localStorage.getItem("sashtransparent-bgImgPrimaryColor") !== null ||
        localStorage.getItem("sashBgImage") !== null
    ) {
        body.classList.add("transparent-mode");
        document.getElementById("myonoffswitchTransparent");

        body.classList.remove("light-mode");
        body.classList.remove("dark-mode");
        let img = localStorage.getItem("sashBgImage");
        html.setProperty("--primary-bg-color",
            localStorage.getItem("sashtransparent-bgImgPrimaryColor"));
        body.classList.add(img);
    }

    if (localStorage.sashrtl) {
        document.querySelector(".app")?.classList.add("rtl");
        document.querySelector("html[lang=en]").setAttribute("dir", "rtl");
        document.getElementById("bootstrapLink")?.setAttribute("href", `${process.env.PUBLIC_URL === 'production' ? "/" : "/sash-js/preview/assets"}/plugins/bootstrap/css/bootstrap.rtl.min.css`);
        document.querySelector(".app")?.classList.remove("ltr");
        let mySwitch = document.querySelector("#myonoffswitch23")
        mySwitch.checked = false;
        let myonoffswitch = document.querySelector("#myonoffswitch24")
        myonoffswitch.checked = true;
    }

    if (localStorage.sashhorizontal) {
        document.querySelector("body")?.classList.add("horizontal");
        document.querySelector(".main-container")?.classList.add("container");
        document.querySelector(".main-sidemenu")?.classList.add("container");
        document.querySelector(".main-content")?.classList.add("hor-content");
        document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
        document.querySelector(".header")?.classList.add("hor-header");
        document.querySelector(".side-app")?.classList.add("container");
        document.querySelector(".app")?.classList.remove("sidebar-mini");
        document.querySelector(".header")?.classList.remove("app-header");
        document.querySelector(".main-content")?.classList.remove("app-content");
        document.querySelector(".main-container")?.classList.remove("container-fluid");
        document.querySelector(".app")?.classList.remove("sidenav-toggled");
        document.querySelector(".app")?.classList.remove("horizontal-hover");
        document.querySelector(".horizontal .side-menu")?.classList.add("flex-nowrap");


        let mySwitch = document.querySelector("#myonoffswitch34")
        mySwitch.checked = false;
        let myonoffswitch = document.querySelector("#myonoffswitch35")
        myonoffswitch.checked = true;
        checkHoriMenu();
        Horizontalmenudefultclose();
        switcherArrowFn();
    }

    if (localStorage.sashhorizontalHover) {
        document.querySelector("body")?.classList.add("horizontal-hover");
        document.querySelector(".app")?.classList.add("horizontal-hover");
        document.querySelector(".app")?.classList.add("horizontal");
        document.querySelector(".main-content")?.classList.add("hor-content");
        document.querySelector(".main-container")?.classList.add("container");
        document.querySelector(".header")?.classList.add("hor-header");
        document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
        document.querySelector(".main-sidemenu")?.classList.add("container");
        document.querySelector(".side-app")?.classList.add("container");

        document.querySelector("#slide-left")?.classList.remove("d-none");
        document.querySelector("#slide-right")?.classList.remove("d-none");
        document.querySelector(".main-content")?.classList.remove("app-content");
        document
            .querySelector(".main-container")
            ?.classList.remove("container-fluid");
        let myonoffswitch = document.querySelector("#myonoffswitch1")
        myonoffswitch.checked = false;
        let myonoffswitcher = document.querySelector("#myonoffswitch2")
        myonoffswitcher.checked = false;
        let HorizontalHover = document.querySelector("#myonoffswitch111")
        HorizontalHover.checked = true;
        document.querySelector(".header")?.classList.remove("app-header");
        document.querySelector(".app")?.classList.remove("sidebar-mini");
        document.querySelector(".app")?.classList.remove("sidenav-toggled");

        document.querySelector(".horizontal .side-menu")?.classList.add("nowrap");

        let li = document.querySelectorAll(".side-menu li");
        li.forEach((e, i) => {
            if (e.classList.contains("is-expaned")) {
                let ele = [...e.children];
                ele.forEach((el, i) => {
                    el.classList.remove("active");
                    if (el.classList.contains("slide-menu")) {
                        el.style = "";
                        el.style.display = "none";
                    }
                });
                e.classList.remove("is-expaned");
            }
        });
        checkHoriMenu();
        Horizontalmenudefultclose();
        switcherArrowFn();
    }

    if (localStorage.getItem("sashlighttheme") !== null) {
        LightTheme();
    }
}
//HORIZONTAL ARROWS
window.addEventListener("resize", () => {
    if (
        document.querySelector(".login-img") &&
        document.querySelector(".error-bg")
    ) {
        let menuWidth = document.querySelector(".main-sidemenu");
        let menuItems = document.querySelector(".side-menu");
        let mainSidemenuWidth = document.querySelector(".main-sidemenu");
        let menuContainerWidth =
            menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
        let marginLeftValue = Math.ceil(
            Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
        );
        let marginRightValue = Math.ceil(
            Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
        );
        let check =
            menuItems.scrollWidth +
            (0 - menuWidth?.offsetWidth) +
            menuContainerWidth;
        if (menuWidth?.offsetWidth > menuItems.scrollWidth) {
            document.querySelector(".slide-left").classList.add("d-none");
            document.querySelector(".slide-right").classList.add("d-none");
        } else {
            document.querySelector(".slide-left").classList.remove("d-none");
            document.querySelector(".slide-right").classList.remove("d-none");
        }
        if (menuWidth?.offsetWidth > menuItems.scrollWidth) {
            document.querySelector(".slide-leftRTL").classList.add("d-none");
            document.querySelector(".slide-rightRTL").classList.add("d-none");
        }
        // to check and adjst the menu on screen size change
        if (document.querySelector("body").classList.contains("ltr")) {
            if (
                (marginLeftValue >= -check) === false &&
                menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
            ) {
                menuItems.style.marginLeft = -check;
            } else {
                menuItems.style.marginLeft = 0;
            }
        } else {
            if (
                (marginRightValue > -check) === false &&
                menuWidth?.offsetWidth < menuItems.scrollWidth
            ) {
                menuItems.style.marginRight = -check;
            } else {
                menuItems.style.marginRight = 0;
            }
        }

        if (document.querySelector("body").classList.contains("rtl")) {
            if (
                (marginRightValue >= -check) === false &&
                menuWidth.offsetWidth - menuContainerWidth < menuItems.scrollWidth
            ) {
                menuItems.style.marginRight = -check;
            } else {
                menuItems.style.marginRight = 0;
            }
        } else {
            if (
                (marginLeftValue > -check) === false &&
                menuWidth.offsetWidth < menuItems.scrollWidth
            ) {
                menuItems.style.marginLeft = -check;
            } else {
                menuItems.style.marginLeft = 0;
            }
        }
    }
});

// SWITCHER ARROW FUNCTION

export function switcherArrowFn() {
    let slideLeftLTR = document.querySelector(".slide-left");
    let slideRightLTR = document.querySelector(".slide-right");

    slideLeftLTR.addEventListener("click", () => {
        slideClick();
    });
    slideRightLTR.addEventListener("click", () => {
        slideClick();
    });

    // used to remove is-expanded class and remove class on clicking arrow buttons
    function slideClick() {
        let slide = document.querySelectorAll(".slide");
        let sideMenuitem = document.querySelectorAll(".slide-menu__item");
        let slideMenu = document.querySelectorAll(".slide-menu");
        slide.forEach((element, index) => {
            if (element?.classList.contains("is-expanded") === true) {
                element.classList.remove("is-expanded");
            }
        });
        sideMenuitem.forEach((element, index) => {
            if (element?.classList.contains("active") === true) {
                element.classList.remove("active");
            }
        });
        slideMenu.forEach((element, index) => {
            if (element) {
                element.classList.add('d-none');
            }
        });
    }

    // horizontal arrows

    window.addEventListener("resize", () => {
        let menuWidth = document.querySelector(".horizontal-main");
        let menuItems = document.querySelector(".side-menu");
        let mainSidemenuWidth = document.querySelector(".main-sidemenu");
        let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
        let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
        let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
        let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

        if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
            document.querySelector(".slide-left").classList.add("d-none");
            document.querySelector(".slide-right").classList.add("d-none");
            menuItems.style.marginRight = 0;
            menuItems.style.marginLeft = 0;

        }
        else {
            document.querySelector(".slide-right").classList.remove("d-none");
        }

        if (document.querySelector("html").getAttribute("dir") === "rtl") {
            if ((Math.abs(marginRightValue) < Math.abs(check)) === false && (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
            ) {
                menuItems.style.marginRight = -check + 'px';
                document.querySelector(".slide-left").classList.remove("d-none");
            } else {
                menuItems.style.marginRight = 0;
            }
        } else {
            if (
                (Math.abs(marginLeftValue) < Math.abs(check)) === false &&
                (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
            ) {
                menuItems.style.marginLeft = -check + 'px';
                document.querySelector(".slide-right").classList.add("d-none");
            } else {
                menuItems.style.marginLeft = 0;
            }
        }
    });

    if (
        !document.querySelector("body").classList.contains("login-img") &&
        !document.querySelector("body").classList.contains("error-bg")
    ) {
        checkHoriMenu();
    }

    slideLeftLTR.addEventListener("click", () => {
        slideClick();
        let menuWidth = document.querySelector(".horizontal-main");
        let menuItems = document.querySelector(".side-menu");
        let mainSidemenuWidth = document.querySelector(".main-sidemenu");
        let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
        let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100;
        let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100;

        if (document.querySelector('html').getAttribute('dir') === "rtl") {
            if (marginRightValue < 0) {
                menuItems.style.marginLeft = "0px";
                menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
                document.querySelector(".slide-right").classList.remove("d-none");
                document.querySelector(".slide-left").classList.remove("d-none");
            } else {
                document.querySelector(".slide-left").classList.add("d-none");
            }

            if (marginRightValue >= 0) {
                menuItems.style.marginLeft = "0px";
                menuItems.style.marginRight = "0px";
            }
            // to remove dropdown when clicking arrows in horizontal menu
            let subNavSub = document.querySelectorAll(".sub-nav-sub");
            subNavSub.forEach((e) => {
                e.style.display = "";
            });
            let subNav = document.querySelectorAll(".nav-sub");
            subNav.forEach((e) => {
                e.style.display = "";
            });
        }
        else {
            if (marginLeftValue < 0) {
                menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
                if (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
                    document.querySelector(".slide-left").classList.remove("d-none");
                    document.querySelector(".slide-right").classList.remove("d-none");
                }
            }
            else {
                document.querySelector(".slide-left").classList.add("d-none");
            }

            if (marginLeftValue >= 0) {
                menuItems.style.marginLeft = "0px";
                if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
                    document.querySelector(".slide-left").classList.add("d-none");
                }
            }

            // to remove dropdown when clicking arrows in horizontal menu
            let subNavSub = document.querySelectorAll(".sub-nav-sub");
            subNavSub.forEach((e) => {
                e.style.display = "";
            });
            let subNav = document.querySelectorAll(".nav-sub");
            subNav.forEach((e) => {
                e.style.display = "";
            });
        }
    });
    slideRightLTR.addEventListener("click", () => {
        slideClick();
        let menuWidth = document.querySelector(".horizontal-main");
        let menuItems = document.querySelector(".side-menu");
        let mainSidemenuWidth = document.querySelector(".main-sidemenu");
        let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
        let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
        let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
        let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

        if (document.querySelector('html').getAttribute('dir') === "rtl") {
            if (marginRightValue > -check) {
                menuItems.style.marginLeft = "0px";
                menuItems.style.marginRight =
                    Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
            } else {
                menuItems.style.marginLeft = "0px";
                menuItems.style.marginRight = -check + "px";
                document.querySelector(".slide-right").classList.add("d-none");
                document.querySelector(".slide-left").classList.remove("d-none");
            }

            if (marginRightValue !== 0) {
                document.querySelector(".slide-left").classList.remove("d-none");
            }
            // to remove dropdown when clicking arrows in horizontal menu
            let subNavSub = document.querySelectorAll(".sub-nav-sub");
            subNavSub.forEach((e) => {
                e.style.display = "";
            });
            let subNav = document.querySelectorAll(".nav-sub");
            subNav.forEach((e) => {
                e.style.display = "";
            });
        }
        else {
            if (marginLeftValue > -check) {
                // menuItems.style.marginRight = 0;
                menuItems.style.marginLeft =
                    Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
            } else {
                // menuItems.style.marginRight = 0;
                menuItems.style.marginLeft = -check + "px";
                document.querySelector(".slide-right").classList.add("d-none");
            }
            if (marginLeftValue !== 0) {
                document.querySelector(".slide-left").classList.remove("d-none");
            }
            // to remove dropdown when clicking arrows in horizontal menu
            let subNavSub = document.querySelectorAll(".sub-nav-sub");
            subNavSub.forEach((e) => {
                e.style.display = "";
            });
            let subNav = document.querySelectorAll(".nav-sub");
            subNav.forEach((e) => {
                e.style.display = "";
            });
            //
        }
    });
}

// RESPONSIVE SIDE-BAR CLOSED

//Header page

export const responsiveSidebarclose = () => {

    //rightsidebar
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    //swichermainright
    document.querySelector(".demo_changer").classList.remove("active");
    let Rightside = document.querySelector(".demo_changer")
    Rightside.style.right = "-270px";
};

//Header switcher1

export const responsiveSidebarcloseHeader = () => {
    //leftsidemenu
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
    //rightsidebar
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    //swichermainright
};

// HORIZONTAL MENU STICKY

export const horizontalmenusticky = () => {
    if (document.querySelector(".app-sidebar") && !document.body.classList.contains("landing-page")) {
        if (window.scrollY > 30) {
            document.querySelector(".app-sidebar").classList.add("fixed-header");
            let Scolls = document.querySelectorAll(".sticky");
            Scolls.forEach((e) => {
                e.classList.add("stickyClass");
            });
        } else {
            document.querySelector(".app-sidebar").classList.remove("fixed-header");
            let Scolls = document.querySelectorAll(".sticky");
            Scolls.forEach((e) => {
                e.classList.remove("stickyClass");
            });
        }
    }
};

window.addEventListener("scroll", horizontalmenusticky);


// HORIZONTAL MENU DEFAULT CLOSE

export function Horizontalmenudefultclose() {
    if (document.querySelector(".horizontal")) {
        let slide = document.querySelectorAll(".slide");
        let sideMenuitem = document.querySelectorAll(".slide-menu__item");
        let slideMenu = document.querySelectorAll(".slide-menu");
        slide.forEach((element) => {
            if (element?.classList.contains("is-expanded") === true) {
                element.classList.remove("is-expanded");
            }
        });
        sideMenuitem.forEach((element) => {
            if (element?.classList.contains("active") === true) {
                element.classList.remove("active");
            }
        });
        slideMenu.forEach((element) => {
            if (element) {
                element.classList.add('d-none');
            }
        });
    }
}