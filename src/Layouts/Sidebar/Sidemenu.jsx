export const MENUITEMS = [
    {
        menutitle: "MAIN",
        Items: [
            { path: `${process.env.PUBLIC_URL}/dashboard`, icon: 'fe fe-home', type: 'link', active: false, selected: false, title: 'Dashboard' },
        ]
    },
    {
        menutitle: "UI KIT",

        Items: [

            {
                title: 'Apps', icon: "fe fe-slack", type: 'sub', Name:"",Names:"", active: false, selected: false, children: [

                    { path: `${process.env.PUBLIC_URL}/apps/carddesigns`, type: 'link', active: false, selected: false, title: 'Cards-design' },
                    { path: `${process.env.PUBLIC_URL}/apps/chat`, type: 'link', active: false, selected: false, title: 'Chat' },
                    { path: `${process.env.PUBLIC_URL}/apps/charts`, type: 'link', active: false, selected: false, title: 'Charts' },
                    { path: `${process.env.PUBLIC_URL}/apps/scrollbar`, type: 'link', active: false, selected: false, title: 'Content-Scrollbar' },
                    { path: `${process.env.PUBLIC_URL}/apps/counter`, type: 'link', active: false, selected: false, title: 'Counters' },
                    { path: `${process.env.PUBLIC_URL}/apps/cryptocurrencies`, type: 'link', active: false, selected: false, title: 'Crypto-Currencies' },
                    { path: `${process.env.PUBLIC_URL}/apps/defaultcalender`, type: 'link', active: false, selected: false, title: 'Default-Calender' },
                    { path: `${process.env.PUBLIC_URL}/apps/footer`, type: 'link', active: false, selected: false, title: 'Footers' },
                    { path: `${process.env.PUBLIC_URL}/apps/fullcalender`, type: 'link', active: false, selected: false, title: 'Full-Calender' },
                    { path: `${process.env.PUBLIC_URL}/apps/loader`, type: 'link', active: false, selected: false, title: 'Loaders' },
                    { path: `${process.env.PUBLIC_URL}/apps/notification`, type: 'link', active: false, selected: false, title: 'Notifications' },
                    { path: `${process.env.PUBLIC_URL}/apps/rangeslider`, type: 'link', active: false, selected: false, title: 'Range-slider' },
                    { path: `${process.env.PUBLIC_URL}/apps/rating`, type: 'link', active: false, selected: false, title: 'Rating' },
                    { path: `${process.env.PUBLIC_URL}/apps/search`, type: 'link', active: false, selected: false, title: 'Search' },
                    { path: `${process.env.PUBLIC_URL}/apps/sweet`, type: 'link', active: false, selected: false, title: 'Sweet-alerts' },
                    { path: `${process.env.PUBLIC_URL}/apps/timeline`, type: 'link', active: false, selected: false, title: 'Timeline' },
                    { path: `${process.env.PUBLIC_URL}/apps/treeview`, type: 'link', active: false, selected: false, title: 'TreeView' },
                    { path: `${process.env.PUBLIC_URL}/apps/userlist`, type: 'link', active: false, selected: false, title: 'User-list' },
                    { path: `${process.env.PUBLIC_URL}/apps/widgets`, type: 'link', active: false, selected: false, title: 'Widgets' }

                ]
            },
            {

                title: 'Bootstrap', icon: "fe fe-package", type: 'sub', active: false, selected: false, Names:"mega-slide-menu", Name:"mega-menu", children: [

                    { path: `${process.env.PUBLIC_URL}/bootstrap/accordian`, type: 'link', active: false, selected: false, title: 'Accordians' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/bootstrapalerts`, type: 'link', active: false, selected: false, title: 'Alerts' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/avatarradius`, type: 'link', active: false, selected: false, title: 'Avatar-Radius' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/avatarsquare`, type: 'link', active: false, selected: false, title: 'Avatar-Square' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/avatarrounded`, type: 'link', active: false, selected: false, title: 'Avatar-Rounded' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/badgespills`, type: 'link', active: false, selected: false, title: 'BadgesPills' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/breadcrumbs`, type: 'link', active: false, selected: false, title: 'Breadcrumbs' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/buttons`, type: 'link', active: false, selected: false, title: 'Buttons' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/carousels`, type: 'link', active: false, selected: false, title: 'Carousels' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/colors`, type: 'link', active: false, selected: false, title: 'Colors' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/dropdowns`, type: 'link', active: false, selected: false, title: 'DropDowns' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/listgroups`, type: 'link',active: false, selected: false, title: 'List-Groups' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/mediaobject`, type: 'link', active: false, selected: false, title: 'Media-Object' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/modal`, type: 'link',active: false, selected: false, title: 'Modal' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/navigation`, type: 'link', active: false, selected: false, title: 'Navigation' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/offcanvas`, type: 'link', active: false, selected: false, title: 'OffCanvas' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/pagination`, type: 'link',active: false, selected: false, title: 'Pagination' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/panels`, type: 'link', active: false, selected: false, title: 'Panels' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/progress`, type: 'link', active: false, selected: false, title: 'Progress' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/tabs`, type: 'link',active: false, selected: false, title: 'Tabs' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/tags`, type: 'link', title: 'Tags' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/thumbnails`, type: 'link', title: 'Thumbnails' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/toast`, type: 'link', title: 'Toast' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/tooltippopover`, type: 'link', title: 'Tooltip Popover' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/typography`, type: 'link', title: 'Typography' },
                    { path: `${process.env.PUBLIC_URL}/bootstrap/ribbons`, type: 'link', title: 'Ribbons' },
                ]
            },

            { path: `${process.env.PUBLIC_URL}/landingPage/landingPage`, badge: "badge bg-green br-5 side-badge blink-text pb-1",badgetxt:"New", icon: 'fe fe-zap', type: 'link', active: true, selected: false, title: 'Landing Page' },
        ]
    },
    {
        menutitle: "PRE-BUILD-PAGES",
        Items: [
            {
                title: 'Pages', icon: "fe fe-layers", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `${process.env.PUBLIC_URL}/pages/editprofile`, type: 'link', active: false, selected: false, title: 'Edit-profile' },
                    { path: `${process.env.PUBLIC_URL}/pages/gallery`, type: 'link', active: false, selected: false, title: 'Gallery' },
                    { path: `${process.env.PUBLIC_URL}/pages/mailcompose`, type: 'link', active: false, selected: false, title: 'Mail-compose' },
                    { path: `${process.env.PUBLIC_URL}/pages/mailinbox`, type: 'link', active: false, selected: false, title: 'Mail-inbox' },
                    { path: `${process.env.PUBLIC_URL}/pages/mailread`, type: 'link', active: false, selected: false, title: 'Mail-read' },
                    { path: `${process.env.PUBLIC_URL}/pages/notificationlist`, type: 'link', active: false, selected: false, title: 'Notification-list' },
                    { path: `${process.env.PUBLIC_URL}/pages/profile`, type: 'link', active: false, selected: false, title: 'Profile' },
                    

                    {
                        title: 'Forms', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `${process.env.PUBLIC_URL}/pages/forms/formadvanced`, type: 'link', active: false, selected: false, title: 'Form-advanced' },
                            { path: `${process.env.PUBLIC_URL}/pages/forms/formeditor`, type: 'link', active: false, selected: false, title: 'Form-editor' },
                            { path: `${process.env.PUBLIC_URL}/pages/forms/formelements`, type: 'link', active: false, selected: false, title: 'Form-elements' },
                            { path: `${process.env.PUBLIC_URL}/pages/forms/formlayouts`, type: 'link', active: false, selected: false, title: 'Form-layouts' },
                            { path: `${process.env.PUBLIC_URL}/pages/forms/formvalidation`, type: 'link', active: false, selected: false, title: 'Form-validation' },
                            { path: `${process.env.PUBLIC_URL}/pages/forms/formwizard`, type: 'link', active: false, selected: false, title: 'Form-wizard' },
                            { path: `${process.env.PUBLIC_URL}/pages/forms/forminputspinner`, type: 'link', active: false, selected: false, title: 'Form-input-spinner' },
                        ]
                    },
                    {
                        title: 'Table', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `${process.env.PUBLIC_URL}/pages/tables/datatables`, type: 'link', active: false, selected: false, title: 'Data-Table' },
                            { path: `${process.env.PUBLIC_URL}/pages/tables/defaulttables`, type: 'link', active: false, selected: false, title: 'Default-Table' },
                            { path: `${process.env.PUBLIC_URL}/pages/tables/edittables`, type: 'link', active: false, selected: false, title: 'Edit-Table' },
                        ]
                    },
                    {
                        title: 'Extension', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `${process.env.PUBLIC_URL}/pages/extension/aboutcompany`, type: 'link', active: false, selected: false, title: 'About Company' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/blogdetails`, type: 'link', active: false, selected: false, title: 'Blog Details' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/blogpost`, type: 'link', active: false, selected: false, title: 'Blog Post' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/blogs`, type: 'link', active: false, selected: false, title: 'Blogs' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/emptypage`, type: 'link', active: false, selected: false, title: 'EmptyPage' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/faqs`, type: 'link', active: false, selected: false, title: 'FAQS' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/invoice`, type: 'link', active: false, selected: false, title: 'Invoice' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/pricing`, type: 'link', active: false, selected: false, title: 'Pricing Table' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/services`, type: 'link', active: false, selected: false, title: 'Services' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/setting`, type: 'link', active: false, selected: false, title: 'Settings' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/term`, type: 'link', active: false, selected: false, title: 'Terms' },
                            { path: `${process.env.PUBLIC_URL}/pages/extension/underconstruction`, type: 'link', active: false, selected: false, title: 'UnderConstruction' },

                        ]
                    },
                    { path: `${process.env.PUBLIC_URL}/pages/switcher/switcherstyle1`, type: 'link', active: false, selected: false, title: 'Switcher' },
                    
                ]
            },
            {
                title: 'E-commerce', icon: "fe fe-shopping-bag", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `${process.env.PUBLIC_URL}/ecommerce/addproduct`, type: 'link', active: false, selected: false, title: 'Add Product' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/checkout`, type: 'link', active: false, selected: false, title: 'Checkout' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/productdetails`, type: 'link', active: false, selected: false, title: 'Product Details' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/shop`, type: 'link', active: false, selected: false, title: 'Shop' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/shoppingcart`, type: 'link', active: false, selected: false, title: 'ShoppingCart' },
                    { path: `${process.env.PUBLIC_URL}/ecommerce/wishlist`, type: 'link', active: false, selected: false, title: 'Wishlist' },
                ]
            },
            {
                title: 'File-Manager', icon: "fe fe-folder", badge: "badge bg-pink side-badge", badgetxt: "4", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `${process.env.PUBLIC_URL}/filemanager/fileattachments`, type: 'link', active: false, selected: false, title: 'File-Attachments' },
                    { path: `${process.env.PUBLIC_URL}/filemanager/filedetails`, type: 'link', active: false, selected: false, title: 'File Details' },
                    { path: `${process.env.PUBLIC_URL}/filemanager/filemanager`, type: 'link', active: false, selected: false, title: 'File Manager' },
                    { path: `${process.env.PUBLIC_URL}/filemanager/filemanagerlist`, type: 'link', active: false, selected: false, title: 'File-ManagerList' },
                ]
            },
        ]
    },

    {
        menutitle: "MISC PAGES",
        Items: [
            {
                title: 'Authentication', icon: "fe fe-users", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `${process.env.PUBLIC_URL}/authentication/login`, type: 'link', active: false, selected: false, title: 'Login' },
                    { path: `${process.env.PUBLIC_URL}/authentication/register`, type: 'link', active: false, selected: false, title: 'Register' },
                    { path: `${process.env.PUBLIC_URL}/authentication/forgotpassword`, type: 'link', active: false, selected: false, title: 'Forgot Password' },
                    { path: `${process.env.PUBLIC_URL}/authentication/lockscreen`, type: 'link', active: false, selected: false, title: 'LockScreen' },
                    {
                        title: 'ErrorPage', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `${process.env.PUBLIC_URL}/authentication/errorpage/error400`, type: 'link', active: false, selected: false, title: 'Error400' },
                            { path: `${process.env.PUBLIC_URL}/authentication/errorpage/error401`, type: 'link', active: false, selected: false, title: 'Error401' },
                            { path: `${process.env.PUBLIC_URL}/authentication/errorpage/error403`, type: 'link', active: false, selected: false, title: 'Error403' },
                            { path: `${process.env.PUBLIC_URL}/authentication/errorpage/error404`, type: 'link', active: false, selected: false, title: 'Error404' },
                            { path: `${process.env.PUBLIC_URL}/authentication/errorpage/error500`, type: 'link', active: false, selected: false, title: 'Error500' },
                            { path: `${process.env.PUBLIC_URL}/authentication/errorpage/error503`, type: 'link', active: false, selected: false, title: 'Error503' },

                        ]
                    },
                ]
            },
        ]
    },

    {
        menutitle: "GENERAL",
        Items: [

            {
                title: 'Maps', icon: "fe fe-map-pin", type: 'sub',Name:"",Names:"", children: [
                    { path: `${process.env.PUBLIC_URL}/maps/leafletmaps`, type: 'link', active: false, selected: false, title: 'Leaflet-Maps' },
                    { path: `${process.env.PUBLIC_URL}/maps/simplemaps`, type: 'link', active: false, selected: false, title: 'Simple-Maps' },
                ]
            },
            {
                title: 'Charts', icon: "fe fe-bar-chart-2", type: 'sub',Name:"",Names:"", badge: "badge bg-secondary side-badge", badgetxt: "6", children: [
                    { path: `${process.env.PUBLIC_URL}/charts/chartjs`, type: 'link', active: false, selected: false, title: ' Chartjs' },
                    {
                        path: `${process.env.PUBLIC_URL}/charts/echart`, type: 'sub',Name:"",Names:"", title: ' Echart', children: [

                            { path: `${process.env.PUBLIC_URL}/charts/echart/lines`, type: 'link', active: false, selected: false, title: ' Line Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/echart/bar`, type: 'link', active: false, selected: false, title: ' Bar Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/echart/candlestick`, type: 'link', active: false, selected: false, title: ' Candle Stick Chart' },
                            
                            { path: `${process.env.PUBLIC_URL}/charts/echart/scatter`, type: 'link', active: false, selected: false, title: ' Scatter Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/echart/tree`, type: 'link', active: false, selected: false, title: ' Tree Chart' },

                        ]
                    },

                    {
                        path: `${process.env.PUBLIC_URL}/charts/apexchart`, type: 'sub',Name:"",Names:"", title: ' ApexChart',
                         children: [
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/line`, type: 'link', active: false, selected: false, title: ' Line Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/area`, type: 'link', active: false, selected: false, title: ' Area Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/column`, type: 'link', active: false, selected: false, title: ' Column Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/bar`, type: 'link', active: false, selected: false, title: ' Bar Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/mixed`, type: 'link', active: false, selected: false, title: ' Mixed Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/timeline`, type: 'link', active: false, selected: false, title: ' Timeline Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/candlestick`, type: 'link', active: false, selected: false, title: ' CandleStick Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/boxplot`, type: 'link', active: false, selected: false, title: ' Boxplot Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/treemap`, type: 'link', active: false, selected: false, title: ' Treemap Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/pie`, type: 'link', active: false, selected: false, title: ' Pie Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/radialbar`, type: 'link', active: false, selected: false, title: ' Radialbar Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/radar`, type: 'link', active: false, selected: false, title: ' Radar Chart' },
                            { path: `${process.env.PUBLIC_URL}/charts/apexchart/polararea`, type: 'link', active: false, selected: false, title: ' PolarArea Chart' },
                        ]
                    },
                ]
            },
            {
                title: 'Icons', icon: "fe fe-wind", type: 'sub',Name:"",Names:"", 
                children: [
                    { path: `${process.env.PUBLIC_URL}/icons/bootstrapicons`, type: 'link', active: false, selected: false, title: 'Bootstrap Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/feathericons`, type: 'link', active: false, selected: false, title: ' Feather Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/flagicons`, type: 'link', active: false, selected: false, title: ' Flag Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/fontawesome`, type: 'link', active: false, selected: false, title: 'Font-Awesome Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/ionicicons`, type: 'link', active: false, selected: false, title: ' Ionic Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/materialdesignicons`, type: 'link', active: false, selected: false, title: ' MaterialDesign Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/pe7icons`, type: 'link', active: false, selected: false, title: ' Pe7 Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/simplelineicons`, type: 'link', active: false, selected: false, title: 'Simpleline Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/themifyicons`, type: 'link', active: false, selected: false, title: ' Themify Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/typiconsicons`, type: 'link', active: false, selected: false, title: ' Typicons Icons' },
                    { path: `${process.env.PUBLIC_URL}/icons/weathericons`, type: 'link', active: false, selected: false, title: ' Weather Icons' },
                ]
            },

        ]
    },
]