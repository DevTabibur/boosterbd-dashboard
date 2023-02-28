import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { Route, Router, Routes } from "react-router-dom";
import './App.css';
import { Footer, Navbar, Pie, Sidebar, Stacked } from "./components";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import NotFound from "./components/NotFound/NotFound";
import CustomRouter from "./components/Router/CustomRouter";
import { useStateContext } from "./contexts/ContextProvider";
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Dashboard, Ecommerce, Editor, Employees, Financial, Kanban, Line, Orders, Pyramid } from "./pages";
import Login from "./pages/Login/Login";
import Profile from "./components/Profile/Profile";
import Test from "./pages/Test";
import AdAccountView from "./pages/User/AdAccountView";
import BusinessManagerRequests from "./pages/User/BusinessManagerRequests";
import Claim from "./pages/User/Claim";
import CurrentPackage from "./pages/User/CurrentPackage";
import FundManagement from "./pages/User/FundManagement";
import LimitUpdate from "./pages/User/LimitUpdate";
import Order from "./pages/User/Order";
import PageRequests from "./pages/User/PageRequests";
import PaymentMethod from "./pages/User/PaymentMethod";
import Services from "./pages/User/Services";
import TopUp from "./pages/User/TopUp";
import Sample from "./Sample";
import Setting from "./pages/Setting/Setting";
const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>

      <Routes>
        {/* dashboard  */}
        <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        {/* user routes */}
        <Route path="/claim" element={<DashboardLayout><Claim /></DashboardLayout>} />
        <Route path="/top-up" element={<DashboardLayout><TopUp /></DashboardLayout>} />
        <Route path="/fund-management" element={<DashboardLayout><FundManagement /></DashboardLayout>} />
        <Route path="/ad-account-view" element={<DashboardLayout><AdAccountView /></DashboardLayout>} />
        <Route path="/page-requests" element={<DashboardLayout><PageRequests /></DashboardLayout>} />
        <Route path="/business-manager-requests" element={<DashboardLayout><BusinessManagerRequests /></DashboardLayout>} />
        <Route path="/services" element={<DashboardLayout><Services /></DashboardLayout>} />
        <Route path="/order" element={<DashboardLayout><Order /></DashboardLayout>} />
        <Route path="/limit-update" element={<DashboardLayout><LimitUpdate /></DashboardLayout>} />
        <Route path="/payment-method" element={<DashboardLayout><PaymentMethod /></DashboardLayout>} />
        <Route path="/current-package" element={<DashboardLayout><CurrentPackage /></DashboardLayout>} />
        <Route path="/setting" element={<DashboardLayout><Setting /></DashboardLayout>} />
        <Route path="/test" element={<Test/>} />

        {/* pages  */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Dashboard><Orders /></Dashboard>} /> */}

        {/* <Route path="/employees" element={<Dashboard><Employees /></Dashboard>} />
        <Route path="/customers" element={<Dashboard><Customers /></Dashboard>} /> */}

        {/* apps  */}
        {/* <Route path="/kanban" element={<Dashboard><Kanban /></Dashboard>} />
        <Route path="/editor" element={<Dashboard><Editor /></Dashboard>} />
        <Route path="/calendar" element={<Dashboard><Calendar /></Dashboard>} />
        <Route path="/color-picker" element={<Dashboard><ColorPicker /></Dashboard>} /> */}

        {/* charts  */}
        {/* <Route path="/line" element={<Dashboard><Line /></Dashboard>} />
        <Route path="/area" element={<Dashboard><Area /></Dashboard>} />
        <Route path="/bar" element={<Dashboard><Bar /></Dashboard>} />
        <Route path="/pie" element={<Dashboard><Pie /></Dashboard>} />
        <Route path="/financial" element={<Dashboard><Financial /></Dashboard>} />
        <Route path="/color-mapping" element={<Dashboard><ColorMapping /></Dashboard>} />
        <Route path="/pyramid" element={<Dashboard><Pyramid /></Dashboard>} />
        <Route path="/stacked" element={<Dashboard><Stacked /></Dashboard>} /> */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default App;
