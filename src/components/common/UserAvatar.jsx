import React from "react";
import Avatar from "@mui/material/Avatar";

function UserAvatar(props) {
  const sizeOptions = props.size
    ? { width: props.size, height: props.size }
    : {};

  const data = {
    firstname: props.firstname || '',
    lastname: props.lastname || '',
    avatarUrl: props.avatarUrl || '',
  };

  return (
    <div >
      <Avatar
        sx={{ bgcolor: "primary.main", ...sizeOptions }}
        alt={`${data.firstname} ${data.lastname}`}
        src={data.avatarUrl}
      >
        {`${data.firstname.charAt(0).toUpperCase()}${data.lastname
          .charAt(0)
          .toUpperCase()}`}
      </Avatar>
    </div>
  );
}

export default UserAvatar;
