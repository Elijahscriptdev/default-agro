import React from "react";
import Avatar from "@mui/material/Avatar";

import { defaultUser } from "../../data/AuthUser";

function UserAvatar(props) {
  const sizeOptions = props.size
    ? { width: props.size, height: props.size }
    : {};

  const data = {
    ...defaultUser,
    firstname: props.firstname || "",
    lastname: props.lastname || "",
    avatarUrl: props.avatarUrl || "",
  };

  return (
    <div
      style={{
        display: "inline-block",
        borderRadius: "50%",
        border: (props.disableOutline) ? "none" : "1px solid #ccc",
        padding: (props.disableOutline) ? "0" : "5px",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "#14B6A7",
          fontWeight: "800",
          fontSize: props.fontSize,
          ...sizeOptions,
        }}
        alt={`${data.firstname} ${data.lastname}`}
        src={data.avatarUrl}
      >
        {`${data.firstname.charAt(0)?.toUpperCase()}${data.lastname
          .charAt(0)
          ?.toUpperCase()}`}
      </Avatar>
    </div>
  );
}

export default UserAvatar;
