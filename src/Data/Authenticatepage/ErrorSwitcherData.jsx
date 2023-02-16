//LTR TO RTL
export const LtrtoRtl = () => {
    document.querySelector(".app")?.classList.add("rtl");
    document.querySelector("html[lang=en]").setAttribute("dir", "rtl");
    document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css")
    document.querySelector(".app")?.classList.remove("ltr");

    localStorage.setItem("sashrtl", 'true');
    localStorage.removeItem("sashltr");
};
//RTL TO LTR
export const RtltoLtr = () => {
    document.querySelector(".app")?.classList.add("ltr");
    document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
    document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css")
    document.querySelector(".app")?.classList.remove("rtl");

    localStorage.setItem("sashltr", 'true');
    localStorage.removeItem("sashrtl");
};

//VERTICALMENU


// Color theme
export const LightTheme = () => {

    document.querySelector(".app")?.classList.add("light-mode");
    document.querySelector(".app").classList.remove("transparent-mode");
    document.querySelector(".app").classList.remove("dark-mode");

    let html = document.querySelector("html")
    html.style = "";
    localStorage.clear();
    OpacityValuePrimary();
};

export const dark = () => {


    document.querySelector(".app")?.classList.add("dark-mode");

    document.querySelector(".app")?.classList.remove("transparent-mode");
    document.querySelector(".app")?.classList.remove("light-mode");

    let html = document.querySelector("html")
    html.style = "";
    localStorage.clear();
    OpacityValuePrimary();
};

export const Transparent = () => {
    document.querySelector(".app")?.classList.add("transparent-mode");

    document.querySelector(".app").classList.remove("light-mode");
    document.querySelector(".app").classList.remove("dark-mode");
    document.querySelector(".app").classList.remove("bg-img1");
    document.querySelector(".app").classList.remove("bg-img2");
    document.querySelector(".app").classList.remove("bg-img3");
    document.querySelector(".app").classList.remove("bg-img4");

    let htmls = document.querySelector("html")
    htmls.style = "";
    localStorage.clear();
    OpacityValuePrimary();
};

export function handleThemeUpdate(cssVars) {
    // console.log(cssVars);

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
            [cssPropName]: hexToRgba(color),
            [cssPropName1]: hexToRgba(color, 0.9),
            [cssPropName2]: hexToRgba(color),
        });
    });
}
// DARK PRIMARY

export function dynamicDarkPrimaryColor(events, color) {
    console.log(color);

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
  }


// BG IMAGE-1

export function bgimage1() {
    document.querySelector(".app").classList.add("bg-img1");
    document.querySelector(".app").classList.remove("bg-img2");
    document.querySelector(".app").classList.remove("bg-img3");
    document.querySelector(".app").classList.remove("bg-img4");
    let TransparentTheme = document.getElementById("myonoffswitchTransparent")
    TransparentTheme.checked = true;
    localStorage.setItem("sashBgImage", "bg-img1");


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
    let LightTheme = document.querySelector("#myonoffswitch1")
    LightTheme.checked = false;
    let switchTransparent = document.querySelector("#myonoffswitchTransparent")
    switchTransparent.checked = true;

    document.querySelector("html").style.removeProperty("--transparent-body");
}

// BG IMAGE-2

export function bgimage2() {
   
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
    
    let ltr = document.querySelector("#myonoffswitch23")
    ltr.checked = true;  //Ltr

   
    document.querySelector(".app")?.classList.remove("bg-img4");
    document.querySelector(".app")?.classList.remove("bg-img1");
    document.querySelector(".app")?.classList.remove("bg-img2");
    document.querySelector(".app")?.classList.remove("bg-img3");
    document.querySelector(".app")?.classList.remove("transparent-mode");
    document.querySelector(".app")?.classList.remove("dark-mode");

    document.querySelector(".main-sidemenu")?.classList.remove("container");
    document.querySelector(".main-container")?.classList.remove("container");
    document.querySelector(".side-app")?.classList.remove("container");

    document.querySelector(".app")?.classList.add("sidebar-mini");
    document.querySelector(".header")?.classList.add("app-header");
    document.querySelector(".main-content")?.classList.add("app-content");
    document.querySelector(".main-container")?.classList.add("container-fluid");
    

    document.querySelector(".app")?.classList.add("ltr");
    document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
    // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css")
    document.querySelector(".app")?.classList.remove("rtl");
    OpacityValuePrimary();
}

// COLOUR VARIABLE

export function OpacityValuePrimary() {
    let primaryColorVal = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-bg-color")
        .trim();

    //get variable
    let myVarVal =
        localStorage.getItem("sashPrimaryColor") ||
        localStorage.getItem("sashdarkPrimaryColor") ||
        localStorage.getItem("sashtransparentPrimaryColor") ||
        localStorage.getItem("sashtransparent-bgImgPrimaryColor") ||
        localStorage.getItem("sashtransparentBgImgPrimary") ||
        primaryColorVal;

    let colorData = hexToRgba(myVarVal || "#6c5ffc", 0.1);
    document.querySelector("html").style.setProperty("--primary01", colorData);

    let colorData1 = hexToRgba(myVarVal || "#6c5ffc", 0.2);
    document.querySelector("html").style.setProperty("--primary02", colorData1);

    let colorData2 = hexToRgba(myVarVal || "#6c5ffc", 0.3);
    document.querySelector("html").style.setProperty("--primary03", colorData2);

    let colorData3 = hexToRgba(myVarVal || "#6c5ffc", 0.6);
    document.querySelector("html").style.setProperty("--primary06", colorData3);

    let colorData4 = hexToRgba(myVarVal || "#6c5ffc", 0.9);
    document.querySelector("html").style.setProperty("--primary09", colorData4);

    let colorID = hexToRgba(myVarVal || "#6c5ffc", 0.9);
    document.querySelector("html").style.setProperty("--primary1", colorID);

    
}
OpacityValuePrimary();

//   LOCAL STORAGE BACK-UP

export function localStorageBackUp() {
    let html = document.querySelector("html").style;
    let body = document.querySelector("body");
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

        let ltr = document.getElementById("myonoffswitch23")
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
        document.querySelector(".app")?.classList.remove("ltr");
        let mySwitch = document.querySelector("#myonoffswitch23")
        mySwitch.checked = false;
        let myonoffswitch = document.querySelector("#myonoffswitch24")
        myonoffswitch.checked = true;
    }

}








