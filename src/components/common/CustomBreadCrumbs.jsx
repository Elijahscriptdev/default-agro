import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

export default function CustomBreadCrumb({ breadcrumbs }) {
  return (
    <Breadcrumbs
      maxItems={2}
      separator={<ArrowForwardIcon color="primary" fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}
