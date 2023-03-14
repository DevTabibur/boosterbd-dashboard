import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pie, Stacked } from "..";
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Dashboard, Editor, Employees, Financial, Kanban, Line, Orders, Pyramid } from "../../pages";
import Login from "../../pages/Register/Register";

const CustomRouter = () => {
  return (
    <>
      <Routes>
        {/* dashboard  */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* pages  */}
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />

        {/* apps  */}
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/color-picker" element={<ColorPicker />} />

        {/* charts  */}
        <Route path="/line" element={<Line />} />
        <Route path="/area" element={<Area />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/color-mapping" element={<ColorMapping />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/stacked" element={<Stacked />} />
      </Routes>

    </>
  );
};

export default CustomRouter;
