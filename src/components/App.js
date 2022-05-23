import React from "react";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import Header from "./common/Header";
import NotFoundPage from "./PageNotFound";
import { Route, Routes, Navigate } from "react-router-dom";
import "../index.css";


function App() {
    return (
    <div className="container-fluid">
        <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-page" element={<Navigate replace to="/about" />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </div>
    );
}

export default App;