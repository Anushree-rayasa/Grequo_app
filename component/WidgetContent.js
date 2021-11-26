import React from "react";
import "../css/WidgetContent.css";

function WidgetContent() {
    return (
    <div className = "widget__contents">
        <div className = "widget__content">
            <img
                src="https://inc42.com/wp-content/uploads/2019/11/feature-1-1200x702.jpg"
                alt=""
            />
            <div className = "widget__contentTitle">
                <h5>Challenges for EVs</h5>
                <p>Unpacking the challenges and opportunities of Electric Vehicles.</p>
            </div>
        </div>
        <div className = "widget__content">
            <img
                src="https://i0.wp.com/evduniya.com/wp-content/uploads/2020/04/Electric-Vehicles-Cars-bike-manufacturer-in-India.jpg?fit=660%2C440&ssl=1"
                alt=""
            />
            <div className = "widget__contentTitle">
                <h5>Top-rated companies</h5>
                <p>All about best EV companies.</p>
            </div>
        </div>
        <div className = "widget__content">
            <img
                src="https://mk0egoveletsonla87wv.kinstacdn.com/wp-content/uploads/2017/09/e-vehicle.jpg"
                alt=""
            />
            <div className = "widget__contentTitle">
                <h5>Buying Options</h5>
                <p>A guide for purchasing EVs.</p>
            </div>
        </div>
        <div className = "widget__content">
            <img
                src="https://t3.ftcdn.net/jpg/03/38/54/28/360_F_338542839_PJMPljoyZQO54xCsG6ZlgHIrCl7iewbu.jpg"
                alt=""
            />
            <div className = "widget__contentTitle">
                <h5>Top-trends in EV design</h5>
                <p>A space to find key top trends that are shaping EV industry.</p>
            </div>
        </div>
        <div className = "widget__content">
            <img
                src="https://www.internetsociety.org/wp-content/uploads/2017/08/research.jpg"
                alt=""
            />
            <div className = "widget__contentTitle">
                <h5>Research on EVs</h5>
                <p>All about EV research and development.</p>
            </div>
        </div>
    </div>
    );
}

export default WidgetContent;