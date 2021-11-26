import React from "react";
import { Avatar } from "@material-ui/core";
import "../css/GrequoBox.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";


function GrequoBox() {
    const user = useSelector(selectUser);
    return (
        <div className = "grequoBox">
            <div className = "grequoBox__info">
                <Avatar src = {user.photo} />
                <h5>{user.displayName}</h5>    
            </div>
            <div className = "grequoBox__grequo">
                <p>What is your question or link?</p>    
            </div>        
        </div>
    );
}

export default GrequoBox;