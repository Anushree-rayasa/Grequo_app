import React from "react";
import "../css/Grequo.css";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function Grequo() {
    return (
        <div className = "grequo">
            <Navbar />
            <div className = "grequo__content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    );
} 

export default Grequo;