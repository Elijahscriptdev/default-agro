import React from "react";

const Status = (props) => {
  const { value, type = "pending" } = props;

  const wrapperStyle = {
    boxSizing: "border-box",
    width: "auto",
    height: "26px",
    padding: "8px",
    borderRadius: "13px",
    borderWidth: "0.6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    fontSize: "12px",
    fontWeight: 600,
    display: "block",
  };

  switch (type) {
    case "success":
      wrapperStyle.backgroundColor = "#F6FFED";
      wrapperStyle.borderColor = "#B7EB8F";
      textStyle.color = "#52C41A";
      break;

    case "pending":
      wrapperStyle.backgroundColor = "#FFF7E6";
      wrapperStyle.borderColor = "#FA8C16";
      textStyle.color = "#FA8C16";
      break;

    case "error":
      wrapperStyle.backgroundColor = "#FFF1F0";
      wrapperStyle.borderColor = "#F5222D";
      textStyle.color = "#F5222D";
      break;

    default:
      wrapperStyle.backgroundColor = "#FFF1F0";
      wrapperStyle.borderColor = "#F5222D";
      textStyle.color = "#F5222D";
      break;
  }
  return (
    <div style={wrapperStyle}>
      <span style={textStyle}>{value}</span>
    </div>
  );
};

export default Status;

// "#FFF1F0"
// borderColor
// "#F5222D"
