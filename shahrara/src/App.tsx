import { Route, Routes } from "react-router";

import "./App.css";

import RootLayout from "./layouts/RootLayout/RootLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { ReactNode } from "react";
import Attraction from "./pages/Attraction/Attraction";

const App = (): ReactNode => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="attraction/:id" element={<Attraction />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
