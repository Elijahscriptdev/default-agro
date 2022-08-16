import React from 'react';
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { IoMdClose as CloseIcon } from "react-icons/io";

export default function DialogHeader({ title, closeHandler }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mt: 3, mb: 2 }}
    >
      <h3 className="first-text">{title}</h3>
      <IconButton onClick={closeHandler}>
        <CloseIcon className="closeicon" />
      </IconButton>
    </Stack>
  );
};