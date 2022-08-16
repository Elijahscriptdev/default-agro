import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

export default function Spinner(props) {
  const { color = "primary", ...rest } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <Fade
        in={true}
        style={{
          transitionDelay: "500ms",
        }}
        unmountOnExit
      >
        <CircularProgress color={color} {...rest} disableShrink/>
      </Fade>
    </Box>
  );
}
