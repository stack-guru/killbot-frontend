export const DefaultAlertList = [
  {
    id: "1",
    variant: "primary",
    text: "Primary alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "2",
    variant: "secondary",
    text: " Secondary alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "3",
    variant: "success",
    text: " Success alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "4",
    variant: "info",
    text: "Info alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "5",
    variant: "warning",
    text: "Warning alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "6",
    variant: "danger",
    text: "Danger alert—At vero eos et accusamus praesentium!",
  },
];


export const LinkAlertList = [
  {
    id: "1",
    show: 'Well done!',
    variant: "primary",
    text1: " You successfully read",
    text2: 'this important alert message.'
  },
  {
    id: "2",
    show: 'Well done!',
    variant: "secondary",
    text1: " You successfully read",
    text2: 'this important alert message.'
  },
  {
    id: "3",
    show: 'Well done!',
    variant: "success",
    text1: " You successfully read",
    text2: 'this important alert message.'
  },
  {
    id: "4",
    show: 'Heads up!',
    variant: "info",
    text: "This",
    text2: 'alert needs your attention,',
    text3: 'but its not super important.'
  },
  {
    id: "5",
    show: 'Warning!',
    variant: "warning",
    text: "Better check yourself, youre",
    text2: 'not looking too good.'
  },
  {
    id: "6",
    show: 'Oh snap!',
    variant: "danger",
    text: "Change a few things up",
    text2: 'and try submitting again.',
  },
];


export const IconAlertList = [
  {
    id: "1",
    icon: <i className="fa fa-check-circle-o me-2" aria-hidden="true"></i>,
    variant: "success",
    text: " Well done! You successfully read this important alert message.",
  },
  {
    id: "2",
    icon: <i className="fa fa-bell-o me-2" aria-hidden="true"></i>,
    variant: "info",
    text: " Heads up! This alert needs your attention, but it's not super important.",
  },
  {
    id: "3",
    icon: <i className="fa fa-exclamation me-2" aria-hidden="true"></i>,
    variant: "warning",
    text: " Warning! Better check yourself, you're not looking too good.",
  },
  {
    id: "4",
    icon: <i className="fa fa-frown-o me-2" aria-hidden="true"></i>,
    variant: "danger",
    text: "Oh snap!Change a few things up and try submitting again.",
  }
];


export const AvatarList = [
  {
    id: "1",
    classname: 'alert-avatar alert-primary alert-dismissible',
    variant: 'primary',
    pic: require("../../assets/images/users/14.jpg"),
  },
  {
    id: "2",
    classname: 'alert-avatar alert-success alert-dismissible',
    variant: 'success',
    pic: require("../../assets/images/users/5.jpg"),
  },
  {
    id: "3",
    classname: 'alert-avatar alert-warning alert-dismissible',
    variant: 'warning',
    pic: require("../../assets/images/users/15.jpg"),
  },
  {
    id: "4",
    classname: 'alert-avatar alert-danger alert-dismissible',
    variant: 'danger',
    pic: require("../../assets/images/users/6.jpg"),
  }
];


export const AlertList = [
  {
    id: "1",
    classname: 'alert-default',
    variant: 'default',
    icon: <i className="fe fe-download"></i>,
    show: "Default!",
  },
  {
    id: "2",
    classname: 'alert-primary',
    variant: 'primary',
    icon: <i className="fe fe-check-square"></i>,
    show: "Primary!",
  },
  {
    id: "3",
    classname: 'alert-success',
    variant: 'success',
    icon: <i className="fe fe-thumbs-up"></i>,
    show: "Success!",
  },
  {
    id: "4",
    classname: 'alert-info',
    variant: 'info',
    icon: <i className="fe fe-bell"></i>,
    show: "Info!",
  },
  {
    id: "5",
    classname: 'alert-warning',
    variant: 'warning',
    icon: <i className="fe fe-info"></i>,
    show: "Warning!",
  },
  {
    id: "6",
    classname: 'alert-danger mb-0',
    variant: 'danger',
    icon: <i className="fe fe-slash"></i>,
    show: "Danger!",
  }
];


