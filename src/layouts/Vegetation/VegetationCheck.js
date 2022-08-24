import { Box } from "@mui/material";
import React, { useMemo, useRef, useState } from "react";
import CustomSearchField from "../../components/common/CustomSearchField";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import { InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "../../components/icons/search";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import EyeIcon from "./../../assets/EyeIcon.svg";

const VegetationCheck = () => {
  const inputs = useSelector((state) => state.InputReducer.inputs);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  const queryRef = useRef(null);
  const [query, setQuery] = useState("");

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
    // dispatch(getInputs(page - 1));
  };

  const setNext = () => {
    setPage(page + 1);
    // dispatch(getUsers(page + 1));
  };

  const columns = useMemo(() => [
    {
      Header: "Partner",
      accessor: "partner",
    },

    {
      Header: "Status",
      Cell: ({ value, row }) => {
        const { original } = row;
        // console.log(original);
        return (
          <Box
            sx={{
              background: "rgba(242, 155, 23, 0.26)",
              border: "0.6px solid #F29B17",
              borderRadius: "12px",
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "19px",
              color: "#F29B17",
              width: "74px",
              height: "26px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
            }}
          >
            Maybe
          </Box>
        );
      },
    },
    {
      Header: "Action",
      Cell: ({ value, row }) => {
        const { original } = row;
        // console.log(original);
        return (
          <IconButton>
            <Box component="img" src={EyeIcon} />
          </IconButton>
        );
      },
    },
  ]);
  const data = [
    {
      partner: "Ayomide Ojo",
    },
    {
      partner: "Ayomide Ojo",
    },
    {
      partner: "Ayomide Ojo",
    },
    {
      partner: "Ayomide Ojo",
    },
    {
      partner: "Ayomide Ojo",
    },
  ];

  const tableData = useMemo(() => data || [], [data]);

  return (
    <div className="vegetation">
      <nav id="quick-nav">
        <span>Input Tracking</span>
      </nav>

      <Box
        sx={{
          padding: "20px",
          background: "#FFFFFF",
          borderRadius: "10px",
        }}
      >
        <h2 className="with-spinner" style={{ fontSize: "20px" }}>
          <span>Vegetation Check</span>
        </h2>
        <CustomSearchField
          InputProps={{
            ref: queryRef,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search customers"
          sx={{
            width: "100%",
            maxWidth: { sm: "250px" },
          }}
        />

        <Box>
          <Table columns={columns} data={tableData} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            // totalRecords={totalInputs}
            page={page}
            limit={limit}
          />
        </Box>
      </Box>
    </div>
  );
};

export default VegetationCheck;
