import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import CustomSelect from "../../components/common/CustomSelect";
import Button from "../../components/common/Button";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Spinner from "../../components/Spinner";

import { getDashboardDetails } from "../../redux/actions/DashboardActions";
import { getCropProfiles } from "../../redux/actions/ConfigurationsActions";

export default function DashboardIndexSection() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const dashboardData = useSelector(
    (state) => state.DashboardReducer.dashboardData
  );
  const isLoading = useSelector((state) => state.DashboardReducer.loading);

  const crops = useSelector(
    (state) => state.ConfigReducer.cropProfiles?.data || []
  );

  // onChange function for select
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const setNext = () => {
    setPage(page + 1);
  };

  const cardStyles = {
    minWidth: 275,
    boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
    backgroundColor: "primary.main",
    flexGrow: 1,
    marginTop: "10px !important",
    marginBottom: "10px !important",
    p: 1.8,
  };

  const columns = useMemo(
    () => [
      {
        Header: "Farmer Name",
        accessor: "farmer",
      },
      {
        Header: "Lot ID",
        accessor: "id",
      },
      {
        Header: "Size",
        accessor: "size",
      },
      {
        Header: "Expected Yield",
        accessor: "ex_yield",
      },
    ],
    []
  );

  const tableData = useMemo(
    () => dashboardData.lots || [],
    [dashboardData.lots]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardDetails());
    dispatch(getCropProfiles());
  }, [dispatch]);

  return (
    <section>
      <nav id="quick-nav">
        <span>Dashboard</span>
      </nav>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          flexWrap: {
            xs: "wrap",
            md: "no-wrap",
          },
        }}
      >
        <CustomSelect
          noneLabel={<em>Select Crop</em>}
          options={crops.map((item) => ({
            name: item.crop_name,
            value: item.id,
          }))}
          sx={{
            backgroundColor: "#fff",
            outline: "none",
            "& *": {
              outline: "none",
              border: "none",
            },
            "& .MuiSelect-select": {
              p: "10px 15px",
            },
          }}
        />

        <Stack direction="row" spacing={2} sx={{ my: 2 }}>
          <Button
            href="/dashboard/farm-analysis"
            value="Farm Analysis"
            disableElevation
          />
          <Button
            href="/dashboard/farm-activities"
            value="Farm Activities"
            disableElevation
          />
          <Button
            href="/dashboard/agent-activities"
            value="Agent Activities"
            disableElevation
          />
        </Stack>
      </Stack>

      <h2 style={{ fontSize: "20px" }}>Activities Map</h2>

      <Box>
        <img src={require("../../assets/map.jpg")} width="100%" alt="Hello" />
      </Box>

      <Stack
        direction="row"
        alignItems="stretch"
        spacing={3}
        sx={{
          mt: 6,
          mb: 6,
          overflowX: "auto",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        <Card sx={cardStyles}>
          <CardContent sx={{ color: "white" }}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 700 }}
              color="inherit"
              gutterBottom
            >
              Total Expected Yield (MT)
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "inherit", fontSize: 24, fontWeight: 800 }}
            >
              {isLoading ? <Spinner size={20} /> : dashboardData.total_yield}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyles}>
          <CardContent sx={{ color: "white" }}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 700 }}
              color="inherit"
              gutterBottom
            >
              Total Acreage (HA)
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "inherit", fontSize: 24, fontWeight: 800 }}
            >
              {isLoading ? <Spinner size={20} /> : dashboardData.total_acreage}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyles}>
          <CardContent sx={{ color: "white" }}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 700 }}
              color="inherit"
              gutterBottom
            >
              Total Number of Farmers
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "inherit", fontSize: 24, fontWeight: 800 }}
            >
              {isLoading ? (
                <Spinner size={20} />
              ) : (
                dashboardData.number_of_farmers
              )}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <h2 className="with-spinner" style={{ fontSize: "20px" }}>
          <span>Expected Yield / Farm</span>
          {isLoading ? <Spinner size={20} color="primary" /> : ""}
        </h2>

        <TableControls
          nextHandler={() => setNext()}
          prevHandler={() => setPrev()}
          limitHandler={(e) => handleLimitChange(e)}
          totalRecords={dashboardData.lots?.length || 0}
          page={page}
          limit={limit}
          showLimit={false}
          hideOnMobile={true}
        />
      </Stack>

      <Box>
        <Table columns={columns} data={tableData} isLoading={isLoading} />
        <TableControls
          nextHandler={() => setNext()}
          prevHandler={() => setPrev()}
          limitHandler={(e) => handleLimitChange(e)}
          totalRecords={dashboardData.lots?.length || 0}
          limit={limit}
          page={page}
        />
      </Box>

      {/* <Button onClick={handler} value="sfssdf" disableElevation /> */}
    </section>
  );
}
