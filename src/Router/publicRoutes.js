export const publicRoutes = [
    { path: "/", name: Home, Component: Home },
    { path: "/home", name: Home, Component: Home },
    { path: "/services", name: Services, Component: Services },
    { path: "/service/:id", name: SingleService, Component: SingleService },
    { path: "/shipping", name: Shipping, Component: Shipping },
    { path: "/contact-us", name: Contact, Component: Contact },
    { path: "/login", name: Login, Component: Login },
    { path: "/register", name: Register, Component: Register },
    { path: "/forgot-password", name: ForgotPassword, Component: ForgotPassword },
    { path: "*", name: NotFound, Component: NotFound },
  ];
  
  export default publicRoutes;