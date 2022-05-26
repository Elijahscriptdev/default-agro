import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import { defaultUser } from "../data/AuthUser";
import UserAvatar from "./common/UserAvatar";
import Drawer from "./Drawer";

function Header(props) {
  const drawerWidth = 259;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(defaultUser);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAuthenticatedUser(user);
    }
  }, [authenticatedUser]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="secondary"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 20px",
              overflow: "hidden"
            }}
          >
            <UserAvatar
              firstname={authenticatedUser.firstname}
              lastname={authenticatedUser.lastname}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textTransform: "capitalize",
              }}
            >
              <h3 style={{margin: '0', fontWeight: "800"}}>
                {`${authenticatedUser.firstname} ${authenticatedUser.lastname}`}
              </h3>
              <span style={{}}>{authenticatedUser.role}</span>
            </div>
          </Box>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        isOpen={mobileOpen}
        width={drawerWidth}
        toggler={handleDrawerToggle}
      />
    </React.Fragment>
  );
}

export default Header;
