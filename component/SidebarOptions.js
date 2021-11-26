import { Add } from "@material-ui/icons";
import React from "react";
import "../css/SidebarOptions.css";

function SidebarOptions() {
    return (
    <div className = "sidebarOptions">
        <div className = "sidebarOption">
            <img 
                src = "https://e7.pngegg.com/pngimages/78/289/png-clipart-history-of-books-history-of-books-history-text-anticariat-thumbnail.png"
                alt=""
            />
            <p>History</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://media.istockphoto.com/photos/modern-lithium-ion-battery-technology-concept-metal-liion-battery-picture-id1148805607?k=20&m=1148805607&s=612x612&w=0&h=IKlhIwmAI18SUbs-FBvIVTXE_M8Mv2i6RalzYEJBfjM="
                alt=""
            />
            <p>Li-ion battery</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://www.3blmedia.com/sites/www.3blmedia.com/files/styles/400w/public/videos/thumbnails/509121/thumbnail-509121_0006.png?itok=VlXMSLY1"
                alt=""
            />
            <p>Ground vehicles</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Singapore_Airlines_Boeing_777-300ER_Ryabtsev.jpg/800px-Singapore_Airlines_Boeing_777-300ER_Ryabtsev.jpg"
                alt=""
            />
            <p>Airborne EVs</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/03/25/afec8765-41ca-40ed-8645-5522ac3fcc90_05238952.jpg"
                alt=""
            />
            <p>Seaborne EVs</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nissan_LEAF_%284055945788%29.jpg/156px-Nissan_LEAF_%284055945788%29.jpg"
                alt=""
            />
            <p>Properties</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Charging_stations_in_SF_City_Hall_02_2009_02.jpg/156px-Charging_stations_in_SF_City_Hall_02_2009_02.jpg"
                alt=""
            />
            <p>Charging</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://w7.pngwing.com/pngs/468/401/png-transparent-efficiency-efficient-energy-use-energy-conservation-energy-efficient-angle-text-logo-thumbnail.png"
                alt=""
            />
            <p>Efficiency</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://img.favpng.com/22/5/2/car-motor-vehicle-service-automobile-repair-shop-hand-tool-maintenance-png-favpng-8MjRSv4pwM8m8LPviBCCScFvu.jpg"
                alt=""
            />
            <p>Maintenance</p>
        </div>
        <div className = "sidebarOption">
            <img 
                src = "https://deviceguru.com/files/ecotality-fast-charger-concept.jpg"
                alt=""
            />
            <p>Future</p>
        </div>
        <div className = "sidebarOption">
        <Add />
        <p className = "text">Discover Spaces</p>
        </div>
    </div>
    );
}

export default SidebarOptions;