import React, { useState, useEffect } from "react";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Toolbar from "@mui/material/Toolbar";

import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorder from "@mui/icons-material/StarBorder";

import { defaultUser } from "../data/AuthUser";
import CustomListItem from "./common/CustomListItem";
import UserAvatar from "./common/UserAvatar";

import tradeBuzaLogo from "../assets/trade_buza_logo.png";

const DrawerContent = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(defaultUser);
  const [listSelected, setListSelected] = useState(0);

  const handleListItemClick = (index) => () => {
    setListSelected(index);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAuthenticatedUser(user);
    }
  }, [authenticatedUser]);

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ padding: "1rem 10px" }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <img src={tradeBuzaLogo} alt="tradebuza logo" id="drawer-logo" />
            <StarBorder />
          </Stack>
          <Stack alignItems="center" justifyContent="center">
            <UserAvatar
              firstname={authenticatedUser.firstname}
              lastname={authenticatedUser.lastname}
            />
          </Stack>
        </ListSubheader>
      }
    >
      <CustomListItem
        icon={<SendIcon />}
        text="Dashboard"
        selected={listSelected === 0}
        onClick={handleListItemClick(0)}
      />
      <CustomListItem
        icon={<DraftsIcon />}
        text="User Management"
        selected={listSelected === 1}
        onClick={handleListItemClick(1)}
      >
        <List component="div" disablePadding>
          <CustomListItem text="Manage Users" href="#" />
          <CustomListItem
            text="Manage Farmers"
            href="#"
          />
          <CustomListItem
            text="Manage Sourcing Agents"
            href="#"
          />
        </List>
      </CustomListItem>
      <CustomListItem
        icon={<InboxIcon />}
        text="Configuration"
        selected={listSelected === 2}
        onClick={handleListItemClick(2)}
      >
        <List component="div" disablePadding>
          <CustomListItem
            text="Manage Crop Profile"
            href="#"
          />
          <CustomListItem
            text="Manage Crop Calendar"
            href="#"
          />
          <CustomListItem
            text="Manage Farm Seasons"
            href="#"
          />
        </List>
      </CustomListItem>
      <CustomListItem
        icon={<DraftsIcon />}
        text="Farm Management"
        selected={listSelected === 3}
        onClick={handleListItemClick(3)}
      >
        <List component="div" disablePadding>
          <CustomListItem text="Manage Users" href="#" />
          <CustomListItem
            text="Manage Farmers"
            href="#"
          />
          <CustomListItem
            text="Manage Sourcing Agents"
            href="#"
          />
        </List>
      </CustomListItem>
      <CustomListItem
        icon={<DraftsIcon />}
        text="Input Tracking"
        href="#"
        selected={listSelected === 4}
        onClick={handleListItemClick(4)}
      />
      <CustomListItem
        icon={<DraftsIcon />}
        text="Communication"
        selected={listSelected === 5}
        onClick={handleListItemClick(5)}
      >
        <List component="div" disablePadding>
          <CustomListItem text="Manage Users" href="#" />
          <CustomListItem
            text="Manage Farmers"
            href="#"
          />
          <CustomListItem
            text="Manage Sourcing Agents"
            href="#"
          />
        </List>
      </CustomListItem>
      <CustomListItem
        icon={<DraftsIcon />}
        text="Collection"
        selected={listSelected === 6}
        onClick={handleListItemClick(6)}
      >
        <List component="div" disablePadding>
          <CustomListItem text="Manage Users" href="#" />
          <CustomListItem
            text="Manage Farmers"
            href="#"
          />
          <CustomListItem
            text="Manage Sourcing Agents"
            href="#"
          />
        </List>
      </CustomListItem>
      <CustomListItem
        icon={<DraftsIcon />}
        text="Payment"
        selected={listSelected === 7}
        onClick={handleListItemClick(7)}
      >
        <List component="div" disablePadding>
          <CustomListItem text="Manage Users" href="#" />
          <CustomListItem
            text="Manage Farmers"
            href="#"
          />
          <CustomListItem
            text="Manage Sourcing Agents"
            href="#"
          />
        </List>
      </CustomListItem>
    </List>
  );
};

function Drawer({ isOpen, width, toggler }) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}
      aria-label="Navigation Options"
    >
      <MuiDrawer
        variant="temporary"
        open={isOpen}
        onClose={toggler}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width,
            boxSizing: "border-box",
          },
        }}
      >
        {<DrawerContent />}
      </MuiDrawer>
      <MuiDrawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width,
          },
        }}
      >
        {<DrawerContent />}
      </MuiDrawer>
    </Box>
  );
}

export default Drawer;
