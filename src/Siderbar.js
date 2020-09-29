import React from "react";
import "./Sidebar.css";

import { Avatar } from "@material-ui/core";

const Siderbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__right">
        <Avatar src="https://scontent.fbom5-1.fna.fbcdn.net/v/t31.0-8/17834036_1832954600363224_6501395873116193572_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=vfqdLHUZG_sAX8Z3UlI&_nc_ht=scontent.fbom5-1.fna&oh=3d8f8e8446f96969e7d83ed459e747a6&oe=5F853008" />
        <h3>Mehul Gawhale</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png" />
        <h3>Cvoid-19</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" />
        <h3>Friends</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" />
        <h3>Groups</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" />
        <h3>Market</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" />
        <h3>Videos</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png" />
        <h3>Events</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png" />
        <h3>Memories</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" />
        <h3>Saved</h3>
      </div>
    </div>
  );
};

export default Siderbar;
