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
import Login from "./pages/Register/Register";
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
import CreateAdAccount from "./pages/Admin/AdAccount/CreateAdAccount";
import AdAccountRequestsView from "./pages/Admin/AdAccount/AdAccountRequestsView";
import Transactions from "./pages/Admin/Transactions/Transactions";
import BusinessManager from "./pages/Admin/BusinessManager";
import AddServices from "./pages/Admin/AddServices";
import ManageUsers from "./pages/Admin/Users/ManageUsers";
import ManageRoles from "./pages/Admin/Users/ManageRoles";
import GivingPermission from "./pages/Admin/Users/GivingPermission";
import Currency from "./pages/Admin/Currency";
import SpendingRate from "./pages/Admin/SpendingRate";
import RequireUser from "./Authentication/RequireUser";
import publicRoutes from "./Router/publicRoutes";
import privateRoutes from "./Router/privateRoutes";
import RequireAdmin from "./Authentication/RequireAdmin";
import Verification from "./pages/Admin/Verification";
import toast, { Toaster } from 'react-hot-toast';
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

        {/* public routes */}
        {/* {publicRoutes.map(({ path, name, Component }, idx) => (
          <Route key={idx} path={path} element={<Component />} />
        ))} */}

        <Route >
          <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        </Route>

        {/* user routes  */}
        <Route>
          <Route path="/create-ad-account" element={<DashboardLayout><CreateAdAccount /></DashboardLayout>} />
          <Route path="/ad-account-requests-view" element={<DashboardLayout><AdAccountRequestsView /></DashboardLayout>} />
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
          <Route path="/package" element={<DashboardLayout><CurrentPackage /></DashboardLayout>} />
          <Route path="/setting" element={<DashboardLayout><Setting /></DashboardLayout>} />
        </Route>

        {/* Admin routes */}
        <Route >

          <Route path="/transactions" element={<DashboardLayout><Transactions /></DashboardLayout>} />
          <Route path="/business-manager" element={<DashboardLayout><BusinessManager /></DashboardLayout>} />
          <Route path="/add-service" element={<DashboardLayout><AddServices /></DashboardLayout>} />
          <Route path="/manage-users" element={<DashboardLayout><ManageUsers /></DashboardLayout>} />
          <Route path="/giving-permission" element={<DashboardLayout><GivingPermission /></DashboardLayout>} />
          <Route path="/currency" element={<DashboardLayout><Currency /></DashboardLayout>} />
          <Route path="/spending-rate" element={<DashboardLayout><SpendingRate /></DashboardLayout>} />
          <Route path="/verification" element={<DashboardLayout><Verification /></DashboardLayout>} />
        </Route>

      </Routes>
      <Toaster />
    </>
  );
};

export default App;
