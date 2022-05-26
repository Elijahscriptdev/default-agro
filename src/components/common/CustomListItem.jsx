import React, { useState, Fragment } from "react";

import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const CustomListItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (propOnClick) => {
    return (ev) => {
      if (propOnClick) {
        propOnClick(ev);
      }
      console.log(ev);
      setOpen(!open);
    }
};

  const moreIcon = open ? <ExpandLess /> : <ExpandMore />;

  return (
    <Fragment>
      <ListItemButton
        selected={!!props.selected}
        onClick={handleClick(props.onClick)}
        href={props.href || null}
      >
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText className="list-item-text" primary={props.text || ""} />
        {!props.children ? null : moreIcon}
      </ListItemButton>
      {!props.children ? null : (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {props.children}
        </Collapse>
      )}
    </Fragment>
  );
};

export default CustomListItem;