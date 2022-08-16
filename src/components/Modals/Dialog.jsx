import React from "react";
import MuiDialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Dialog = (props) => {
  const { closeHandler, open, children, ...rest } = props;
  return (
    <MuiDialog open={open} onClose={closeHandler} {...rest}>
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  );
};

export default Dialog;
