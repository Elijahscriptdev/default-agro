import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MuiButton from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { CgMenuLeftAlt as MenuIcon } from "react-icons/cg";

// import { defaultUser } from "../data/AuthUser";
import UserAvatar from "./common/UserAvatar";

import { theme } from "../context/ThemeProvider";
import { logout } from "../redux/actions/AuthActions";

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authenticatedUser = useSelector(
    (state) => (
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
    )
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const toggleProfileMenu = (show) => (event) => {
    if (show) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const handleLogout = (event) => {
    dispatch(logout(navigate));
    toggleProfileMenu(false)(event);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" elevation={0} color="secondary">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <div>
            <MuiButton
              sx={{ padding: "10px 15px 10px 20px" }}
              id="header-profile-button"
              aria-controls={open ? "header-profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={toggleProfileMenu(true)}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  overflow: "hidden",
                }}
              >
                <UserAvatar
                  size="32px"
                  fontSize="13px"
                  firstname={authenticatedUser?.first_name || ""}
                  lastname={authenticatedUser?.last_name || ""}
                />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  sx={{ ml: "13px", textTransform: "capitalize" }}
                >
                  <h3
                    style={{ margin: "0", fontWeight: "800", fontSize: "14px" }}
                  >
                    {`${authenticatedUser?.first_name || "-"} ${
                      authenticatedUser?.last_name || "-"
                    }`}
                  </h3>
                  <span style={{ fontSize: "12px" }}>
                    {authenticatedUser?.my_role?.role || "-"}
                  </span>
                </Stack>
              </Stack>
            </MuiButton>
            <Menu
              id="header-profile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={toggleProfileMenu(false)}
              MenuListProps={{
                "aria-labelledby": "header-profile-button",
              }}
              sx={{
                "& .MuiMenu-paper": {
                  borderRadius: "15px",
                  boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.4)",
                },
              }}
            >
              <MenuItem onClick={toggleProfileMenu(false)}>
                <MuiButton
                  href="/profile"
                  sx={{
                    p: 0,
                    m: 0,
                    textTransform: "capitalize",
                    color: "inherit",
                    fontSize: "inherit",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Edit Profile
                </MuiButton>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>

          <IconContext.Provider
            value={{ size: "28px", color: `${theme.palette.primary.main}` }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.toggler}
              sx={{ ml: -1, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </IconContext.Provider>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
