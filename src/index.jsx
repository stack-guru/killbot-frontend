import React, { Fragment, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Loader from './Layouts/Loader/Loader';
import "./index.scss";
import reportWebVitals from './reportWebVitals';

const Auth = lazy(() => import('./components/Authentication/firebaseAuth/auth'));
const App = lazy(() => import('./components/app'));
const CardsDesign = lazy(() => import('./components/apps/CardsDesign/CardsDesign'));
const Chat = lazy(() => import('./components/apps/Chat/Chat'));
const Charts = lazy(() => import('./components/apps/Charts/Charts'));
const ContentScrollbar = lazy(() => import('./components/apps/ContentScrollbar/ContentScrollbar'));
const Counters = lazy(() => import('./components/apps/Counters/Counters'));
const CryptoCurrencies = lazy(() => import('./components/apps/Cryptocurrencies/Cryptocurrencies'));
const DefaultCalender = lazy(() => import('./components/apps/DefaultCalender/DefaultCalender'));
const Footers = lazy(() => import('./components/apps/Footers/Footers'));
const FullCalender = lazy(() => import('./components/apps/FullCalender/FullCalender'));
const Loaders = lazy(() => import('./components/apps/Loaders/Loaders'));
const Notifications = lazy(() => import('./components/apps/Notifications/Notifications'));
const RangeSlider = lazy(() => import('./components/apps/RangeSlider/RangeSlider'));
const Rating = lazy(() => import('./components/apps/Rating/Rating'));
const Search = lazy(() => import('./components/apps/Search/Search'));
const Sweet = lazy(() => import('./components/apps/Sweet/Sweet'));
const Timeline = lazy(() => import('./components/apps/Timeline/Timeline'));
const TreeView = lazy(() => import('./components/apps/TreeView/TreeView'));
const Userlist = lazy(() => import('./components/apps/Userlist/Userlist'));
const Error401 = lazy(() => import('./components/Authentication/errorPage/Error401/Error401'));
const Error403 = lazy(() => import('./components/Authentication/errorPage/Error403/Error403'));
const Error404 = lazy(() => import('./components/Authentication/errorPage/Error404/Error404'));
const Error503 = lazy(() => import('./components/Authentication/errorPage/Error503/Error503'));
const ForgotPassword = lazy(() => import('./components/Authentication/Forgot Password/ForgotPassword'));
const LockScreen = lazy(() => import('./components/Authentication/LockScreen/LockScreen'));
const Register = lazy(() => import('./components/Authentication/Register/Register'));
const Accordians = lazy(() => import('./components/bootstrap/Accordians/Accordians'));
const BootstrapAlerts = lazy(() => import('./components/bootstrap/bootstrapAlerts/bootstrapAlerts'));
const AvatarRadius = lazy(() => import('./components/bootstrap/AvatarRadius/AvatarRadius'));
const AvatarSquare = lazy(() => import('./components/bootstrap/AvatarSquare/AvatarSquare'));
const AvatarRounded = lazy(() => import('./components/bootstrap/AvatarRounded/AvatarRounded'));
const BadgesPills = lazy(() => import('./components/bootstrap/BadgesPills/BadgesPills'));
const Breadcrumbs = lazy(() => import('./components/bootstrap/Breadcrumbs/Breadcrumbs'));
const Buttons = lazy(() => import('./components/bootstrap/Buttons/Buttons'));
const Carousels = lazy(() => import('./components/bootstrap/Carousels/Carousels'));
const Colors = lazy(() => import('./components/bootstrap/Colors/Colors'));
const DropDowns = lazy(() => import('./components/bootstrap/DropDowns/DropDowns'));
const ListGroups = lazy(() => import('./components/bootstrap/ListGroup/ListGroups'));
const MediaObject = lazy(() => import('./components/bootstrap/MediaObject/MediaObject'));
const Modals = lazy(() => import('./components/bootstrap/Modal/Modal'));
const Navigation = lazy(() => import('./components/bootstrap/Navigation/Navigation'));
const OffCanvas = lazy(() => import('./components/bootstrap/OffCanvas/OffCanvas'));
const Pagination = lazy(() => import('./components/bootstrap/Pagination/Pagination'));
const Panels = lazy(() => import('./components/bootstrap/Panels/Panels'));
const Progress = lazy(() => import('./components/bootstrap/Progress/Progress'));
const Tabs = lazy(() => import('./components/bootstrap/Tabs/Tabs'));
const Tags = lazy(() => import('./components/bootstrap/Tags/Tags'));
const Thumbnails = lazy(() => import('./components/bootstrap/Thumbnails/Thumbnails'));
const Toast = lazy(() => import('./components/bootstrap/Toast/Toast'));
const TooltipPopover = lazy(() => import('./components/bootstrap/TooltipPopover/TooltipPopover'));
const Typography = lazy(() => import('./components/bootstrap/Typography/Typography'));
const Ribbons = lazy(() => import('./components/bootstrap/Ribbons/Ribbons'));
const Chartjs = lazy(() => import('./components/Charts/Chart Js/Chartjs'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const AddProduct = lazy(() => import('./components/E-commerce/AddProduct/AddProduct'));
const Checkout = lazy(() => import('./components/E-commerce/Checkout/Checkout'));
const ProductDetails = lazy(() => import('./components/E-commerce/ProductDetails/ProductDetails'));
const Shop = lazy(() => import('./components/E-commerce/Shop/Shop'));
const ShoppingCart = lazy(() => import('./components/E-commerce/ShoppingCart/ShoppingCart'));
const Wishlist = lazy(() => import('./components/E-commerce/Wishlist/Wishlist'));
const FileAttachments = lazy(() => import('./components/FileManager/FileAttachments/FileAttachments'));
const FileDetails = lazy(() => import('./components/FileManager/FileDetails/FileDetails'));
const FileManager = lazy(() => import('./components/FileManager/FileManager/FileManager'));
const FileManagerList = lazy(() => import('./components/FileManager/FileManagerList/FileManagerList'));
const BootstrapIcons = lazy(() => import('./components/Icons/BootstrapIcons/BootstrapIcons'));
const FeatherIcons = lazy(() => import('./components/Icons/FeatherIcons/FeatherIcons'));
const FlagIcons = lazy(() => import('./components/Icons/FlagIcons/FlagIcons'));
const FontAwesome = lazy(() => import('./components/Icons/FontAwesome/FontAwesome'));
const IonicIcons = lazy(() => import('./components/Icons/IonicIcons/IonicIcons'));
const MaterialDesignIcons = lazy(() => import('./components/Icons/MaterialDesignIcons/MaterialDesignIcons'));
const Pe7Icons = lazy(() => import('./components/Icons/Pe7Icons/Pe7Icons'));
const SimpleLineIcons = lazy(() => import('./components/Icons/SimpleLineIcons/SimpleLineIcons'));
const ThemifyIcons = lazy(() => import('./components/Icons/ThemifyIcons/ThemifyIcons'));
const TypiconsIcons = lazy(() => import('./components/Icons/TypiconsIcons/TypiconsIcons'));
const WeatherIcons = lazy(() => import('./components/Icons/WeatherIcons/WeatherIcons'));
const LeafletMaps = lazy(() => import('./components/Maps/LeafletMaps/LeafletMaps'));
const SimpleMaps = lazy(() => import('./components/Maps/SimpleMaps/SimpleMaps'));

const Editprofile = lazy(() => import('./components/pages/Editprofile/Editprofile'));
const AboutCompany = lazy(() => import('./components/pages/Extension/AboutCompany/AboutCompany'));
const BlogDetails = lazy(() => import('./components/pages/Extension/BlogDetails/BlogDetails'));
const BlogPost = lazy(() => import('./components/pages/Extension/BlogPost/BlogPost'));
const Blogs = lazy(() => import('./components/pages/Extension/Blogs/Blogs'));
const EmptyPage = lazy(() => import('./components/pages/Extension/EmptyPage/EmptyPage'));
const FAQS = lazy(() => import('./components/pages/Extension/FAQS/FAQS'));
const Invoice = lazy(() => import('./components/pages/Extension/Invoice/Invoice'));
const Pricing = lazy(() => import('./components/pages/Extension/Pricing/Pricing'));
const Services = lazy(() => import('./components/pages/Extension/Services/Services'));
const Settings = lazy(() => import('./components/pages/Extension/Settings/Settings'));
const Terms = lazy(() => import('./components/pages/Extension/Terms/Terms'));
const UnderConstruction = lazy(() => import('./components/pages/Extension/UnderConstruction/UnderConstruction'));
const FormAdvanced = lazy(() => import('./components/pages/forms/FormAdvanced/FormAdvanced'));
const FormEditor = lazy(() => import('./components/pages/forms/FormEditor/FormEditor'));
const FormElements = lazy(() => import('./components/pages/forms/FormElements/FormElements'));
const FormLayouts = lazy(() => import('./components/pages/forms/FormLayouts/FormLayouts'));
const FormValidation = lazy(() => import('./components/pages/forms/FormValidation/FormValidation'));
const FormWizard = lazy(() => import('./components/pages/forms/FormWizard/FormWizard'));
const Gallery = lazy(() => import('./components/pages/Gallery/Gallery'));
const MailCompose = lazy(() => import('./components/pages/MailCompose/MailCompose'));
const MailInbox = lazy(() => import('./components/pages/MailInbox/MailInbox'));
const MailRead = lazy(() => import('./components/pages/MailRead/MailRead'));
const NotificationList = lazy(() => import('./components/pages/NotificationList/NotificationList'));
const Profile = lazy(() => import('./components/pages/Profile/Profile'));
const DataTable = lazy(() => import('./components/pages/tables/DataTable/DataTable'));
const DefaultTable = lazy(() => import('./components/pages/tables/DefaultTable/DefaultTable'));
const EditTable = lazy(() => import('./components/pages/tables/EditTable/EditTable'));

const Line = lazy(() => import('./components/Charts/ApexChart/Line/Line'));
const Area = lazy(() => import('./components/Charts/ApexChart/Area/Area'));
const Column = lazy(() => import('./components/Charts/ApexChart/Column/Column'));
const Bar = lazy(() => import('./components/Charts/ApexChart/Bar/Bar'));
const Mixed = lazy(() => import('./components/Charts/ApexChart/Mixed/Mixed'));
const CandleStick = lazy(() => import('./components/Charts/ApexChart/CandleStick/CandleStick'));
const Boxplot = lazy(() => import('./components/Charts/ApexChart/Boxplot/Boxplot'));
const Treemap = lazy(() => import('./components/Charts/ApexChart/Treemap/Treemap'));
const Pie = lazy(() => import('./components/Charts/ApexChart/Pie/Pie'));
const Radialbar = lazy(() => import('./components/Charts/ApexChart/Radialbar/Radialbar'));
const Radar = lazy(() => import('./components/Charts/ApexChart/Radar/Radar'));
const Polararea = lazy(() => import('./components/Charts/ApexChart/Polararea/Polararea'));

const Lines = lazy(() => import('./components/Charts/Echarts/Line/Lines'));
const Trees = lazy(() => import('./components/Charts/Echarts/Tree/Trees'));
const Scatters = lazy(() => import('./components/Charts/Echarts/Scatter/Scatters'));
const Timelines = lazy(() => import('./components/Charts/ApexChart/Timeline/Timelines'));
const CandleSticks = lazy(() => import('./components/Charts/Echarts/CandleSticks/CandleSticks'));
const Bars = lazy(() => import('./components/Charts/Echarts/Bars/Bars'));
const Widgets = lazy(() => import('./components/apps/Widgets/Widgets'));
const FormInputSpinners = lazy(() => import('./components/pages/forms/FormInputSpinners/FormInputSpinners'));
const CustomPage = lazy(() => import('./components/CustomPage'));
const Error400 = lazy(() => import('./components/Authentication/errorPage/Error400/Error400'));
const Error500 = lazy(() => import('./components/Authentication/errorPage/Error500/Error500'));
const Login = lazy(() => import('./components/Authentication/Login/Login'));
const AuthenticationPage = lazy(() => import('./components/AuthenticationPage'));
const ErrorPages = lazy(() => import('./components/ErrorPages'));
const Switcherapp = lazy(() => import("./components/Switcherapp"))
const Landing = lazy(() => import("./components/Landing"))
const UserManagement = lazy(() => import("./components/UserManagement"))
const ApiMonitoring = lazy(() => import("./components/ApiMonitoring"))
const ShortLinkMonitoring = lazy(() => import("./components/ShortLinkMonitoring"))
const PackageManage = lazy(() => import("./components/PackageManage"))
const BotRedirection = lazy(() => import("./components/BotRedirection"))
const AllowedCountry = lazy(() => import("./components/AllowedCountry"))
const Whitelist = lazy(() => import("./components/Whitelist"))
const Blacklist = lazy(() => import("./components/Blacklist"))
const DisposalEmail = lazy(() => import("./components/DisposalEmail"))
const PhoneNumber = lazy(() => import("./components/PhoneNumber"))

const container = document.getElementById('root');
const root = createRoot(container);

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")
  if (!isAuthenticated) {
    return <Navigate to="/authentication/login" replace />;
  }

  return children;
};

root.render(
  <React.StrictMode>
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>

            {/* Firebase Authentication */}

            {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<Auth />}>
              <Route index element={<AuthLogin />} />
              <Route path={`${process.env.PUBLIC_URL}/Authentication/firebaseAuth/login`} element={<AuthLogin />} />
              <Route path={`${process.env.PUBLIC_URL}/Authentication/firebaseAuth/SignUp`} element={<SignUp />} />
            </Route> */}
            <Route >
              <Route path={`${process.env.PUBLIC_URL}/`} element={<Landing />} />
            </Route>

            <Route path={`${process.env.PUBLIC_URL}/`} element={<ProtectedRoute><App /></ProtectedRoute>}>
              <Route path={`${process.env.PUBLIC_URL}/dashboard`} element={<Dashboard />} />
              <Route path={`${process.env.PUBLIC_URL}/user-management`} element={<UserManagement />} />
              <Route path={`${process.env.PUBLIC_URL}/api-monitoring`} element={<ApiMonitoring />} />
              <Route path={`${process.env.PUBLIC_URL}/short-link-monitoring-stats`} element={<ShortLinkMonitoring />} />
              <Route path={`${process.env.PUBLIC_URL}/package-management`} element={<PackageManage />} />
              <Route path={`${process.env.PUBLIC_URL}/bot-redirection`} element={<BotRedirection />} />
              <Route path={`${process.env.PUBLIC_URL}/allowed-country`} element={<AllowedCountry />} />
              <Route path={`${process.env.PUBLIC_URL}/whitelist`} element={<Whitelist />} />
              <Route path={`${process.env.PUBLIC_URL}/blacklist`} element={<Blacklist />} />
              <Route path={`${process.env.PUBLIC_URL}/disposal-email`} element={<DisposalEmail />} />
              <Route path={`${process.env.PUBLIC_URL}/phonenumber`} element={<PhoneNumber />} />

              {/* Apps */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/apps/carddesigns`} element={<CardsDesign />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/chat`} element={<Chat />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/charts`} element={<Charts />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/scrollbar`} element={<ContentScrollbar />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/counter`} element={<Counters />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/cryptocurrencies`} element={<CryptoCurrencies />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/defaultcalender`} element={<DefaultCalender />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/footer`} element={<Footers />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/fullcalender`} element={<FullCalender />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/loader`} element={<Loaders />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/notification`} element={<Notifications />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/rangeslider`} element={<RangeSlider />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/rating`} element={<Rating />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/search`} element={<Search />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/sweet`} element={<Sweet />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/timeline`} element={<Timeline />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/treeview`} element={<TreeView />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/userlist`} element={<Userlist />} />,
                <Route path={`${process.env.PUBLIC_URL}/apps/widgets`} element={<Widgets />} />,
              </Route>

              {/* bootstrap */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/accordian`} element={<Accordians />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/bootstrapalerts`} element={<BootstrapAlerts />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/avatarradius`} element={<AvatarRadius />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/avatarsquare`} element={<AvatarSquare />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/avatarrounded`} element={<AvatarRounded />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/badgespills`} element={<BadgesPills />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/breadcrumbs`} element={<Breadcrumbs />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/buttons`} element={<Buttons />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/carousels`} element={<Carousels />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/colors`} element={<Colors />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/dropdowns`} element={<DropDowns />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/listgroups`} element={<ListGroups />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/mediaobject`} element={<MediaObject />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/modal`} element={<Modals />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/navigation`} element={<Navigation />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/offcanvas`} element={<OffCanvas />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/pagination`} element={<Pagination />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/panels`} element={<Panels />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/progress`} element={<Progress />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/tabs`} element={<Tabs />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/tags`} element={<Tags />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/thumbnails`} element={<Thumbnails />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/toast`} element={<Toast />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/tooltippopover`} element={<TooltipPopover />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/typography`} element={<Typography />} />,
                <Route path={`${process.env.PUBLIC_URL}/bootstrap/ribbons`} element={<Ribbons />} />,
              </Route>

              {/* Charts */}
              <Route>

                <Route path={`${process.env.PUBLIC_URL}/charts/chartjs`} element={<Chartjs />} />,

                <Route path={`${process.env.PUBLIC_URL}/charts/echart/lines`} element={<Lines />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/echart/bar`} element={<Bars />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/echart/candlestick`} element={<CandleSticks />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/echart/scatter`} element={<Scatters />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/echart/tree`} element={<Trees />} />,

                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/line`} element={<Line />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/area`} element={<Area />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/column`} element={<Column />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/bar`} element={<Bar />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/mixed`} element={<Mixed />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/timeline`} element={<Timelines />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/candlestick`} element={<CandleStick />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/boxplot`} element={<Boxplot />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/treemap`} element={<Treemap />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/pie`} element={<Pie />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/radialbar`} element={<Radialbar />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/radar`} element={<Radar />} />,
                <Route path={`${process.env.PUBLIC_URL}/charts/apexchart/polararea`} element={<Polararea />} />,

              </Route>

              {/* E-commerce */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/ecommerce/addproduct`} element={<AddProduct />} />,
                <Route path={`${process.env.PUBLIC_URL}/ecommerce/checkout`} element={<Checkout />} />,
                <Route path={`${process.env.PUBLIC_URL}/ecommerce/productdetails`} element={<ProductDetails />} />,
                <Route path={`${process.env.PUBLIC_URL}/ecommerce/productdetails/:id`} element={<ProductDetails />} />,
                <Route path={`${process.env.PUBLIC_URL}/ecommerce/shop`} element={<Shop />} />,
                <Route path={`${process.env.PUBLIC_URL}/ecommerce/shoppingcart`} element={<ShoppingCart />} />,
                <Route path={`${process.env.PUBLIC_URL}/ecommerce/wishlist`} element={<Wishlist />} />,
              </Route>

              {/* File-Manager */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/filemanager/fileattachments`} element={<FileAttachments />} />,
                <Route path={`${process.env.PUBLIC_URL}/filemanager/filedetails`} element={<FileDetails />} />,
                <Route path={`${process.env.PUBLIC_URL}/filemanager/filemanager`} element={<FileManager />} />,
                <Route path={`${process.env.PUBLIC_URL}/filemanager/filemanagerlist`} element={<FileManagerList />} />,
              </Route>

              {/* Icons */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/icons/bootstrapicons`} element={<BootstrapIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/feathericons`} element={<FeatherIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/flagicons`} element={<FlagIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/fontawesome`} element={<FontAwesome />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/ionicicons`} element={<IonicIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/materialdesignicons`} element={<MaterialDesignIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/pe7icons`} element={<Pe7Icons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/simplelineicons`} element={<SimpleLineIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/themifyicons`} element={<ThemifyIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/typiconsicons`} element={<TypiconsIcons />} />,
                <Route path={`${process.env.PUBLIC_URL}/icons/weathericons`} element={<WeatherIcons />} />,
              </Route>

              {/* Maps */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/maps/leafletmaps`} element={<LeafletMaps />} />,
                <Route path={`${process.env.PUBLIC_URL}/maps/simplemaps`} element={<SimpleMaps />} />,
              </Route>

              {/* Pages */}
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/pages/editprofile`} element={<Editprofile />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/aboutcompany`} element={<AboutCompany />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/blogdetails`} element={<BlogDetails />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/blogpost`} element={<BlogPost />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/blogs`} element={<Blogs />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/emptypage`} element={<EmptyPage />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/faqs`} element={<FAQS />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/invoice`} element={<Invoice />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/pricing`} element={<Pricing />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/services`} element={<Services />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/setting`} element={<Settings />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/extension/term`} element={<Terms />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/forms/formadvanced`} element={<FormAdvanced />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/forms/formeditor`} element={<FormEditor />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/forms/formelements`} element={<FormElements />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/forms/formlayouts`} element={<FormLayouts />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/forms/formvalidation`} element={<FormValidation />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/forms/forminputspinner`} element={<FormInputSpinners />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/forms/formwizard`} element={<FormWizard />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/gallery`} element={<Gallery />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/mailcompose`} element={<MailCompose />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/mailinbox`} element={<MailInbox />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/mailread`} element={<MailRead />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/notificationlist`} element={<NotificationList />} />,
                <Route path={`${process.env.PUBLIC_URL}/pages/profile`} element={<Profile />} />,

                <Route path={`${process.env.PUBLIC_URL}/pages/tables/datatables`} element={<DataTable />} />,

                <Route path={`${process.env.PUBLIC_URL}/pages/tables/edittables`} element={<EditTable />} />,
              </Route>
              <Route>
                <Route path={`${process.env.PUBLIC_URL}/pages/tables/defaulttables`} element={<DefaultTable />} />,
              </Route>
            </Route>

            {/* Authentication Pages */}
            <Route path={`${process.env.PUBLIC_URL}/`} element={<AuthenticationPage />}>
              <Route path={`${process.env.PUBLIC_URL}/authentication/login`} element={<Login />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/register`} element={<Register />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/forgotpassword`} element={<ForgotPassword />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/lockscreen`} element={<LockScreen />} />,
            </Route>

            {/* Custom Pages for UnderConstruction */}

            <Route path={`${process.env.PUBLIC_URL}/`} element={<CustomPage />}>
              <Route path={`${process.env.PUBLIC_URL}/pages/extension/underconstruction`} element={<UnderConstruction />} />
            </Route>

            {/* Authentication Error Pages */}
            <Route path={`${process.env.PUBLIC_URL}`} element={<ErrorPages />}>
              <Route path={`${process.env.PUBLIC_URL}/authentication/errorpage/error400`} element={<Error400 />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/errorpage/error401`} element={<Error401 />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/errorpage/error403`} element={<Error403 />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/errorpage/error404`} element={<Error404 />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/errorpage/error500`} element={<Error500 />} />
              <Route path={`${process.env.PUBLIC_URL}/authentication/errorpage/error503`} element={<Error503 />} />
              <Route path="*" element={<Error500 />} />
            </Route>

            {/* Custom Switcher Pages */}

            <Route>
              <Route path={`${process.env.PUBLIC_URL}/pages/switcher/switcherstyle1`} element={<Switcherapp />} />,
            </Route>
            <Route >
              <Route path={`${process.env.PUBLIC_URL}/landingPage/landingPage`} element={<Landing />} />
            </Route>

          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

