import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";

import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListSubheader from "@mui/material/ListSubheader";

import {
  IoSpeedometerOutline as DashboardIcon,
  IoGridOutline as CollectionIcon,
} from "react-icons/io5";
import { RiUserLine as UserIcon } from "react-icons/ri";
import { FiSettings as ConfigurationIcon } from "react-icons/fi";
import { GiFarmTractor as FarmIcon } from "react-icons/gi";
import { BiTargetLock as InputMgtIcon } from "react-icons/bi";
import {
  CgMenuLeftAlt as MenuIcon,
  CgClose as CloseIcon,
} from "react-icons/cg";

import DraftsIcon from "@mui/icons-material/Drafts";

import CustomListItem from "./common/CustomListItem";
import Can from "../utils/rbac/Can";
import UserAvatar from "./common/UserAvatar";

// import { defaultUser } from "../data/AuthUser";
import { theme } from "../context/ThemeProvider";

import paymentSVG from "../assets/PaymentIcon.svg";
import tradeBuzaLogo from "../assets/trade_buza_logo.png";

import { setCurrentDrawerMenu } from "../redux/actions/AppActions";

const DrawerContent = ({ closeHandler }) => {
  // const [authenticatedUser, setAuthenticatedUser] = useState(defaultUser);
  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );
  const listSelected = useSelector((state) =>
    parseInt(state.AppReducer.menuSelected, 10)
  );

  const dispatch = useDispatch();
  // console.log(theme.palette.primary.main);
  const handleListItemClick = (index) => () => {
    dispatch(setCurrentDrawerMenu(index));
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ padding: "1rem 10px" }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ marginBottom: "60px" }}
          >
            <img src={tradeBuzaLogo} alt="tradebuza logo" id="drawer-logo" />
            <IconContext.Provider
              value={{ size: "28px", color: `${theme.palette.primary.main}` }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {}}
                edge="start"
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={closeHandler}
                edge="start"
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </IconContext.Provider>
          </Stack>
          {/* <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "32px 0 40px" }}
          >
            <UserAvatar
              size="78px"
              fontSize="32px"
              firstname={authenticatedUser?.first_name || ""}
              lastname={authenticatedUser?.last_name || ""}
            />
          </Stack> */}
        </ListSubheader>
      }
    >
      <IconContext.Provider value={{ className: "drawer-icons" }}>
        {/* {Object.keys(authenticatedUser).length > 0 ? ( */}
        <React.Fragment>
          {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform='dashboard:visit'
              yes={() => ( */}
          <CustomListItem
            icon={<DashboardIcon />}
            text="Dashboard"
            // href="/dashboard"
            selected={listSelected === 0}
            onClick={handleListItemClick(0)}
          >
            <List component="div" disablePadding>
              <CustomListItem
                text="Mapping Insights"
                href="/dashboard/mapping-insight"
              />
              <CustomListItem
                text="Farm Analysis"
                href="/dashboard/farm-analysis"
              />
            
            </List>
          </CustomListItem>
          {/* )}
              no={() => null}
              data={null}
            /> */}

          {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform='user-management:visit'
              yes={() => ( */}
          <CustomListItem
            icon={<UserIcon />}
            text="User Management"
            selected={listSelected === 1}
            onClick={handleListItemClick(1)}
          >
            <List component="div" disablePadding>
              {/* <Can
                      role={authenticatedUser?.my_role?.role}
                      perform='users:visit'
                      yes={() => ( */}
              <CustomListItem
                text="Manage Users"
                href="/user-management/users"
              />
              {/* )}
                      no={() => null}
                    /> */}

              <Can
                role={authenticatedUser?.my_role?.role}
                perform="farmers:visit"
                yes={() => (
                  <CustomListItem
                    text="Manage Farmers"
                    href="/user-management/farmers"
                  />
                )}
                no={() => null}
                data={null}
              />

              <Can
                role={authenticatedUser?.my_role?.role}
                perform="sourcing-agents:visit"
                yes={() => (
                  <CustomListItem
                    text="Manage Sourcing Agents"
                    href="/user-management/sourcing-agents"
                  />
                )}
                no={() => null}
                data={null}
              />
            </List>
          </CustomListItem>
          {/* )}
              no={() => null}
              data={null}
            /> */}

          <Can
            role={authenticatedUser?.my_role?.role}
            perform="configuration:visit"
            yes={() => (
              <CustomListItem
                icon={<ConfigurationIcon />}
                text="Configuration"
                selected={listSelected === 2}
                onClick={handleListItemClick(2)}
              >
                <List component="div" disablePadding>
                  <Can
                    role={authenticatedUser?.my_role?.role}
                    perform="configuration:crop-profile:visit"
                    yes={() => (
                      <CustomListItem
                        text="Manage Crop Profile"
                        href="/configurations/crop-profile"
                      />
                    )}
                    no={() => null}
                  />

                  <Can
                    role={authenticatedUser?.my_role?.role}
                    perform="configuration:calendar:visit"
                    yes={() => (
                      <CustomListItem
                        text="Manage Crop Calendar"
                        href="/configurations/crop-calendar"
                      />
                    )}
                    no={() => null}
                  />

                  <Can
                    role={authenticatedUser?.my_role?.role}
                    perform="configuration:seasons:visit"
                    yes={() => (
                      <CustomListItem
                        text="Manage Farm Seasons"
                        href="/configurations/farm-seasons"
                      />
                    )}
                    no={() => null}
                  />
                </List>
              </CustomListItem>
            )}
            no={() => null}
          />

          <Can
            role={authenticatedUser?.my_role?.role}
            perform="farm-management:visit"
            yes={() => (
              <CustomListItem
                icon={<FarmIcon />}
                text="Farm Management"
                selected={listSelected === 3}
                onClick={handleListItemClick(3)}
              >
                <List component="div" disablePadding>
                  <Can
                    role={authenticatedUser?.my_role?.role}
                    perform="farm-management:farm:visit"
                    yes={() => (
                      <CustomListItem
                        text="Manage Farm Lots"
                        href="/farm-management/farm-lots"
                      />
                    )}
                    no={() => null}
                  />

                  <CustomListItem
                    text="Manage Clusters"
                    href="/farm-management/clusters"
                  />
                  <CustomListItem
                    text="Manage Sub Clusters"
                    href="/farm-management/sub-clusters"
                  />
                </List>
              </CustomListItem>
            )}
            no={() => null}
            data={null}
          />

          {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform='input:visit'
              yes={() => ( */}
          <CustomListItem
            icon={<DashboardIcon />}
            text="Verification List"
            href="/verification"
            selected={listSelected === 9}
            onClick={handleListItemClick(9)}
          />
          <CustomListItem
            icon={<InputMgtIcon />}
            text="Tenants"
            href="/tenants"
            selected={listSelected === 4}
            onClick={handleListItemClick(4)}
          />
          {/* )}
              no={() => null}
              data={null}
            /> */}

          {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform='input:visit'
              yes={() => ( */}
          <CustomListItem
            icon={<InputMgtIcon />}
            text="Downloads"
            href="/downloads"
            selected={listSelected === 8}
            onClick={handleListItemClick(8)}
          />
          {/* )}
              no={() => null}
              data={null}
            /> */}

          {/* <Can
            role={authenticatedUser?.my_role?.role}
            perform='communication:visit'
            yes={() => ( */}
          <CustomListItem
            icon={<DraftsIcon />}
            text="Settings"
            selected={listSelected === 5}
            onClick={handleListItemClick(5)}
          >
            <List component="div" disablePadding>
              <CustomListItem text="Developer" href="/settings/developer" />
              <CustomListItem
                text="Coniguration"
                href="/settings/configuration"
              />
            </List>
          </CustomListItem>

          <CustomListItem
            icon={<InputMgtIcon />}
            text="Vegetation Check"
            href="/vegetation-check"
            selected={listSelected === 13}
            onClick={handleListItemClick(13)}
          />
          {/* )}
            no={() => null}
            data={null}
          /> */}

          <Can
            role={authenticatedUser?.my_role?.role}
            perform="communication:visit"
            yes={() => (
              <CustomListItem
                icon={<DraftsIcon />}
                text="Communication"
                selected={listSelected === 5}
                onClick={handleListItemClick(5)}
              >
                <List component="div" disablePadding>
                  <CustomListItem
                    text="Communication Setup"
                    href="/communication/setup"
                  />
                  <CustomListItem
                    text="Messages"
                    href="/communication/messages"
                  />
                </List>
              </CustomListItem>
            )}
            no={() => null}
            data={null}
          />

          <Can
            role={authenticatedUser?.my_role?.role}
            perform="collection:visit"
            yes={() => (
              <CustomListItem
                icon={<CollectionIcon />}
                text="Collection"
                selected={listSelected === 6}
                onClick={handleListItemClick(6)}
              >
                <List component="div" disablePadding>
                  <CustomListItem text="Collections" href="/collections" />
                </List>
              </CustomListItem>
            )}
            no={() => null}
            data={null}
          />

          <Can
            role={authenticatedUser?.my_role?.role}
            perform="payment:visit"
            yes={() => (
              <CustomListItem
                icon={<img src={paymentSVG} alt="" />}
                text="Payment"
                selected={listSelected === 7}
                onClick={handleListItemClick(7)}
              >
                <List component="div" disablePadding>
                  <CustomListItem
                    text="Transactions"
                    href="/payment/transactions"
                  />
                  <Can
                    role={authenticatedUser?.my_role?.role}
                    perform="payment:disbursement:visit"
                    yes={() => (
                      <CustomListItem
                        text="Disbursement"
                        href="/payment/disbursments"
                      />
                    )}
                    no={() => null}
                  />

                  <CustomListItem
                    text="Collections"
                    href="/payment/collections"
                  />
                </List>
              </CustomListItem>
            )}
            no={() => null}
            data={null}
          />
        </React.Fragment>
        {/* ) : ( */}
        {/* <React.Fragment>
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className='flex flex-row mb-6 px-5'>
                <div
                  className='lazy-loading p-3 mr-4'
                  style={{
                    borderRadius: "5px",
                    opacity: 0.8,
                    width: "20px",
                    height: "20px",
                  }}
                ></div>
                <div
                  className='lazy-loading p-3'
                  style={{ borderRadius: "5vh", opacity: 0.8, flexGrow: 1 }}
                ></div>
              </div>
            ))}
          </React.Fragment> */}
        {/* )} */}
      </IconContext.Provider>
    </List>
  );
};

function Drawer({ isOpen, toggler }) {
  const drawerWidth = 305;
  return (
    <Box
      component="nav"
      id="main-drawer"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {<DrawerContent closeHandler={toggler} />}
      </MuiDrawer>
      <MuiDrawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {<DrawerContent closeHandler={toggler} />}
      </MuiDrawer>
    </Box>
  );
}

export default Drawer;
