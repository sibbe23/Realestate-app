import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles.css";
const Header = React.lazy(() => import("./components/Header"));
const Main = React.lazy(() => import("./components/Main"));
const Favourites = React.lazy(() => import("./components/Favourites"));

export default function App() {
  return (
    <Suspense >
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Suspense>
  );
}
