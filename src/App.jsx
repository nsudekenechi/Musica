import { useEffect, useState } from "react";
import "./assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import "./assets/style.css";

import Index from "./Pages/Index";
import Single from "./Pages/Single";

import { Route, Routes } from "react-router-dom";

export default function App() {
 
  return (
    <>


      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="single/:id" element={<Single />} />
      </Routes>
    </>
  )
}