export const IconDismissList = [
  {
    id: "1",
    classname: 'alert-default',
    variant: 'default',
    icon: <i className="fe fe-download"></i>,
    show: "Default!",
  },
  {
    id: "2",
    classname: 'alert-primary',
    variant: 'primary',
    icon: <i className="fe fe-check-square"></i>,
    show: "Primary!",
  },
  {
    id: "3",
    classname: 'alert-success',
    variant: 'success',
    icon: <i className="fe fe-thumbs-up"></i>,
    show: "Success!",
  },
  {
    id: "4",
    classname: 'alert-info',
    variant: 'info',
    icon: <i className="fe fe-bell"></i>,
    show: "Info!",
  },
  {
    id: "5",
    classname: 'alert-warning',
    variant: 'warning',
    icon: <i className="fe fe-info"></i>,
    show: "Warning!",
  },
  {
    id: "6",
    classname: 'alert-danger mb-0',
    variant: 'danger',
    icon: <i className="fe fe-slash"></i>,
    show: "Danger!",
  }
];

export const AlertData = [
  { id: 1, color: "success", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#13bfa6" d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z" opacity=".99" /><path fill="#71d8c9" d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z" /></svg>, Title: "Success message", description: "You successfully read this important alert message." },
  { id: 2, color: "info", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#70a9ee" d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z" /><circle cx="12" cy="17" r="1" fill="#1170e4" /><path fill="#1170e4" d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z" /></svg>, Title: "Info message", description: "This alert needs your attention, but it's not super important." },
  { id: 3, color: "warning", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#fad383" d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z" /><circle cx="12" cy="16" r="1" fill="#f7b731" /><path fill="#f7b731" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z" /></svg>, Title: "Warning message", description: "Best check yo self, you're not looking too good" },
  { id: 4, color: "danger", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#f07f8f" d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z" /><circle cx="12" cy="17" r="1" fill="#e62a45" /><path fill="#e62a45" d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z" /></svg>, Title: "Danger message", description: "Change a few things up and try submitting again." }
];

export const alertCard = [
  {id: 1, icon: <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#f07f8f" d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z" /><circle cx="12" cy="17" r="1" fill="#e62a45" /><path fill="#e62a45" d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z" /></svg></span>, title: 'Warning', text: 'Are you sure you want to delete 20 items', color: 'danger', buttonName: 'Delete'},
  {id: 2, icon: <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#fad383" d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z" /><circle cx="12" cy="16" r="1" fill="#f7b731" /><path fill="#f7b731" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z" /></svg></span>, title: 'Alert', text: 'Are you sure you want to end current services', color: 'warning', buttonName: 'End'},
  {id: 3, icon: <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#13bfa6" d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z" opacity=".99" /><path fill="#71d8c9" d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z" /></svg></span>, title: 'Success', text: 'Sent successfully', color: 'success', buttonName: 'close'},
  {id: 4, icon: <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#05c3fb" d="M12 1.99951a.99974.99974 0 0 0-1 1v2a1 1 0 1 0 2 0v-2A.99974.99974 0 0 0 12 1.99951zM12 17.99951a.99974.99974 0 0 0-1 1v2a1 1 0 0 0 2 0v-2A.99974.99974 0 0 0 12 17.99951zM21 10.99951H19a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM6 11.99951a.99974.99974 0 0 0-1-1H3a1 1 0 0 0 0 2H5A.99974.99974 0 0 0 6 11.99951zM17.19629 8.99951a1.0001 1.0001 0 0 0 .86719.5.99007.99007 0 0 0 .499-.13428l1.73145-1a.99974.99974 0 1 0-1-1.73144l-1.73145 1A.9993.9993 0 0 0 17.19629 8.99951zM6.80371 14.99951a.99936.99936 0 0 0-1.36621-.36572l-1.73145 1a.99974.99974 0 1 0 1 1.73144l1.73145-1A.9993.9993 0 0 0 6.80371 14.99951zM15 6.80371a1.0006 1.0006 0 0 0 1.36621-.36621l1-1.73193a1.00016 1.00016 0 1 0-1.73242-1l-1 1.73193A1 1 0 0 0 15 6.80371zM3.70605 8.36523l1.73145 1a.99007.99007 0 0 0 .499.13428.99977.99977 0 0 0 .501-1.86572l-1.73145-1a.99974.99974 0 1 0-1 1.73144zM9 17.1958a.99946.99946 0 0 0-1.36621.36621l-1 1.73194a1.00016 1.00016 0 0 0 1.73242 1l1-1.73194A1 1 0 0 0 9 17.1958zM20.294 15.63379l-1.73145-1a.99974.99974 0 1 0-1 1.73144l1.73145 1a.99.99 0 0 0 .499.13428.99977.99977 0 0 0 .501-1.86572zM16.36621 17.562a1.00016 1.00016 0 1 0-1.73242 1l1 1.73194a1.00016 1.00016 0 1 0 1.73242-1z" /></svg></span>, title: 'Processing', text: 'Your process currently in progress', color: 'info', buttonName: 'Stop'},
]