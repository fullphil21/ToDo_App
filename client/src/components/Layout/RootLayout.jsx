import React from "react";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <Toaster position="top-center" />
      <main className="h-[calc(100vh-80px)] bg-sky-800 text-white p-5">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
