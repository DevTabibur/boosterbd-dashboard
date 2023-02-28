export const privateRoutes = [
    { path: "/dashboard/profile", name: Profile, Component: Profile },
    {
        path: "/dashboard/edit-profile",
        name: EditProfile,
        Component: EditProfile,
    },
    { path: "/dashboard/review", name: GiveReview, Component: GiveReview },
    {
        path: "/dashboard/shipment-history",
        name: ShipmentHistory,
        Component: ShipmentHistory,
    },
    { path: "/dashboard/payment/:id", name: Payment, Component: Payment },

];

export default privateRoutes;