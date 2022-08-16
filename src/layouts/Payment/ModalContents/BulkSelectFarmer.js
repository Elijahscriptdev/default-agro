import { IconButton, InputAdornment } from "@mui/material";
import React, { useRef, useMemo, useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { Search as SearchIcon } from "../../../components/icons/search";
import { IoMdClose as CloseIcon } from "react-icons/io";

import TableWithCheck from "../../../components/Table/TableWithCheck";
import { getFarmers } from "../../../redux/actions/UserManagementActions";
import CustomSearchField from "../../../components/common/CustomSearchField";
import Button from "../../../components/common/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // maxHeight: "70vh",
    padding: "30px 50px",
  },
};

const BulkSelectFarmer = ({ setRow }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const farmers = useSelector((state) => state.UserManagementReducer.farmers);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [query, setQuery] = useState("");

  const [status, setStatus] = useState("");

  // const [dialogContent, setDialogContent] = useState(null);
  // const [showModal, setShowModal] = useState(false);


  const queryRef = useRef(null);

  // onChange function for select
  // const handleLimitChange = (e) => {
  //   setLimit(parseInt(e.target.value));
  // };

  // const setPrev = () => {
  //   if (page > 1) setPage(page - 1);
  // };

  // const setNext = () => {
  //   setPage(page + 1);
  // };

  // const handler = () => {
  //   notify("Hello, world!");
  // };

  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  // const handleModalOpen = useCallback(
  //   (modalId, data = null) =>
  //     (e) => {
  //       switch (modalId) {
  //         case "upload-farmers":
  //           // console.log(data);
  //           setDialogContent(
  //             <UploadFarmerModalContent closeHandler={handleModalClose} />
  //           );
  //           break;

  //         default:
  //           setDialogContent(null);
  //           break;
  //       }
  //       setShowModal(true);
  //     },
  //   []
  // );

  // get checked farmers data
  // const getCheckedFarmers = () => {
  //   const checkedFarmers = farmers.filter((farmer) => farmer.checked);
  //   return checkedFarmers;
  // };

  // console.log("getCheckedFarmers", getCheckedFarmers());

  useEffect(() => {
    const body = {
      page,
      per_page: limit,
      search_farmer_by_name: query,
    };

    dispatch(getFarmers(body));
  }, [dispatch, page, limit, status, query]);

  const columns = useMemo(
    () => [
      {
        Header: "Surname",
        accessor: "last_name",
      },
      {
        Header: "Other Names",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <span style={{ textTransform: "capitalize" }}>{`${
              original?.first_name
            } ${original?.middle_name?.charAt(0).toUpperCase()}.`}</span>
          );
        },
      },
      {
        Header: "Mobile",
        accessor: "mobile",
      },
      {
        Header: "State",
        accessor: "state.name",
      },
    ],
    []
  );

  const tableData = useMemo(() => farmers?.data || [], [farmers?.data]);
  console.log("tableData", tableData);

  return (
    <div>
      <svg
        onClick={openModal}
        style={{ cursor: "pointer" }}
        width='20'
        height='20'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13 2.5C18.775 2.5 23.5 7.225 23.5 13C23.5 18.775 18.775 23.5 13 23.5C7.225 23.5 2.5 18.775 2.5 13C2.5 7.225 7.225 2.5 13 2.5ZM13 0.75C6.2625 0.75 0.75 6.2625 0.75 13C0.75 19.7375 6.2625 25.25 13 25.25C19.7375 25.25 25.25 19.7375 25.25 13C25.25 6.2625 19.7375 0.75 13 0.75Z'
          fill='#14B6A7'
        />
        <path
          d='M20 12.125H13.875V6H12.125V12.125H6V13.875H12.125V20H13.875V13.875H20V12.125Z'
          fill='#14B6A7'
        />
      </svg>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p></p>

          <IconButton onClick={closeModal}>
            <CloseIcon className='closeicon' />
          </IconButton>
        </div>

        <CustomSearchField
          InputProps={{
            ref: queryRef,
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon fontSize='small' />
              </InputAdornment>
            ),
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search'
          sx={{
            width: "100%",
            maxWidth: { sm: "250px" },
          }}
        />
        <div style={{ maxHeight: "70vh", padding: "30px 0px" }}>
          <TableWithCheck
            columns={columns}
            data={tableData}
            isLoading={farmers.loading}
            setSelectedRows={setRow}
          />
          <div>
            <Button
              sx={{
                margin: "30px 0px",
              }}
              value="Continue"
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BulkSelectFarmer;
