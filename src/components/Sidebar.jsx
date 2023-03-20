import React, { useEffect } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdAccountBox, MdAdd, MdBusiness, MdCreate, MdNoAccounts, MdOutlineCancel, MdPermDataSetting, MdReviews, MdStarRate, MdUpdate, MdVerified } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import useUser from '../Hooks/useUser';
import useAdmin from '../Hooks/useAdmin';
import { FiSettings, FiShoppingBag } from 'react-icons/fi';
import { BiLoader, BiPackage, BiTransferAlt } from 'react-icons/bi';
import { RiContactsLine, RiFundsBoxFill, RiServiceFill } from 'react-icons/ri';
import { GoRequestChanges } from 'react-icons/go';
import { GiChargedArrow } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';
import { GrOrderedList } from 'react-icons/gr';
import { BsCurrencyEuro } from 'react-icons/bs';
import { HiViewGrid } from 'react-icons/hi';
import useActiveUser from '../Hooks/useActiveUser';
import Loader from './Loader/Loader';

const Sidebar = () => {
  const [activeUser, isLoading] = useActiveUser();
  // const [admin, adminLoading] = useAdmin(activeUser);
  const admin = true;



  // if (adminLoading) {
  //   return <Loader />
  // }


  // console.log('activeUser', activeUser?._id)
  // console.log('activeUser', activeUser?.profile)
  // const admin = true;
  // const activeUser?.phoneNumber = true

  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';



  // console.log('admin', admin)


  const userMenu = [
    {
      name: 'dashboard',
      icon: <FiShoppingBag />,
    },
    // {
    //   name: 'order',
    //   icon: <GrOrderedList />,
    // },
    // {
    //   name: 'products',
    //   icon: <IoMdContacts />,
    // },
    // {
    //   name: 'customers',
    //   icon: <RiContactsLine />,
    // },
    // {
    //   name: 'review',
    //   icon: <MdReviews />,
    // },
    // {
    //   name: 'claim',
    //   icon: <GiChargedArrow />,
    // },
    {
      name: 'top-up',
      icon: <BiLoader />,
    },
    {
      name: 'fund-management',
      icon: <RiFundsBoxFill />,
    },
    {
      name: 'ad-account-view',
      icon: <MdAccountBox />,
    },
    {
      name: 'page-requests',
      icon: <GoRequestChanges />,
    },
    {
      name: 'business-manager-requests',
      icon: <MdBusiness />,
    },
    // {
    //   name: 'services',
    //   icon: <RiServiceFill />,
    // },
    {
      name: 'limit-update',
      icon: <MdUpdate />,
    },
    // {
    //   name: 'package',
    //   icon: <BiPackage />,
    // },
    {
      name: 'setting',
      icon: <FiSettings />,
    },
  ]

  const adminMenu = [
    {
      name: 'dashboard',
      icon: <FiShoppingBag />,
    },
    {
      name: 'create-ad-account',
      icon: <MdCreate />,
    },
    {
      name: 'ad-account-requests-view',
      icon: <HiViewGrid />,
    },
    {
      name: 'transactions',
      icon: <BiTransferAlt />,
    },
    // {
    //   name: 'business-manager',
    //   icon: <MdBusiness />,
    // },
    // {
    //   name: 'add-service',
    //   icon: <MdAdd />,
    // },
    {
      name: 'manage-users',
      icon: <MdNoAccounts />,
    },
    // {
    //   name: 'giving-permission',
    //   icon: <MdPermDataSetting />,
    // },
    // {
    //   name: 'currency',
    //   icon: <BsCurrencyEuro />,
    // },
    {
      name: 'spending-rate',
      icon: <MdStarRate />,
    },
    {
      name: 'verification',
      icon: <MdVerified />,
    },
  ]
  // if (isLoading || adminLoading) {
  //   return <Loader />
  // }


  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              {/* <SiShopware />  */}<span>BoosterBD</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">

            {/* user routes */}
            {!admin && <div>
              {userMenu.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link.icon}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </div>}

            {/* admin routes */}
            {admin && <div>
              {adminMenu.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link.icon}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </div>}

          </div>
        </>
      )
      }
    </div >
  );
};

export default Sidebar;
