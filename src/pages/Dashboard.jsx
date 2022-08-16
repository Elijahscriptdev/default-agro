import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Stack from "@mui/material/Stack";

import Header from "../components/Header";
import Drawer from "../components/Drawer";

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Stack direction="row">
      <Drawer
        isOpen={mobileOpen}
        toggler={handleDrawerToggle}
      />
      <Stack direction="column" sx={{width: "100%"}}>
        <Header toggler={handleDrawerToggle} />
        <main id="main-page-content">
          <Outlet />
        </main>
      </Stack>
    </Stack>

  );
}

export default Dashboard;
