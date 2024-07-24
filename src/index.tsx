import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./app";

function Root() {
  const [activeSideBar, setActiveSideBar] = useState(false);
  /* Write the necessary functions to show/hide the side bar on mobile devices */
  const toggleSideBar = () => {
    setActiveSideBar(!activeSideBar);
  };

  return (
    <App
      activeSideBar={activeSideBar}
      toggleSideBar={toggleSideBar}
      setActiveSideBar={setActiveSideBar}
    />
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
